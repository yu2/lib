const e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};
function n(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function r(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
export default function t(c,o){let a,l,s,g,p,u=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,$=[],m="",h=o||{},i=0;function d(n){let r=e[n[1]||""],t=$[$.length-1]==n;return r?r[1]?(t?$.pop():$.push(n),r[0|t]):r[0]:n}function f(){let e="";for(;$.length;)e+=d($[$.length-1]);return e}for(c=c.replace(/^\[(.+?)\]:\s*(.+)$/gm,(e,n,r)=>(h[n.toLowerCase()]=r,"")).replace(/^\n+|\n+$/g,"");s=u.exec(c);)l=c.substring(i,s.index),i=u.lastIndex,a=s[0],l.match(/[^\\](\\\\)*\\$/)||((p=s[3]||s[4])?a='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?` class="language-${s[2].toLowerCase()}"`:"")+">"+n(r(p).replace(/^\n+|\n+$/g,""))+"</code></pre>":(p=s[6])?(p.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),g=t(n(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==p?p="blockquote":(p=p.match(/\./)?"ol":"ul",g=g.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),a="<"+p+">"+g+"</"+p+">"):s[8]?a=`<img src="${r(s[8])}" alt="${r(s[7])}">`:s[10]?(m=m.replace("<a>",`<a href="${r(s[11]||h[l.toLowerCase()])}">`),a=f()+"</a>"):s[9]?a="<a>":s[12]||s[14]?(p="h"+(s[14]?s[14].length:s[13]>"="?1:2),a="<"+p+">"+t(s[12]||s[15],h)+"</"+p+">"):s[16]?a="<code>"+r(s[16])+"</code>":(s[17]||s[1])&&(a=d(s[17]||"--"))),m+=l,m+=a;return(m+c.substring(i)+f()).replace(/^\n+|\n+$/g,"")}
//# sourceMappingURL=snarkdown.modern.js.map