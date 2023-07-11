import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{b as m}from"./index-21461081.js";import{c as u}from"./convertToDate-ae66aed6.js";import{I as c}from"./InputWrapper-088860b1.js";import{u as h}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const f=(a,n)=>!!u(a,n),d=a=>{const[n,s]=o.useState(a.date),[t,x]=o.useState(a.zeroBasedMonth||!1),[l,j]=o.useState(a.monthBeforeDay||!1),p=o.useMemo(()=>f(n,{zeroBasedMonth:t,monthBeforeDay:l}),[n,t,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[typeof n=="string"?e.jsx(c,{label:"Date",labelForId:"date",children:e.jsx("input",{id:"date-input",value:n,onChange:({target:r})=>s(r.value),spellCheck:!1})}):e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Day",labelForId:"day",children:e.jsx("input",{id:"day-input",type:"number",value:n.day,onChange:({target:r})=>s(i=>({...i,day:r.valueAsNumber}))})}),e.jsx(c,{label:"Month",labelForId:"month",children:e.jsx("input",{id:"month-input",type:"number",value:n.month,onChange:({target:r})=>s(i=>({...i,month:r.valueAsNumber}))})}),e.jsx(c,{label:"Year",labelForId:"year",children:e.jsx("input",{id:"year-input",type:"number",value:n.year,onChange:({target:r})=>s(i=>({...i,year:r.valueAsNumber}))})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>x(r=>!r)})," ","Zero based month"]}),typeof n=="string"&&e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>j(r=>!r)})," ","Month before date"]})]}),e.jsx(m,{dark:!0,code:`
import { isDateValid } from "@baggie/core";

const date = ${typeof n=="string"?`"${n}"`:JSON.stringify(n,null,4)};
${l||t?`const options = {
${l?`    monthBeforeDay: true,
`:""}${t?`    zeroBasedMonth: true,
`:""}};
`:""}
const isValid = isDateValid(date${l||t?", options":""});
// isValid = ${p?"true":"false"}
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string | DateObj"}},zeroBasedMonth:{defaultValue:null,description:"",name:"zeroBasedMonth",required:!1,type:{name:"boolean"}},monthBeforeDay:{defaultValue:null,description:"",name:"monthBeforeDay",required:!1,type:{name:"boolean"}}}}}catch{}function $(a={}){const{wrapper:n}=Object.assign({},h(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},h(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"isdatevalid",children:"isDateValid"}),`
`,e.jsxs(t.p,{children:["Check if a date is valid. Returns ",e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),"."]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"date"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string | { day: number; month: number; year: number }"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"zeroBasedMonth"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"monthBeforeDay"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{date:"17. 6. 1986"}),`
`,e.jsx(d,{date:{day:17,month:6,year:1986}}),`
`,e.jsx(d,{date:"31-12-1986",zeroBasedMonth:!0}),`
`,e.jsx(d,{date:"06/17/1986",monthBeforeDay:!0})]})}}export{$ as default};
//# sourceMappingURL=isDateValid-e3ec1fa0.js.map
