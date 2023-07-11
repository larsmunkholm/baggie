import{j as e}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{b as u}from"./index-21461081.js";import{d as x}from"./decimalAdjust.helper-751506cc.js";import{I as d}from"./InputWrapper-088860b1.js";import{u as m}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isNumberRound-b59f1d4e.js";const p=(n,t)=>x(n,t,Math.trunc),s=n=>{const[t,a]=i.useState(n.number),[r,o]=i.useState(n.maxDecimalPlaces),l=i.useMemo(()=>p(t,r),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:t,onChange:({target:c})=>a(c.valueAsNumber)})}),e.jsx(d,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:r,onChange:({target:c})=>o(c.valueAsNumber)})}),e.jsx(d,{label:"Truncated",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(l)?"Error":l})})]}),e.jsx(u,{dark:!0,code:`
import { truncDecimals } from "@baggie/core";

const number = ${t};
const maxDecimalPlaces = ${r};

const truncated = truncDecimals(number, maxDecimalPlaces);
// truncated = ${l}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function C(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(a,{})})):a();function a(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"truncdecimals",children:"truncDecimals"}),`
`,e.jsx(r.p,{children:"Truncate a number to the nearest decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Round to ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(s,{number:13.3689,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Round to ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(s,{number:-13.1124,maxDecimalPlaces:3})]})}}export{C as default};
//# sourceMappingURL=truncDecimals-278de49a.js.map
