(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+2zQ":function(s,_,t){s.exports={top:"top___f1wdJ",icon:"icon___1hQaG",right:"right___niqUk",engText:"engText___3Ir6N"}},GIcW:function(s,_,t){"use strict";t.r(_);var L=t("IzEo"),M=t("bx4M"),b=t("+L6B"),E=t("2/Rp"),x=t("+BJd"),P=t("mr32"),g=t("fWQN"),y=t("mtLc"),c=t("yKVA"),T=t("879j"),O=t("q1tI"),r=t.n(O),o=t("vD/T"),K=t.n(o),W=t("LsP7"),j=t("yyWI"),a=t("7DBZ"),d=t.n(a),B=t("lP+0"),u=t.t("lP+0",1),e=t("nKUr"),f=t.n(e),v=function(C){Object(c.a)(m,C);var R=Object(T.a)(m);function m(){var n;Object(g.a)(this,m);for(var i=arguments.length,A=new Array(i),D=0;D<i;D++)A[D]=arguments[D];return n=R.call.apply(R,[this].concat(A)),n.randomPosition=function(){return{longitude:100+Math.random()*20,latitude:30+Math.random()*20}},n.randomMarker=function(l){return Array(l).fill(!0).map(function(p,I){return{position:n.randomPosition()}})},n.markersEvents={created:function(p){console.log("All Markers Instance Are Below"),console.log(p)},click:function(p,I){var h=I.getExtData(),U=h.position.id,w={longitude:h.position.longitude,latitude:h.position.latitude},V=h.position;n.setState({index:U,IP:w,info:V}),console.log(1),n.showWindow(0),n.showWindow(1)},dragend:function(p,I){}},n.click=function(l){n.props.history.push({pathname:"/welcome",query:{dotData:l}})},n.state={markers:B,center:[108.939645,34.343207],useCluster:!0,curVisibleWindow:0,IP:null,index:null,info:{id:null,dynasty:null,hometown:null,longitude:null,latitude:null,address:null}},n}return Object(y.a)(m,[{key:"showWindow",value:function(i){this.setState({curVisibleWindow:i})}},{key:"renderMarkerLayout",value:function(i){return Object(e.jsx)(P.a,{style:{padding:10,fontSize:15,borderColor:"black",borderWidth:"medium",borderRadius:15},icon:Object(e.jsx)(j.a,{}),children:i.position.id})}},{key:"render",value:function(){var i=this;return console.log(this.state.markers),Object(e.jsx)("div",{children:Object(e.jsx)("div",{style:{width:"100vw",height:"93vh"},children:Object(e.jsxs)(a.Map,{plugins:["OverView","ControlBar"],center:this.state.center,zoom:6,resizeEnable:!0,rotateEnable:!0,children:[Object(e.jsx)(a.Markers,{markers:this.state.markers,useCluster:this.state.useCluster,events:this.markersEvents,render:this.renderMarkerLayout}),Object(e.jsx)(a.InfoWindow,{style:{opacity:.5},position:this.state.IP,visible:this.state.curVisibleWindow,offset:[0,-30],isCustom:!0,autoMove:!0,closeWhenClickMap:!0,children:Object(e.jsxs)(M.a,{title:this.state.index,style:{width:300},children:[this.state.info.dynasty?Object(e.jsxs)("p",{children:["\u671D\u4EE3\uFF1A",this.state.info.dynasty]}):null,this.state.info.hometown?Object(e.jsxs)("p",{children:["\u5BB6\u4E61\uFF1A",this.state.info.hometown]}):null,this.state.info.address?Object(e.jsxs)("p",{children:["\u5730\u70B9\uFF1A",this.state.info.address]}):null,Object(e.jsx)(E.a,{type:"primary",ghost:!0,onClick:function(){return i.click(i.state.index)},children:"\u67E5\u770B\u8BE6\u60C5"})]})})]})})})}}]),m}(O.Component);_.default=v},LsP7:function(s,_,t){"use strict";var L=t("14J3"),M=t("BMrR"),b=t("jCWc"),E=t("kPKH"),x=t("fWQN"),P=t("mtLc"),g=t("yKVA"),y=t("879j"),c=t("q1tI"),T=t.n(c),O=t("+2zQ"),r=t.n(O),o=t("nKUr"),K=t.n(o),W=function(j){Object(g.a)(d,j);var a=Object(y.a)(d);function d(){return Object(x.a)(this,d),a.apply(this,arguments)}return Object(P.a)(d,[{key:"render",value:function(){var u=this.props,e=u.logo,f=u.text,v=u.engText,C=u.searchInput;return Object(o.jsxs)(M.a,{className:r.a.top,children:[Object(o.jsx)(E.a,{span:10,className:r.a.icon,children:e}),Object(o.jsxs)(E.a,{span:14,className:r.a.right,children:[Object(o.jsx)("p",{children:f}),Object(o.jsx)("p",{className:r.a.engText,children:v})]}),C]})}}]),d}(c.PureComponent);_.a=W},"lP+0":function(s){s.exports=JSON.parse('[{"position":{"id":"\u5316\u5EA6\u5BFA\u9095\u7985\u5E08\u820D\u5229\u5854\u94ED","address":"\u6D1B\u9633\u8D50\u4E66\u9601","longitude":112.453895,"latitude":34.619702}},{"position":{"id":"\u592A\u5BA4\u2EC4\u9619\u94ED","address":"\u6CB3\u5357\u767B\u5C01\u5D69\u2F2D\u592A\u5BA4\u2F2D\u4E0B\u4E2D\u5CB3\u5E99","longitude":113.043029,"latitude":34.467534}},{"position":{"id":"\u865E\u606D\u516C\u6E29\u5F66\u535A\u7891","address":"\u91B4\u6CC9\u53BF\u2EC4\u662D\u9675","longitude":108.490609,"latitude":34.623144}},{"position":{"id":"\u9053\u56E0\u6CD5\u5E08\u7891","address":"\u2ED3\u5B89\u6000\u5FB7\u574A\u6167\u2F47\u5BFA","longitude":108.888873,"latitude":34.247148}},{"position":{"id":"\u4E89\u5EA7\u4F4D\u5E16","address":"\u957F\u5B89","longitude":108.939645,"latitude":34.343207}},{"position":{"id":"\u2EF0\u85CF\u5BFA\u7891","address":"\u6CB3\u5317\u6B63\u5B9A\u2EF0\u5174\u5BFA","longitude":114.58255,"latitude":38.144315}},{"position":{"id":"\u738B\u5C45\u2F20\u7816\u5854\u94ED","address":"\u9655\u2EC4\u2EC4\u5B89\u7EC8\u5357\u2F2D\u6969\u6893\u2F95\u4E4B\u767E\u5854\u5BFA","longitude":108.931609,"latitude":34.034421}},{"position":{"id":"\u793C\u5668\u7891\u5E76\u9634","address":"\u2F2D\u4E1C\u66F2\u2FA9\u5B54\u5E99","longitude":116.994201,"latitude":35.608197}},{"position":{"id":"\u4E5D\u6210\u5BAB\u91B4\u6CC9\u94ED","address":"\u9655\u2EC4\u9E9F\u6E38","longitude":107.795717,"latitude":34.676449}},{"position":{"id":"\u5F20\u4ECE\u7533\u4E66\u674E\u2F5E\u9756\u7891","address":"\u6C5F\u82CF\u53E5\u5BB9\u2F5F\u6668\u89C2","longitude":119.168693,"latitude":31.945732}},{"position":{"id":"\u7687\u752B\u8BDE\u7891","address":"\u2ED3\u5B89\u9E23\u728A\u9547\u7687\u752B\u5DDD","longitude":109.109952,"latitude":34.125048}},{"position":{"id":"\u7AE0\u5409\u2F7C\u5893\u5FD7","address":"\u5B89\u5FBD\u2F46\u4E3A\u53BF","longitude":117.969307,"latitude":31.304031}},{"position":{"id":"\u96C6\u738B\u7FB2\u4E4B\u4E66\u4E09\u85CF\u5723\u6559\u5E8F","address":"\u2ED3\u5B89\u4FEE\u5FB7\u574A\u5F18\u798F\u5BFA","longitude":108.974987,"latitude":34.105147}},{"position":{"id":"\u5D14\u656C\u9095\u5893\u8A8C","address":"\u6CB3\u5317\u5B89\u5E73","longitude":115.518918,"latitude":38.234769}},{"position":{"id":"\u4E2D\u5CB3\u5D69\u2FBC\u7075\u5E99\u7891\u5E76\u989D","address":"\u6CB3\u5357\u767B\u5C01\u5D69\u2F2D\u4E2D\u5CB3\u5E99","longitude":113.074125,"latitude":34.457862}},{"position":{"id":"\u7617\u9E64\u94ED","address":"\u6C5F\u82CF\u9547\u6C5F\u7126\u2F2D\u2EC4\u9E93\u5D16\u58C1","longitude":119.424441,"latitude":32.188141}},{"position":{"id":"\u8D75\u5B5F\u982B","dynasty":"\u5B8B","hometown":"\u5434\u5174\uFF08\u4ECA\u6D59\u6C5F\u7701\u6E56\u5DDE\u5E02\uFF09","longitude":120.086881,"latitude":30.894178}},{"position":{"id":"\u7C73\u82BE","dynasty":"\u5B8B","hometown":"\u5C71\u897F\u592A\u539F","longitude":112.549656,"latitude":37.870451}},{"position":{"id":"\u9EC4\u5EAD\u575A","dynasty":"\u5B8B","hometown":"\u6D2A\u5DDE\u5206\u5B81(\u4ECA\u6C5F\u897F\u4FEE\u6C34)","longitude":114.546536,"latitude":29.026166}},{"position":{"id":"\u674E\u5107","dynasty":"\u5510","hometown":"\u4EAC\u5146\u5E9C\u957F\u5B89\u53BF\uFF08\u4ECA\u9655\u897F\u7701\u897F\u5B89\u5E02\uFF09","longitude":108.939645,"latitude":34.343207}},{"position":{"id":"\u674E\u9095","dynasty":"\u5510","hometown":"\u9102\u5DDE\u6C5F\u590F\uFF08\u4ECA\u6E56\u5317\u6B66\u6C49\u5E02\u6C5F\u590F\u533A\uFF09","longitude":114.320884,"latitude":30.37558}},{"position":{"id":"\u674E\u4E16\u6C11","dynasty":"\u5510","hometown":"\u6B66\u529F\u4E4B\u522B\u9986\uFF08\u4ECA\u9655\u897F\u6B66\u529F\uFF09","longitude":108.200275,"latitude":34.261026}},{"position":{"id":"\u8BF8\u9042\u826F","dynasty":"\u5510","hometown":"\u676D\u5DDE\u94B1\u5510\uFF08\u4ECA\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\uFF09","longitude":120.210792,"latitude":30.246026}},{"position":{"id":"\u5C91\u6587\u672C","dynasty":"\u5510","hometown":"\u9093\u5DDE\u68D8\u9633\u53BF\uFF08\u4ECA\u6CB3\u5357\u7701\u65B0\u91CE\u53BF\uFF09","longitude":112.3601,"latitude":32.521282}},{"position":{"id":"\u4E8E\u5FD7\u5B81","dynasty":"\u5510","hometown":"\u96CD\u5DDE\u9AD8\u9675\uFF08\u4ECA\u9655\u897F\u7701\u897F\u5B89\u5E02\u9AD8\u9675\u533A\uFF09","longitude":109.088269,"latitude":34.53502}},{"position":{"id":"\u5BC7\u8C26\u4E4B","dynasty":"\u664B","hometown":"\u4E0A\u8C37\u90E1\u660C\u5E73\u53BF\uFF08\u4ECA\u5317\u4EAC\u5E02\u660C\u5E73\u533A\uFF09","longitude":116.231034,"latitude":40.220952}},{"position":{"id":"\u67F3\u8BC6","dynasty":"\u5510","hometown":"\u8944\u9633\u8944\u5DDE\u5C71\u5357\u9053","longitude":112.305035,"latitude":32.151607}},{"position":{"id":"\u674E\u9633\u51B0","dynasty":"\u5510","hometown":"\u8D75\u90E1(\u4ECA\u6CB3\u5317\u8D75\u53BF)","longitude":114.775914,"latitude":37.756935}},{"position":{"id":"\u865E\u4E16\u5357","dynasty":"\u5357\u5317\u671D","hometown":"\u8D8A\u5DDE\u4F59\u59DA\uFF08\u4ECA\u6D59\u6C5F\u4F59\u59DA\uFF09","longitude":121.550711,"latitude":29.803527}},{"position":{"id":"\u76DB\u5F6A","dynasty":"\u5143","hometown":"\u4E34\u5B89","longitude":119.724457,"latitude":30.234375}},{"position":{"id":"\u989C\u771F\u537F","dynasty":"\u5510","hometown":"\u4EAC\u5146\u4E07\u5E74\uFF08\u4ECA\u9655\u897F\u897F\u5B89\uFF09","longitude":108.939645,"latitude":34.343207}},{"position":{"id":"\u738B\u732E\u4E4B","dynasty":"\u664B","hometown":"\u7405\u90AA\u4E34\u6C82\uFF08\u4ECA\u5C5E\u5C71\u4E1C\uFF09","longitude":118.356464,"latitude":35.103771}},{"position":{"id":"\u674E\u767E\u836F","dynasty":"\u5357\u5317\u671D","hometown":"\u5B9A\u5DDE\u5B89\u5E73\uFF08\u4ECA\u5C5E\u6CB3\u5317\uFF09","longitude":115.518918,"latitude":38.234769}},{"position":{"id":"\u9B4F\u5F81","dynasty":"\u5510","hometown":"\u6CB3\u5317\u5DE8\u9E7F","longitude":115.037884,"latitude":37.221293}},{"position":{"id":"\u5468\u7825","dynasty":"\u660E","hometown":"\u59D1\u82CF\uFF08\u4ECA\u6C5F\u82CF\u82CF\u5DDE\uFF09","longitude":120.585294,"latitude":31.299758}},{"position":{"id":"\u6B27\u9633\u8BE2","dynasty":"\u5510","hometown":"\u6F6D\u5DDE\u4E34\u6E58\uFF08\u4ECA\u6E56\u5357\u957F\u6C99\uFF09","longitude":112.938882,"latitude":28.228304}},{"position":{"id":"\u6B27\u9633\u901A","dynasty":"\u5510","hometown":"\u5510\u6F6D\u5DDE\u4E34\u6E58(\u6E56\u5357\u957F\u6C99)","longitude":112.938882,"latitude":28.228304}},{"position":{"id":"\u738B\u7FB2\u4E4B","dynasty":"\u664B","hometown":"\u7405\u90AA\u4E34\u6C82\uFF08\u4ECA\u5C5E\u5C71\u4E1C\uFF09","longitude":118.356464,"latitude":35.103771}},{"position":{"id":"\u5F20\u4ECE\u7533","dynasty":"\u5510","hometown":"\u5434\u90E1(\u6CBB\u4ECA\u6C5F\u82CF\u82CF\u5DDE)","longitude":120.585294,"latitude":31.299758}}]')},"vD/T":function(s,_,t){s.exports={indexSearch:"indexSearch___2HoZb",input:"input___1xHq3",button:"button___3AZDM",search:"search___1oUXM",jsonBoard:"jsonBoard___2naa8",timeLine:"timeLine___3ddno",time:"time___1wjVN",icon:"icon___1rOF8",detail:"detail___Ttavq",cardContainer:"cardContainer___1TF_k",outCard:"outCard___3Knx6",text:"text___1-cdY",substanceDiv:"substanceDiv___VlWi-",card:"card___1X9jm",bookImage:"bookImage___100uY"}}}]);