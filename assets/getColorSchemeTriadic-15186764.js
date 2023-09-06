import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{b as p}from"./index-e3b36901.js";import{C as x}from"./ColorViewer-02e72d7a.js";import{C as g}from"./ColorInput-5137a913.js";import{c as m}from"./convertHslToRgb-a60e269c.js";import{c as j}from"./convertRgbToHsl-ef3890c5.js";import{c}from"./convertRgbToHex-19fa32ed.js";import{c as u}from"./convertStringToRgb-e978940f.js";import{u as h}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-a637f81f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const f=t=>{const o=typeof t=="string"?t:c(t),n=typeof t=="string"?u(t):t,{hue:r,saturation:s,lightness:a,alpha:l}=j(n);return[o,c(m({hue:(r+120)%360,saturation:s,lightness:a,alpha:l})),c(m({hue:(r+240)%360,saturation:s,lightness:a,alpha:l}))]},i=t=>{const[o,n]=d.useState(t.color),r=d.useMemo(()=>{try{return f(o)}catch{return[]}},[o]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"Color",value:o,onChange:n}),e.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:r.map(s=>e.jsx(x,{color:s},s))},o),e.jsx(p,{dark:!0,code:`
import { getColorSchemeTriadic } from "@baggie/core";

const color = "${o}";

const scheme = getColorSchemeTriadic(color);
/*
scheme = ${JSON.stringify(r,null,4)}
*/
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function k(t={}){const{wrapper:o}=Object.assign({},h(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},h(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcolorschemetriadic",children:"getColorSchemeTriadic"}),`
`,e.jsx(r.p,{children:"Get a triadic color scheme."}),`
`,e.jsx(r.p,{children:"The three colors are evenly spaced on the color wheel, 120 degrees apart from each other."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"color"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The base color."})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{color:"#ffcc00"})]})}}export{k as default};
//# sourceMappingURL=getColorSchemeTriadic-15186764.js.map
