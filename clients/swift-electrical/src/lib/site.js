import { client, services, areas } from '../data/client.js';

const BASE = import.meta.env.BASE_URL || '/';

/** Base-path aware link/asset helper. Works at a domain root or a sub-path. */
export function href(path = '/') {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return (BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '')).replace(/\/{2,}/g, '/');
}

/**
 * The scheme + host of the live site, with no path.
 *
 * client.url carries a path ("…github.io/One/") because the preview deploy is a
 * GitHub Pages project site. `new URL('/areas/', client.url)` silently discards
 * that path, which is how every canonical and every sitemap <loc> ended up
 * pointing at a host root the site is not served from. Splitting the origin out
 * and re-joining through href() means the base path is applied exactly once, and
 * canonical, sitemap and schema URLs cannot drift apart again.
 */
export const origin = new URL(client.url).origin;

/** Absolute, base-path-correct URL for an internal route. */
export function absUrl(path = '/') {
  return new URL(href(path), origin).href;
}

/** True only when a real phone number has been supplied. */
export const hasPhone = Boolean(client.phone && client.phoneHref);

/** Rating is only shown when the client genuinely has one. */
export const hasRating = Boolean(client.google?.rating && client.google?.reviewCount);

/** "4.9★ from 63 reviews" — appended to titles sitewide when genuine. */
export const ratingLabel = hasRating
  ? `${client.google.rating}★ from ${client.google.reviewCount} reviews`
  : '';

export const primaryArea = areas.find((a) => a.primary) || areas[0] || { name: '' };

/** The one node every other schema block points at. */
export const businessId = `${absUrl('/')}#business`;

/**
 * schema.org Electrician — the specific subtype, not generic LocalBusiness.
 *
 * Two rules govern what goes in here.
 *
 * 1. Deliberately omits aggregateRating. The five stars are Google's, collected
 *    on Google's profile. Re-publishing them as first-party aggregate rating on
 *    the business's own site is the self-serving-review pattern Google ignores
 *    at best and penalises at worst. The rating stays visible on the page, where
 *    it does the persuading, and out of the markup.
 *
 * 2. A field the client has not given us is omitted, never guessed and never
 *    emitted empty. `foundingDate: String(null)` was publishing the literal
 *    string "null"; telephone and email were publishing "". An absent property
 *    is honest. A blank or bogus one is a machine-readable lie.
 *
 * Still deliberately absent, pending client data: geo (no address published, so
 * coordinates would be invented), openingHoursSpecification (hours are known
 * only as the partial "Open until 8pm"), priceRange, image, logo.
 */
export function businessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': businessId,
    name: client.name,
    description: client.tagline,
    url: absUrl('/'),
    areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.short },
      })),
    },
  };

  if (client.legalName && client.legalName !== client.name) schema.legalName = client.legalName;
  if (hasPhone) schema.telephone = client.phoneHref;
  if (client.email) schema.email = client.email;
  if (client.owner.since) schema.foundingDate = String(client.owner.since);

  if (client.owner.name) {
    schema.founder = {
      '@type': 'Person',
      name: client.owner.name,
      ...(client.owner.role ? { jobTitle: client.owner.role } : {}),
    };
  }

  // Mirrors the accreditation already asserted in the trust bar on every page.
  // No enrolment number is claimed, because we have not been given one.
  const bodies = client.accreditations
    .filter((a) => a.name)
    .map((a) => ({
      '@type': 'Organization',
      name: a.name.replace(/\s+registered$/i, ''),
      ...(a.url ? { url: a.url } : {}),
    }));
  if (bodies.length) schema.memberOf = bodies.length === 1 ? bodies[0] : bodies;

  const sameAs = Object.values(client.social).filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;

  // A service-area business with a hidden GBP address must not publish one here.
  if (client.showAddress) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: client.address.street,
      addressLocality: client.address.locality,
      addressRegion: client.address.region,
      postalCode: client.address.postcode,
      addressCountry: client.address.country,
    };
  } else {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: client.address.locality,
      addressRegion: client.address.region,
      addressCountry: client.address.country,
    };
  }

  return schema;
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: absUrl(t.path),
    })),
  };
}

/**
 * A service page describes one service offered across the whole patch, so its
 * areaServed is the full list.
 */
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.short,
    serviceType: service.title,
    provider: { '@id': businessId },
    areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
  };
}

/**
 * An area page describes the whole catalogue in one place, so its areaServed is
 * that one place. It previously emitted a Service for EICRs only — the first
 * item in the services array — while claiming all eight towns as its area, which
 * described neither the page nor the business.
 */
export function areaServiceSchema(area) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Electrical and security work in ${area.name}`,
    // Titles as written — lowercasing turned "EICRs" into "eicrs" and "CCTV"
    // into "cctv", which is worse than the capitalisation being imperfect.
    description: `${client.name} covers ${area.name} for ${services.map((s) => s.title).join(', ')}.`,
    serviceType: 'Electrical installation and inspection',
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: area.name, containedInPlace: { '@type': 'AdministrativeArea', name: client.address.region } },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services in ${area.name}`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${s.title} in ${area.name}`, description: s.short },
      })),
    },
  };
}

/** A crawlable index of the pages a hub links to. */
export function itemListSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: absUrl(it.path),
    })),
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${client.name}`,
    url: absUrl('/contact/'),
    mainEntity: { '@id': businessId },
  };
}
