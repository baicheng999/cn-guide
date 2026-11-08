import {useEffect} from 'react';
import credits from '../public/assets/tea/credits.json';
import './gardens.css';
const gardens=[
  {
    "id": "longjing",
    "name": "杭州 · 龙井",
    "city": "浙江 · 杭州",
    "theme": "从西湖向山里，寻找一杯清新",
    "image": 0,
    "caption": "杭州梅家坞 · 龙井茶园",
    "tag": "绿茶与村落",
    "intro": "离开湖岸，沿茶园边的小路走一段。茶树顺着坡地展开，村庄与山林，让一杯茶有了可以亲近的来处。",
    "fact": "龙井村、梅家坞等村落位于西湖龙井传统产区。茶园与村落相依，制茶与饮茶也延续着杭州的地方生活。",
    "look": "可规划茶园边的慢行与龙井品饮；采摘、手工炒制观摩需结合茶季、天气和茶农生产安排提前确认。",
    "fit": "喜欢江南风景、绿茶与轻松慢游的你",
    "source": "https://www.xhlj.org.cn/page/3000/ch01/cat01_02/2024-04-08/17820270780848719.html"
  },
  {
    "id": "wuyi",
    "name": "武夷山 · 岩茶",
    "city": "福建 · 武夷山",
    "theme": "山的气息，也在杯中回响",
    "image": 1,
    "caption": "武夷山 · 茶田风光",
    "tag": "乌龙茶与山水",
    "intro": "先看山，再谈茶。把目光从山间茶园移到茶席，让风景与手艺，在一次安静的品饮里慢慢连起来。",
    "fact": "武夷岩茶属于乌龙茶，其传统制作包含做青、揉捻、烘焙等环节。武夷岩茶制作技艺是理解当地茶文化的重要线索。",
    "look": "可讨论茶园步行与岩茶品鉴，比较不同茶样的香气与口感。制作观摩、茶人交流需提前预约，不能保证恰逢生产。",
    "fit": "喜欢山水、焙火香与制茶技艺的你",
    "source": "https://www.ihchina.cn/art/detail/id/14373.html"
  },
  {
    "id": "anxi",
    "name": "安溪 · 铁观音",
    "city": "福建 · 安溪",
    "theme": "一叶茶香，牵出乡土日常",
    "image": 2,
    "caption": "安溪铁观音 · 成茶特写",
    "tag": "乌龙茶与手艺",
    "intro": "从山坡的茶树，到桌上的盖碗，茶的故事也在人的手中。听一听怎样做茶，再用自己的感受描述这一口。",
    "fact": "安溪以铁观音茶文化著称。乌龙茶制作技艺中的铁观音制作技艺，属于中国传统制茶技艺及其相关习俗所涉及的国家级非遗项目。",
    "look": "可规划产区走访、盖碗冲泡学习与铁观音品饮；具体茶园、茶师及手作环节以接待方确认和生产安排为准。",
    "fit": "喜欢茶乡生活、冲泡与手艺交流的你",
    "source": "https://www.ihchina.cn/Article/Index/detail?id=26457"
  },
  {
    "id": "jingmai",
    "name": "景迈山 · 古茶林",
    "city": "云南 · 普洱澜沧",
    "theme": "走进森林，读懂茶与人的相处",
    "image": 3,
    "caption": "云南景迈山 · 茶园与山地景观",
    "tag": "古茶林与社区",
    "intro": "这里的观看，从茶树之外开始。留意林木的层次、村寨的生活，也留意世代居住于此的人怎样与山林相处。",
    "fact": "普洱景迈山古茶林文化景观是世界文化遗产。当地林下种茶传统，将茶林、森林与村寨共同组织为延续至今的文化景观。",
    "look": "可讨论获准区域内的古茶林步行、村寨文化了解与当地茶品饮。社区拜访需尊重当地意愿；不采摘古茶树，不进入限制区域。",
    "fit": "喜欢森林、文化景观与村寨慢行的你",
    "source": "https://whc.unesco.org/en/list/1665/"
  }
];
export function TeaPage(){useEffect(()=>{document.title='中国茶文化：从茶山到茶席｜China Guide';const meta=document.querySelector('meta[name="description"]');const old=meta?.content;if(meta)meta.content='走进杭州龙井、武夷岩茶、安溪铁观音与景迈山古茶林，认识茶的风土、手艺与日常。';return()=>{if(meta)meta.content=old;}},[]);
return <main className="garden-page tea-page" id="garden-top">
<header className="garden-header"><a className="brand" href="/" aria-label="China Guide 首页"><img className="brand-logo" src="/assets/china-guide-logo.png" alt="CHINA GUIDE"/></a><nav aria-label="茶文化导航"><a href="/#worlds">发现中国</a><a href="#four-gardens">四处茶乡</a><a href="#garden-plan">私人定制</a></nav><a className="garden-back" href="/#worlds">返回首页 ↗</a></header>
<section className="garden-hero"><img src="/assets/aesthetics-refresh/500360142.webp" alt="杭州龙井茶园的坡地与茶树" fetchPriority="high"/><div className="garden-hero-shade"/><div className="garden-hero-copy"><p className="eyebrow">发现中国 / 东方美学 / 茶文化</p><span className="garden-seal" aria-hidden="true">茶 事</span><h1>一杯茶里<br/>遇见中国</h1><p>从一片山林到一席茶，<br/>在风土、手艺与相遇之间，慢慢喝懂中国。</p><a href="#four-gardens">走进四处茶乡 <span>↓</span></a></div><div className="garden-hero-caption">龙井茶园 · 杭州 </div></section>
<div className="garden-pillar-nav"><a href="/discover/eastern-aesthetics/">东方美学</a><a href="/discover/eastern-aesthetics/gardens/">园林</a><a href="/discover/eastern-aesthetics/architecture/">古建</a><strong aria-current="page">茶</strong><a href="/discover/eastern-aesthetics/heritage/">非遗</a><small>本篇 · 茶文化</small></div>
<section className="garden-intro garden-wrap"><p className="eyebrow">不只品茶，也认识它的来处</p><h2>从茶山到茶席，<br/>把时间留给一杯茶</h2><div><p>茶的故事，始于一片土地，也延续在人的手中。种植、采摘、制作、冲泡与分享，让茶成为中国人日常生活中的一种连接。</p><p>我们选了四处茶乡：杭州的江南茶园、武夷山的岩茶、安溪的铁观音，以及景迈山的古茶林。不急着背下茶名，先走近产地，再坐下来感受一杯茶的变化。</p><a href="#garden-reading">看看可以怎样体验茶文化 ↘</a></div></section>
<section id="four-gardens" className="garden-stories garden-wrap"><div className="garden-section-head"><div><p className="eyebrow">四处茶乡 · 四种茶事</p><h2>四处茶乡，四种相遇</h2></div><nav aria-label="选择茶产地">{gardens.map(g=><a key={g.id} href={'#'+g.id}>{g.name} ↘</a>)}</nav></div>{gardens.map((g,i)=><article className={'garden-story '+(i%2?'reverse':'')} id={g.id} key={g.id}><figure><img src={credits[g.image].asset || '/assets/tea/'+g.image+'.webp'} alt={g.caption} loading="lazy"/><figcaption>{g.caption}</figcaption></figure><div className="garden-story-copy"><p className="garden-kicker"><span>0{i+1}</span>{g.city} / {g.tag}</p><h3>{g.name}</h3><h4>{g.theme}</h4><p className="garden-story-intro">{g.intro}</p><p>{g.fact}</p><div className="garden-looking"><strong>可以怎样体验</strong><p>{g.look}</p></div><small>适合 · {g.fit}</small></div></article>)}</section>
<section className="garden-reading" id="garden-reading"><div className="garden-wrap"><p className="eyebrow">从初识到细品</p><h2>用自己的节奏，走近茶文化</h2><div className="garden-reading-grid">{[["01","走茶山","从允许通行的茶园小路出发，听产地介绍，观察茶树、地形与村落。按体力与天气调整步行路线。"],["02","识手艺","通过讲解认识采制过程。生产现场观摩或手作需提前确认，采茶与炒茶受茶季、天气及生产安排影响。"],["03","坐下来喝","在预约茶席上学习简单冲泡，比较香气与口感。可以少量品饮，也可以只闻香、听讲解。"],["04","与人相遇","在主人愿意接待的前提下，交流茶与地方生活。茶师与社区拜访须预约，拍摄前征得同意。"]].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div><p className="tea-season-note">采摘有时，接待有约。春茶并不是全年可参与的活动；即使在产茶季，是否开放体验也需由茶园或工坊确认。页面图片为产地景观记录，不代表你出行时的季相。</p></div></section>
<section className="garden-choose garden-wrap"><p className="eyebrow">从你的兴趣出发</p><h2>哪一处茶乡，与你的兴趣相遇？</h2><div className="garden-choice-grid">{gardens.map(g=><a key={g.id} href={'#'+g.id}><small>{g.city}</small><h3>{g.name}<span>↗</span></h3><p>{g.fit}</p></a>)}</div><p className="garden-travel-note">四处茶乡分布于浙江、福建与云南，建议围绕所在地区分别规划。茶山步行涉及坡地与天气变化，可按体力调整。茶品、季节与工艺各有差异，可按个人口味选择品饮方式。</p></section>
<section className="garden-plan" id="garden-plan"><p className="eyebrow">私人定制 · 依你的节奏</p><h2>想从哪一杯开始？<br/>让我们陪你走近它的来处</h2><p>告诉我们你喜欢的茶、出行时间与同行的人。<br/>我们会结合兴趣、步行节奏与城市行程，为你规划这一程。</p><a className="primary" href="/?tea=1#contact">规划我的茶文化之旅 ↗</a><small>体验以文化了解与品饮为主，不设购物安排。茶园、茶师、工坊及手作环节以预约确认为准。</small></section>
<section className="garden-sources garden-wrap" id="garden-sources"><details><summary>资料来源与图片授权 <span>＋</span></summary><p>茶文化基础资料核对于 2026 年 11 月；观看建议为 China Guide 原创编辑内容。</p><ul>{gardens.map(g=><li key={g.id}><a href={g.source} target="_blank" rel="noreferrer">{g.name} · 官方资料 ↗</a></li>)}</ul><p><a href="https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884" target="_blank" rel="noreferrer">联合国教科文组织 · 中国传统制茶技艺及其相关习俗 ↗</a></p><h3>图片署名</h3><p>图片来源及授权状态按对应图片分别列示。</p>{credits.map((c,i)=><p key={c.id}>{gardens[i].name}：<a href={c.source} target="_blank" rel="noreferrer">{c.title.replace('File:','')}</a> / {c.author} / <a href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a>。处理：{c.changes}。</p>)}</details></section>
<footer className="garden-footer"><a href="/">CHINA GUIDE</a><span>走进中国，不止于所见</span><a href="#garden-top">回到顶部 ↑</a><small>© 2026 CHINA GUIDE</small></footer></main>}
