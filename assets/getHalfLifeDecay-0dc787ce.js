import{j as e}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{b as p}from"./index-21461081.js";import{I as d}from"./InputWrapper-088860b1.js";import{u as o}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const f=(i,a,l)=>i*.5**(a/l),u=i=>{const[a,l]=r.useState(i.initialValue),[t,h]=r.useState(i.timePassed),[s,m]=r.useState(i.halfLife),c=r.useMemo(()=>f(a,t||0,s||0),[a,t,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Initial value",labelForId:"value-input",children:e.jsx("input",{id:"value-input",type:"number",value:a,onChange:({target:n})=>l(n.valueAsNumber)})}),e.jsx(d,{label:"Time passed",labelForId:"time-passed-input",children:e.jsx("input",{id:"time-passed-input",type:"number",value:t,onChange:({target:n})=>h(n.valueAsNumber)})}),e.jsx(d,{label:"Half life",labelForId:"half-life-input",children:e.jsx("input",{id:"half-life-input",type:"number",value:s,onChange:({target:n})=>m(n.valueAsNumber)})}),e.jsx(d,{label:"Reduced value",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(c)?"Error":c})})]}),e.jsx(p,{dark:!0,code:`
import { getHalfLifeDecay } from "@baggie/core";

const initialValue = ${a||0};
const timePassed = ${t||0};
const halfLife = ${s||0};

const reducedValue = getHalfLifeDecay(initialValue, timePassed, halfLife);
// reducedValue = ${c};
`})]})};try{u.displayName="Example",u.__docgenInfo={description:"",displayName:"Example",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"number"}},timePassed:{defaultValue:null,description:"",name:"timePassed",required:!0,type:{name:"number"}},halfLife:{defaultValue:null,description:"",name:"halfLife",required:!0,type:{name:"number"}}}}}catch{}function C(i={}){const{wrapper:a}=Object.assign({},o(),i.components);return a?e.jsx(a,Object.assign({},i,{children:e.jsx(l,{})})):l();function l(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"gethalflifedecay",children:"getHalfLifeDecay"}),`
`,e.jsx(t.p,{children:"Calculate how much a substance has decayed given it's half life and the time passed."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Name"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"initialValue"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"timePassed"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"halfLife"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(u,{initialValue:1,timePassed:1e3,halfLife:1e3})]})}}export{C as default};
//# sourceMappingURL=getHalfLifeDecay-0dc787ce.js.map
