(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2Fcx":function(d,v,a){d.exports={container:"container___1Rq3A"}},"2rV4":function(d,v,a){d.exports=a.p+"static/proLogo.95581efe.jpg"},bsDN:function(d,v,a){d.exports={menu:"menu___3fMWW",right:"right___2CMz5",action:"action___3ut1O",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79",dark:"dark___1zu9O"}},maEh:function(d,v,a){"use strict";a.r(v);var u=a("k1fw"),na=a("J+/v"),b=a("MoRW"),ea=a("+L6B"),C=a("2/Rp"),R=a("9W6o"),N=a("Hx5s"),O=a("q1tI"),D=a.n(O),g=a("uYtH"),h=a("9kvl"),H=a("HZnN"),oa=a("5Dmo"),M=a("3S7+"),L=a("Lyp1"),ra=a("T2oS"),z=a("W9HT"),sa=a("Telt"),A=a("Tckk"),F=a("fWQN"),B=a("mtLc"),G=a("yKVA"),S=a("879j"),ca=a("qVdP"),T=a("jsC+"),W=a("PpiC"),V=a("TSYQ"),J=a.n(V),K=a("2Fcx"),U=a.n(K),t=a("nKUr"),E=["overlayClassName"],Q=function(n){var e=n.overlayClassName,o=Object(W.a)(n,E);return Object(t.jsx)(T.a,Object(u.a)({overlayClassName:J()(U.a.container,e)},o))},la=Q,Y=a("bsDN"),l=a.n(Y),Z=function(c){Object(G.a)(e,c);var n=Object(S.a)(e);function e(){var o;Object(F.a)(this,e);for(var s=arguments.length,j=new Array(s),i=0;i<s;i++)j[i]=arguments[i];return o=n.call.apply(n,[this].concat(j)),o.onMenuClick=function(f){var p=f.key;if(p==="logout"){var x=o.props.dispatch;x&&x({type:"login/logout"});return}h.b.push("/account/".concat(p))},o}return Object(B.a)(e,[{key:"render",value:function(){var s={avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",name:"Jx Chen"};return s&&s.name?Object(t.jsx)("div",{children:Object(t.jsxs)("span",{className:"".concat(l.a.action," ").concat(l.a.account),children:[Object(t.jsx)(A.a,{size:"small",className:l.a.avatar,src:s.avatar,alt:"avatar"}),Object(t.jsx)("span",{className:"".concat(l.a.name," anticon"),children:s.name})]})}):Object(t.jsx)("span",{className:"".concat(l.a.action," ").concat(l.a.account),children:Object(t.jsx)(z.a,{size:"small",style:{marginLeft:8,marginRight:8}})})}}]),e}(D.a.Component),ia=Z,da={dev:"orange",test:"green",pre:"#87d068"},I=function(n){var e=n.theme,o=n.layout,s=l.a.right;return e==="dark"&&o==="top"&&(s="".concat(l.a.right,"  ").concat(l.a.dark)),Object(t.jsx)("div",{className:s,children:Object(t.jsx)(M.a,{title:"\u4F7F\u7528\u6587\u6863",children:Object(t.jsx)(g.a,{style:{color:"inherit",fontSize:"22px"},to:"/use",rel:"noopener noreferrer",className:l.a.action,children:Object(t.jsx)(L.a,{})})})})},P=Object(h.a)(function(c){var n=c.settings;return{theme:n.navTheme,layout:n.layout}})(I),X=a("GOef"),ua=a("2rV4"),va=Object(t.jsx)(b.a,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:Object(t.jsx)(C.a,{type:"primary",children:Object(t.jsx)(g.a,{to:"/user/login",children:"Go Login"})})}),$=function c(n){return n.map(function(e){var o=Object(u.a)(Object(u.a)({},e),{},{children:e.children?c(e.children):void 0});return H.a.check(e.authority,o,null)})},ha=Object(t.jsx)(R.a,{style:{background:"#60c3ffa6",fontWeight:"bold",float:"left"},copyright:"2019-".concat(new Date().getFullYear()," CantonKG@BNUZ All Rights Reserved")}),w=function(n){var e=n.dispatch,o=n.children,s=n.settings,j=n.location,i=j===void 0?{pathname:"/"}:j,f=Object(O.useRef)([]),p=function(r){e&&e({type:"global/changeLayoutCollapsed",payload:r})},x=Object(O.useMemo)(function(){return Object(X.a)(i.pathname||"/",f.current).pop()||{authority:void 0}},[i.pathname]),k=Object(h.d)(),q=k.formatMessage;return Object(t.jsx)(N.a,Object(u.a)(Object(u.a)(Object(u.a)({logo:Object(t.jsx)("img",{src:"https://image.gzknowledge.cn/logo_cn.png",style:{height:"50px"}}),formatMessage:q,contentStyle:{margin:"0",backgroundColor:"white"}},n),s),{},{disableContentMargin:!0,onCollapse:p,onMenuHeaderClick:function(){return h.b.push("/")},menuItemRender:function(r,y){return r.isUrl||!r.path||i.pathname===r.path?y:Object(t.jsx)(g.a,{to:r.path,children:y})},itemRender:function(r,y,_,aa){var ta=_.indexOf(r)===0;return ta?Object(t.jsx)(g.a,{to:aa.join("/"),children:r.breadcrumbName}):Object(t.jsx)("span",{children:r.breadcrumbName})},menuDataRender:$,rightContentRender:function(){return Object(t.jsx)(P,{})},postMenuData:function(r){return f.current=r||[],r||[]},children:o}))},ja=v.default=Object(h.a)(function(c){var n=c.global,e=c.settings;return{collapsed:n.collapsed,settings:e}})(w)}}]);
