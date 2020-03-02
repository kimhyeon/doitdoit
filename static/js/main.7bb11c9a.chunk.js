(this.webpackJsonpdoit=this.webpackJsonpdoit||[]).push([[0],{20:function(n,e,t){n.exports=t(28)},28:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(14),i=t.n(o),c=t(8),s=t.n(c),l=t(9),u=t(10),d=t(3),p=t(4),h=t(6),f=t(5),g=t(7),b=t(2),m=t(1);function v(){var n=Object(b.a)(["\n  position: absolute;\n  right: 15px;\n  width: 28px;\n  height: 28px;\n  margin-top: 7px;\n  opacity: 0.3;\n\n  &:hover {\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  &:before, &:after {\n    position: absolute;\n    left: 13px;\n    content: '';\n    height: 29px;\n    width: 2px;\n    background-color: #333;\n  }\n\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"]);return v=function(){return n},n}function k(){var n=Object(b.a)(["\n        text-decoration: line-through;\n        color: #2196F3;\n      "]);return k=function(){return n},n}function x(){var n=Object(b.a)(["\n  resize: none;\n  font-family: Roboto-regular;\n  font-size: 20px;\n  line-height: 24px;\n  height: auto;\n  width: calc(100% - 78px);\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 8px;\n  border: 1px solid #FFFFFF;\n  border-radius: 5px;\n  outline: none;\n  appearance: none;\n\n  &:focus {\n    border-color: #5994FD;\n  }\n\n  ","\n\n"]);return x=function(){return n},n}function w(){var n=Object(b.a)(["\n  display: inline-block;\n  margin-right: 15px;\n  margin-top: 6px;\n\n  & > input {\n    display: none;\n  }\n\n  & > input + label {\n    cursor: pointer;\n    position: relative;\n  }\n\n  // Box\n  & > input + label:before {\n    content: '';\n    display: inline-block;\n    vertical-align: text-top;\n    width: 28px;\n    height: 28px;\n    border: 1px solid #878787;\n    border-radius: 5px;\n    background-color: white;\n  }\n\n  // Box focus\n  & > input:hover + label:before {\n    // background-color: #d0ebff;\n  }\n  \n  // Box checked\n  & > input:checked + label:before {\n    background: #2196F3;\n    border: 1px solid #2196F3;\n  }\n\n  & > input:checked + label:after {\n    content: '';\n    position: absolute;\n    left: 8px;\n    top: 13px;\n    background: white;\n    width: 4px;\n    height: 4px;\n    box-shadow: \n    3px 0 0 white,\n    5px 0 0 white,\n    5px -3px 0 white,\n    5px -5px 0 white,\n    5px -7px 0 white,\n    5px -10px 0 white;\n    transform: rotate(45deg);\n  }\n\n  // Disabled state label.\n  & > input:disabled + label {\n    color: #b8b8b8;\n    cursor: auto;\n  }\n\n  // Disabled box.\n  & > input:disabled + label:before {\n    box-shadow: none;\n    background: #ddd;\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(b.a)(["\n  width: calc(100% - 30px);\n  background-color: #FFFFFF;\n  display: flex;\n  position: relative;\n  padding: 15px;\n  margin-bottom: 15px;\n"]);return O=function(){return n},n}var E=m.default.div(O()),j=m.default.div(w()),y=m.default.textarea(x(),(function(n){if(n.isDone)return Object(m.css)(k())})),C=m.default.div(v()),F=function(n){function e(){var n,t;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(h.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(o)))).editInput=r.a.createRef(),t.textarea={minRows:1,maxRows:10},t.state={isEditing:t.props.isNew,isDone:!1,content:"",rows:1},t.handleToggleEdit=function(){var n=t.state.isEditing;t.setState({isEditing:!n})},t.handleKeyDown=function(n){console.dir(n.key),"Escape"===n.key&&n.target.blur()},t.handleChangeCheckBox=function(n){var e=t.props,a=e.task,r=e.handleUpdateTask;console.dir(n.target.checked),t.setState({isDone:n.target.checked}),a.isDone=n.target.checked,r(Object(l.a)({},a))},t.handleChangeContent=function(n){var e=t.textarea,a=e.minRows,r=e.maxRows,o=(t.state.rows,n.target.rows);n.target.rows=a;var i=(n.target.scrollHeight-16)/24;console.warn("".concat(o,"-").concat(n.target.scrollHeight),"".concat(i,"-").concat(n.target.scrollHeight-16)),i===o&&(n.target.rows=i),i>=r&&(n.target.rows=r,n.target.scrollTop=n.target.scrollHeight),console.warn(n.target.rows,~~(n.target.scrollHeight/24)),t.setState({rows:i>r?r:i,content:n.target.value})},t.handleRemoveBtn=function(){var n=t.props;(0,n.handleRemoveTask)(n.task.id)},t}return Object(g.a)(e,n),Object(p.a)(e,[{key:"shouldComponentUpdate",value:function(n,e){return this.state.content!==e.content||this.state.isEditing!==e.isEditing||this.props.task!==n.task}},{key:"componentDidUpdate",value:function(n,e){var t=this.props.task,a=t.id,r=t.isDone,o=t.content;console.log("#componentDidUpdate",!e.isEditing,this.state.isEditing),!e.isEditing&&this.state.isEditing&&this.setState({isDone:r,content:o}),e.isEditing&&!this.state.isEditing&&this.props.handleUpdateTask({id:a,isDone:this.state.isDone,content:this.state.content})}},{key:"componentDidMount",value:function(){this.props.isNew&&(this.editInput.current.focus(),console.warn("is new"))}},{key:"render",value:function(){var n=this.props.isNew,e=this.props.task,t=e.id,a=e.isDone,o=e.content,i=this.state,c=i.isEditing,s=i.rows;return r.a.createElement(E,null,r.a.createElement(j,null,r.a.createElement("input",{id:"".concat(t,"_ID"),name:"isDone",type:"checkbox",onChange:this.handleChangeCheckBox,checked:a}),r.a.createElement("label",{htmlFor:"".concat(t,"_ID")})),!1===c&&!1===n?r.a.createElement(y,{name:"content",placeholder:"Type Your Task Here",value:o,onClick:this.handleToggleEdit,onChange:this.handleChangeContent,rows:s}):r.a.createElement(y,{name:"content",placeholder:"Type Your Task Here",value:this.state.content,onBlur:this.handleToggleEdit,onChange:this.handleChangeContent,onKeyDown:this.handleKeyDown,ref:this.editInput,rows:s}),r.a.createElement(C,{onClick:this.handleRemoveBtn}))}}]),e}(a.Component);function D(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-family: Roboto-Regular;\n  user-select:none;\n\n  & > a {\n    text-decoration: none;\n    color: rgba(0,0,0,.4);\n\n    &:active, &:visited {\n      color: rgba(0,0,0,.4);\n    }\n    &:hover {\n      color: rgba(0,0,0,.6);\n      text-decoration: underline;\n    }\n  }\n\n  & > a > img.icon {\n    width: 216px;\n    display: block;\n    text-align: center;\n    padding: 15px;\n    padding-bottom: 0;\n    margin: 0 auto;\n    margin-bottom: 5px;\n  }\n\n  & > a > div {\n    text-align: center;\n  }\n\n  & > a > div > span {\n    font-size: 12px;\n  }\n"]);return D=function(){return n},n}function T(){var n=Object(b.a)(["\n  margin: 0 auto;\n  width: 95%;\n  max-width: 800px;\n\n  & > div.message {\n    font-size: 20px;\n    font-family: Roboto-Regular;\n    color: rgba(0,0,0,.4);\n    text-align: center;\n    user-select:none;\n  }\n"]);return T=function(){return n},n}function R(){var n=Object(b.a)(["\n  margin: 0 auto;\n  width: 95%;\n  max-width: 800px;\n"]);return R=function(){return n},n}function B(){var n=Object(b.a)(["\n        background-color: #EA4C89\n      "]);return B=function(){return n},n}function S(){var n=Object(b.a)(["\n  color: #FFFFFF;\n  display: inline-block;\n  background-color: #2196F3;\n  border-radius: 7px;\n  padding: 8px 14px;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:first-child {\n    margin-right: 10px;\n  }\n\n  ","\n"]);return S=function(){return n},n}function N(){var n=Object(b.a)(["\n  text-align: center;\n  padding: 20px 0;\n"]);return N=function(){return n},n}var A=m.default.div(N()),I=m.default.div(S(),(function(n){if("removeDones"===n.id)return Object(m.css)(B())})),U=m.default.div(R()),z=m.default.div(T()),H=m.default.div(D()),J=function(n){function e(){var n,t;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(r)))).handleClickCreateBtn=function(){(0,t.props.handleCreateTask)({isDone:!1,content:""})},t.handleRemoveDonesBtn=function(){var n=t.props.handleRemoveDones;console.log(n),n()},t}return Object(g.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){console.log("render");var n=this.props,e=n.tasks,t=n.handleUpdateTask,a=n.handleRemoveTask,o=e.map((function(n,e){return 0===e&&""===n.content?n.isNew=!0:n.isNew=!1,r.a.createElement(F,{key:n.id,task:n,isNew:n.isNew,handleUpdateTask:t,handleRemoveTask:a})}));return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(I,{id:"addTask",onClick:this.handleClickCreateBtn},"Add New Task"),r.a.createElement(I,{id:"removeDones",onClick:this.handleRemoveDonesBtn},"Remove Dones")),o.length>0?r.a.createElement(U,null,o):r.a.createElement(z,null,r.a.createElement(H,null,r.a.createElement("a",{href:"https://comic.naver.com/webtoon/list.nhn?titleId=708452",target:"_blank"},r.a.createElement("img",{className:"icon",src:"https://raw.githubusercontent.com/kimhyeon/doitdoittask/master/public/images/chunbae.png"}),r.a.createElement("div",null,r.a.createElement("span",null,"\xa9\ufe0f NAVER WEBTOON CORP. of '\ub0d0\ud55c\ub0a8\uc790'")))),r.a.createElement("div",{className:"message"},"No task to display.")))}}]),e}(a.Component);J.defaultProps={tasks:[]};var _=J;function K(){var n=Object(b.a)(["\n        background-color: #E2EEF5;\n        border-radius: 7px;\n        color: #3A8BBB;\n      "]);return K=function(){return n},n}function P(){var n=Object(b.a)(["\n  font-size: 16px;\n  padding: 10px 12px;\n  margin-left: 10px;\n  display: inline-block;\n  &:hover {\n    cursor: pointer;\n    background-color: #E2EEF5;\n    border-radius: 7px;\n    color: #3A8BBB;\n  }\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  ","\n\n"]);return P=function(){return n},n}var W=m.default.span(P(),(function(n){if(n.active)return Object(m.css)(K())})),M=function(n){function e(){var n,t;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(r)))).handleClick=function(n){var e=t.props,a=e.filter,r=e.handleChageFilter;console.log(t.props),console.dir(n.target.textContent),a!==n.target.textContent&&r(n.target.textContent)},t}return Object(g.a)(e,n),Object(p.a)(e,[{key:"shouldComponentUpdate",value:function(n,e){return this.props.active!==n.active}},{key:"render",value:function(){var n=this.props,e=n.name,t=n.active;return console.log("filter btn render",e),r.a.createElement(a.Fragment,null,t?r.a.createElement(W,{onClick:this.handleClick,active:!0},e):r.a.createElement(W,{onClick:this.handleClick},e))}}]),e}(a.Component),Y={textAlign:"center",marginTop:"10px",paddingBottom:"15px"},G=function(n){function e(){return Object(d.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){var n=this.props,e=n.filter,t=n.handleChageFilter;return r.a.createElement("div",{style:Y},r.a.createElement(M,{name:"All",active:"All"===e,handleChageFilter:t}),r.a.createElement(M,{name:"Task",active:"Task"===e,handleChageFilter:t}),r.a.createElement(M,{name:"Done",active:"Done"===e,handleChageFilter:t}))}}]),e}(a.Component);function V(){var n=Object(b.a)(["\n  font-family: 'Pacifico-Regular';\n  font-size: 25px;\n  display: inline-block;\n  margin-left: 35px;\n  margin-top 20px;\n"]);return V=function(){return n},n}function $(){var n=Object(b.a)(["\n  position: relative;\n  background-color: #FFFFFF;\n"]);return $=function(){return n},n}var q=m.default.div($()),L=m.default.span(V()),Q=function(n){function e(){return Object(d.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){var n=this.props,e=n.filter,t=n.handleChageFilter;return r.a.createElement(q,null,r.a.createElement(L,null,"doitdoittask"),r.a.createElement(G,{filter:e,handleChageFilter:t}))}}]),e}(a.Component),X=t(18),Z=t.n(X);function nn(){var n=Object(b.a)(["\n  ",";\n  html {\n    font-family: 'Roboto-Regular';\n  }\n"]);return nn=function(){return n},n}var en=Object(m.createGlobalStyle)(nn(),Z.a),tn=function(n){function e(){var n,t;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(r)))).state={filter:"All",tasks:[]},t.getUID=function(){return"uid_".concat(Date.now())},t.handleChageFilter=function(n){t.setState({filter:n})},t.handleCreateTask=function(){var n=Object(u.a)(s.a.mark((function n(e){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.state.tasks,n.next=3,t.setState({tasks:[Object(l.a)({id:t.getUID()},e)].concat(a)});case 3:localStorage.setItem("tasks",JSON.stringify(t.state.tasks));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t.handleUpdateTask=function(){var n=Object(u.a)(s.a.mark((function n(e){var a,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.state.tasks,r=a.map((function(n){return n.id===e.id?Object(l.a)({},e):n})),console.log("test",e,r),n.next=5,t.setState({tasks:a.map((function(n){return n.id===e.id?Object(l.a)({},e):n}))});case 5:localStorage.setItem("tasks",JSON.stringify(t.state.tasks));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t.handleRemoveTask=function(){var n=Object(u.a)(s.a.mark((function n(e){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.state.tasks,n.next=3,t.setState({tasks:a.filter((function(n){return n.id!==e}))});case 3:localStorage.setItem("tasks",JSON.stringify(t.state.tasks));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t.handleRemoveDones=Object(u.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.state.tasks,n.next=3,t.setState({tasks:e.filter((function(n){return!1===n.isDone}))});case 3:localStorage.setItem("tasks",JSON.stringify(t.state.tasks));case 4:case"end":return n.stop()}}),n)}))),t.componentDidMount=function(){var n=localStorage.getItem("tasks");n?t.setState({tasks:JSON.parse(n)}):console.log("No tasks")},t}return Object(g.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){var n=this.state,e=n.tasks,t=n.filter,a=e.filter((function(n){return"All"===t?n:"Task"===t?!1===n.isDone:!0===n.isDone}));return r.a.createElement("div",null,r.a.createElement(en,null),r.a.createElement(Q,{filter:this.state.filter,handleChageFilter:this.handleChageFilter}),r.a.createElement(_,{tasks:a,handleCreateTask:this.handleCreateTask,handleUpdateTask:this.handleUpdateTask,handleRemoveTask:this.handleRemoveTask,handleRemoveDones:this.handleRemoveDones}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(tn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7bb11c9a.chunk.js.map