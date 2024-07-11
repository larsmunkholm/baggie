import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{b as a}from"./index-BI7qbVC1.js";import{C as d}from"./ColorInput-CJPpmj9L.js";import{g as h}from"./getColorBrightness-BkhM9lKd.js";import{I as p}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as l}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./isHexColor-BZesSPd8.js";import"./convertColorNameToHex-HtEsaZ45.js";import"./convertStringToRgb-Df1BISe4.js";import"./convertRangePosition-DHvMMI-c.js";import"./getPositionBetween-Cdl0xhKh.js";import"./getPercentageBetween-CTnJbUxy.js";const o=t=>{const[r,c]=s.useState(t.color),n=s.useMemo(()=>h(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Color",value:r,onChange:c}),e.jsx(p,{label:"Brightness",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:n})})]}),e.jsx(a,{dark:!0,code:`
import { getColorBrightness } from "@baggie/core";

const color = "${r}";

const brightness = getColorBrightness(color);
// brightness = ${n}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function i(t){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcolorbrightness",children:"getColorBrightness"}),`
`,e.jsx(r.p,{children:"Get the perceived brightness of a color as percentage in decimal form."}),`
`,e.jsx(r.p,{children:"Returns a number from 0 to 1, 1 being the brightest and 0 being not bright at all."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["See ",e.jsx(r.a,{href:"http://alienryderflex.com/hsp.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://alienryderflex.com/hsp.html"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"color"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The color to check."})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{color:"#cccccc"})]})}function R(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{R as default};