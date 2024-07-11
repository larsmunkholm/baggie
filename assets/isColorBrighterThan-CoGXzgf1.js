import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import{b as m}from"./index-BI7qbVC1.js";import{C as x}from"./ColorViewer-DHDYuLFP.js";import{C as i}from"./ColorInput-CJPpmj9L.js";import{g as c}from"./getColorBrightness-BkhM9lKd.js";import{I as j}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as d}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./isHexColor-BZesSPd8.js";import"./convertColorNameToHex-HtEsaZ45.js";import"./convertStringToRgb-Df1BISe4.js";import"./convertRangePosition-DHvMMI-c.js";import"./getPositionBetween-Cdl0xhKh.js";import"./getPercentageBetween-CTnJbUxy.js";function g(t,e){return c(t)>c(e)}const l=t=>{const[e,h]=n.useState(t.colorA),[o,p]=n.useState(t.colorB),s=n.useMemo(()=>g(e,o),[e,o]);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(i,{label:"Color A",value:e,onChange:h}),r.jsx(i,{label:"Color B",value:o,onChange:p}),r.jsx(j,{label:"Is A brighter than B",labelForId:void 0,children:r.jsx("div",{style:{padding:"5px 0"},children:s?"true":"false"})})]}),r.jsx("div",{style:{marginTop:"25px"},children:r.jsx(x,{color:e,splitColor:o})}),r.jsx(m,{dark:!0,code:`
import { isColorBrighterThan } from "@baggie/core";

const colorA = "${e}";
const colorB = "${o}";

const answer = isColorBrighterThan(colorA, colorB);
// answer = ${s?"true":"false"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{colorA:{defaultValue:null,description:"",name:"colorA",required:!0,type:{name:"string"}},colorB:{defaultValue:null,description:"",name:"colorB",required:!0,type:{name:"string"}}}}}catch{}function a(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"iscolorbrighterthan",children:"isColorBrighterThan"}),`
`,r.jsx(e.p,{children:"Compare the brightness of two colors."}),`
`,r.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{align:"left",children:"Parameter"}),r.jsx(e.th,{align:"left",children:"Type"}),r.jsx(e.th,{align:"center",children:"Required"}),r.jsx(e.th,{children:"Description"})]})}),r.jsxs(e.tbody,{children:[r.jsxs(e.tr,{children:[r.jsx(e.td,{align:"left",children:r.jsx(e.strong,{children:"colorA"})}),r.jsx(e.td,{align:"left",children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{align:"center",children:"✔"}),r.jsx(e.td,{children:"The color to check."})]}),r.jsxs(e.tr,{children:[r.jsx(e.td,{align:"left",children:r.jsx(e.strong,{children:"colorB"})}),r.jsx(e.td,{align:"left",children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{align:"center",children:"✔"}),r.jsx(e.td,{children:"The color to check against."})]})]})]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(l,{colorA:"#cccccc",colorB:"#bbbbbb"})]})}function X(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(a,t)})):a(t)}export{X as default};