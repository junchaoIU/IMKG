(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9cQA":function(E,m,n){"use strict";n.r(m),n.d(m,"default",function(){return ce});var x=n("fWQN"),v=n("mtLc"),F=n("yKVA"),C=n("879j"),Q=n("q1tI"),p=n.n(Q),A=n("4zCG"),I=n("TMZx"),K=n.n(I),ne=n("+L6B"),D=n("2/Rp"),t=n("k1fw"),g=n("0Owb"),T=n("8Skl"),f=n("0Xwh"),b=n("6y1p"),N=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,S=function(l,r){var i=l.name.indexOf("title")===0?"h1":"div";i=l.href?"a":i;var a=typeof l.children=="string"&&l.children.match(N)?p.a.createElement("img",{src:l.children,alt:"img"}):l.children;return l.name.indexOf("button")===0&&typeof l.children=="object"&&(a=p.a.createElement(D.a,Object(t.a)({},l.children))),p.a.createElement(i,Object(t.a)({key:r.toString()},l),a)},e=n("nKUr"),U=function(j){Object(F.a)(r,j);var l=Object(C.a)(r);function r(){return Object(x.a)(this,r),l.apply(this,arguments)}return Object(v.a)(r,[{key:"render",value:function(){var a=Object(g.a)({},this.props),c=a.dataSource;return delete a.dataSource,delete a.isMobile,Object(e.jsxs)("div",Object(t.a)(Object(t.a)(Object(t.a)({},a),c.wrapper),{},{children:[Object(e.jsxs)(f.a,Object(t.a)(Object(t.a)({type:["bottom","top"],delay:200},c.textWrapper),{},{children:[Object(e.jsx)("div",Object(t.a)(Object(t.a)({style:{textAlign:"center"}},c.title),{},{children:typeof c.title.children=="string"&&c.title.children.match(N)?Object(e.jsx)("img",{src:c.title.children,width:"100%",alt:"img"}):c.title.children}),"title"),Object(e.jsx)("div",Object(t.a)(Object(t.a)({},c.content),{},{children:c.content.children}),"content"),Object(e.jsx)("br",{}),Object(e.jsx)(D.a,Object(t.a)(Object(t.a)({ghost:!0},c.button),{},{children:c.button.children}),"button")]}),"QueueAnim"),Object(e.jsx)(b.a,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",children:Object(e.jsx)(T.a,{})},"icon")]}))}}]),r}(p.a.PureComponent),X=U,ae=n("14J3"),k=n("BMrR"),re=n("jCWc"),M=n("kPKH"),J=n("bqU7"),W=n.n(J),Z=function(j){Object(F.a)(r,j);var l=Object(C.a)(r);function r(){var i;Object(x.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return i=l.call.apply(l,[this].concat(c)),i.getDelay=function(h,u){return h%u*100+Math.floor(h/u)*100+u*100},i}return Object(v.a)(r,[{key:"render",value:function(){var a=this,c=Object(g.a)({},this.props),s=c.dataSource,h=c.isMobile;delete c.dataSource,delete c.isMobile;var u=0,y=s.block.children.map(function(o,O){var d=o.children,B=h?O*50:a.getDelay(O,24/o.md),L={opacity:0,type:"from",ease:"easeOutQuad",delay:B},H=Object(t.a)(Object(t.a)({},L),{},{x:"+=10",delay:B+100});return u+=o.md,u=u>24?0:u,Object(e.jsxs)(b.a,Object(t.a)(Object(t.a)({component:M.a,animation:L},o),{},{componentProps:{md:o.md,xs:o.xs},className:u?o.className:"".concat(o.className||""," clear-both").trim(),children:[Object(e.jsx)(b.a,Object(t.a)(Object(t.a)({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"}},d.icon),{},{children:Object(e.jsx)("img",{src:d.icon.children,width:"100%",alt:"img"})}),"img"),Object(e.jsxs)("div",Object(t.a)(Object(t.a)({},d.textWrapper),{},{children:[Object(e.jsx)(b.a,Object(t.a)(Object(t.a)({animation:H,component:"h2"},d.title),{},{children:d.title.children}),"h2"),Object(e.jsx)(b.a,Object(t.a)(Object(t.a)({animation:Object(t.a)(Object(t.a)({},H),{},{delay:B+200}),component:"div"},d.content),{},{children:d.content.children}),"p")]}))]}),o.name)});return Object(e.jsx)("div",Object(t.a)(Object(t.a)(Object(t.a)({},c),s.wrapper),{},{children:Object(e.jsxs)("div",Object(t.a)(Object(t.a)({},s.page),{},{children:[Object(e.jsx)("div",Object(t.a)(Object(t.a)({},s.titleWrapper),{},{children:s.titleWrapper.children.map(S)})),Object(e.jsx)(W.a,Object(t.a)(Object(t.a)({},s.OverPack),{},{children:Object(e.jsx)(f.a,{type:"bottom",children:Object(e.jsx)(k.a,Object(t.a)(Object(t.a)({},s.block),{},{children:y}),"row")},"u")}))]}))}))}}]),r}(p.a.PureComponent),G=Z,V=n("PpiC"),Y=["title","childWrapper"],w=function(j){Object(F.a)(r,j);var l=Object(C.a)(r);function r(){var i;Object(x.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return i=l.call.apply(l,[this].concat(c)),i.getLiChildren=function(h){return h.map(function(u,y){var o=u.title,O=u.childWrapper,d=Object(V.a)(u,Y);return Object(e.jsxs)(M.a,Object(t.a)(Object(t.a)({},d),{},{title:null,content:null,children:[Object(e.jsx)("h2",Object(t.a)(Object(t.a)({},o),{},{children:typeof o.children=="string"&&o.children.match(N)?Object(e.jsx)("img",{src:o.children,width:"100%",alt:"img"}):o.children})),Object(e.jsx)("div",Object(t.a)(Object(t.a)({},O),{},{children:O.children.map(S)}))]}),y.toString())})},i}return Object(v.a)(r,[{key:"render",value:function(){var a=Object(g.a)({},this.props),c=a.dataSource;delete a.dataSource,delete a.isMobile;var s=this.getLiChildren(c.block.children);return Object(e.jsx)("div",Object(t.a)(Object(t.a)(Object(t.a)({},a),c.wrapper),{},{children:Object(e.jsxs)(W.a,Object(t.a)(Object(t.a)({},c.OverPack),{},{children:[Object(e.jsx)(f.a,Object(t.a)(Object(t.a)({type:"bottom",leaveReverse:!0,component:k.a},c.block),{},{children:s}),"ul"),Object(e.jsx)(b.a,Object(t.a)(Object(t.a)({animation:{y:"+=30",opacity:0,type:"from"}},c.copyrightWrapper),{},{children:Object(e.jsx)("div",Object(t.a)(Object(t.a)({},c.copyrightPage),{},{children:Object(e.jsx)("div",Object(t.a)(Object(t.a)({},c.copyright),{},{children:c.copyright.children}))}))}),"copyright")]}))}))}}]),r}(p.a.Component);w.defaultProps={className:"footer1"};var $=w,le=n("M3gX"),q={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:"https://image.gzknowledge.cn/logo_cn.png"},content:{className:"banner0-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u4EE5AI\u591A\u6A21\u6001\u77E5\u8BC6\u56FE\u8C31\u4F5C\u4E3A\u6838\u5FC3\u5F15\u64CE\uFF0C\u5BF9\u7891\u5E16\u53CA\u7891\u5E16\u540D\u5BB6\u77E5\u8BC6\u8FDB\u884C\u6DF1\u5C42\u5F00\u53D1\uFF0C\u901A\u8FC7\u9AD8\u5EA6\u77E5\u8BC6\u6620\u5C04\u3001\u5173\u8054\u5316\u3001\u65F6\u7A7A\u5316\uFF0C\u8FDB\u884C\u5386\u53F2\u6587\u660E\u7684\u89C1\u8BC1 \u2014\u2014 \u7891\u5E16 \u7684\u6C89\u6D78\u5F0F\u63A2\u7D22\u4F53\u9A8C"})})},button:{className:"banner0-button l5rm9op8bou-editor_css",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u5F00\u59CB\u63A2\u7D22"})}),href:"#/welcome"}},_={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u201C\u7891\u5E16\u8BB0\u5FC6\u201D \u63D0\u4F9B\u4E30\u5BCC\u7684\u77E5\u8BC6\u670D\u52A1"})})})})}),className:"title-h1"},{name:"content",className:"title-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u57FA\u4E8EAI\u591A\u6A21\u6001\u77E5\u8BC6\u56FE\u8C31\u5F15\u64CE"})})}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u77E5\u8BC6\u68C0\u7D22"})})},content:{className:"content3-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u77E5\u8BC6\u56FE\u8C31\u5E26\u4F60\u8D70\u8FDB\u7891\u5E16\u7684\u5BB6\u65CF\u4E16\u4EE3"})})}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u5355\u5B57\u68C0\u7D22"})})})})},content:{className:"content3-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u89C1\u5B57\u5982\u9762\uFF0C\u63A2\u7D22\u6587\u5B57\u7684\u4E07\u79CD\u98CE\u60C5"})})}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u65F6\u7A7A\u63A2\u7D22"})})})},content:{className:"content3-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u57FA\u4E8E\u53EF\u89C6\u5316\u5730\u56FE\u7684\u7891\u5E16\u6C89\u6D78\u5F0F\u63A2\u7D22\u4F53\u9A8C"})})}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u65F6\u7A7A\u68C0\u7D22"})})})})},content:{className:"content3-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u63A2\u7D22\u7891\u5E16\u7684\u6F2B\u957F\u5C81\u6708\u548C\u65F6\u7A7A\u5173\u8054"})})})})}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u65F6\u7A7A\u6F14\u5316"})})})})},content:{className:"content3-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"ArcGIS\uFF0C\u56DE\u987E\u7891\u5E16\u7684\u4E00\u751F\u8E2A\u8FF9"})})}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u77E5\u8BC6\u95EE\u7B54"})})},content:{className:"content3-content",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u7891\u5E16\u5C0F\u767E\u79D1\uFF0C\u95EE\u4F60\u6240\u95EE\uFF0C\u7686\u6709\u56DE\u97F3"})})}}}]}},ee={wrapper:{className:"home-page-wrapper footer1-wrapper"},OverPack:{className:"footer1",playScale:.2},block:{className:"home-page",gutter:0,children:[{name:"block0",xs:24,md:6,className:"block",title:{className:"logo",children:"https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg"},childWrapper:{className:"slogan",children:[{name:"content0",children:Object(e.jsxs)("span",{children:[Object(e.jsx)("p",{children:"\u7891\uFF0C\u7AD6\u77F3\u4E5F\u3002"}),Object(e.jsx)("p",{children:"\u5E16\uFF0C\u4EE5\u5E1B\u4F5C\u4E66\uFF0C\u4E66\u4E8E\u5E1B\u8005\u66F0\u5E16\u3002"})]})}]}},{name:"block1",xs:24,md:6,className:"block",title:{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u5E73\u53F0"})})},childWrapper:{children:[{name:"link0",href:"#",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u5E73\u53F0\u66F4\u65B0\u8BB0\u5F55"})})},{name:"link1",href:"https://library.sh.cn/#/index",children:"API\u6587\u6863"},{name:"link3",href:"#",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u4F7F\u7528\u8BF4\u660E"})})}]}},{name:"block2",xs:24,md:6,className:"block",title:{children:"\u5173\u4E8E"},childWrapper:{children:[{href:"#",name:"link0",children:"FAQ"},{href:"#",name:"link1",children:"\u8054\u7CFB\u6211\u4EEC"}]}},{name:"block3",xs:24,md:6,className:"block",title:{children:"\u8D44\u6E90"},childWrapper:{children:[{href:"https://library.sh.cn/#/index",name:"link0",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u4E0A\u6D77\u56FE\u4E66\u9986"})})}),target:"_blank"},{href:"https://projects.iq.harvard.edu/chinesecbdb",name:"link1",children:Object(e.jsx)("span",{children:Object(e.jsx)("p",{children:"\u4E2D\u570B\u6B77\u4EE3\u4EBA\u7269\u50B3\u8A18\u8CC7\u6599\u5EAB\uFF08CBDB\uFF09"})}),target:"_blank"}]}}]},copyrightWrapper:{className:"copyright-wrapper"},copyrightPage:{className:"home-page"},copyright:{className:"copyright",children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:Object(e.jsx)("span",{children:"\xA92022 by \u7891\u5E16\u8BB0\u5FC6\xA0All Rights Reserved"})})})})}},se=n("lRYq"),P;Object(A.enquireScreen)(function(j){P=j});var te=typeof window!="undefined"?window:{},R=te.location,z=R===void 0?{}:R,ce=function(j){Object(F.a)(r,j);var l=Object(C.a)(r);function r(i){var a;return Object(x.a)(this,r),a=l.call(this,i),a.state={isMobile:P,show:!z.port},a}return Object(v.a)(r,[{key:"componentDidMount",value:function(){var a=this;Object(A.enquireScreen)(function(c){a.setState({isMobile:!!c})}),z.port&&setTimeout(function(){a.setState({show:!0}),K.a.init({location:["Banner0_0","Content3_0","Footer1_0"]})},500)}},{key:"render",value:function(){var a=this,c=[Object(e.jsx)(X,{id:"Banner0_0",dataSource:q,isMobile:this.state.isMobile},"Banner0_0"),Object(e.jsx)(G,{id:"Content3_0",dataSource:_,isMobile:this.state.isMobile},"Content3_0"),Object(e.jsx)($,{id:"Footer1_0",dataSource:ee,isMobile:this.state.isMobile},"Footer1_0")];return Object(e.jsx)("div",{className:"templates-wrapper",ref:function(h){a.dom=h},children:this.state.show&&c})}}]),r}(p.a.Component)},M3gX:function(E,m,n){E.exports=n.p+"static/logo_en.fffab04a.png"},lRYq:function(E,m,n){}}]);