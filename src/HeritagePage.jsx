import {useEffect} from 'react';
import credits from '../public/assets/heritage/credits.json';
import './gardens.css';
const gardens=[
  {
    "id": "kunqu",
    "name": "昆曲",
    "city": "江苏 · 苏州与昆山",
    "theme": "一转身，一开腔，故事便有了形状",
    "image": 0,
    "tag": "声音与身段",
    "caption": "昆曲演出影像 · 杭州大剧院",
    "intro": "先不急着听懂每一个字。看演员的一次回眸、一段步法，听曲调与伴奏怎样把情绪慢慢展开。",
    "fact": "昆曲与苏州昆山有着深厚渊源，融合唱腔、念白、身段与音乐，是联合国教科文组织人类非物质文化遗产代表作名录项目。",
    "look": "可讨论有导赏的观演，先认识剧情与人物，再观看公开演出。剧目、场次与字幕以剧院安排为准；身段体验或演员交流需另行确认。",
    "fit": "喜欢戏曲、文学与舞台艺术的你",
    "source": "https://ich.unesco.org/en/RL/kun-qu-opera-00004"
  },
  {
    "id": "suxiu",
    "name": "苏绣",
    "city": "江苏 · 苏州",
    "theme": "把光与颜色，慢慢绣进丝线",
    "image": 1,
    "tag": "针线与耐心",
    "caption": "苏州丝绣屏风作品展示",
    "intro": "远看是一幅图，走近才看见线的方向。绣面的层次，来自一针一线之间细微的选择。",
    "fact": "苏绣是国家级非遗代表性项目，以丝线和针法表现图案与层次。作品之外，劈线、配色与运针的经验，也在传习中延续。",
    "look": "可规划作品赏析与基础针法体验，结合兴趣讨论工作室拜访。具体绣师、课程与材料需预约确认；入门体验只学习适合初学者的步骤。",
    "fit": "喜欢纺织、色彩与安静手作的你",
    "source": "https://www.ihchina.cn/project_details/13978/"
  },
  {
    "id": "porcelain",
    "name": "景德镇手工制瓷技艺",
    "city": "江西 · 景德镇",
    "theme": "从一团泥，到一件器物",
    "image": 2,
    "tag": "泥土与火候",
    "caption": "景德镇传统制瓷工坊 · 瓷坯绘饰",
    "intro": "一件器物的背后，往往不止一双手。沿着泥、坯、釉与火的线索，看看形状如何被一点点留下。",
    "fact": "景德镇手工制瓷技艺是国家级非遗代表性项目，包含成型、修坯、装饰、施釉与烧成等相互衔接的工序，体现细致的专业分工。",
    "look": "可讨论工艺导览，以及预约工坊的拉坯或彩绘入门。烧制、成品领取、邮寄时长及费用需提前确认；不承诺当天带走烧成作品。",
    "fit": "喜欢器物、陶瓷与动手创作的你",
    "source": "https://www.ihchina.cn/project_details/14270/"
  },
  {
    "id": "xuanpaper",
    "name": "宣纸传统制作技艺",
    "city": "安徽 · 泾县",
    "theme": "一张纸里，藏着水与时间",
    "image": 3,
    "tag": "纤维与书写",
    "caption": "安徽博物院 · 宣纸制作工艺场景展陈",
    "intro": "先看纸从哪里来，再看墨怎样落下。纤维、水和人的协作，让薄薄一张纸有了丰富的质感。",
    "fact": "宣纸传统制作技艺以安徽泾县为重要传承地，使用青檀树皮、稻草等原料，历经多道手工工序，是人类非物质文化遗产代表作名录项目。",
    "look": "可讨论工艺展陈参观、开放生产环节观摩与纸墨体验。捞纸等动手环节需由场馆确认；短时体验不等于完成一张宣纸的全部制作。",
    "fit": "喜欢纸张、书画与传统材料的你",
    "source": "https://ich.unesco.org/en/RL/traditional-handicrafts-of-making-xuan-paper-00201"
  }
];
export function HeritagePage(){useEffect(()=>{document.title='中国非遗：在一双手中，遇见传承｜China Guide';const meta=document.querySelector('meta[name="description"]');const old=meta?.content;if(meta)meta.content='从昆曲、苏绣到景德镇手工制瓷与宣纸制作，认识中国非遗背后的人、技艺与生活。';return()=>{if(meta)meta.content=old;}},[]);
return <main className="garden-page heritage-page" id="garden-top">
<header className="garden-header"><a className="brand" href="/" aria-label="China Guide 首页"><img className="brand-logo" src="/assets/china-guide-logo.png" alt="CHINA GUIDE"/></a><nav aria-label="非遗导航"><a href="/#worlds">发现中国</a><a href="#four-gardens">四项非遗</a><a href="#garden-plan">私人定制</a></nav><a className="garden-back" href="/#worlds">返回首页 ↗</a></header>
<section className="garden-hero"><img src="/assets/heritage/2.webp" alt="景德镇制瓷工坊中为瓷坯绘饰的工匠" fetchPriority="high"/><div className="garden-hero-shade"/><div className="garden-hero-copy"><p className="eyebrow">发现中国 / 东方美学 / 非遗</p><span className="garden-seal" aria-hidden="true">传 承</span><h1>一双手中<br/>遇见传承</h1><p>从一段唱腔到一针丝线，<br/>走近仍在延续的技艺，也走近让它延续的人。</p><a href="#four-gardens">走进四项非遗 <span>↓</span></a></div><div className="garden-hero-caption">制瓷工坊 · 景德镇 <a href="#garden-sources">图片署名与授权 ↗</a></div></section>
<div className="garden-pillar-nav"><span>东方美学</span><a href="/discover/eastern-aesthetics/gardens/">园林</a><a href="/discover/eastern-aesthetics/architecture/">古建</a><a href="/discover/eastern-aesthetics/tea/">茶</a><strong aria-current="page">非遗</strong><small>本篇 · 非遗</small></div>
<section className="garden-intro garden-wrap"><p className="eyebrow">从作品走近手艺，从手艺认识人</p><h2>传承不只留在过去，<br/>也发生在今天</h2><div><p>非遗是人们在生活中实践、传授并不断延续的知识与技艺。它可能是一段唱腔，也可能是用针、用泥、用纸的经验；作品之外，还有学习它的人和承载它的地方。</p><p>我们从四个方向开始：昆曲、苏绣、景德镇手工制瓷和宣纸传统制作。把观看、聆听与入门尝试放进旅程，给技艺背后的耐心多留一点时间。</p><a href="#garden-reading">看看可以怎样走近非遗 ↘</a></div></section>
<section id="four-gardens" className="garden-stories garden-wrap"><div className="garden-section-head"><div><p className="eyebrow">四项非遗 · 四种传承</p><h2>四项非遗，四种相遇</h2></div><nav aria-label="选择非遗项目">{gardens.map(g=><a key={g.id} href={'#'+g.id}>{g.name} ↘</a>)}</nav></div>{gardens.map((g,i)=><article className={'garden-story '+(i%2?'reverse':'')} id={g.id} key={g.id}><figure><img src={'/assets/heritage/'+g.image+'.webp'} alt={g.caption} loading="lazy"/><figcaption>{g.caption}<a href="#garden-sources">图片署名 ↗</a></figcaption></figure><div className="garden-story-copy"><p className="garden-kicker"><span>0{i+1}</span>{g.city} / {g.tag}</p><h3>{g.name}</h3><h4>{g.theme}</h4><p className="garden-story-intro">{g.intro}</p><p>{g.fact}</p><div className="garden-looking"><strong>可以怎样体验</strong><p>{g.look}</p></div><small>适合 · {g.fit}</small></div></article>)}</section>
<section className="garden-reading" id="garden-reading"><div className="garden-wrap"><p className="eyebrow">先认识，再尝试</p><h2>与技艺相遇的四种方式</h2><div className="garden-reading-grid">{[["01","听懂一点","观演前了解剧情与人物，或听一段工艺介绍。先获得一个线索，再带着好奇去看。"],["02","看见细处","留意身段、运针、修坯或纸张的纹理。观摩以开放区域为限，拍摄前询问接待方。"],["03","亲手试试","选择适合年龄与兴趣的入门活动。材料、工具、作品后续处理与费用在预约时说明。"],["04","留一点时间","给师傅的工作留出空间。交流和拜访以对方意愿为前提，体验节奏依接待安排调整。"]].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div><p className="tea-season-note">看一场演出、体验一针刺绣，并不等于掌握整门技艺。我们重视理解过程；演出日历、师傅档期、工坊生产与成品交付均以预约确认为准。</p></div></section>
<section className="garden-choose garden-wrap"><p className="eyebrow">从你的兴趣出发</p><h2>哪一种传承，让你想多停留？</h2><div className="garden-choice-grid">{gardens.map(g=><a key={g.id} href={'#'+g.id}><small>{g.city}</small><h3>{g.name}<span>↗</span></h3><p>{g.fit}</p></a>)}</div><p className="garden-travel-note">四个方向分布于江苏、江西与安徽，可围绕所在城市分别规划。昆曲与宣纸制作在联合国教科文组织人类非遗代表作名录中有对应项目；苏绣与景德镇手工制瓷的项目资料见中国非物质文化遗产网。不同名录分别列示。</p></section>
<section className="garden-plan" id="garden-plan"><p className="eyebrow">私人定制 · 依你的节奏</p><h2>你想听谁的故事？<br/>让我们从一门手艺出发</h2><p>告诉我们你感兴趣的非遗项目、出行时间与同行的人。<br/>我们会结合兴趣、步行节奏与城市行程，为你规划这一程。</p><a className="primary" href="/?heritage=1#contact">规划我的非遗之旅 ↗</a><small>不设购物安排。演出、工坊、师傅与体验内容均需预约确认；传承人会面不作为默认承诺。</small></section>
<section className="garden-sources garden-wrap" id="garden-sources"><details><summary>资料来源与图片授权 <span>＋</span></summary><p>非遗基础资料核对于 2026 年 11 月；观看建议为 China Guide 原创编辑内容。</p><ul>{gardens.map(g=><li key={g.id}><a href={g.source} target="_blank" rel="noreferrer">{g.name} · 官方资料 ↗</a></li>)}</ul><h3>图片署名</h3><p>图片按各自开放许可使用；以下许可仅适用于对应图片。</p>{credits.map((c,i)=><p key={c.id}>{gardens[i].name}：<a href={c.source} target="_blank" rel="noreferrer">{c.title.replace('File:','')}</a> / {c.author} / <a href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a>。处理：{c.changes}。</p>)}</details></section>
<footer className="garden-footer"><a href="/">CHINA GUIDE</a><span>走进中国，不止于所见</span><a href="#garden-top">回到顶部 ↑</a><small>© 2026 CHINA GUIDE</small></footer></main>}
