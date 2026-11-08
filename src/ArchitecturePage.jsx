import {useEffect} from 'react';
import credits from '../public/assets/architecture/credits.json';
import './gardens.css';
const gardens=[
  {
    "id": "gugong",
    "name": "故宫 · 太和殿",
    "city": "北京 · 东城",
    "theme": "沿着轴线，读懂宫殿的秩序",
    "image": 0,
    "tag": "宫殿与礼制",
    "intro": "走过院落，再抬头看屋顶。开阔与收束、高台与殿宇，让一段行走有了鲜明的节奏。",
    "fact": "北京故宫是明清两代的皇宫。太和殿位于外朝核心区域，宫殿群的轴线、院落与建筑等级，体现了传统宫廷礼制。",
    "look": "从开放参观区域观察太和殿的台基、屋顶和前方广场：建筑如何让人感受到庄重？",
    "fit": "喜欢历史、宫殿建筑与空间秩序的你",
    "source": "https://whc.unesco.org/en/list/439/"
  },
  {
    "id": "foguang",
    "name": "佛光寺 · 东大殿",
    "city": "山西 · 五台县",
    "theme": "在一座木构殿堂前，遇见唐代",
    "image": 1,
    "tag": "木构与时间",
    "intro": "远离宏大的城市天际线，把目光放到屋檐下。木材如何承托屋顶，构件之间又怎样彼此照应？",
    "fact": "佛光寺东大殿是存世的重要唐代木构建筑，也是五台山世界文化遗产的组成部分。建筑与彩塑共同承载着寺院的历史。",
    "look": "先看屋顶的舒展轮廓，再从允许停留的位置观察檐下斗拱。不必急着记术语，先感受结构与比例。",
    "fit": "喜欢木构、建筑史与寺院艺术的你",
    "source": "https://whc.unesco.org/en/list/1279/"
  },
  {
    "id": "xuankong",
    "name": "悬空寺",
    "city": "山西 · 浑源",
    "theme": "当建筑，遇见一面山崖",
    "image": 2,
    "tag": "山地与营造",
    "intro": "从远处看，殿阁像嵌在岩壁之间。走近之前，先看看人造的线条如何回应山体的起伏。",
    "fact": "悬空寺依恒山金龙峡崖壁而建，殿阁与通道顺着山势展开。它既是木构建筑的独特实例，也体现了多种传统思想相交融的文化。",
    "look": "在地面观景区域比较岩壁、屋顶与廊道的关系：哪里顺应了地形，哪里改变了你的视线？",
    "fit": "喜欢山地风景与建筑巧思的你",
    "source": "https://www.dt.gov.cn/english/placestovisit/202501/462779d3cdef476785e094810e2b8b54.shtml"
  },
  {
    "id": "tulou",
    "name": "福建土楼 · 田螺坑",
    "city": "福建 · 南靖",
    "theme": "围合的院落，向内生长的生活",
    "image": 3,
    "tag": "聚居与乡土",
    "intro": "建筑不只是一处供人观看的景点，也是人们曾经、或仍在共同生活的地方。把目光从外形移向院落，故事才刚开始。",
    "fact": "福建土楼以夯土墙体和集体居住空间著称。田螺坑土楼群是世界遗产福建土楼的组成部分，楼群与山地村落环境相互依存。",
    "look": "先远看楼群与山坡的关系，再在获准进入的区域观察公共院落。尊重住户的门槛与日常，不把私宅当成展厅。",
    "fit": "喜欢乡土建筑、聚落与地方生活的你",
    "source": "https://whc.unesco.org/en/list/1113/"
  },
  {
    "id": "diaolou",
    "name": "开平碉楼 · 自力村",
    "city": "广东 · 开平",
    "theme": "从一座楼，望见海那边",
    "image": 4,
    "tag": "侨乡与交融",
    "intro": "田野之间的楼，既有熟悉的生活痕迹，也有远方带回来的装饰语言。建筑在这里，成为迁徙与归乡的见证。",
    "fact": "开平碉楼融合了中国乡村建筑与西方装饰形式，兼具居住、防御等用途。自力村属于世界遗产开平碉楼与村落；其中不少碉楼建于近代，呈现出独特的侨乡面貌。",
    "look": "对照楼身、门窗与顶部装饰，再把目光拉回周边村屋和田野：不同建筑语言怎样在同一处相遇？",
    "fit": "喜欢侨乡历史、中西交流与村落摄影的你",
    "source": "https://whc.unesco.org/en/list/1112/"
  }
];
export function ArchitecturePage(){useEffect(()=>{document.title='中国古建：从宫殿到村落｜China Guide';const meta=document.querySelector('meta[name="description"]');const old=meta?.content;if(meta)meta.content='从故宫、佛光寺到悬空寺、福建土楼与开平碉楼，走近建筑背后的历史、营造与生活。';return()=>{if(meta)meta.content=old;}},[]);
return <main className="garden-page architecture-page" id="garden-top">
<header className="garden-header"><a className="brand" href="/" aria-label="China Guide 首页"><img className="brand-logo" src="/assets/china-guide-logo.png" alt="CHINA GUIDE"/></a><nav aria-label="古建导航"><a href="/#worlds">发现中国</a><a href="#four-gardens">五处建筑</a><a href="#garden-plan">私人定制</a></nav><a className="garden-back" href="/#worlds">返回首页 ↗</a></header>
<section className="garden-hero"><img src="/assets/architecture/0.webp" alt="故宫太和殿的屋顶、台基与广场" fetchPriority="high"/><div className="garden-hero-shade"/><div className="garden-hero-copy"><p className="eyebrow">发现中国 / 东方美学 / 古建</p><span className="garden-seal" aria-hidden="true">古 建</span><h1>屋檐之下<br/>读懂中国</h1><p>从一座殿堂到一片村落，<br/>看见结构之美，也看见建筑里的人间。</p><a href="#four-gardens">走进五处建筑 <span>↓</span></a></div><div className="garden-hero-caption">太和殿 · 北京 <a href="#garden-sources">图片署名与授权 ↗</a></div></section>
<div className="garden-pillar-nav"><span>东方美学</span><a href="/discover/eastern-aesthetics/gardens/">园林</a><strong aria-current="page">古建</strong><span>茶</span><span>非遗</span><small>本篇 · 古建</small></div>
<section className="garden-intro garden-wrap"><p className="eyebrow">不只看建筑，也看它为何而建</p><h2>屋檐之下，<br/>有中国人的生活与理想</h2><div><p>一座建筑，回应着一个时代的需要。宫殿组织礼仪，寺院承载信仰，村落安顿日常。材料、地形与生活方式，也在塑造它的模样。</p><p>这一篇，从皇家宫殿、唐代木构、山崖寺院走到土楼与侨乡。时间跨度从古代延伸至近代；我们关心的不只是年代，更是人们怎样把心中的秩序，建成可以生活的空间。</p><a href="#garden-reading">先学会怎样看建筑 ↘</a></div></section>
<section id="four-gardens" className="garden-stories garden-wrap"><div className="garden-section-head"><div><p className="eyebrow">五处建筑 · 五种观看</p><h2>不同的营造，相通的人间</h2></div><nav aria-label="选择建筑">{gardens.map(g=><a key={g.id} href={'#'+g.id}>{g.name} ↘</a>)}</nav></div>{gardens.map((g,i)=><article className={'garden-story '+(i%2?'reverse':'')} id={g.id} key={g.id}><figure><img src={'/assets/architecture/'+g.image+'.webp'} alt={g.name+'的建筑实景'} loading="lazy"/><figcaption>{g.name} · {g.city}<a href="#garden-sources">图片署名 ↗</a></figcaption></figure><div className="garden-story-copy"><p className="garden-kicker"><span>0{i+1}</span>{g.city} / {g.tag}</p><h3>{g.name}</h3><h4>{g.theme}</h4><p className="garden-story-intro">{g.intro}</p><p>{g.fact}</p><div className="garden-looking"><strong>带着一个问题去看</strong><p>{g.look}</p></div><small>适合 · {g.fit}</small></div></article>)}</section>
<section className="garden-reading" id="garden-reading"><div className="garden-wrap"><p className="eyebrow">给第一次看古建的你</p><h2>四个角度，慢慢看懂一座建筑</h2><div className="garden-reading-grid">{[["01","看格局","先看建筑怎样落在地形中，再看院落与轴线。人在空间里如何被引导？"],["02","看结构","从柱、梁到屋顶，观察构件之间的关系。看得见的支撑，是理解建筑的一条线索。"],["03","看材料","木、土、砖与石各有性格。留意纹理与接合处，也留意后来的修缮痕迹。"],["04","看生活","谁建造它，谁在这里生活？结合地方历史，理解建筑与信仰、家庭和迁徙的联系。"]].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
<section className="garden-choose garden-wrap"><p className="eyebrow">从你的兴趣出发</p><h2>从你最想读懂的建筑出发</h2><div className="garden-choice-grid">{gardens.map(g=><a key={g.id} href={'#'+g.id}><small>{g.city}</small><h3>{g.name}<span>↗</span></h3><p>{g.fit}</p></a>)}</div><p className="garden-travel-note">五处建筑分布于北京、山西、福建与广东，适合围绕所在地区分别规划。悬空寺涉及登临与台阶，恐高或行动不便者可优先讨论地面观看安排。参观、预约及殿内拍摄要求以管理方当日规定为准。</p></section>
<section className="garden-plan" id="garden-plan"><p className="eyebrow">私人定制 · 依你的节奏</p><h2>想先推开哪一扇门？<br/>让我们从那里出发</h2><p>告诉我们你感兴趣的建筑、出行时间与同行的人。<br/>我们会结合兴趣、步行节奏与城市行程，为你规划这一程。</p><a className="primary" href="/?architecture=1#contact">规划我的古建之旅 ↗</a><small>可讨论建筑讲解、村落慢游与亲子观察；讲解服务与参观范围以行程确认为准。</small></section>
<section className="garden-sources garden-wrap" id="garden-sources"><details><summary>资料来源与图片授权 <span>＋</span></summary><p>建筑基础资料核对于 2026 年 11 月；观看建议为 China Guide 原创编辑内容。</p><ul>{gardens.map(g=><li key={g.id}><a href={g.source} target="_blank" rel="noreferrer">{g.name} · 官方资料 ↗</a></li>)}</ul><h3>图片署名</h3><p>图片按各自开放许可使用；以下许可仅适用于对应图片。</p>{credits.map((c,i)=><p key={c.id}>{gardens[i].name}：<a href={c.source} target="_blank" rel="noreferrer">{c.title.replace('File:','')}</a> / {c.author} / <a href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a>。处理：{c.changes}。</p>)}</details></section>
<footer className="garden-footer"><a href="/">CHINA GUIDE</a><span>走进中国，不止于所见</span><a href="#garden-top">回到顶部 ↑</a><small>© 2026 CHINA GUIDE</small></footer></main>}
