"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[738],{6669:function(e,n,r){var t=r(4942),i=r(1413),o=r(5987),a=r(7630),c=r(8980),s=r(142),l=r(9293),u=r(184),d=["className"],m=(0,a.ZP)((function(e){var n=e.className,r=(0,o.Z)(e,d);return(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({TransitionComponent:c.Z,enterTouchDelay:0,leaveTouchDelay:5e3},r),{},{classes:{popper:n}}))}))((function(e){var n=e.theme;return(0,t.Z)({},"& .".concat(l.Z.tooltip),{backgroundColor:"#2a2a2a",color:"#f0f0f0",maxWidth:"20rem",fontFamily:"instagram-sans",fontSize:"1.2rem",padding:n.spacing(1.6,.8),"& .MuiTooltip-arrow":{color:"#2a2a2a"},textAlign:"center"})}));n.Z=m},8609:function(e,n,r){r.d(n,{Z:function(){return o}});r(2791);var t=r(1087),i=r(184);var o=function(e){return(0,i.jsxs)("div",{id:"filter-div",children:[(0,i.jsx)(t.rU,{to:"/design",className:"0"==e.tag?"selectedTag":"unSelectedTag",style:{cursor:"pointer"},children:"Design"}),(0,i.jsx)(t.rU,{to:"/develop",className:"1"==e.tag?"selectedTag":"unSelectedTag",style:{cursor:"pointer"},children:"Development"})]})}},1625:function(e,n,r){r.d(n,{Z:function(){return ie}});var t=r(5987),i=r(1413),o=r(7630),a=r(4554),c=r(3044),s=JSON.parse('{"b":[{"name":"2 years+ design","vertical":"end","angle":120,"x":"calc(-100% - max(2.4rem, 12vw))","y":"-4rem","description":"Currently designing at Blue Raven Solar, formerly at Instagram design","placement":"bottom"},{"name":"ar/vr design","description":"Hope to revolutionize the way people interact with the world with ar/vr design","reverse":true,"angle":-60,"x":"max(4.8rem, 7.2vw)","y":"16.5rem","placement":"top"},{"name":"7 years+ engineering","description":"Started studying computer science from 2015, and worked as an Android UX engineer at Tencent for 2.5 years","reverse":true,"vertical":"end","angle":-110,"x":"max(6.4rem, 12vw)","y":"-1.8rem","placement":"bottom"},{"name":"ui/ux design","angle":60,"x":"calc(-100% - max(6.4rem, 8vw))","y":"14.6rem","description":"Passionate about making the world more enjoyable and simple with ux/ui design","placement":"top"}]}'),l=r(4942),u=r(2847),d=r(4600),m=r(6669),p=r(184),f=["description","placement"],g=["x","y","vertical","reverse","angle"],h=(0,o.ZP)((function(e){var n=e.description,r=e.placement,o=(0,t.Z)(e,f);return(0,p.jsx)(m.Z,{title:n,placement:r,arrow:!0,children:(0,p.jsx)(d.E.div,(0,i.Z)({whileHover:{scale:1.1}},o))})}))((function(e){var n,r=e.theme;return n={backgroundColor:"#2a2a2a",borderRadius:"10rem",cursor:"default",fontSize:"0.8rem",fontWeight:400,color:"#ffffff",fontFamily:"instagram-sans",padding:r.spacing(.8,1.2),margin:r.spacing(0,.8)},(0,l.Z)(n,r.breakpoints.up("sm"),{fontSize:"1rem",padding:r.spacing(1,2),margin:r.spacing(0,1.5)}),(0,l.Z)(n,r.breakpoints.up("lg"),{fontSize:"1.2rem",margin:r.spacing(0,2)}),n})),v=(0,o.ZP)(a.Z,{shouldForwardProp:function(e){return"reverse"!==e&&"x"!==e&&"y"!==e}})((function(e){var n=e.theme,r=e.reverse,t=e.x,o=e.y;return(0,i.Z)((0,i.Z)({position:"absolute",display:"flex"},r&&{flexDirection:"row-reverse"}),{},{left:"50%",transform:"translate(".concat(t,", ").concat(o,")"),zIndex:n.zIndex.tooltip})})),x=(0,o.ZP)(u.Z,{shouldForwardProp:function(e){return"vertical"!==e&&"angle"!==e}})((function(e){var n=e.theme,r=e.vertical,t=e.angle;return(0,l.Z)({alignSelf:r,transform:"scale(1.15) rotateZ(".concat(t,"deg)"),fill:"#777"},n.breakpoints.up("lg"),{transform:"scale(1.3) rotateZ(".concat(t,"deg)")})}));function Z(e){var n=e.x,r=e.y,o=e.vertical,a=e.reverse,c=e.angle,s=(0,t.Z)(e,g);return(0,p.jsxs)(v,{reverse:a,x:n,y:r,children:[(0,p.jsx)(h,(0,i.Z)({},s)),(0,p.jsx)(x,{vertical:o,angle:c})]})}var y=r(885),b=r(7762),w=r(2791),j=r(890),S=r(2982),k=r(3366),P=r(7462),C=r(8182),D=r(4419),T=r(4036),z=r(3736),F=r(3031),A=r(2071),N=r(5878),W=r(1217);function H(e){return(0,W.Z)("MuiLink",e)}var M=(0,N.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),R=r(8529),L=r(2065),V={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},B=function(e){var n=e.theme,r=e.ownerState,t=function(e){return V[e]||e}(r.color),i=(0,R.DW)(n,"palette.".concat(t),!1)||r.color,o=(0,R.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&o?"rgba(".concat(o," / 0.4)"):(0,L.Fq)(i,.4)},E=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],I=(0,o.ZP)(j.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,T.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,P.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,P.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:B({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,l.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(M.focusVisible),{outline:"auto"}))})),U=w.forwardRef((function(e,n){var r=(0,z.Z)({props:e,name:"MuiLink"}),t=r.className,i=r.color,o=void 0===i?"primary":i,a=r.component,c=void 0===a?"a":a,s=r.onBlur,l=r.onFocus,u=r.TypographyClasses,d=r.underline,m=void 0===d?"always":d,f=r.variant,g=void 0===f?"inherit":f,h=r.sx,v=(0,k.Z)(r,E),x=(0,F.Z)(),Z=x.isFocusVisibleRef,b=x.onBlur,j=x.onFocus,N=x.ref,W=w.useState(!1),M=(0,y.Z)(W,2),R=M[0],L=M[1],B=(0,A.Z)(n,N),U=(0,P.Z)({},r,{color:o,component:c,focusVisible:R,underline:m,variant:g}),O=function(e){var n=e.classes,r=e.component,t=e.focusVisible,i=e.underline,o={root:["root","underline".concat((0,T.Z)(i)),"button"===r&&"button",t&&"focusVisible"]};return(0,D.Z)(o,H,n)}(U);return(0,p.jsx)(I,(0,P.Z)({color:o,className:(0,C.Z)(O.root,t),classes:u,component:c,onBlur:function(e){b(e),!1===Z.current&&L(!1),s&&s(e)},onFocus:function(e){j(e),!0===Z.current&&L(!0),l&&l(e)},ref:B,ownerState:U,variant:g,sx:[].concat((0,S.Z)(Object.keys(V).includes(o)?[]:[{color:o}]),(0,S.Z)(Array.isArray(h)?h:[h]))},v))})),O=["href"],q=function(e){return(0,p.jsx)("span",{style:{whiteSpace:"nowrap",textAlign:"center"},children:e.children})},J={heading1:(0,o.ZP)((function(e){return(0,p.jsx)(j.Z,(0,i.Z)({variant:"h1"},e))}))((function(e){e.theme;return{fontSize:"3rem",fontFamily:"instagram-sans",color:"#fff",fontWeight:600,letterSpacing:"0.1rem"}})),heading2:(0,o.ZP)((function(e){return(0,p.jsx)(U,(0,i.Z)({variant:"h2"},e))}))((function(e){e.theme;return{fontSize:"1.5rem",color:"#bbb",fontFamily:"instagram-sans",fontWeight:500}}))},K=function(e){var n,r=e.href,i=(0,t.Z)(e,O),o={hidden:{y:"200%",color:"inherit",transition:{ease:[.455,.03,.515,.955],duration:.85}},visible:{y:0,color:"inherit",transition:{ease:[.455,.03,.515,.955],duration:.75}}},a=i.text.split(" "),c=[],s=(0,b.Z)(a.entries());try{for(s.s();!(n=s.n()).done;){var l=(0,y.Z)(n.value,2)[1];c.push(l.split(""))}}catch(m){s.e(m)}finally{s.f()}c.map((function(e){return e.push("\xa0")}));var u=J[i.type];return(0,p.jsx)(u,{href:r,children:c.map((function(e,n){return(0,p.jsx)(q,{children:c[n].flat().map((function(e,n){return(0,p.jsx)("span",{style:{overflow:"hidden",display:"inline-block"},children:(0,p.jsx)(d.E.span,{style:{display:"inline-block"},variants:o,children:e})},n)}))},n)}))})},X=r(891),_=r(1682),G=["img"],Q=["img"],Y=["name"],$=(0,o.ZP)((function(e){return(0,p.jsx)(a.Z,(0,i.Z)({component:"section"},e))}))((function(e){e.theme;return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}})),ee=(0,o.ZP)((function(e){return(0,p.jsx)(a.Z,(0,i.Z)({component:"section"},e))}))((function(e){e.theme;return{display:"flex",flexDirection:"column",alignItems:"center"}})),ne=(0,o.ZP)((function(e){e.img;var n=(0,t.Z)(e,G);return(0,p.jsx)(d.E.div,{whileHover:{scale:1.1,rotateZ:-6},children:(0,p.jsx)(c.Z,(0,i.Z)({src:X,alt:"profile"},n))})}))((function(e){e.theme;return{width:"15rem",height:"15rem",position:"relative",boxShadow:"0 0 64px 0px hsl(0deg 0% 100% / 15%)"}})),re=(0,o.ZP)((function(e){return(0,p.jsx)(d.E.div,(0,i.Z)({initial:"hidden",animate:"visible",whileHover:{y:"-1.2rem"},variants:{visible:{transition:{staggerChildren:.025}}}},e))}))((function(e){var n=e.theme;return{marginTop:n.spacing(12),textAlign:"center",cursor:"default",padding:n.spacing(2,0,3)}})),te=(0,o.ZP)((function(e){e.img;var n=(0,t.Z)(e,Q);return(0,p.jsx)(c.Z,(0,i.Z)({src:_,alt:"coding"},n))}))((function(e){e.theme;return{width:"5rem",height:"5rem"}}));function ie(){return(0,p.jsx)($,{children:(0,p.jsxs)(ee,{children:[(0,p.jsx)(ne,{}),(0,p.jsxs)(re,{children:[(0,p.jsx)(K,{type:"heading1",text:"Hi, i'm Lingshuang Kong!"}),(0,p.jsx)(K,{type:"heading2",href:"mailto:klingshuang@gmail.com",text:"product designer & creative technologist"})]}),(0,p.jsx)(te,{}),s.b.map((function(e){var n=e.name,r=(0,t.Z)(e,Y);return(0,w.createElement)(Z,(0,i.Z)((0,i.Z)({},r),{},{key:n}),n)}))]})})}},2847:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),o=r(184),a=(0,i.default)((0,o.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");n.Z=a},4555:function(){},1682:function(e,n,r){e.exports=r.p+"static/media/down-arrow.eacd2ed628b2f2f77595.gif"},1987:function(e,n,r){e.exports=r.p+"static/media/instagram-half.ec85cb66424085a38802.png"},891:function(e,n,r){e.exports=r.p+"static/media/profile_img.b1cf45056330e06e89a0.png"}}]);
//# sourceMappingURL=738.fd5a5d72.chunk.js.map