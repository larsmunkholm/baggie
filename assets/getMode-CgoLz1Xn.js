import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import{b as c}from"./index-BI7qbVC1.js";import{I as l}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as d}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function x(n){const t={};let s=0,o=[];return n.forEach(r=>{t[r]=(t[r]||0)+1,s<t[r]?(s=t[r],o=[r]):s===t[r]&&o.push(r)}),{numbers:o,frequency:s}}const a=n=>{const[t,s]=u.useState(n.defaultInput.join(", ")),{numbers:o,result:r}=u.useMemo(()=>{const i=t.split(/\s*,\s*/).filter(p=>p.length).map(p=>p.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(p):NaN);return{numbers:i,result:x(i)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:i})=>s(i.value)})}),e.jsx(l,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:r?`[${r.numbers.join(", ")}]`:"Error"})})]}),e.jsx(c,{dark:!0,code:`
import { getMode } from "@baggie/core";

const numbers = [${o.join(", ")}];

const result = getMode(numbers);
/*
result = ${JSON.stringify(r,null,4)}
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function m(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getantimode",children:"getAntiMode"}),`
`,e.jsxs(t.p,{children:["Get the mode from an array of numbers.",e.jsx("br",{}),`
The mode is the most frequent value in a data set.`]}),`
`,e.jsx(t.p,{children:`There can be more than one mode if multiple values
are repeated an equal amount of times.`}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{defaultInput:[1,2,2,3,3,3]}),`
`,e.jsx(a,{defaultInput:[8,8,-16,42,42,8,42]}),`
`,e.jsx(a,{defaultInput:[1,2,3]})]})}function q(n={}){const{wrapper:t}=Object.assign({},d(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(m,n)})):m(n)}export{q as default};