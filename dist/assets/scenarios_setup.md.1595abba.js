import{o as n,c as s,a,b as t,d as e,e as p}from"./app.af80ff53.js";const o='{"title":"Before and after actions","description":"","frontmatter":{},"relativePath":"scenarios/setup.md","lastUpdated":1630599447261}',c={},u=t("h1",{id:"before-and-after-actions"},[t("a",{class:"header-anchor",href:"#before-and-after-actions","aria-hidden":"true"},"#"),e(" Before and after actions")],-1),l=t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,[e("The Before/After actions are "),t("strong",null,"not"),e(" additive. The last one specified is the only one executed.")])],-1),i=t("p",null,"As of Alba 2.0, you can specify actions that run immediately before or after an HTTP request is executed for common setup or teardown work like setting up authentication credentials or tracing or whatever.",-1),r=t("p",null,"Here's a sample:",-1),k=p('<p><a id="snippet-sample_before_and_after"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">sample_usage</span><span class="token punctuation">(</span><span class="token class-name">AlbaHost</span> system<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Synchronously</span>\n    system<span class="token punctuation">.</span><span class="token function">BeforeEach</span><span class="token punctuation">(</span>context <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Modify the HttpContext immediately before each</span>\n        <span class="token comment">// Scenario()/HTTP request is executed</span>\n        context<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Headers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;trace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;something&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    system<span class="token punctuation">.</span><span class="token function">AfterEach</span><span class="token punctuation">(</span>context <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// perform an action immediately after the scenario/HTTP request</span>\n        <span class="token comment">// is executed</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Asynchronously</span>\n    system<span class="token punctuation">.</span><span class="token function">BeforeEachAsync</span><span class="token punctuation">(</span>context <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// do something asynchronous here</span>\n        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    system<span class="token punctuation">.</span><span class="token function">AfterEachAsync</span><span class="token punctuation">(</span>context <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// do something asynchronous here</span>\n        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/before_and_after_actions.cs#L33-L66" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_before_and_after" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);c.render=function(t,e,p,o,c,d){return n(),s("div",null,[u,l,i,r,a(" snippet: sample_before_and_after "),k])};export{o as __pageData,c as default};
