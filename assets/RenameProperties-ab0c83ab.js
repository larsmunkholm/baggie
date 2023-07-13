import{j as e}from"./jsx-runtime-94f6e698.js";import{b as s}from"./index-642316a4.js";import{u as a}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bf4e6f48.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function j(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"renameproperties",children:"RenameProperties"}),`
`,e.jsx(r.p,{children:"Rename properties in an interface."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["This type comes from here: ",e.jsx(r.a,{href:"https://stackoverflow.com/q/59071058/1446188",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/q/59071058/1446188"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { RenameProperties } from "@baggie/core";

interface Product {
    no: number;
    name: string;
    sale: boolean;
    amount?: number;
}

type NewProduct = RenameProperties<Product, {
    no: "productNumber",
    sale: "isOnSale",
    amount: "quantity",
}>;

// The type above matches the interface below

interface NewProduct {
    productNumber: number;
    name: string;
    isOnSale: boolean;
    quantity?: number;
}
`})]})}}export{j as default};
//# sourceMappingURL=RenameProperties-ab0c83ab.js.map