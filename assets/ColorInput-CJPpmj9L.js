import{j as p}from"./jsx-runtime-CKrituN3.js";import{R as q,r as a}from"./index-CBqU2yxZ.js";import{i as y}from"./isHexColor-BZesSPd8.js";import{c as F}from"./convertColorNameToHex-HtEsaZ45.js";import{I as H}from"./InputWrapper-BoKUP5ds.js";function k(t){return y(t)?(t.length<7?`#${t.split("").slice(1).map(n=>n+n).join("")}`:t).toLowerCase():t}const w="_colorInput_hyuel_1",T="_textInput_hyuel_12",I={colorInput:w,textInput:T},c=q.forwardRef((t,n)=>{const[C,d]=a.useState(!1),{id:m,onChange:o,onBlur:s,onFocus:u,onKeyDown:i,value:l,label:g,labelRight:x,helperText:b,invalid:_,className:v,...N}=t,f=a.useId(),r=a.useCallback(()=>{const e=l.trim();if(!e.startsWith("#")){const h=F(e)||`#${e}`;y(h)&&o(h)}},[o,l]),R=a.useCallback(e=>{e.key==="Enter"&&r(),i&&i(e)},[r,i]),j=a.useCallback(e=>{d(!0),u&&u(e)},[u]),V=a.useCallback(e=>{d(!1),r(),s&&s(e)},[r,s]);return p.jsxs(H,{label:g,labelForId:m||f,labelRight:x,helperText:b,invalid:_,children:[p.jsx("input",{ref:n,id:m||f,value:l,onChange:({target:e})=>o(e.value),onKeyDown:R,onFocus:j,onBlur:V,className:[I.textInput,v].join(" ").trim(),pattern:"^#((([0-9a-f]{3}){1,2})|(([0-9a-f]{4}){1,2}))$",...N}),p.jsx("input",{type:"color",value:k(l).substring(0,7),onChange:({target:e})=>o(e.value),className:I.colorInput,tabIndex:C?void 0:-1})]})});c.displayName="ColorInput";try{c.displayName="ColorInput",c.__docgenInfo={description:"",displayName:"ColorInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},labelRight:{defaultValue:null,description:"",name:"labelRight",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}export{c as C,k as n};