(function(e){function t(t){for(var o,r,l=t[0],i=t[1],c=t[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},s={app:0},n=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0aaa":function(e,t,a){"use strict";a("c628")},"0f81":function(e,t,a){},"2a8f":function(e,t,a){e.exports=a.p+"img/favicon.a740f127.jpg"},"2e23":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("0fae");var o=a("9e2f"),s=a.n(o),n=a("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],i={name:"App",components:{}},c=i,u=(a("a010"),a("2877")),d=Object(u["a"])(c,r,l,!1,null,null,null),m=d.exports,p=a("8c4f"),h=function(){var e=this,t=e._self._c;return t("div",[t("el-container",{staticClass:"aside_contain"},[t("el-aside",{attrs:{width:""}},[t("common-aside")],1),t("el-container",{staticClass:"main_contain_r"},[t("el-header",[t("common-header")],1),t("el-main",[t("common-tags",{staticStyle:{"margin-bottom":"10px"}}),t("router-view")],1)],1)],1)],1)},f=[],b=function(){var e=this,t=e._self._c;return t("div",[t("el-menu",{staticClass:"el-menu-vertical-demo aside_box",attrs:{"default-active":"null",mode:"vertical",collapse:e.isCollapse(),"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","collapse-transition":!1},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",{staticClass:"aside_title"},[e._v(" "+e._s(e.isTitleMini()))]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:"el-icon-"+a.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.hasChildren,(function(a){return t("el-submenu",{key:a.name,attrs:{index:a.label}},[t("template",{slot:"title"},[t("i",{class:"el-icon-"+a.icon}),t("span",[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.name},[t("el-menu-item",{attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)})),t("el-menu-item",{attrs:{index:"5",disabled:""}},[t("i",{staticClass:"el-icon-document"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("禁止/无权限")])])],2)],1)},g=[],v=(a("14d9"),{data(){return{menuData:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"MallManage/MallManage"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"UserManage/UserManage"},{label:"其他",icon:"location",children:[{path:"/PageOne",name:"PageOne",label:"页面1",icon:"setting",url:"Other/PageOne"},{path:"/PageTwo",name:"PageTwo",label:"页面2",icon:"setting",url:"Other/PageTwo"}]}]}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){var t=this.$route.path,a=e.path;t===a||"/home"==t&&"/"==a||(console.log("aside路由跳转数据",JSON.stringify(e,null,2)),this.$router.push(a)),this.$store.commit("upBreadcrumb",e)},isCollapse(){return this.$store.state.tab.isCollapse},isTitleMini(){return this.isCollapse()?"系统":"换料管理系统"}},computed:{noChildren(){return this.menuData.filter((function(e){return!e.children}))},hasChildren(){return this.menuData.filter(e=>e.children)}}}),y=v,_=(a("c4c1"),Object(u["a"])(y,b,g,!1,null,"361756c8",null)),x=_.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_contain"},[t("div",{staticClass:"header_contain_l"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.btnClickAside}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(a,o){return t("el-breadcrumb-item",{key:a.name,class:{actived:o==e.current},attrs:{to:{path:a.path}},nativeOn:{click:function(t){return e.addClass(o)}}},[e._v(e._s(a.label))])})),1)],1),t("div",{staticClass:"header_contain_r"},[t("el-dropdown",[t("span",[t("img",{attrs:{src:"https://github.com/favicon.ico",alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",[e._v("退出")])],1)],1)],1)])},k=[],C=a("2f62"),D={data(){return{current:0}},methods:{btnClickAside(){this.$store.commit("collspseMenu")},handleBtnClick(e){console.log(e)},addClass:function(e){this.current=e,console.log(this.current)}},computed:{...Object(C["c"])({tags:e=>e.tab.tabBreadcrumb})},mounted(){console.log("this.tags=====",this.tags)}},O=D,B=(a("0aaa"),Object(u["a"])(O,w,k,!1,null,"7e54e5f6",null)),$=B.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tagsList"},e._l(e.tagsList,(function(a,o){return t("el-tag",{key:a.name,attrs:{closable:"home"!==a.name,effect:e.$route.name==a.name?"dark":"light"},on:{click:function(t){return e.btnOpenPage(a)},close:function(t){return e.closePages(a,o)}}},[e._v(e._s(a.label))])})),1)},P=[],T={methods:{...Object(C["b"])(["closeTage"]),btnOpenPage(e){this.$router.push({name:e.name})},closePages(e,t){this.closeTage(e),e.name!==this.$route.name&&console.log("删除的面包屑不是当前path");const a=this.$store.state.tab.tabBreadcrumb.length;t===a?this.$router.push({name:this.$store.state.tab.tabBreadcrumb[t-1].name}):this.$router.push({name:this.$store.state.tab.tabBreadcrumb[t].name})}},computed:{...Object(C["c"])({tagsList:e=>e.tab.tabBreadcrumb})},mounted(){console.log("CommonTags => $route.name",this.$route.name)}},j=T,L=(a("9fd3"),Object(u["a"])(j,S,P,!1,null,"9b2bbd22",null)),M=L.exports,z={data(){return{}},components:{CommonAside:x,CommonHeader:$,CommonTags:M}},U=z,R=(a("f77e"),Object(u["a"])(U,h,f,!1,null,"a1a5994e",null)),E=R.exports,F=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{attrs:{gutter:20}},[t("el-col",{staticClass:"home_contain",attrs:{span:8}},[t("el-card",{staticClass:"user_contain"},[t("div",{staticClass:"user_header"},[t("div",[t("img",{attrs:{src:a("2a8f"),alt:""}})]),t("div",{staticClass:"head_content"},[t("h3",[e._v("Admin")]),t("p",[e._v("超级管理员")])])]),t("div",{staticClass:"login_info"},[t("p",[e._v("上次登陆时间：**********")]),t("p",[e._v("上次登陆地点：**********")])])]),t("el-card",{staticClass:"table_contain"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},e._l(e.tableLabel,(function(e,a){return t("el-table-column",{key:e,staticStyle:{"text-align":"center"},attrs:{prop:a,label:e}})})),1)],1)],1),t("el-col",{staticClass:"number_contain",attrs:{span:16}},[t("el-card",{staticClass:"number_item_wrap"},[t("el-row",{attrs:{gutter:10}},e._l(e.countData,(function(a){return t("el-col",{key:a.cion,attrs:{span:8}},[t("el-card",{staticClass:"number_card",attrs:{"body-style":{display:"flex",padding:"0"}}},[t("div",{staticClass:"left_icon",style:`background: ${a.color};`},[t("i",{class:"icon el-icon-"+a.icon})]),t("div",{staticClass:"right_number"},[t("p",{staticClass:"r_num"},[e._v("¥"+e._s(a.value))]),t("p",{staticClass:"r_desc"},[e._v(e._s(a.name))])])])],1)})),1)],1),t("el-card",[t("div",{ref:"echarts_zx",staticStyle:{height:"360px"}})]),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("el-card",[t("div",{ref:"echarts_zz",staticStyle:{height:"290px"}})])],1),t("el-col",{attrs:{span:12}},[t("el-card",[t("div",{ref:"echarts_sx",staticStyle:{height:"290px"}})])],1)],1)],1)],1)],1)},A=[],J=a("cee4");const H=J["a"].create({baseURL:"/api",timeout:1e4});H.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),H.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var N=H;const V=()=>N.get("home/getDate"),q=e=>N.get("/user/getUser",e),W=e=>N.post("/user/add",e),Z=e=>N.post("user/edit",e),I=e=>N.post("user/del",e);var G=a("313e"),K={data(){return{tableLabel:{name:"课程",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总购买"},tableData:[],orderData:[],userData:[],videoData:[],countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},created(){},mounted(){V().then(e=>{let{data:t}=e;const{tableData:a,orderData:o,userData:s,videoData:n}=t.data;this.tableData=a,this.orderData=o,this.userData=s,this.videoData=n})},methods:{upEchartsZx:function(){var e=G["a"](this.$refs.echarts_zx);const t={xAxis:{type:"category",boundaryGap:!1,data:this.orderData.date},yAxis:{type:"value"},series:this.orderData.data};t&&e.setOption(t),console.log("Home.vue , upEchartsZx",this.orderData.date)},upEchartsZz:function(){var e=G["a"](this.$refs.echarts_zz);const t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},xAxis:{type:"category",data:this.userData.map(e=>e.date)},yAxis:{type:"value"},series:[{name:"新增用户",data:this.userData.map(e=>e.new),type:"bar"},{name:"活跃用户",data:this.userData.map(e=>e.active),type:"bar"}]};t&&e.setOption(t),console.log("Home.vue , upEchartsZz",this.userData)},upEchartsSx:function(){var e=G["a"](this.$refs.echarts_sx);const t={legend:{top:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{trigger:"item"},series:[{name:"饼图测试",type:"pie",radius:"50%",data:this.videoData}]};t&&e.setOption(t),console.log("Home.vue , upEchartsSx",this.videoData)}},watch:{tableData(e){this.$nextTick(()=>{this.tableData=e,console.log(e)})},orderData:{handler(e,t){console.log("newDate",e),console.log("oldDate",t),this.upEchartsZx()},deep:!0},userData:{handler(){this.upEchartsZz()},deep:!0},videoData:{handler(){this.upEchartsSx()},deep:!0}}},Q=K,X=(a("d187"),Object(u["a"])(Q,F,A,!1,null,"5b9fbb98",null)),Y=X.exports,ee=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user_box"},[t("div",{staticClass:"user_header"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleBtnClickFrom}},[e._v("+ 新增")]),t("div",[t("el-form",{attrs:{model:e.userSerach}},[t("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.serach,callback:function(t){e.serach=t},expression:"serach"}}),t("el-button",{staticStyle:{"margin-left":"3px"},attrs:{type:"primary"}},[e._v("搜索")])],1)],1)],1),t("el-dialog",{attrs:{title:e.userTitle,visible:e.dialogFormVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,inline:!0,"label-position":e.labelPosition,rules:e.rules}},[t("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth,prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{label:"出生日期","label-width":e.formLabelWidth,prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),t("el-form-item",{attrs:{label:"地址","label-width":e.formLabelWidth,prop:"addr"}},[t("el-input",{attrs:{placeholder:"请输入地址",type:"textarea",rows:3,maxlength:"1000"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.cancel("form")}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"90%"}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s("0"==a.row.sex?"女":"男"))])]}}])}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期",width:"180"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{prop:"addr",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleBtnEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.handleBtnDel(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.pageDate.limit,total:e.total},on:{"current-change":e.clickPages}})],1)},te=[],ae={data(){return{userTitle:"新增用户",labelPosition:"right",dialogFormVisible:!1,serach:"搜索",form:{name:"",age:"",sex:"",birth:"",addr:""},formLabelWidth:"120px",rules:{name:[{required:!0,message:"请输入姓名"}],age:[{required:!0,message:"请输入年龄"}],sex:[{required:!0,message:"请选择性别"}],birth:[{required:!0,message:"请选择日期"}],addr:[{required:!0,message:"请输入地址"}]},tableData:[],modelType:0,total:0,pageDate:{page:1,limit:10},userSerach:{name:""}}},methods:{handleBtnClickFrom(){this.userTitle="新增用户",this.dialogFormVisible=!0,this.modelType=0},submitForm(){this.$refs.form.validate(e=>{console.log("表单是否通过",e),e&&(0===this.modelType?W(this.form).then(()=>{this.getList(),this.$message({message:"新增成功",type:"success"})}):Z(this.form).then(()=>{this.getList(),this.$message({message:"编辑成功",type:"success"})}),this.handleClose())})},handleClose(){this.dialogFormVisible=!1,this.$refs["form"].resetFields()},cancel(){this.handleClose()},handleBtnEdit(e){this.userTitle="编辑用户",this.dialogFormVisible=!0,this.modelType=1,this.$nextTick(()=>{this.form=JSON.parse(JSON.stringify(e))})},handleBtnDel(e){console.log("删除",e),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{I({id:e.id}).then(()=>{this.getList(),this.$message({type:"success",message:"删除成功!"})})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},getList(){q({params:this.pageDate}).then(e=>{console.log(e.data),this.tableData=e.data.list,this.total=e.data.count})},clickPages(e){this.pageDate.page=e,console.log(e),this.getList(),console.log("切换页码",this.tableData)}},mounted(){this.getList()}},oe=ae,se=(a("e27b"),Object(u["a"])(oe,ee,te,!1,null,"1f2f0279",null)),ne=se.exports,re=function(){var e=this,t=e._self._c;return t("div",[e._v(" mall ")])},le=[],ie={},ce=Object(u["a"])(ie,re,le,!1,null,null,null),ue=ce.exports,de=function(){var e=this,t=e._self._c;return t("div",[e._v(" page1 ")])},me=[],pe={},he=Object(u["a"])(pe,de,me,!1,null,null,null),fe=he.exports,be=function(){var e=this,t=e._self._c;return t("div",[e._v(" page2 ")])},ge=[],ve={},ye=Object(u["a"])(ve,be,ge,!1,null,null,null),_e=ye.exports;n["default"].use(p["a"]);const xe=[{path:"/",component:E,redirect:"/home",children:[{path:"home",name:"home",component:Y},{path:"user",name:"user",component:ne},{path:"mall",name:"mall",component:ue},{path:"PageOne",name:"PageOne",component:fe},{path:"PageTwo",name:"PageTwo",component:_e}]}],we=new p["a"]({routes:xe});var ke=we;const Ce=p["a"].prototype.push;p["a"].prototype.push=function(e){return Ce.call(this,e).catch(e=>e)};var De={state:{isCollapse:!1,tabBreadcrumb:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}]},mutations:{collspseMenu(e){e.isCollapse=!e.isCollapse},upBreadcrumb(e,t){if("home"!==t.name){const a=e.tabBreadcrumb.findIndex(e=>e.name==t.name);-1===a&&e.tabBreadcrumb.push(t)}},closeTage(e,t){const a=e.tabBreadcrumb.findIndex(e=>e.name==t.name);e.tabBreadcrumb.splice(a,1)}}};n["default"].use(C["a"]);const Oe=new C["a"].Store({modules:{tab:De}});var Be=Oe,$e=a("96eb"),Se=a.n($e);let Pe=[];var Te={getStatisticalData:()=>{for(let e=0;e<7;e++)Pe.push(Se.a.mock({"苹果":Se.a.Random.float(100,8e3,0,0),vivo:Se.a.Random.float(100,8e3,0,0),oppo:Se.a.Random.float(100,8e3,0,0),"魅族":Se.a.Random.float(100,8e3,0,0),"三星":Se.a.Random.float(100,8e3,0,0),"小米":Se.a.Random.float(100,8e3,0,0)}));return{code:200,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]}]},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};function je(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let Le=[];const Me=200;for(let Ue=0;Ue<Me;Ue++)Le.push(Se.a.mock({id:Se.a.Random.guid(),name:Se.a.Random.cname(),addr:Se.a.mock("@county(true)"),"age|18-60":1,birth:Se.a.Random.date(),sex:Se.a.Random.integer(0,1)}));var ze={getUserList:e=>{console.log(e,"config");const{name:t,page:a=1,limit:o=20}=je(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+o);const s=Le.filter(e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t)),n=s.filter((e,t)=>t<o*a&&t>=o*(a-1));return{code:2e4,count:s.length,list:n}},createUser:e=>{const{name:t,addr:a,age:o,birth:s,sex:n}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),Le.unshift({id:Se.a.Random.guid(),name:t,addr:a,age:o,birth:s,sex:n}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(Le=Le.filter(e=>e.id!==t),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=je(e.url);return t=t.split(","),Le=Le.filter(e=>!t.includes(e.id)),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:o,age:s,birth:n,sex:r}=JSON.parse(e.body),l=parseInt(r);return Le.some(e=>{if(e.id===t)return e.name=a,e.addr=o,e.age=s,e.birth=n,e.sex=l,!0}),{code:2e4,data:{message:"编辑成功"}}}};Se.a.mock("/api/home/getDate",Te.getStatisticalData),Se.a.mock("/api/user/add","post",ze.createUser),Se.a.mock("/api/user/edit","post",ze.updateUser),Se.a.mock("/api/user/del","post",ze.deleteUser),Se.a.mock(/api\/user\/getUser/,ze.getUserList),n["default"].config.productionTip=!1,n["default"].use(s.a),new n["default"]({router:ke,store:Be,render:e=>e(m)}).$mount("#app")},"5dbc":function(e,t,a){},"9fd3":function(e,t,a){"use strict";a("e618")},a010:function(e,t,a){"use strict";a("af7e")},af7e:function(e,t,a){},c06c:function(e,t,a){},c4c1:function(e,t,a){"use strict";a("2e23")},c628:function(e,t,a){},d187:function(e,t,a){"use strict";a("5dbc")},e27b:function(e,t,a){"use strict";a("c06c")},e618:function(e,t,a){},f77e:function(e,t,a){"use strict";a("0f81")}});
//# sourceMappingURL=app.1edaae4f.js.map