import{j as e}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{b as p}from"./index-21461081.js";import{I as d}from"./InputWrapper-088860b1.js";import{u as m}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const j=(r,n,s=!0)=>(n-r)/r*(s?1:100)||0,c=r=>{const[n,s]=i.useState(r.from),[t,h]=i.useState(r.to),[l,x]=i.useState(!0),o=i.useMemo(()=>j(n,t,l),[n,t,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"From",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"number",value:n,onChange:({target:a})=>s(a.valueAsNumber||0)})}),e.jsx(d,{label:"To",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"number",value:t,onChange:({target:a})=>h(a.valueAsNumber||0)})}),e.jsx(d,{label:"Percentage",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:o})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>x(a=>!a)})," ","Percentage as decimal"]}),e.jsx(p,{dark:!0,code:`
import { setPercentageAsDecimal } from "@baggie/core";

const from = ${n};
const to = ${t};

const percentage = setPercentageAsDecimal(from, to${l?"":", false"});
// percentage = ${o}${l?` (${o*100}%)`:""}
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}}}}}catch{}function C(r={}){const{wrapper:n}=Object.assign({},m(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpercentageincrease",children:"getPercentageIncrease"}),`
`,e.jsx(t.p,{children:"Get the increase from one value to another in percentage."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"from"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"to"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentageAsDecimal"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"true"})})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(c,{from:10,to:100}),`
`,e.jsx(c,{from:100,to:10})]})}}export{C as default};
//# sourceMappingURL=getPercentageIncrease-f008560f.js.map
