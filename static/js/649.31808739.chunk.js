(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[649],{728:function(n,e,t){!function(n){"use strict";n.defineMode("ntriples",(function(){var n=0,e=1,t=2,r=3,i=4,a=5,u=6,o=7,s=8,c=9,l=10,p=11,f=12;function h(h,v){var d,b=h.location;d=b==n&&"<"==v?e:b==n&&"_"==v?t:b==r&&"<"==v?i:b==a&&"<"==v?u:b==a&&"_"==v?o:b==a&&'"'==v?s:b==e&&">"==v||b==t&&" "==v?r:b==i&&">"==v?a:b==u&&">"==v||b==o&&" "==v||b==s&&'"'==v||b==c&&" "==v||b==l&&">"==v?p:b==s&&"@"==v?c:b==s&&"^"==v?l:" "!=v||b!=n&&b!=r&&b!=a&&b!=p?b==p&&"."==v?n:f:b,h.location=d}return{startState:function(){return{location:n,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,e){var t=n.next();if("<"==t){h(e,t);var r="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(r+=n,!0)})),e.uris.push(r),n.match("#",!1)||(n.next(),h(e,">")),"variable"}if("#"==t){var i="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(i+=n,!0)})),e.anchors.push(i),"variable-2"}if(">"==t)return h(e,">"),"variable";if("_"==t){h(e,t);var a="";return n.eatWhile((function(n){return" "!=n&&(a+=n,!0)})),e.bnodes.push(a),n.next(),h(e," "),"builtin"}if('"'==t)return h(e,t),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&h(e,'"'),"string";if("@"==t){h(e,"@");var u="";return n.eatWhile((function(n){return" "!=n&&(u+=n,!0)})),e.langs.push(u),n.next(),h(e," "),"string-2"}if("^"==t){n.next(),h(e,"^");var o="";return n.eatWhile((function(n){return">"!=n&&(o+=n,!0)})),e.types.push(o),n.next(),h(e,">"),"variable"}" "==t&&h(e,t),"."==t&&h(e,t)}}})),n.defineMIME("application/n-triples","ntriples"),n.defineMIME("application/n-quads","ntriples"),n.defineMIME("text/n-triples","ntriples")}(t(9))}}]);
//# sourceMappingURL=649.31808739.chunk.js.map