var a={required:(u="\u6B64\u9879\u5FC5\u586B",e="blur")=>({required:!0,message:u,trigger:e}),length:(u=0,e=16,r="blur")=>({min:u,max:e,message:`\u957F\u5EA6\u8303\u56F4\u5728${u}-${e}`,trigger:r}),checkbox:(u=0)=>({required:!0,trigger:"change",message:`\u81F3\u5C11\u9009\u62E9${u+1}\u9879`,validator:(e,r)=>!(r.length<=0)}),date:(u="\u6B64\u9879\u5FC5\u9009",e="change")=>({required:!0,message:u,trigger:e,validator:(r,t)=>!!t})};export{a as v};
