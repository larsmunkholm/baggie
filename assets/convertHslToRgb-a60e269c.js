const s=({hue:H,saturation:t,lightness:o,alpha:M=1})=>{let d=0,l=0,u=0;if(t===0)d=l=u=o;else{const n=o<.5?o*(1+t):o+t-o*t,c=2*o-n,T=H/360,f=1/3,b=2/3,p=1/6;for(let r=-1;r<2;r+=1){let e=T+(r<0?f:r>0?-f:0);e<0?e+=1:e>1&&(e-=1),e=e<p?c+(n-c)*6*e:e<.5?n:e<b?c+(n-c)*(b-e)*6:c,r<0?d=e:r>0?u=e:l=e}}return{red:Math.round(d*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:M}};export{s as c};
//# sourceMappingURL=convertHslToRgb-a60e269c.js.map