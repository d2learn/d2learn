import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,m as n,o as l}from"./app-DRVxS_KD.js";const e={};function h(t,s){return l(),a("div",null,s[0]||(s[0]=[n(`<p>checker命令可以运行一个公开课项目中的练习代码自动检测程序, 并且实现了自动代码文件定位和进入下一个练习的功能</p><h2 id="执行练习代码自动检测程序" tabindex="-1"><a class="header-anchor" href="#执行练习代码自动检测程序"><span>执行练习代码自动检测程序</span></a></h2><p>以<a href="https://github.com/d2learn/d2ds" target="_blank" rel="noopener noreferrer">d2ds</a>项目的练习代码为例</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xlings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xlings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dslings</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>注: 以d2ds项目举例, 命令<code>xlings checker</code>和<code>xlings dslings</code>是等价的, 其中<strong>dslings</strong>是d2ds项目中练习代码的代号</p></blockquote><h2 id="进度显示和错误提示" tabindex="-1"><a class="header-anchor" href="#进度显示和错误提示"><span>进度显示和错误提示</span></a></h2><p>检测程序会一次检测练习直到最新一个没有通过的练习, 然后实时检测这个练习。当代码编写正确的时候就会显示通过并进入下一个练习</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">🌏Progress:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [&gt;------------------------------------------------------] 0/54</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Target: 0.dslings-0] - normal</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">❌</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Compilation/Running</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dslings/tests/dslings.0.cpp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> some</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">---------C-Output---------</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[ 50%]: cache compiling.release dslings/tests/dslings.0.cpp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dslings/tests/dslings.0.cpp:20:11:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ‘MaxValue’</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> member</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ‘d2ds’</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |     </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d2ds::MaxValue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mVal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      |           </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^~~~~~~~</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">In</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> included</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dslings/tests/dslings.0.cpp:14:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dslings/tests/dslings.0.cpp:22:20:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ‘mVal’</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> was</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> declared</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scope</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |     </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d2ds_assert_eq(mVal.get(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), 2);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      |                    </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^~~~</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dslings/common/common.hpp:29:9:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> note:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> definition</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> macro</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ‘d2ds_assert_eq’</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   29</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |     </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> !=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      |         </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &gt; i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dslings/tests/dslings.0.cpp</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AI-Tips(3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">哎呀，看来是有个大明星“MaxValue”没来参加派对呢！检查一下</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d2ds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">里有没有定义这个成员哦。顺便看看</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mVal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">是不是迷路了，没在正确的舞台上表演呢？✨</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">---------E-Files---------</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dslings/tests/dslings.0.cpp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Homepage:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/d2learn/xlings</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const d=i(e,[["render",h],["__file","chapter_2_5.html.vue"]]),r=JSON.parse('{"path":"/docs/xlings/chapter_2/chapter_2_5.html","title":"checker命令","lang":"zh-CN","frontmatter":{"title":"checker命令","order":2.5,"description":"checker命令可以运行一个公开课项目中的练习代码自动检测程序, 并且实现了自动代码文件定位和进入下一个练习的功能 执行练习代码自动检测程序 以d2ds项目的练习代码为例 或 注: 以d2ds项目举例, 命令xlings checker和xlings dslings是等价的, 其中dslings是d2ds项目中练习代码的代号 进度显示和错误提示 检测...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://d2learn.org/docs/xlings/chapter_2/chapter_2_5.html"}],["meta",{"property":"og:site_name","content":"D2Learn"}],["meta",{"property":"og:title","content":"checker命令"}],["meta",{"property":"og:description","content":"checker命令可以运行一个公开课项目中的练习代码自动检测程序, 并且实现了自动代码文件定位和进入下一个练习的功能 执行练习代码自动检测程序 以d2ds项目的练习代码为例 或 注: 以d2ds项目举例, 命令xlings checker和xlings dslings是等价的, 其中dslings是d2ds项目中练习代码的代号 进度显示和错误提示 检测..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"checker命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"D2Learn\\",\\"url\\":\\"https://d2learn.org\\",\\"email\\":\\"speak@d2learn.com\\"}]}"]]},"headers":[{"level":2,"title":"执行练习代码自动检测程序","slug":"执行练习代码自动检测程序","link":"#执行练习代码自动检测程序","children":[]},{"level":2,"title":"进度显示和错误提示","slug":"进度显示和错误提示","link":"#进度显示和错误提示","children":[]}],"readingTime":{"minutes":1.1,"words":329},"filePathRelative":"docs/xlings/chapter_2/chapter_2_5.md","autoDesc":true}');export{d as comp,r as data};