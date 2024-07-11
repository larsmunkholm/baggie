import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{b as l}from"./index-BI7qbVC1.js";import{C as h}from"./ColorInput-CJPpmj9L.js";import{c as a}from"./convertStringToRgb-Df1BISe4.js";import{useMDXComponents as d}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./isHexColor-BZesSPd8.js";import"./convertColorNameToHex-HtEsaZ45.js";import"./InputWrapper-BoKUP5ds.js";import"./convertRangePosition-DHvMMI-c.js";import"./getPositionBetween-Cdl0xhKh.js";import"./getPercentageBetween-CTnJbUxy.js";const i=t=>{const[r,c]=s.useState(t.hex),n=s.useMemo(()=>{try{return a(r)}catch{return}},[r]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsx(h,{label:"Hex",value:r,onChange:c})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx("table",{style:{margin:0},children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Red:"})}),e.jsx("td",{children:n?n.red:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Green:"})}),e.jsx("td",{children:n?n.green:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Blue:"})}),e.jsx("td",{children:n?n.blue:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Alpha:"})}),e.jsx("td",{children:n?n.alpha:""})]})]})})}),e.jsx(l,{dark:!0,code:`
import { convertStringToRgb } from "@baggie/core";

const hex = ${r?`"${r}"`:"undefined"};

const rgb = convertStringToRgb(hex);
/*
rgb = ${JSON.stringify(n,null,4)}
*/
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}function o(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"convertstringtorgb",children:"convertStringToRgb"}),`
`,e.jsx(r.p,{children:"Convert a string (hex or rgb color) to an object with RGB color values."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"hex"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{hex:"#ffcc00"})]})}function X(t={}){const{wrapper:r}=Object.assign({},d(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{X as default};