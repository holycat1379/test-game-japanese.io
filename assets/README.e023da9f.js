import{h as a,o as s,c as t,i as r}from"./app.36c8782d.js";import{b as e}from"./route-block.89f12ae7.js";const n={class:"prose prose-sm m-auto text-left"},c=r(`<h2>File-based Routing</h2><p>Routes will be auto-generated for Vue files in this dir with the same file structure. Check out <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener"><code class="">vite-plugin-pages</code></a> for more details.</p><h3>Path Aliasing</h3><p><code class="">~/</code> is aliased to <code class="">./src/</code> folder.</p><p>For example, instead of having</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../composables&#39;</span>
</code></pre><p>now, you can use</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;~/composables&#39;</span>
</code></pre>`,8),p=[c],k={meta:[]},l={__name:"README",setup(d,{expose:o}){return a({meta:[]}),o({frontmatter:{meta:[]}}),(m,u)=>(s(),t("div",n,p))}};typeof e=="function"&&e(l);export{l as default,k as frontmatter};
