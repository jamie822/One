import { chromium } from 'playwright';
const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const pages = [['/','home'],['/services/eicr-landlord-certificates/','eicr'],['/areas/saltaire/','saltaire'],['/reviews/','reviews'],['/about/','about']];
for (const [url,name] of pages){
  const p = await b.newPage({viewport:{width:1440,height:900}});
  await p.goto('http://localhost:4321'+url,{waitUntil:'networkidle'});
  await p.waitForTimeout(1200);
  await p.screenshot({path:`/tmp/sw-${name}.png`, fullPage:true});
  await p.close();
}
const m = await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
await m.goto('http://localhost:4321/',{waitUntil:'networkidle'});
await m.waitForTimeout(1000);
await m.screenshot({path:'/tmp/sw-mobile.png', fullPage:true});
await b.close();
console.log('done');
