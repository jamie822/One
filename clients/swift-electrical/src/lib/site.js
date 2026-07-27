import { client, services, areas } from '../data/client.js';

const BASE = import.meta.env.BASE_URL || '/';

/** Base-path aware link/asset helper. Works at a domain root or a sub-path. */
export function href(path = '/') {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return (BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '')).replace(/\/{2,}/g, '/');
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

/**
 * schema.org Electrician — the specific subtype, not generic LocalBusiness.
 *
 * Deliberately omits aggregateRating: marking up self-collected reviews
 * against your own entity is a Google penalty risk. Only add it when the
 * rating is genuinely third-party sourced AND visible on the page.
 */
export function businessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${client.url}/#business`,
    name: client.name,
    legalName: client.legalName,
    description: client.tagline,
    url: client.url,
    telephone: client.phoneHref,
    email: client.email,
    foundingDate: String(client.owner.since),
    areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
    founder: { '@type': 'Person', name: client.owner.name, jobTitle: client.owner.role },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.short },
      })),
    },
    sameAs: Object.values(client.social).filter(Boolean),
  };

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
      item: new URL(t.path, client.url).href,
    })),
  };
}

export function serviceSchema(service, areaName) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: areaName ? `${service.title} in ${areaName}` : service.title,
    description: service.short,
    serviceType: service.title,
    provider: { '@id': `${client.url}/#business` },
    areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
  };
}
