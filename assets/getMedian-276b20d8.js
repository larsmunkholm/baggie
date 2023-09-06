import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{b as l}from"./index-e3b36901.js";import{g as c}from"./getMean-b7b6c0cb.js";import{I as m}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./addNumbers-491af948.js";const h=r=>{const t=r.length,s=Math.floor(t/2),n=[...r].sort((a,o)=>a-o);return t?t%2?n[s]:c([n[s-1],n[s]]):0},i=r=>{const[t,s]=u.useState(r.defaultInput.join(", ")),{numbers:n,result:a}=u.useMemo(()=>{const o=t.split(/\s*,\s*/).filter(p=>p.length).map(p=>p.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(p):NaN);return{numbers:o,result:h(o)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(m,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:o})=>s(o.value)})}),e.jsx(m,{label:"Median",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsx(l,{dark:!0,code:`
import { getMedian } from "@baggie/core";

const numbers = [${n.join(", ")}];

const median = getMedian(numbers);
// median = ${a}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function F(r={}){const{wrapper:t}=Object.assign({},d(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getmedian",children:"getMedian"}),`
`,e.jsx(n.p,{children:"Get the median from an array of numbers."}),`
`,e.jsx(n.p,{children:`The median is the middle value or, if two middle values,
the mean of those two with the numbers in ascending order.`}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{defaultInput:[1,2,3]}),`
`,e.jsx(i,{defaultInput:[1,1,1]}),`
`,e.jsx(i,{defaultInput:[4,8,15,16,23,42]})]})}}export{F as default};
//# sourceMappingURL=getMedian-276b20d8.js.map
