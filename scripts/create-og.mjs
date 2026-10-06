import fs from "node:fs/promises";
import sharp from "sharp";
const paths = Array.from({length:24},(_,i)=>{
  const points=Array.from({length:81},(_,j)=>{
    const u=j/80*Math.PI*2,v=i/24*Math.PI*2;
    const x=(145+54*Math.cos(v))*Math.cos(u),y=(145+54*Math.cos(v))*Math.sin(u),z=54*Math.sin(v);
    return `${j?'L':'M'}${(945+x*.9+(y*.866+z*.5)*.28).toFixed(1)},${(303+y*.5-z*.866+x*.16).toFixed(1)}`;
  }).join(' ');
  return `<path d="${points}Z" fill="none" stroke="#743a59" stroke-width="1" opacity=".4"/>`;
}).join('');
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f5f3ed"/><text x="62" y="77" font-family="Arial" font-size="37" font-weight="bold" letter-spacing="-4" fill="#282c27">kp.</text><text x="63" y="160" font-family="Arial" font-size="13" letter-spacing="3" fill="#743a59">KUSH PATEL / SIGNAL ATLAS</text><text x="58" y="258" font-family="Arial" font-size="73" letter-spacing="-4" fill="#282c27">From research.</text><text x="58" y="345" font-family="Arial" font-size="73" letter-spacing="-4" fill="#282c27">To real-world</text><text x="58" y="440" font-family="Georgia" font-style="italic" font-size="100" fill="#743a59">AI.</text><text x="63" y="505" font-family="Arial" font-size="18" fill="#686b62">ML researcher &amp; AI systems builder · DA-IICT</text><circle cx="945" cy="303" r="217" stroke="#d6d7cc" stroke-dasharray="2 7" fill="none"/>${paths}<circle cx="945" cy="303" r="7" fill="#743a59"/><path d="M62 558h1076" stroke="#d6d7cc"/><text x="63" y="590" font-family="Arial" font-size="12" letter-spacing="2" fill="#686b62">RETRIEVAL · VISION · AGENTS</text></svg>`;
await fs.mkdir("public",{recursive:true});
await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("Created public/og.png (1200 × 630)");
