import{o as n,c as s,a,b as t,d as e,e as p}from"./app.af80ff53.js";const o='{"title":"Working with Plain Text Requests","description":"","frontmatter":{},"headers":[{"level":2,"title":"Reading the Response Text","slug":"reading-the-response-text"},{"level":2,"title":"Assertions against the Response Text","slug":"assertions-against-the-response-text"},{"level":2,"title":"Sending Text","slug":"sending-text"}],"relativePath":"scenarios/text.md","lastUpdated":1630599447261}',c={},i=t("h1",{id:"working-with-plain-text-requests"},[t("a",{class:"header-anchor",href:"#working-with-plain-text-requests","aria-hidden":"true"},"#"),e(" Working with Plain Text Requests")],-1),u=t("p",null,"If you find yourself needing to test HTTP endpoints that either send text or return text, Alba has you covered with some built in helpers.",-1),l=t("h2",{id:"reading-the-response-text"},[t("a",{class:"header-anchor",href:"#reading-the-response-text","aria-hidden":"true"},"#"),e(" Reading the Response Text")],-1),r=t("p",null,"To read the response body as text, use this syntax:",-1),k=p('<p><a id="snippet-sample_read_text"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">read_text</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> host<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/output&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// This deserializes the response body to the</span>\n    <span class="token comment">// designated Output type</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> outputString <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">ReadAsText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// do assertions against the Output string</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/JsonAndXml.cs#L72-L86" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_read_text" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="assertions-against-the-response-text"><a class="header-anchor" href="#assertions-against-the-response-text" aria-hidden="true">#</a> Assertions against the Response Text</h2><p>You have these built in operations for asserting on the response body text:</p>',5),d=p('<p><a id="snippet-sample_assert_on_text"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">assert_on_content</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> host<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        _<span class="token punctuation">.</span><span class="token function">ContentShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;exactly this&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        _<span class="token punctuation">.</span><span class="token function">ContentShouldContain</span><span class="token punctuation">(</span><span class="token string">&quot;some snippet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        _<span class="token punctuation">.</span><span class="token function">ContentShouldNotContain</span><span class="token punctuation">(</span><span class="token string">&quot;some warning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/JsonAndXml.cs#L88-L100" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_assert_on_text" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="sending-text"><a class="header-anchor" href="#sending-text" aria-hidden="true">#</a> Sending Text</h2><p>Lastly, you can send text to an HTTP endpoint with this syntax:</p>',5),h=p('<p><a id="snippet-sample_send_text"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">send_text</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> host<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        _<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&quot;some text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/textdata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/JsonAndXml.cs#L103-L111" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_send_text" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Do note that this also sets the <code>content-length</code> header to the string length and sets the <code>content-type</code> header of the request to &quot;text/plain.&quot;</p>',4);c.render=function(t,e,p,o,c,_){return n(),s("div",null,[i,u,l,r,a(" snippet: sample_read_text "),k,a(" snippet: sample_assert_on_text "),d,a(" snippet: sample_send_text "),h])};export{o as __pageData,c as default};
