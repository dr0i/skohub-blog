(self.webpackChunkskohub_blog=self.webpackChunkskohub_blog||[]).push([[989],{7966:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/91b1901e405e1500f9b7569b85f1ad60/e5610/skohub.png","srcSet":"/static/91b1901e405e1500f9b7569b85f1ad60/e5610/skohub.png 50w,\\n/static/91b1901e405e1500f9b7569b85f1ad60/e9b55/skohub.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/91b1901e405e1500f9b7569b85f1ad60/d4bf4/skohub.avif 50w,\\n/static/91b1901e405e1500f9b7569b85f1ad60/ee81f/skohub.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/91b1901e405e1500f9b7569b85f1ad60/3faea/skohub.webp 50w,\\n/static/91b1901e405e1500f9b7569b85f1ad60/6a679/skohub.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),n=a(5444),i=a(410),r=a(9519),o=a(7190);t.Z=function(){var e,t,s,c=(0,n.useStaticQuery)("2853207340"),u=null===(e=c.site.siteMetadata)||void 0===e?void 0:e.author,m=null===(t=c.site.siteMetadata)||void 0===t?void 0:t.description,b=null===(s=c.site.siteMetadata)||void 0===s?void 0:s.social;return l.createElement("div",{className:"bio"},l.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/skohub.png",width:50,height:50,quality:95,alt:"Skohub logo",__imageData:a(7966)}),(null==u?void 0:u.name)&&l.createElement("div",null,l.createElement("p",null,m," ","This blog is maintained by ",l.createElement("strong",null,u.name),"."),l.createElement("p",null,l.createElement("a",{href:"https://github.com/"+((null==b?void 0:b.github)||""),style:{fontSize:"1.75em",padding:"0em 0.2em",color:"#000",boxShadow:"none"}},l.createElement(r.G,{icon:o.zhw})))))}},4870:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(5444),i=a(9535),r=a(7198),o=a(3751);t.default=function(e){var t,a,s=e.data,c=e.location,u=s.markdownRemark,m=(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",b=s.previous,d=s.next;return l.createElement(r.Z,{location:c,title:m},l.createElement(o.Z,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},u.frontmatter.title),l.createElement("p",null,u.frontmatter.date,(null===(a=u.frontmatter)||void 0===a?void 0:a.authors)&&l.createElement("span",null," | ",u.frontmatter.authors.map((function(e,t){return l.createElement("span",{key:"author"+t},e.firstname," ",e.lastname,t<u.frontmatter.authors.length-1?", ":"")}))))),l.createElement("section",{dangerouslySetInnerHTML:{__html:u.html},itemProp:"articleBody"}),l.createElement("hr",null),l.createElement("footer",null,l.createElement(i.Z,null))),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,b&&l.createElement(n.Link,{to:b.fields.slug,rel:"prev"},"← ",b.frontmatter.title)),l.createElement("li",null,d&&l.createElement(n.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4b56849810bf36ed9b28.js.map