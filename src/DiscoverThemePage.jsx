import {useEffect} from 'react';
import {discoverThemes} from './discoverThemes';
import {HomePhotoCredits} from './HomePhotoCredits';
import './gardens.css';
import './discover-overviews.css';
export function DiscoverThemePage({theme}) {
 useEffect(()=>{const oldTitle=document.title;const meta=document.querySelector('meta[name="description"]');const oldDescription=meta?.content;document.title=theme.name+'｜发现中国 · CHINA GUIDE';if(meta)meta.content=theme.intro;window.scrollTo(0,0);return()=>{document.title=oldTitle;if(meta)meta.content=oldDescription;};},[theme]);
 return <main className="garden-page discover-overview" id="theme-top">
 <header className="garden-header"><a className="brand" href="/" aria-label="CHINA GUIDE 首页"><img className="brand-logo" src="/assets/china-guide-logo.png" alt="CHINA GUIDE"/></a><nav aria-label="专题导航"><a href="/#worlds">发现中国</a><a href="#theme-directions">探索方向</a><a href="#theme-plan">私人定制</a></nav><a className="garden-back" href="/#worlds">返回首页 ↗</a></header>
 <section className="garden-hero"><img src={theme.image} alt={theme.alt} fetchPriority="high"/><div className="garden-hero-shade"/><div className="garden-hero-copy"><p className="eyebrow">发现中国 / {theme.name}</p><h1>{theme.heading[0]}<br/>{theme.heading[1]}</h1><p>{theme.short.split(' / ').join(' · ')}</p><a href="#theme-directions">从这里开始 <span>↓</span></a></div><div className="garden-hero-caption">{theme.caption}<a href="#theme-sources">图片与资料来源 ↗</a></div></section>
 <nav className="garden-pillar-nav discover-theme-nav" aria-label="发现中国六大主题">{discoverThemes.map(t=>t.slug===theme.slug?<strong key={t.slug} aria-current="page">{t.name}</strong>:<a key={t.slug} href={t.path}>{t.name}</a>)}</nav>
 <section className="garden-intro garden-wrap"><p className="eyebrow">{theme.name} · 以兴趣为起点</p><h2>{theme.heading[0]}，<br/>{theme.heading[1]}</h2><div><p>{theme.intro}</p><p className="discover-fit">适合 · {theme.fit}</p></div></section>
 <section id="theme-directions" className="garden-wrap discover-directions"><div className="garden-section-head"><div><p className="eyebrow">四种方式 · 慢慢走近</p><h2>从这些方向开始</h2></div></div><div className="discover-direction-grid">{theme.sections.map((s,i)=><article key={s.title}><p className="garden-kicker"><span>0{i+1}</span>{s.place}</p><h3>{s.title}</h3><p>{s.text}</p>{s.href&&<a href={s.href}>{s.action} ↗</a>}</article>)}</div></section>
 <section className="garden-choose garden-wrap"><p className="eyebrow">私人定制 · 依你的节奏</p><h2>让这一程，更像你</h2><p className="discover-plan-copy">{theme.plan}</p><p className="garden-travel-note">{theme.note}</p></section>
 <section id="theme-plan" className="garden-plan"><p className="eyebrow">从你最想了解的开始</p><h2>把好奇，变成一段私人旅程</h2><p>告诉我们出行时间、同行的人，以及你对{theme.name}的兴趣。<br/>我们会据此讨论路线、接待与预算。</p><a className="primary" href={'/?theme='+theme.slug+'#contact'}>规划我的{theme.name}之旅 ↗</a><small>私家团 · 不设购物安排 · 具体项目与费用以行程确认为准</small></section>
 <section className="garden-sources garden-wrap" id="theme-sources"><details><summary>资料来源与旅行说明 <span>＋</span></summary><p>基础题材核对：2026 年 11 月。体验方向为 CHINA GUIDE 的编辑建议，不代表全部项目已开放或已预约。</p><ul>{theme.sources.map(([title,url])=><li key={url}><a href={url} target="_blank" rel="noreferrer">{title} ↗</a></li>)}</ul><p>图片记录的是对应地点或制作场景，不代表到访当日的季节、天气与开放情况。</p></details></section>
 <HomePhotoCredits/>
 <footer className="garden-footer"><a href="/">CHINA GUIDE</a><span>走进中国，不止于所见</span><a href="#theme-top">回到顶部 ↑</a><small>© 2026 CHINA GUIDE</small></footer>
 </main>;
}
