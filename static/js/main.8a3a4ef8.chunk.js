(this.webpackJsonpguide=this.webpackJsonpguide||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(4),s=n.n(r),o=(n(16),n(5)),c=n(6),l=n(9),u=n(7),h=n(1),d=n(10);function m(e){var t=e.digit,n=e.onClick;return i.a.createElement("button",{className:"btn digit",onClick:function(){return n(t)}},t)}function v(e){var t=e.operation,n=e.digit,a=e.onClick;return i.a.createElement("button",{className:"btn operator",onClick:function(){return a(t)}},n)}function p(e){var t=e.action,n=e.onClick;return i.a.createElement("button",{className:"btn handler",onClick:n},t)}function f(e){var t=e.expression,n=e.result,a=e.onClick;return i.a.createElement("div",{className:"record",onClick:a},i.a.createElement("p",{className:"expression"},t),i.a.createElement("p",{className:"result"},n))}var g=n(8);function E(e){return/[0-9*+-/]*/.test(e)&&!/[*+-/.]{2,}/.test(e)}function k(e){return/[0-9]/.test(e)}function b(e){return/[/*+-]/.test(e)}var y=n(2);function w(e,t,n){switch(e){case"*":return t*n;case"/":return t/n;case"+":return t+n;case"-":return t-n;default:return null}}function C(e){return[e.shift(),e.shift()]}function N(e){return function(e){for(;1!==e.length;){var t=C(e),n=Object(y.a)(t,2),a=n[0],i=n[1];e.unshift(w(i,a,e.shift()))}return e[0]}(function(e){for(var t,n=[];e.length;){var a=C(e),i=Object(y.a)(a,2),r=i[0],s=i[1];"*"===(t=s)||"/"===t?e.unshift(w(s,r,e.shift())):s?n.push(r,s):n.push(r)}return n}(function(e){for(var t=[],n="",a=0;a<e.length;a++){var i=e[a];b(i)?(t.push(Number(n),i),n=""):n+=i}return t.push(Number(n)),t}(e)))}var D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderDigits=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(g.a)(Array(e).keys()).map((function(e){return e+t}))}(9,1).map((function(e){return i.a.createElement(m,{key:e,digit:e,onClick:n.handleDigitButton.bind(Object(h.a)(n))})}))},n.renderHistory=function(){return n.state.history.map((function(e,t){var a=e.expression,r=e.result;return i.a.createElement(f,{key:t,expression:a,result:r,onClick:function(){return n.handleHistoryRecord(a,r)}})}))},n.state={main:"",preview:"",history:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updatePreview",value:function(){var e,t=this.state.main;!(e=t)||/^\s*$/.test(e)?this.setState({preview:""}):k(t[0])&&k(t[t.length-1])&&this.setState({preview:N(t)})}},{key:"handleEqual",value:function(){var e=this.state.preview,t=this.state.main,n=this.state.history;this.setState({main:""+e,history:n.concat([{result:e,expression:t}])},this.updatePreview)}},{key:"handleDelete",value:function(){var e=this.state.main.slice(0,-1);this.setState({main:e},this.updatePreview)}},{key:"handleOperation",value:function(e){var t=e.target.value;E(t)&&this.setState({main:t},this.updatePreview)}},{key:"handleDigitButton",value:function(e){var t=this.state.main+e;E(t)&&this.setState({main:t},this.updatePreview)}},{key:"handleHistoryRecord",value:function(e,t){this.setState({main:e,preview:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"calculator"},i.a.createElement("div",{className:"displays"},i.a.createElement("input",{className:"display main",type:"text",value:this.state.main,onChange:this.handleOperation.bind(this)}),i.a.createElement("input",{className:"display preview",type:"text",readOnly:!0,value:this.state.preview})),i.a.createElement("div",{className:"input-wrap"},i.a.createElement("div",{className:"digits"},i.a.createElement(m,{digit:0,onClick:this.handleDigitButton.bind(this)}),i.a.createElement("button",{className:"btn digit dot",onClick:function(){return e.handleDigitButton(".")}},"\u2022"),this.renderDigits()),i.a.createElement("div",{className:"operations"},i.a.createElement(v,{digit:"\xf7",operation:"/",onClick:this.handleDigitButton.bind(this)}),i.a.createElement(v,{digit:"\xd7",operation:"*",onClick:this.handleDigitButton.bind(this)}),i.a.createElement(v,{digit:"\u2212",operation:"-",onClick:this.handleDigitButton.bind(this)}),i.a.createElement(v,{digit:"+",operation:"+",onClick:this.handleDigitButton.bind(this)})),i.a.createElement("div",{className:"handlers"},i.a.createElement(p,{action:"C",onClick:this.handleDelete.bind(this)}),i.a.createElement(p,{action:"=",onClick:this.handleEqual.bind(this)})))),i.a.createElement("div",{className:"history"},i.a.createElement("p",{className:"history-header"},"History"),this.renderHistory()))}}]),t}(a.Component);var O=function(){return i.a.createElement("div",null,i.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.8a3a4ef8.chunk.js.map