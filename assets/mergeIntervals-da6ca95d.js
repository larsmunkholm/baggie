import{n as f}from"./normalizeRanges-f9fde636.js";const l=(s,m=!0)=>{const r=f(s);if(r.length<2)return r;r.sort((o,n)=>o.from-n.from);const e=[];let t=r[0];for(let o=1;o<r.length;o+=1)(m?t.to>=r[o].from:t.to>r[o].from)?t={from:t.from,to:Math.max(t.to,r[o].to)}:(e.push(t),t=r[o]);return e.push(t),e};export{l as m};
//# sourceMappingURL=mergeIntervals-da6ca95d.js.map
