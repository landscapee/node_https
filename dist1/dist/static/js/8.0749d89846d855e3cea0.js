webpackJsonp([8],{"56vX":function(e,t){},PNk5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),s=a("xNsp"),r=a("AZo+"),o=a("IGiG"),c=a("XtQn"),l=a("7kJt"),u=a("M4fF"),d={components:{SearchTable:o.a,Icon:s.a},data:function(){return{userName:Object(r.b)().name,workNumber:Object(r.b)().workNumber,tableData:[],tableConfig:Object(c.c)(),params:{current:1,size:15}}},created:function(){this.getList()},methods:{lineTest:function(e,t){t.examTime>(new Date).getTime()-864e5?this.$router.push({path:e,query:{id:t.examId}}):this.$message.info("考试已过期，下次请提前参加")},getList:function(){var e=this,t={employeeId:Object(r.b)().id};Object(l.a)({url:this.$ip+"/mms-training/examLine/list",method:"post",data:t,params:i()({},this.params)}).then(function(t){console.log(11,t),200==t.code&&(t.data.records.map(function(e,t){e.id=t+1}),e.tableData=Object(u.extend)({},i()({},t.data)))})},handleSizeChange:function(e){this.params.current=1,this.params.size=e,this.getList()},handleCurrentChange:function(e){this.params.current=e,this.getList()}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"indexDiv",staticClass:"index"},[a("div",{staticClass:"top_header flex justify_between"},[a("div"),e._v(" "),a("div",[e._v("我的考试")]),e._v(" "),a("div"),e._v(" "),a("div",{staticClass:"iconSvg"},[a("icon-svg",{attrs:{iconClass:"usericon"}}),e._v(e._s(e.userName)+e._s(e.workNumber?"("+e.workNumber+")":""))],1)]),e._v(" "),a("div",{staticClass:"content"},[a("SearchTable",{staticClass:"fistTable",attrs:{data:e.tableData,tableConfig:e.tableConfig},on:{handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange}},[a("el-table-column",{attrs:{slot:"option",label:"操作",align:"center",width:80},slot:"option",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tooltip",{attrs:{effect:"dark",enterable:!1,content:"参加考试",placement:"top"}},[a("span",{staticClass:"rowSvg item",on:{click:function(t){return e.lineTest("/onlineTestDo",n)}}},[a("icon",{attrs:{iconClass:"exam"}})],1)])]}}])})],1)],1)])},staticRenderFns:[]};var f=a("VU/8")(d,h,!1,function(e){a("56vX")},"data-v-f3ac7794",null);t.default=f.exports}});
//# sourceMappingURL=8.0749d89846d855e3cea0.js.map