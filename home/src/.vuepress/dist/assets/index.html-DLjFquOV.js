import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c,a,F as v,r as y,n as C,b as _,t as x,d as f,e as d,f as h,g as m,h as X,i as S,j as g}from"./app-C1B1HDXq.js";import{B as R}from"./BilibiliVideoGallery-CUnIBVoC.js";const Y={name:"XCube",props:{offsetX:{type:Number,default:0},offsetY:{type:Number,default:0},cubeColor:{type:String,default:"rgba(255, 255, 255, 0.8)"}},data(){return{faces:[{position:"front",content:"d2ds"},{position:"back",content:"π"},{position:"right",content:"∫"},{position:"left",content:"d2python"},{position:"top",content:"xlings"},{position:"bottom",content:"?"}]}}},z={class:"scene-wrapper"},k={class:"cube"};function N(i,n,o,e,t,s){return l(),c("div",z,[a("div",{class:"scene",style:_({transform:`translate(${o.offsetX}px, ${o.offsetY}px)`})},[a("div",k,[(l(!0),c(v,null,y(t.faces,(r,u)=>(l(),c("div",{key:u,class:C(["face",r.position]),style:_({backgroundColor:o.cubeColor})},x(r.content),7))),128))])],4)])}const B=b(Y,[["render",N],["__scopeId","data-v-ecbf7e29"],["__file","XCube.vue"]]),L={name:"ResponsiveXCube",components:{XCube:B},props:{offsetXRatio:{type:Number,default:0},offsetYRatio:{type:Number,default:-.5},cubeColor:{type:String,default:"rgba(0, 255, 255, 0.3)"}},setup(i){const n=f({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0}),o=d(()=>n.value.width*i.offsetXRatio),e=d(()=>n.value.height*i.offsetYRatio),t=()=>{n.value={width:window.innerWidth,height:window.innerHeight}};return h(()=>{window.addEventListener("resize",t)}),m(()=>{window.removeEventListener("resize",t)}),{offsetX:o,offsetY:e}}};function E(i,n,o,e,t,s){const r=X("XCube");return l(),S(r,{offsetX:e.offsetX,offsetY:e.offsetY,cubeColor:o.cubeColor},null,8,["offsetX","offsetY","cubeColor"])}const W=b(L,[["render",E],["__file","ResponsiveXCube.vue"]]),O={__name:"index.html",props:{offsetXRatio:{type:Number,default:-.225},offsetYRatio:{type:Number,default:-.62},cubeColor:{type:String,default:"rgba(0, 255, 255, 0.3)"}},setup(i,{expose:n}){n();const o=f([{bvid:"BV1hAxBe1EVC",title:"d2learn logo设计过程",thumbnail:"https://i2.hdslb.com/bfs/archive/5b528bf6d74bb6034b87c109ed0b1ea9ca847eda.jpg"}]),e=i,t=f({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0}),s=d(()=>t.value.width<959),r=d(()=>s.value?0:t.value.width*e.offsetXRatio),u=d(()=>s.value?t.value.height*-.85:t.value.height*e.offsetYRatio),p=()=>{t.value={width:window.innerWidth,height:window.innerHeight}};h(()=>{window.addEventListener("resize",p)}),m(()=>{window.removeEventListener("resize",p)});const w={videoList:o,props:e,windowSize:t,isSmallScreen:s,computedOffsetX:r,computedOffsetY:u,updateWindowSize:p,ref:f,computed:d,onMounted:h,onUnmounted:m,ResponsiveXCube:W,BilibiliVideoGallery:R};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}},V={class:"responsive-x-cube-container"};function $(i,n,o,e,t,s){return l(),c("div",null,[a("div",V,[g(e.ResponsiveXCube,{offsetX:e.computedOffsetX,offsetY:e.computedOffsetY,cubeColor:o.cubeColor},null,8,["offsetX","offsetY","cubeColor"])]),n[0]||(n[0]=a("h2",{id:"视频",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#视频"},[a("span",null,"视频")])],-1)),g(e.BilibiliVideoGallery,{videos:e.videoList},null,8,["videos"])])}const I=b(O,[["render",$],["__scopeId","data-v-1ee39784"],["__file","index.html.vue"]]),F=JSON.parse('{"path":"/","title":"主页","lang":"zh-CN","frontmatter":{"home":true,"title":"主页","icon":"home","heroFullScreen":true,"heroImage":"/null.svg","heroText":"D2Learn 社区","tagline":"一个 <知识、技术、创意/> 分享和交流的社区","actions":[{"text":"开源主页","link":"https://github.com/d2learn","type":"primary"},{"text":"公开课","link":"/courses/","type":"primary"},{"text":"xlings工具","link":"/xlings/","type":"primary"},{"text":"论坛","link":"https://forum.d2learn.org","type":"primary"}],"footer":false,"description":"视频","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://d2learn.org/"}],["meta",{"property":"og:site_name","content":"D2Learn"}],["meta",{"property":"og:title","content":"主页"}],["meta",{"property":"og:description","content":"视频"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"主页\\",\\"description\\":\\"视频\\"}"]]},"headers":[{"level":2,"title":"视频","slug":"视频","link":"#视频","children":[]}],"readingTime":{"minutes":0.74,"words":221},"filePathRelative":"README.md","autoDesc":true}');export{I as comp,F as data};