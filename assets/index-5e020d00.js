import{c as B,a as Y,g as Z}from"./_commonjsHelpers-de833af9.js";var E={exports:{}};E.exports;(function(c){(function(f,s,l){function d(a){var o=this,t=r();o.next=function(){var e=2091639*o.s0+o.c*23283064365386963e-26;return o.s0=o.s1,o.s1=o.s2,o.s2=e-(o.c=e|0)},o.c=1,o.s0=t(" "),o.s1=t(" "),o.s2=t(" "),o.s0-=t(a),o.s0<0&&(o.s0+=1),o.s1-=t(a),o.s1<0&&(o.s1+=1),o.s2-=t(a),o.s2<0&&(o.s2+=1),t=null}function x(a,o){return o.c=a.c,o.s0=a.s0,o.s1=a.s1,o.s2=a.s2,o}function m(a,o){var t=new d(a),e=o&&o.state,n=t.next;return n.int32=function(){return t.next()*4294967296|0},n.double=function(){return n()+(n()*2097152|0)*11102230246251565e-32},n.quick=n,e&&(typeof e=="object"&&x(e,t),n.state=function(){return x(t,{})}),n}function r(){var a=4022871197,o=function(t){t=String(t);for(var e=0;e<t.length;e++){a+=t.charCodeAt(e);var n=.02519603282416938*a;a=n>>>0,n-=a,n*=a,a=n>>>0,n-=a,a+=n*4294967296}return(a>>>0)*23283064365386963e-26};return o}s&&s.exports?s.exports=m:l&&l.amd?l(function(){return m}):this.alea=m})(B,c,!1)})(E);var I=E.exports,F={exports:{}};F.exports;(function(c){(function(f,s,l){function d(r){var a=this,o="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var e=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^e^e>>>8},r===(r|0)?a.x=r:o+=r;for(var t=0;t<o.length+64;t++)a.x^=o.charCodeAt(t)|0,a.next()}function x(r,a){return a.x=r.x,a.y=r.y,a.z=r.z,a.w=r.w,a}function m(r,a){var o=new d(r),t=a&&a.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do var n=o.next()>>>11,i=(o.next()>>>0)/4294967296,u=(n+i)/(1<<21);while(u===0);return u},e.int32=o.next,e.quick=e,t&&(typeof t=="object"&&x(t,o),e.state=function(){return x(o,{})}),e}s&&s.exports?s.exports=m:l&&l.amd?l(function(){return m}):this.xor128=m})(B,c,!1)})(F);var U=F.exports,H={exports:{}};H.exports;(function(c){(function(f,s,l){function d(r){var a=this,o="";a.next=function(){var e=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(e^e<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,r===(r|0)?a.x=r:o+=r;for(var t=0;t<o.length+64;t++)a.x^=o.charCodeAt(t)|0,t==o.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function x(r,a){return a.x=r.x,a.y=r.y,a.z=r.z,a.w=r.w,a.v=r.v,a.d=r.d,a}function m(r,a){var o=new d(r),t=a&&a.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do var n=o.next()>>>11,i=(o.next()>>>0)/4294967296,u=(n+i)/(1<<21);while(u===0);return u},e.int32=o.next,e.quick=e,t&&(typeof t=="object"&&x(t,o),e.state=function(){return x(o,{})}),e}s&&s.exports?s.exports=m:l&&l.amd?l(function(){return m}):this.xorwow=m})(B,c,!1)})(H);var W=H.exports,L={exports:{}};L.exports;(function(c){(function(f,s,l){function d(r){var a=this;a.next=function(){var t=a.x,e=a.i,n,i;return n=t[e],n^=n>>>7,i=n^n<<24,n=t[e+1&7],i^=n^n>>>10,n=t[e+3&7],i^=n^n>>>3,n=t[e+4&7],i^=n^n<<7,n=t[e+7&7],n=n^n<<13,i^=n^n<<9,t[e]=i,a.i=e+1&7,i};function o(t,e){var n,i=[];if(e===(e|0))i[0]=e;else for(e=""+e,n=0;n<e.length;++n)i[n&7]=i[n&7]<<15^e.charCodeAt(n)+i[n+1&7]<<13;for(;i.length<8;)i.push(0);for(n=0;n<8&&i[n]===0;++n);for(n==8?i[7]=-1:i[n],t.x=i,t.i=0,n=256;n>0;--n)t.next()}o(a,r)}function x(r,a){return a.x=r.x.slice(),a.i=r.i,a}function m(r,a){r==null&&(r=+new Date);var o=new d(r),t=a&&a.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do var n=o.next()>>>11,i=(o.next()>>>0)/4294967296,u=(n+i)/(1<<21);while(u===0);return u},e.int32=o.next,e.quick=e,t&&(t.x&&x(t,o),e.state=function(){return x(o,{})}),e}s&&s.exports?s.exports=m:l&&l.amd?l(function(){return m}):this.xorshift7=m})(B,c,!1)})(L);var J=L.exports,R={exports:{}};R.exports;(function(c){(function(f,s,l){function d(r){var a=this;a.next=function(){var t=a.w,e=a.X,n=a.i,i,u;return a.w=t=t+1640531527|0,u=e[n+34&127],i=e[n=n+1&127],u^=u<<13,i^=i<<17,u^=u>>>15,i^=i>>>12,u=e[n]=u^i,a.i=n,u+(t^t>>>16)|0};function o(t,e){var n,i,u,k,M,S=[],G=128;for(e===(e|0)?(i=e,e=null):(e=e+"\0",i=0,G=Math.max(G,e.length)),u=0,k=-32;k<G;++k)e&&(i^=e.charCodeAt((k+32)%e.length)),k===0&&(M=i),i^=i<<10,i^=i>>>15,i^=i<<4,i^=i>>>13,k>=0&&(M=M+1640531527|0,n=S[k&127]^=i+M,u=n==0?u+1:0);for(u>=128&&(S[(e&&e.length||0)&127]=-1),u=127,k=4*128;k>0;--k)i=S[u+34&127],n=S[u=u+1&127],i^=i<<13,n^=n<<17,i^=i>>>15,n^=n>>>12,S[u]=i^n;t.w=M,t.X=S,t.i=u}o(a,r)}function x(r,a){return a.i=r.i,a.w=r.w,a.X=r.X.slice(),a}function m(r,a){r==null&&(r=+new Date);var o=new d(r),t=a&&a.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do var n=o.next()>>>11,i=(o.next()>>>0)/4294967296,u=(n+i)/(1<<21);while(u===0);return u},e.int32=o.next,e.quick=e,t&&(t.X&&x(t,o),e.state=function(){return x(o,{})}),e}s&&s.exports?s.exports=m:l&&l.amd?l(function(){return m}):this.xor4096=m})(B,c,!1)})(R);var aa=R.exports,X={exports:{}};X.exports;(function(c){(function(f,s,l){function d(r){var a=this,o="";a.next=function(){var e=a.b,n=a.c,i=a.d,u=a.a;return e=e<<25^e>>>7^n,n=n-i|0,i=i<<24^i>>>8^u,u=u-e|0,a.b=e=e<<20^e>>>12^n,a.c=n=n-i|0,a.d=i<<16^n>>>16^u,a.a=u-e|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,r===Math.floor(r)?(a.a=r/4294967296|0,a.b=r|0):o+=r;for(var t=0;t<o.length+20;t++)a.b^=o.charCodeAt(t)|0,a.next()}function x(r,a){return a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d,a}function m(r,a){var o=new d(r),t=a&&a.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do var n=o.next()>>>11,i=(o.next()>>>0)/4294967296,u=(n+i)/(1<<21);while(u===0);return u},e.int32=o.next,e.quick=e,t&&(typeof t=="object"&&x(t,o),e.state=function(){return x(o,{})}),e}s&&s.exports?s.exports=m:l&&l.amd?l(function(){return m}):this.tychei=m})(B,c,!1)})(X);var ea=X.exports,Q={exports:{}};const na={},oa=Object.freeze(Object.defineProperty({__proto__:null,default:na},Symbol.toStringTag,{value:"Module"})),ta=Y(oa);(function(c){(function(f,s,l){var d=256,x=6,m=52,r="random",a=l.pow(d,x),o=l.pow(2,m),t=o*2,e=d-1,n;function i(h,p,b){var v=[];p=p==!0?{entropy:!0}:p||{};var g=S(M(p.entropy?[h,T(s)]:h??G(),3),v),C=new u(v),w=function(){for(var y=C.g(x),z=a,P=0;y<o;)y=(y+P)*d,z*=d,P=C.g(1);for(;y>=t;)y/=2,z/=2,P>>>=1;return(y+P)/z};return w.int32=function(){return C.g(4)|0},w.quick=function(){return C.g(4)/4294967296},w.double=w,S(T(C.S),s),(p.pass||b||function(y,z,P,A){return A&&(A.S&&k(A,C),y.state=function(){return k(C,{})}),P?(l[r]=y,z):y})(w,g,"global"in p?p.global:this==l,p.state)}function u(h){var p,b=h.length,v=this,g=0,C=v.i=v.j=0,w=v.S=[];for(b||(h=[b++]);g<d;)w[g]=g++;for(g=0;g<d;g++)w[g]=w[C=e&C+h[g%b]+(p=w[g])],w[C]=p;(v.g=function(y){for(var z,P=0,A=v.i,K=v.j,q=v.S;y--;)z=q[A=e&A+1],P=P*d+q[e&(q[A]=q[K=e&K+z])+(q[K]=z)];return v.i=A,v.j=K,P})(d)}function k(h,p){return p.i=h.i,p.j=h.j,p.S=h.S.slice(),p}function M(h,p){var b=[],v=typeof h,g;if(p&&v=="object")for(g in h)try{b.push(M(h[g],p-1))}catch{}return b.length?b:v=="string"?h:h+"\0"}function S(h,p){for(var b=h+"",v,g=0;g<b.length;)p[e&g]=e&(v^=p[e&g]*19)+b.charCodeAt(g++);return T(p)}function G(){try{var h;return n&&(h=n.randomBytes)?h=h(d):(h=new Uint8Array(d),(f.crypto||f.msCrypto).getRandomValues(h)),T(h)}catch{var p=f.navigator,b=p&&p.plugins;return[+new Date,f,b,f.screen,T(s)]}}function T(h){return String.fromCharCode.apply(0,h)}if(S(l.random(),s),c.exports){c.exports=i;try{n=ta}catch{}}else l["seed"+r]=i})(typeof self<"u"?self:B,[],Math)})(Q);var ia=Q.exports,ra=I,ua=U,sa=W,ca=J,la=aa,fa=ea,j=ia;j.alea=ra;j.xor128=ua;j.xorwow=sa;j.xorshift7=ca;j.xor4096=la;j.tychei=fa;var ha=j;const da=Z(ha);let pa=da();function N(){return pa()}function D(c,f){const s=Array.isArray(c)?()=>_(c):c;return(f==null?void 0:f.length)===void 0?s(0):Array.from({length:f.length},(l,d)=>s(d))}function _(c){return c[Math.floor(N()*c.length)]}function ma({min:c=1,max:f=9999.99,fraction:s=0}={}){if(f<c)throw new Error("Max must be bigger than min");return Number((N()*(f-c)+c).toFixed(s))}var xa=["tinyint","date","timestamp","set","datetime","enum","binary","bigint","point","smallint","text","bit","decimal","varchar","mediumint","double","time","blob","geometry","boolean","serial","real","float"];function ya(c){return D(xa,c)}var ga=["Oracle","MySQL","Microsoft SQL Server","PostgreSQL","MongoDB","IBM Db2","Redis","Elasticsearch","Microsoft Access","SQLite","Cassandra","Splunk","MariaDB","Teradata","Hive","Solr","HBase","FileMaker","SAP HANA","Amazon DynamoDB","SAP Adaptive Server","Neo4j","Couchbase","Memcached","Microsoft Azure SQL Database"];function wa(c){return D(ga,c)}var va=["est","voluptatem","non","aut","aliquid","quaerat","quos","vel","tenetur","consectetur","ipsum","voluptate","numquam","nulla","asperiores","in","laborum","quas","et","ullam","consequuntur","enim","dicta","quia","facilis","voluptatibus","at","hic","sunt","excepturi","maiores","vitae","fugit","possimus","unde","repellat","sit","necessitatibus","nemo","qui","exercitationem","dolores","esse","reiciendis","nihil","commodi","id","sequi","consequatur","occaecati","deserunt","quae","eos","sapiente","fugiat","neque","quasi","nostrum","magnam","sed","omnis","doloribus","error","ducimus","rerum","beatae","cupiditate","blanditiis","labore"];function $(c){return D(()=>{let f=_(va);var s;return c!=null&&c.capitalize&&(f=(s=f).charAt(0).toUpperCase()+s.slice(1)),f},c)}var ba={china:["Peking roasted duck","Kung pao chicken","Sweet and sour pork","Hot pot","Dim sum","Dumplings","Ma po tofu","Char siu","Chicken chow mein","Beef chow mein","vegetable chow mein","Chicken fried rice","Beef fried rice","Vegetable fried Rice","Special fried Rice","Sichuan pork","Xiaolongbao","Zhajiangmian","Wonton soup","Sweet and sour pork","Duck spring Rolls","Vegetable spring Rolls","Wonton","Peking duck","Lamb hot pot","Spicy crayfish","Guilin rice noodles","Lanzhou hand-pulled noodles","Steamed crab","Shredded pork with garlic sauce","Red braised pork","Sweet and sour Ribs","Xinjiang","Braised pork with vermicelli"],italy:["Butternut squash risotto","Mushroom risotto","Beetroot risotto","Courgette risotto","Pizza","Gnocchi","Spaghetti bolognese","Spaghetti carbonara","Pesto alla Genovese","Beef lasagne","Vegetable lasagne","Gelato","Prosciutto di Parma","Ribollita","Bagna cauda","Polenta","Tortelli and ravioli","Focaccia","Garlic bread","Arancini","Il tartufo","Panzerotto fritto","Fiorentina","Minestrone","Frico","Arrosticini","Olive ascolante","Fritto misto piemontes","Tiramisù"],india:["Biryani","Dosa","Tandoori chicken","Samosas","Chaat","Plain naan","Garlic naan","Pilau rice","Steamed rice","Chicken madras","Vegetable madras","Chicken vindaloo","Chicken jalfrezi","Chicken roghan josh","Lamb roghan josh","Beef roghan josh","Butter chicken","Dosa","Gulab jamun","Chicken korma","Mutter paneer","Papadum","Paratha","Raita","Saag paneer","Tandoori chicken","Chicken tikka masala","Pakora","Dal","Chapati","Pasanda","Aloo gobi","Kofta","Chicken makhani","Paneer naan","Chana Aloo Curry"],mexico:["Chilaquiles","Pozole","Tacos al pastor","Tostadas","Chiles en nogada","Elote","Enchiladas","Mole","Guacamole","Tamales","Huevos rancheros","Machaca","Discada","Beef Burrito","Chicken Burrito","Pozole de pollo o duajolote","Menudo","Cochinita pibil","Tamale","Quesadilla","Frijoles puercos","Chile en nogada","Esquites","Alegria de amaranto","Pipián","Aguachile","Ceviche","Pescado zarandeado","Camarones a la diabla","Birria de chivo","Tlayuda","Guacamole con chapulines","Flautas","Torta Ahogada","Carnitas","Caldo Azteca","Gorditas de Nata"],japan:["Sushi","Udon","Tofu","Tempura","Yakitori","Sashimi","Ramen","Donburi","Natto","Oden","Tamagoyaki","Soba","Tonkatsu","Kashipan","Sukiyaki","Miso soup","Okonomiyaki","Mentaiko","Nikujaga","Unagi no kabayaki","Shabu Shabu","Onigiri","Gyoza","Takoyaki","aiseki ryori","Edamame","Yakisoba","Chawanmushi","Wagashi"],france:["Foie gras","Huîtres","Cassoulet","Poulet basquaise","Escargots au beurre persillé","Mouclade charentaise","Galettes bretonnes","Flemish carbonnade","Quiche lorraine","Raclette","Cheese fondue","Beef fondue","Gratin dauphinois","Tartiflette","Bouillabaisse","Ratatouille","Boeuf bourguignon","Blanquette de veau","Pot-au-feu","Coq-au-vin","Hachis parmentier","Steak tartare","Choucroute","Soufflé au fromage","Cuisses de grenouilles","Soupe à l’oignon","Baguette","Croissant","French cheeses","Fondant au chocolat","Tarte tatin","Macarons","Crème brûlée","Île flottante","Profiteroles","Pain au chocolat"],lebanon:["Kibbeh","Kafta","Kanafeh","Hummus","Rice pilaf","Fattoush","Manakish","Tabbouleh","Sfeeha","Fattoush","Labneh","Muhammara","Lahm bi ajin","Kaak","Chanklich","Mssabaha","Shawarma","Kebbe","Falafel","Halewit el jeben","Namoura","Maamoul","Foul mdammas","Balila","Kawarma","Fattouch"],thailand:["Pad kra pao moo","Tom kha gai","Khao Pad","Chicken pad Thai","Vegetable pad Thai","Moo satay","Tom yum goong","Khao niew mamuang","Kai yad sai","Khao soi","Pad see ew","Laab moo","Gaeng panang","Gai pad med ma muang","Som tam","Poh pia tod","Gaeng massaman","Pla kapung nueng manao","Tod mun pla","Gaeng ped","Gaeng garee","Gaeng keow wan","Moo ping","Durian","Sai ooah","Hoy tod","Kuay teow reua","Mu kratha","Kao ka moo","Yam nua"],greece:["Moussaka","Papoutsakia","Pastitsio","Souvlaki","Soutzoukakia","Stifado","Tomatokeftedes","Tzatziki","Kolokithokeftedes","Giouvetsi","Choriatiki","Kleftiko","Gemista","Fasolada","Bougatsa","Tiropita","Spanakopita","Feta Cheese with Honey","Horta","Tirokroketes","Briam","Saganaki","Gigantes","Dolmades","Fasolatha","Koulouri","Loukoumades","Gyros","Galaktoboureko","Baklava"],turkey:["Şiş kebap","Döner","Köfte","Pide","Kumpir","Meze","Mantı","Lahmacun","Menemen","Şiş kebap","İskender kebab","Corba","Kuzu tandir","Çiğ Köfte","Pilav","Yaprak sarma","Dolma","İmam bayıldı","Borek","Durum","Kumpir","Balik ekmek","Simit","Kunefe","Baklava","Lokum","Halva","Mozzaik pasta","Güllaç","Mercimek Köftesi","Haydari","Tursu suyu","Kahvalti","Kazan dibi","Hunkar begendi","Islak burgers","Salep","Yogurtlu kebab"],spain:["Tortilla de patatas","Fabada asturiana","Calçots","Boquerones al vinagre","Empanada gallega","Paella","Gazpacho","Gachas","Migas","Bocadillo de calamares","Pulpo a feira","Caldo gallego","Lentejas con chorizo","Cocido madrileño","Cachopo","Caracoles"],venezuela:["Pabellón criollo","Arepa","Mondongo","Empanadas","Quesillo","Chicha andina","Tequeños","Cachapa","Hallaca","Perico","Pasticho","Mandocas","Caraotas negras","Patacones","Dulce de leche","Pan de Jamón"],chile:["Humitas","Empanadas","Porotos con riendas","Completos","Manjar","Cordero al palo","Pastel de choclo","Mote con huesillos","Sopaipillas","Curanto"],argentina:["Milanesas","Empanadas","Pizza fugazeta","Asado","Choripan","Bondiola","Bife de chorizo"],colombia:["Bandeja paisa","Chuleta valluna","Sancocho trifásico","Empanada valluna","Salpicon de frutas","Pastel de garbanzo","Ajiaco","Arepas","Arroz de lisa","Sancocho","Pan de bono","Cuchuco","Oblea","Cazuela de mariscos","Pan de yuca","Bollo Limpio","Almojábana","Empanadas","Arroz con Coco","Sopa de mondongo","Cazuela de Mariscos","Arroz con Pollo","Arepa de Huevo","Mote de Queso"],ecuador:["Encebollado","Ceviche","Tigrillo","Bolon de verde","Llapingacho","Mote pillo","Locro de papa","Churrasco"],peru:["Ceviche","Arroz con pollo","Aji de gallina","Llunca de gallina"],"el salvador":["Pupusa","Sopa de patas","Rigua","Flor de izote con huevo","Gallo en chicha"],romania:["Sarmale","Mici","Pomana porcului","Ciorbă de fasole cu ciolan","Ciorbă de burtă","Ciorbă rădăuțeană","Plăcintă cu brânză","Ciorbă de potroace","Mămăligă cu brânză și smântână","Tochitură","Piftie","Iahnie de fasole","Slănină afumată","Cârnați afumați","Varză a la Cluj","Gulaș de cartofi cu afumătură","Cozonac de casă","Ciorbă ardelenească de porc","Mucenici moldovenești","Salată de boeuf","Dovleac copt","Papanași cu brânză de vacă și afine","Drob de miel","Pârjoale moldovenești","Zacuscă de vinete","Zacuscă de fasole","Turtă dulce","Clătitele cu gem","Clătitele cu brânza de vacă","Balmoș","Cozonac","Chiftele"]},O;(O=Object.keys(ba))==null||O.length;const V=50;function ka(c){const f=ma({min:1,max:10,fraction:0});return f===1||c===V?".":f===2?",":""}function Sa(c){return D(()=>{let f=$({capitalize:!0}),s=1;for(;s<V;){const l=$();let d="";if(s++,s>3&&(d=ka(s)),f+=` ${l}${d}`,d===".")break}return f},c)}export{Sa as H,ya as Z,wa as a};
//# sourceMappingURL=index-5e020d00.js.map
