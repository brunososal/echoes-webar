// ECHOES automated verification and authentic browser evidence.
// Screenshots are of deployed URLs rendered in Chromium with synthetic media,
// NOT of an iPhone or physically measured environmental sound.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT='https://brunososal.github.io/echoes-webar/';
const REPOSITORY='https://github.com/brunososal/echoes-webar';
const evidence='evidence/automated';
await fs.mkdir(evidence,{recursive:true});
const report={createdAt:new Date().toISOString(),site:ROOT,repository:REPOSITORY,
  environment:'GitHub Actions / headless Chromium / fake video and audio devices',
  physicalIphoneVerified:false,realAcousticMeasurement:false,checks:[],errors:[],images:[]};
function record(label,pass,detail=''){report.checks.push({label,pass,detail});if(!pass)report.errors.push(label+(detail?': '+detail:''));}
const browser=await chromium.launch({headless:true,args:['--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream','--autoplay-policy=no-user-gesture-required']});
const origin=new URL(ROOT).origin;
const desktop=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1,ignoreHTTPSErrors:false});
const mobile=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true,permissions:['camera','microphone']});
const addEvidenceLabel=async(page,text)=>{
 await page.evaluate(t=>{
   const e=document.createElement('div');e.setAttribute('data-evidence-mark','automated');
   e.textContent=t;e.style.cssText='position:fixed;z-index:99999;left:8px;right:8px;bottom:5px;padding:6px 10px;border-radius:8px;background:rgba(0,0,0,.9);color:#fff;font:11px system-ui;pointer-events:none;text-align:center;letter-spacing:.02em';
   document.body.appendChild(e);
 },text);
};
async function capture(page,name,stamp='CAPTURA AUTOMATIZADA · Chromium · cámara y micrófono simulados'){
 await addEvidenceLabel(page,stamp);
 const filename=path.join(evidence,name);
 await page.screenshot({path:filename,fullPage:false,animations:'disabled'});
 report.images.push({file:filename,url:page.url(),type:'automated simulated browser screenshot'});
 await page.evaluate(()=>document.querySelector('[data-evidence-mark="automated"]')?.remove());
}
async function navigate(page,url,label,retries=3){
 let err;
 for(let i=0;i<retries;i++){
  try{
   const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
   if(!response||response.status()>=400)throw Error('HTTP '+(response?.status()??'no response'));
   record(label,true,'HTTP '+response.status());
   return true;
  }catch(e){err=e;await page.waitForTimeout(2500*(i+1));}
 }
 record(label,false,String(err));return false;
}
try{
 const home=await desktop.newPage();
 if(await navigate(home,ROOT,'Published homepage responds')){
  record('Homepage links to experience',await home.locator('a[href*="lab.html"]').count()>0);
  await capture(home,'01_homepage_desktop.png','SITIO PUBLICADO · captura automática en Chromium');
 }
 const gh=await desktop.newPage();
 if(await navigate(gh,REPOSITORY,'GitHub repository responds')){
  const exists=await gh.locator('body').innerText().catch(()=>'');
  record('GitHub page includes repository name',exists.toLowerCase().includes('echoes-webar'));
  await capture(gh,'02_github_repository.png','GITHUB · página real abierta por navegador automatizado');
 }
 const app=await mobile.newPage();
 app.on('pageerror',e=>record('App JavaScript runtime error',false,e.message));
 if(await navigate(app,ROOT+'lab.html?v=2.0','Published lens responds')){
  await app.locator('#intro').waitFor({timeout:14000});
  await capture(app,'03_lens_intro_mobile.png');
  record('Lens shows guided-start CTA',await app.locator('#startStudy').isVisible());
  await app.locator('#start').click();
  await app.waitForTimeout(1600);
  const cameraExpected=await app.locator('#camera').count()===1;
  record('Lens DOM includes live camera',cameraExpected);
  record('Lens has earplug switch',await app.locator('#eppToggle').isVisible());
  record('Lens has relative color meter',await app.locator('#meter').count()===1);
  await capture(app,'04_lens_mobile_explore.png');
  await app.locator('#eppToggle').click();
  record('EPP toggles aria-pressed',await app.locator('#eppToggle').getAttribute('aria-pressed')==='true');
  await capture(app,'05_lens_mobile_virtual_epp.png');
  await app.locator('[data-mode="study"]').click();
  await app.waitForTimeout(350);
  record('Educational flow opens',await app.locator('#panelBody').innerText().then(t=>t.includes('Descubrir')).catch(()=>false));
  await capture(app,'06_lens_mobile_learning.png');
 }
 const ctrl=await mobile.newPage();
 ctrl.on('pageerror',e=>record('2D JavaScript runtime error',false,e.message));
 if(await navigate(ctrl,ROOT+'lab.html?mode=control&v=2.0','Published control 2D responds')){
  await ctrl.locator('#start').click();
  await ctrl.waitForTimeout(1300);
  record('2D chart exists',await ctrl.locator('#controlTrend').count()===1);
  record('2D route selected',await ctrl.locator('body').evaluate(el=>el.classList.contains('control2d')));
  await capture(ctrl,'07_2d_mobile_panel.png');
 }
}finally{
 await browser.close();
 await fs.writeFile(path.join(evidence,'verification.json'),JSON.stringify(report,null,2)+'\n');
 await fs.writeFile(path.join(evidence,'README.md'),[
 '# ECHOES · Automated browser evidence','',
 'These are screenshots of the **deployed public webpages**, captured by Playwright/Chromium.',
 'The microphone and camera are **synthetic browser test devices**, not an iPhone or a physical acoustic measurement.',
 'Site: '+ROOT,'Repository: '+REPOSITORY,'',
 '## Results',...report.checks.map(c=>'- '+(c.pass?'PASS':'FAIL')+' — '+c.label+(c.detail?' ('+c.detail+')':'')),
 '','## Images',...report.images.map(i=>'- '+i.file+' — '+i.url),''
 ].join('\n'));
 console.log(JSON.stringify({passed:report.checks.filter(x=>x.pass).length,failed:report.errors,images:report.images},null,2));
 if(report.errors.length)process.exitCode=1;
}
