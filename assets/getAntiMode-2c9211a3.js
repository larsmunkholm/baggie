import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import{b as d}from"./index-e3b36901.js";import{I as l}from"./InputWrapper-a637f81f.js";import{u as m}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=r=>{const s=r.reduce((t,e)=>(typeof t[e]>"u"?t[e]={value:e,frequency:1}:t[e].frequency+=1,t),{});return Object.values(s).map(({value:t,frequency:e})=>({value:t,frequency:e})).sort((t,e)=>t.frequency<e.frequency?-1:t.frequency>e.frequency?1:0).filter((t,e,u)=>t.frequency===u[0].frequency).reduce((t,e)=>({numbers:[...t.numbers,e.value],frequency:e.frequency}),{numbers:[],frequency:0})},a=r=>{const[s,t]=p.useState(r.defaultInput.join(", ")),{numbers:e,result:u}=p.useMemo(()=>{const i=s.split(/\s*,\s*/).filter(o=>o.length).map(o=>o.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(o):NaN);return{numbers:i,result:c(i)}},[s]);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"10px"},children:[n.jsx(l,{label:"Input",labelForId:"input-input",children:n.jsx("input",{id:"input-input",value:s,onChange:({target:i})=>t(i.value)})}),n.jsx(l,{label:"Output",labelForId:void 0,children:n.jsx("div",{style:{padding:"5px 0"},children:u?`[${u.numbers.join(", ")}]`:"Error"})})]}),n.jsx(d,{dark:!0,code:`
import { getAntiMode } from "@baggie/core";

const numbers = [${e.join(", ")}];

const result = getAntiMode(numbers);
/*
result = ${JSON.stringify(u,null,4)}
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function M(r={}){const{wrapper:s}=Object.assign({},m(),r.components);return s?n.jsx(s,Object.assign({},r,{children:n.jsx(t,{})})):t();function t(){const e=Object.assign({h1:"h1",p:"p",h2:"h2"},m(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"getantimode",children:"getAntiMode"}),`
`,n.jsxs(e.p,{children:["Get the anti mode from an array of numbers.",n.jsx("br",{}),`
The anti mode is the least frequent value in a data set.`]}),`
`,n.jsx(e.p,{children:`There can be more than one anti mode if multiple values
are repeated an equal amount of times.`}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(a,{defaultInput:[1,2,2,3,3,3]}),`
`,n.jsx(a,{defaultInput:[8,8,8,-16,-16,42,42,42]}),`
`,n.jsx(a,{defaultInput:[1,2,3]})]})}}export{M as default};
//# sourceMappingURL=getAntiMode-2c9211a3.js.map
