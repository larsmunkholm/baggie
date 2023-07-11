import{j as e}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{b as c}from"./index-21461081.js";import{g as o}from"./getTagsRegex-e8b5ae90.js";import{I as h}from"./InputWrapper-088860b1.js";import{u as d}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const l=s=>{const[r,n]=i.useState(s.string),[t,g]=i.useState(!1),p=i.useMemo(()=>r.match(o(t)),[r,t]);return e.jsxs(e.Fragment,{children:[e.jsx(h,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:r,onChange:({target:a})=>n(a.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>g(a=>!a)})," ","Group sequential tags"]}),e.jsx(c,{dark:!0,code:`
import { getTagsRegex } from "@baggie/core";

const string = "${r}";

const tags = string.match(getTagsRegex(${t?"true":""}));
// tags = ${JSON.stringify(p)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(c,{dark:!0,code:`new RegExp("${o(t).source}", "${o(t).flags}")`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function C(s={}){const{wrapper:r}=Object.assign({},d(),s.components);return r?e.jsx(r,Object.assign({},s,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"gettagsregex",children:"getTagsRegex"}),`
`,e.jsx(t.p,{children:"Returns a regular expression for matching all HTML and XML tags in a string."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"groupSequentialTags"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{string:"<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment --> :)"})]})}}export{C as default};
//# sourceMappingURL=getTagsRegex-b148245c.js.map
