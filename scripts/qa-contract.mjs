// ECHOES static contract checks: complementary to the deployed-browser agent.
// Not a measurement, not a user trial, not proof of educational effectiveness.
import fs from 'node:fs/promises';
const load=(name)=>fs.readFile(name,'utf8');
const [lab,home,readme,method]=await Promise.all(['lab.html','index.html','README.md','METODOLOGIA_ECHOES_V2.md'].map(load));
const results=[];
function check(label,pass,details){results.push({label,pass:!!pass,details:details||''})}
let js='';
try{js=lab.match(/<script>([\s\S]*?)<\/script>/)?.[1]||'';new Function(js);check('JavaScript syntactically valid',true)}catch(e){check('JavaScript syntactically valid',false,String(e))}
const html=lab.slice(0,lab.indexOf('<script>'));const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
check('DOM id uniqueness',ids.length===new Set(ids).size);
check('Homepage explicitly links live application',home.includes('href="./lab.html?v=2.0"'));
check('Homepage explicitly links source repository',home.includes('href="https://github.com/brunososal/echoes-webar"'));
check('Relative digital measurement only',lab.includes('state.level=20*Math.log10')&&!lab.includes('referenceOffset')&&!lab.includes('93.5'));
check('Does not auto-start headset playback',lab.includes('state.listen&&state.headphones')&&lab.includes('output.gain.value=0'));
check('EPP remains a digital processing filter',lab.includes('ppe:{hp:240,lp:1600,f:.40}')&&lab.includes('const m=modes[state.intervention]||modes.none'));
check('2D comparator microphone-only',lab.includes('video:is2D?false:'));
check('Guided learning is available',lab.includes('function renderLesson()')&&lab.includes('state.lessonStage'));
check('Pre and post question sets are separate',lab.includes('pre:[')&&lab.includes('post:[')&&lab.includes('function questionBank()'));
check('Consent and limits identified in interface',lab.includes('No es')&&lab.includes('sin conversión a decibeles acústicos'));
check('Technical limits documented',method.includes('no usa anclaje espacial 3D')&&method.includes('no se')&&readme.includes('dBFS'));
check('Research condition separately recorded',lab.includes('condition:is2D?"2d":"lente_camara"'));
check('No automated screenshots presented as iPhone measurements',readme.includes('prueba')&&method.includes('no'));
await fs.mkdir('evidence/contract',{recursive:true});
await fs.writeFile('evidence/contract/report.json',JSON.stringify({time:new Date().toISOString(),summary:{passed:results.filter(x=>x.pass).length,failed:results.filter(x=>!x.pass).length},results},null,2)+'\n');
console.log(results.map(x=>(x.pass?'PASS':'FAIL')+' '+x.label+(x.details?' '+x.details:'')).join('\n'));
if(results.some(x=>!x.pass))process.exitCode=1;
