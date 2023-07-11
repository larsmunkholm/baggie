import{j as e}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{b as h}from"./index-21461081.js";import{C as d}from"./ColorViewer-bde42da6.js";import{C as x}from"./ColorInput-4c318f10.js";import{c as g}from"./convertHslToRgb-a60e269c.js";import{c as j}from"./convertRgbToHsl-ef3890c5.js";import{c as u}from"./convertStringToRgb-e978940f.js";import{c as l}from"./convertRgbToHex-19fa32ed.js";import{u as a}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-088860b1.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const f=t=>{const o=typeof t=="string"?t:l(t),n=typeof t=="string"?u(t):t,{hue:r,saturation:s,lightness:m,alpha:p}=j(n);return[o,l(g({hue:(r+180)%360,saturation:s,lightness:m,alpha:p}))]},c=t=>{const[o,n]=i.useState(t.color),r=i.useMemo(()=>{try{return f(o)}catch{return[]}},[o]);return e.jsxs(e.Fragment,{children:[e.jsx(x,{label:"Color",value:o,onChange:n}),e.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:r.map(s=>e.jsx(d,{color:s},s))},o),e.jsx(h,{dark:!0,code:`
import { getColorSchemeComplementary } from "@baggie/core";

const color = "${o}";

const scheme = getColorSchemeComplementary(color);
/*
scheme = ${JSON.stringify(r,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function G(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcolorschemecomplementary",children:"getColorSchemeComplementary"}),`
`,e.jsx(r.p,{children:"Get a complementary color scheme."}),`
`,e.jsx(r.p,{children:"The two colors are opposite each other on the color wheel."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"color"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The base color."})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{color:"#ffcc00"})]})}}export{G as default};
//# sourceMappingURL=getColorSchemeComplementary-840c6a11.js.map
