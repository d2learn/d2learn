import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,m as a,o as n}from"./app-DRVxS_KD.js";const l={};function t(r,i){return n(),e("div",null,i[0]||(i[0]=[a(`<p>修改文档的基础信息和文档的内容介绍</p><h2 id="下载文档仓库" tabindex="-1"><a class="header-anchor" href="#下载文档仓库"><span>下载文档仓库</span></a></h2><p>把新创建的文档仓库clone到本地</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> your_repo_git_url</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="本地编辑器安装和预览-可选" tabindex="-1"><a class="header-anchor" href="#本地编辑器安装和预览-可选"><span>本地编辑器安装和预览 - <strong>可选</strong></span></a></h2><p><strong>安装依赖</strong></p><p>执行安装vscode编辑器和mdbook的命令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xlings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>预览文档</strong></p><p>执行命令启动浏览器, 动态显示文档内容并进行预览</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xlings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> book</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>注: xlings工具安装</strong></p><ul><li>下载 <a href="https://github.com/d2learn/xlings/archive/refs/heads/main.zip" target="_blank" rel="noopener noreferrer">xlings压缩包</a></li><li>解压到本地 并运行其中tools目录下的<code>install.win.bat</code></li><li>linux系统安装及更多细节见 -&gt; <a href="https://github.com/d2learn/xlings" target="_blank" rel="noopener noreferrer">xlings</a></li></ul></blockquote><h2 id="修改文档配置信息" tabindex="-1"><a class="header-anchor" href="#修改文档配置信息"><span>修改文档配置信息</span></a></h2><p>按照自己的需求修改文档配置文件 <code>book/book.toml</code></p><ul><li><strong>title:</strong> 文档|书籍名</li><li><strong>author:</strong> 作者</li><li><strong>git-repository-url：</strong> 仓库链接</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[book]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">title</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Xlings Book Template | 文档 | 书籍 | 笔记&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">author</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Author Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">language</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;en&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[build]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">build-dir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;book&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[output.html]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git-repository-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://github.com/d2learn/xlings-book-template&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[preprocessor.foo]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Add any additional configurations</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改文档内容" tabindex="-1"><a class="header-anchor" href="#修改文档内容"><span>修改文档内容</span></a></h2><ul><li><code>book/src/SUMMARY.md</code>: 为文档目录文件</li><li><code>book/src/chapter_*.md</code>: 文档对应的章节</li></ul><p><strong>编辑内容</strong></p><p>可以使用vscode或其他任何的编辑器修改<code>boo/src</code>下的内容</p><p><strong>修改时并预览 - 可选</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xlings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> book</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后使用git把本地内容更新到仓库即可触发在线文档自动更新并部署</p><blockquote><p>注: book功能目前是由mdbook支持, 更多配置可以参考 <a href="https://rust-lang.github.io/mdBook/format/index.html" target="_blank" rel="noopener noreferrer">mdbook guide 第五节</a></p></blockquote>`,24)]))}const d=s(l,[["render",t],["__file","chapter_2.html.vue"]]),p=JSON.parse('{"path":"/docs/book-template/chapter_2.html","title":"配置并更新内容","lang":"zh-CN","frontmatter":{"title":"配置并更新内容","order":3,"description":"修改文档的基础信息和文档的内容介绍 下载文档仓库 把新创建的文档仓库clone到本地 本地编辑器安装和预览 - 可选 安装依赖 执行安装vscode编辑器和mdbook的命令 预览文档 执行命令启动浏览器, 动态显示文档内容并进行预览 注: xlings工具安装 下载 xlings压缩包 解压到本地 并运行其中tools目录下的install.win....","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://d2learn.org/docs/book-template/chapter_2.html"}],["meta",{"property":"og:site_name","content":"D2Learn"}],["meta",{"property":"og:title","content":"配置并更新内容"}],["meta",{"property":"og:description","content":"修改文档的基础信息和文档的内容介绍 下载文档仓库 把新创建的文档仓库clone到本地 本地编辑器安装和预览 - 可选 安装依赖 执行安装vscode编辑器和mdbook的命令 预览文档 执行命令启动浏览器, 动态显示文档内容并进行预览 注: xlings工具安装 下载 xlings压缩包 解压到本地 并运行其中tools目录下的install.win...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置并更新内容\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"D2Learn\\",\\"url\\":\\"https://d2learn.org\\",\\"email\\":\\"speak@d2learn.com\\"}]}"]]},"headers":[{"level":2,"title":"下载文档仓库","slug":"下载文档仓库","link":"#下载文档仓库","children":[]},{"level":2,"title":"本地编辑器安装和预览 - 可选","slug":"本地编辑器安装和预览-可选","link":"#本地编辑器安装和预览-可选","children":[]},{"level":2,"title":"修改文档配置信息","slug":"修改文档配置信息","link":"#修改文档配置信息","children":[]},{"level":2,"title":"修改文档内容","slug":"修改文档内容","link":"#修改文档内容","children":[]}],"readingTime":{"minutes":1.15,"words":345},"filePathRelative":"docs/book-template/chapter_2.md","autoDesc":true}');export{d as comp,p as data};