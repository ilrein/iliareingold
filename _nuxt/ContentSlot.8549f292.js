import{d as g,ag as c,I as h,M as p,ak as y,ab as w}from"./entry.a37d9014.js";const C=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:u}=w(),{between:r,default:l}=c(),i=h(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:r,parent:u}},render({use:n,unwrap:u,fallbackSlot:r,between:l,tags:i,parent:e}){var a;try{let o=n;if(typeof n=="string"&&(o=(e==null?void 0:e.slots[n])||((a=e==null?void 0:e.parent)==null?void 0:a.slots[n]),console.warn(`Please set :use="$slots.${n}" in <ContentSlot> component to enable reactivity`)),!o)return r?r():p("div");if(!u)return[o()];const{flatUnwrap:d}=y(),f=d(o(),i);return l?f.flatMap((t,s)=>s===0?[t]:[l(),t]):f.reduce((t,s)=>(typeof s.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=s.children:t.push(s.children):t.push(s),t),[])}catch{return p("div")}}}),m=C;export{m as default};
