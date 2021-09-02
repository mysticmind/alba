import{o as s,c as n,a,b as t,d as e,e as p}from"./app.af80ff53.js";const o='{"title":"Http Status Codes","description":"","frontmatter":{},"relativePath":"scenarios/statuscode.md","lastUpdated":1630599447261}',c={},u=t("h1",{id:"http-status-codes"},[t("a",{class:"header-anchor",href:"#http-status-codes","aria-hidden":"true"},"#"),e(" Http Status Codes")],-1),l=t("p",null,"You can declaratively check the status code with this syntax:",-1),i=p('<p><a id="snippet-sample_check_the_status_code"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">check_the_status</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Shorthand for saying that the StatusCode should be 200</span>\n        _<span class="token punctuation">.</span><span class="token function">StatusCodeShouldBeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Or a specific status code</span>\n        _<span class="token punctuation">.</span><span class="token function">StatusCodeShouldBe</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Ignore the status code altogether</span>\n        _<span class="token punctuation">.</span><span class="token function">IgnoreStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/StatusCodes.cs#L7-L22" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_check_the_status_code" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Do note that by default, if you do not specify the expected status code, Alba assumes that the request should return 200 (OK) and will fail the scenario if a different status code is found. You can ignore that check with the <code>Scenario.IgnoreStatusCode()</code> method.</p>',4);c.render=function(t,e,p,o,c,d){return s(),n("div",null,[u,l,a(" snippet: sample_check_the_status_code "),i])};export{o as __pageData,c as default};
