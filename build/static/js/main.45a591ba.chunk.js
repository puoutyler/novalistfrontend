(this.webpackJsonpnovalist_frontend2=this.webpackJsonpnovalist_frontend2||[]).push([[0],{19:function(e,a,t){e.exports=t(42)},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),o=t.n(r),s=t(1),i=t.n(s),l=t(4),u=t(3),m=(t(9),t(5)),d=t(7),p=function(e){var a=c.a.useState(e.initial),t=Object(u.a)(a,2),n=t[0],r=t[1];c.a.useEffect((function(){r(e.initial)}),[e.initial]);var o=function(e){r(Object(d.a)(Object(d.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"title",value:n.title,placeholder:"Title",onChange:o}),c.a.createElement("input",{type:"text",name:"author",value:n.author,placeholder:"Author",onChange:o}),c.a.createElement("button",{className:"btn",onClick:function(){e.handleSubmit(n),r(e.initial)}},"Submit"))},h=t(6),f=t.n(h),v=function(e){var a=c.a.useState(e.initial),t=Object(u.a)(a,2),n=(t[0],t[1]),r=c.a.useState(""),o=Object(u.a)(r,2),s=o[0],d=o[1],p=c.a.useState(""),h=Object(u.a)(p,2),v=h[0],E=h[1],b=(c.a.useState({}),c.a.useState([])),g=Object(u.a)(b,2);g[0],g[1];c.a.useEffect((function(){n(e.initial)}),[e.initial]);var k=function(){var e=Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(s,"&printType=books&intitle&key=AIzaSyAQNLb6ohAjiKiv_PIijuizvpZ1gOdSYz4&maxResults=6"));case 2:a=e.sent,console.log("New Books From API: ",a),E(a.data.items);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"search"},c.a.createElement("input",Object(m.a)({type:"text",name:"search",placeholder:"Search",onChange:function(e){var a=e.target.value;d(a)},className:"search-input"},"placeholder","Search Books")),c.a.createElement("button",{className:"search-button",onClick:function(){k(s),n(e.initial)}},"Search Books"),c.a.createElement("div",{className:"Api_container2"},c.a.createElement("ul",{className:"App_row"},v?v.map((function(e,a){return c.a.createElement("li",{key:a,className:"API-li"},c.a.createElement("a",{target:"_blank",href:e.volumeInfo.canonicalVolumeLink},c.a.createElement("img",{alt:"Google API Image",src:e.volumeInfo.imageLinks.smallThumbnail,className:"card-image2"})),c.a.createElement("p",{className:"card-content"},"Author: ",e.volumeInfo.title))})):"")))},E=function(e){var a=c.a.useState(null),t=Object(u.a)(a,2),n=t[0],r=t[1],o=c.a.useState({title:"",author:""}),s=Object(u.a)(o,2),m=s[0],d=s[1],h=(c.a.useState({}),c.a.useState([])),E=Object(u.a)(h,2),b=E[0],g=E[1],k=function(){var e=Object(l.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/novalist");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log("Books I Want To Read: ",t),r(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c.a.useEffect((function(){k(),N()}),[]);var N=function(){var e=Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.googleapis.com/books/v1/volumes?q=programming&orderBy=newest&key=AIzaSyAQNLb6ohAjiKiv_PIijuizvpZ1gOdSYz4&maxResults=6");case 2:a=e.sent,console.log("New Books From API: ",a),g(a.data.items);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/novalist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:t=e.sent,console.log(t),k();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/novalist/".concat(a._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:t=e.sent,console.log(t),k();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/novalist/".concat(a),{method:"DELETE"});case 2:t=e.sent,console.log(t),k();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-nav"},c.a.createElement("h1",{className:"App-title"},"NovaList"),c.a.createElement("h3",{className:"featured-header"},"Featured Books")),c.a.createElement("div",{className:"Api_container"},c.a.createElement("div",null,c.a.createElement("ul",{className:"App_row"},b.map((function(e,a){return c.a.createElement("li",{key:a,className:"API-li"},c.a.createElement("a",{target:"_blank",href:e.volumeInfo.canonicalVolumeLink},c.a.createElement("img",{alt:"Google API Image",src:e.volumeInfo.imageLinks.smallThumbnail,className:"card-image"})),c.a.createElement("p",{className:"card-content"},"Author: ",e.volumeInfo.authors[0]))}))))),c.a.createElement("div",{className:"search-container"},c.a.createElement(v,{className:"search"})),c.a.createElement("h1",{className:"read-books-list-title"}," Books I Want to Read "),c.a.createElement("div",null,c.a.createElement("div",{className:"read-books-conatiner"},c.a.createElement("ul",null,n?n.map((function(e){return c.a.createElement("li",{key:e._id,className:"read-books-list-div"},c.a.createElement("h1",{className:"book-title"},e.title),c.a.createElement("h2",{className:"book-author"},e.author),c.a.createElement("button",{onClick:function(){j(e._id)}},"Delete"),c.a.createElement("button",{onClick:function(){O(e)}},"Edit"))})):"LOADING..."))),c.a.createElement("div",{className:"add-book-div"},c.a.createElement("div",{className:"new-book-div"},c.a.createElement("h1",null,"Add a book to your list"),c.a.createElement(p,{initial:{title:"",author:""},handleSubmit:w})),c.a.createElement("div",{className:"edit-section"},c.a.createElement("div",{className:"edit-book-div"},c.a.createElement("h1",null,"Edit Selected Book"),c.a.createElement(p,{initial:m,handleSubmit:y})))),c.a.createElement("footer",null,c.a.createElement("h2",null,"Copyright 2020 TTC"),c.a.createElement("div",{className:"social-icons"},c.a.createElement("img",{className:"social",src:"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png",alt:"social media links"}),c.a.createElement("img",{className:"social",src:"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-512.png",alt:"social media links"}),c.a.createElement("img",{className:"social",src:"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png",alt:"social media links"}),c.a.createElement("img",{className:"social",src:"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png",alt:"social media links"}))))};o.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,a,t){}},[[19,1,2]]]);
//# sourceMappingURL=main.45a591ba.chunk.js.map