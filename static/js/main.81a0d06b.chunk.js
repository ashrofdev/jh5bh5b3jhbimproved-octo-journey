(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(33)},20:function(e,t,n){},21:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/2.edf4241f.gif"},33:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(14),c=n.n(r),o=(n(20),n(5)),i=n(6),l=n(8),u=n(7),m=n(9),f=(n(21),n(22),n(3)),p=n(2),d=n.n(p);n(26),n(30),n(34);d.a.initializeApp({apiKey:"AIzaSyDbQC-boll7v4GuDs3jffCFaP0BQ-odb00",authDomain:"citizeninvestments-98fe8.firebaseapp.com",databaseURL:"https://citizeninvestments-98fe8.firebaseio.com",projectId:"citizeninvestments-98fe8",storageBucket:"citizeninvestments-98fe8.appspot.com",messagingSenderId:"664843120935",appId:"1:664843120935:web:6f6bbdb7f455f264653902",measurementId:"G-1QD1BRXJP4"});var h=d.a.database(),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={route:"users",users:[],user:{},payments:[],isLoading:!0,reviews:[]},n.confirmPayment=function(e){var t=e.amount,a=n.state.user.totalInvested+parseInt(t);console.log(e),h.ref("users/".concat(n.state.user.userKey,"/payments/").concat(e.key)).update({confirmed:!0}).then(function(e){h.ref("users/".concat(n.state.user.userKey)).update({totalInvested:a}).then(function(e){alert("completed")})}).catch(function(e){alert(e.message)})},n.reqFull=function(e){e.requstFullscreen()},n.clickdeUser=function(e){n.setState({route:"user",user:e}),setTimeout(function(){if(void 0!==n.state.user.payments){var e=[];Object.entries(n.state.user.payments).forEach(function(t){var n=t[0];e.push(Object(f.a)({},t[1],{key:n})),console.log(t[0])}),n.setState({payments:e})}},1e3),console.log(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.ref("users").on("value",function(t){var n=[];console.log(t.val(),".............."),t.forEach(function(e){var t=e.key;n.push(Object(f.a)({},e.val(),{userKey:t}))}),e.setState({users:n,isLoading:!1})}),h.ref("reviews").on("value",function(t){var n=[];Object.entries(t.val()).forEach(function(e){n.push(Object(f.a)({},e[1]))}),e.setState({reviews:n})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"admin"},"user"===this.state.route?s.a.createElement("button",{className:"back_btn",onClick:function(){return e.setState({route:"users"})}},"BACK"):null,this.state.isLoading?s.a.createElement("img",{className:"loading",src:n(32)}):null,"users"===this.state.route?s.a.createElement("div",{className:"users"},this.state.users.map(function(t){return s.a.createElement("div",{className:"user",onClick:function(){return e.clickdeUser(t)}},s.a.createElement("p",null,t.username),s.a.createElement("p",null,t.email),s.a.createElement("p",null,t.totalInvested))})):s.a.createElement("div",{className:"user_page"},this.state.user.payments?s.a.createElement("div",null,s.a.createElement("div",{className:"user top"},s.a.createElement("p",null,"Username: ",this.state.user.username),s.a.createElement("p",null,"Fullname: ",this.state.user.name),s.a.createElement("p",null,"Date registered: ",this.state.user.registeredDate),s.a.createElement("p",null,"Total Invested: ",this.state.user.totalInvested),s.a.createElement("p",null,"Earnings: ",this.state.user.earnings)),s.a.createElement("div",{className:"payments"},s.a.createElement("h2",null,"Payments for ",this.state.user.username),this.state.payments.map(function(t){var n=Object(f.a)({},t.dueDate);return s.a.createElement("div",{className:"user"},s.a.createElement("a",{href:"".concat(t.screenshot)},s.a.createElement("img",{style:{width:"2rem",height:"2rem"},src:t.screenshot})),s.a.createElement("p",null,t.username),s.a.createElement("p",null,t.amount),s.a.createElement("p",null,t.date),s.a.createElement("p",null,"due for payment on:",n.day,"/",n.month),t.confirmed?"CONFIRMED":s.a.createElement("button",{onClick:function(){return e.confirmPayment(t)}},"CONFIRM"))}))):s.a.createElement("h2",null,"No payment history so far")))}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={search:"",outcome:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Notification.requestPermission()}},{key:"render",value:function(){return document.querySelectorAll("img").forEach(function(e){console.log("alright")}),s.a.createElement("div",null,s.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.81a0d06b.chunk.js.map