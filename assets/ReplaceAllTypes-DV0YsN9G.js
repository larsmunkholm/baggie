import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as i}from"./index-BI7qbVC1.js";import{useMDXComponents as o}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function n(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"replacealltypes",children:"ReplaceAllTypes"}),`
`,e.jsx(r.p,{children:"Replace the type of all properties in an interface."}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{dark:!0,language:"ts",code:`
import { ReplaceAllTypes } from "@baggie/core";

interface Car {
    model: string;
    diesel: boolean;
    wheels: number;
    doors: number;
}

type CarFunctions = ReplaceAllTypes<Car, () => string>;

// The type above matches the interface below

interface CarSpecificProperties {
    model: () => string;
    diesel: () => string;
    wheels: () => string;
    doors: () => string;
}
`})]})}function x(t={}){const{wrapper:r}=Object.assign({},o(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{x as default};