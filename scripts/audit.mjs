import fs from "node:fs/promises";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";

const origin=process.env.AUDIT_URL || "http://127.0.0.1:3000";
const chrome=await launch({chromePath:process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",chromeFlags:["--headless=new","--disable-gpu","--no-first-run","--disable-extensions"]});
const cases=process.env.AUDIT_CASE ? [{name:"case-extra-mobile",path:process.env.AUDIT_CASE,desktop:false}] : [{name:"home-mobile",path:"/",desktop:false},{name:"home-desktop",path:"/",desktop:true},{name:"case-mobile",path:"/work/gsstb-scholar/",desktop:false},{name:"case-extra-mobile",path:"/work/openenv-data-validation/",desktop:false}];
await fs.mkdir("docs/audits",{recursive:true});
let failed=false;
try {
  for(const scenario of cases){
    const report=await lighthouse(`${origin}${scenario.path}`,{port:chrome.port,output:["html","json"],logLevel:"error",onlyCategories:["performance","accessibility","best-practices","seo"],...(scenario.desktop?{preset:"desktop"}:{})});
    const scores=Object.fromEntries(Object.entries(report.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)]));
    const summary={url:`${origin}${scenario.path}`,lighthouseVersion:report.lhr.lighthouseVersion,fetchTime:report.lhr.fetchTime,formFactor:scenario.desktop?"desktop":"mobile",scores,metrics:{fcp:report.lhr.audits["first-contentful-paint"].displayValue,lcp:report.lhr.audits["largest-contentful-paint"].displayValue,tbt:report.lhr.audits["total-blocking-time"].displayValue,cls:report.lhr.audits["cumulative-layout-shift"].displayValue},failures:Object.entries(report.lhr.audits).filter(([,a])=>a.score!==null&&a.score<1&&a.scoreDisplayMode!=="informative"&&a.scoreDisplayMode!=="manual"&&a.scoreDisplayMode!=="notApplicable").map(([id,a])=>({id,title:a.title,score:a.score,details:a.details}))};
    await fs.writeFile(`docs/audits/${scenario.name}.html`,report.report[0]);
    await fs.writeFile(`docs/audits/${scenario.name}.json`,JSON.stringify(summary,null,2));
    console.log(scenario.name,JSON.stringify({...scores,...summary.metrics}));
    if(Object.values(scores).some(score=>score<90)) failed=true;
  }
} finally { await chrome.kill(); }
if(failed) process.exitCode=1;
