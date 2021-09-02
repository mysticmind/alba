import{o as n,c as s,a,b as t,d as e,e as p}from"./app.af80ff53.js";const o='{"title":"Extension Model","description":"","frontmatter":{},"relativePath":"guide/extensions.md","lastUpdated":1630599447261}',c={},l=t("h1",{id:"extension-model"},[t("a",{class:"header-anchor",href:"#extension-model","aria-hidden":"true"},"#"),e(" Extension Model")],-1),i=t("p",null,"Alba V5 added a new extension model based on this interface:",-1),u=p('<p><a id="snippet-sample_ialbaextension"></a></p><div class="language-cs"><pre><code><span class="token comment">/// &lt;summary&gt;</span>\n<span class="token comment">/// Models an extension to an AlbaHost</span>\n<span class="token comment">/// &lt;/summary&gt;</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IAlbaExtension</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span><span class="token punctuation">,</span> <span class="token class-name">IAsyncDisposable</span></span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/// &lt;summary&gt;</span>\n    <span class="token comment">/// Called during the initialization of an AlbaHost after the application is started,</span>\n    <span class="token comment">/// so the application DI container is available. Useful for registering setup or teardown</span>\n    <span class="token comment">/// actions on an AlbaHOst</span>\n    <span class="token comment">/// &lt;/summary&gt;</span>\n    <span class="token comment">/// &lt;param name=&quot;host&quot;&gt;&lt;/param&gt;</span>\n    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>\n    <span class="token return-type class-name">Task</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> host<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">/// &lt;summary&gt;</span>\n    <span class="token comment">/// Allow an extension to alter the application&#39;s</span>\n    <span class="token comment">/// IHostBuilder prior to starting the application</span>\n    <span class="token comment">/// &lt;/summary&gt;</span>\n    <span class="token comment">/// &lt;param name=&quot;builder&quot;&gt;&lt;/param&gt;</span>\n    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>\n    <span class="token return-type class-name">IHostBuilder</span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IHostBuilder</span> builder<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba/IAlbaExtension.cs#L7-L32" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_ialbaextension" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>When you are initializing an <code>AlbaHost</code>, you can pass in an optional array of extensions like this sample from the security stub testing:</p>',4),r=p('<p><a id="snippet-sample_bootstrapping_with_stub_extension"></a></p><div class="language-cs"><pre><code><span class="token comment">// This is calling your real web service&#39;s configuration</span>\n<span class="token class-name"><span class="token keyword">var</span></span> hostBuilder <span class="token operator">=</span> WebAppSecuredWithJwt<span class="token punctuation">.</span>Program\n    <span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This is a new Alba v5 extension that can &quot;stub&quot; out</span>\n<span class="token comment">// JWT token authentication</span>\n<span class="token class-name"><span class="token keyword">var</span></span> securityStub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthenticationStub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span>JwtRegisteredClaimNames<span class="token punctuation">.</span>Email<span class="token punctuation">,</span> <span class="token string">&quot;guy@company.com&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">WithName</span><span class="token punctuation">(</span><span class="token string">&quot;jeremy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// AlbaHost was &quot;SystemUnderTest&quot; in previous versions of</span>\n<span class="token comment">// Alba</span>\ntheHost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AlbaHost</span><span class="token punctuation">(</span>hostBuilder<span class="token punctuation">,</span> securityStub<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/web_api_authentication_with_stub.cs#L21-L38" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_bootstrapping_with_stub_extension" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);c.render=function(t,e,p,o,c,k){return n(),s("div",null,[l,i,a(" snippet: sample_IAlbaExtension "),u,a(" snippet: sample_bootstrapping_with_stub_extension "),r])};export{o as __pageData,c as default};
