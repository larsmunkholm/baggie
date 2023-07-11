import{j as r}from"./jsx-runtime-94f6e698.js";import{L as j}from"./index.esm-2c9a9828.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({condition:e,wrapper:_,wrapperFallback:s,children:i})=>e?_(i):s?s(i):i;try{t.displayName="ConditionalWrapper",t.__docgenInfo={description:"",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"(children: ReactNode) => ReactNode"}},wrapperFallback:{defaultValue:null,description:"",name:"wrapperFallback",required:!1,type:{name:"((children: ReactNode) => ReactNode)"}}}}}catch{}const v={component:t,args:{condition:!1,wrapper:e=>r.jsxs("div",{style:{border:"10px solid #1e3643"},children:[r.jsx("header",{style:{background:"#fbaf00",padding:"10px"},children:"Header"}),r.jsx("div",{style:{padding:"10px"},children:e}),r.jsx("footer",{style:{background:"#fbaf00",padding:"10px"},children:"Footer"})]}),wrapperFallback:e=>r.jsx("div",{style:{border:"10px solid #25bd59"},children:e}),children:j({length:3}).join(" ")},argTypes:{wrapper:{description:"Used if `condition` is **true**"},wrapperFallback:{description:"Used if `condition` is **false**"}},parameters:{docs:{description:{component:"A component that wraps your content in another component, but only if a condition is met."}}}},o={args:{condition:!0}},a={args:{condition:!1}},n={args:{condition:!1,wrapperFallback:void 0}};var d,p,c,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    condition: true
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"If the condition for showing the wrapper is `true`",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var u,f,g,h,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    condition: false
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"If the condition for showing the wrapper is `false` and `wrapperFallback` is defined",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var w,y,x,k,F;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    condition: false,
    wrapperFallback: undefined
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"If the condition for showing the wrapper is `false` with no fallback",...(F=(k=n.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};const I=["ConditionTrue","WithFallback","ConditionFalse"];export{n as ConditionFalse,o as ConditionTrue,a as WithFallback,I as __namedExportsOrder,v as default};
//# sourceMappingURL=ConditionalWrapper.stories-a160edeb.js.map
