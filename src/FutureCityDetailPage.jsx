import { useEffect } from 'react';
import { discoverThemes } from './discoverThemes';
import { futureCityDetails } from './futureCityDetails';
import './gardens.css';
import './future-details.css';
export function FutureCityDetailPage({ detail }) {
 const theme=discoverThemes.find(t=>t.slug==='future-cities');
 const index=futureCityDetails.indexOf(detail); const photo=theme.sections[index].photo;
 useEffect(()=>{const old=document.title;const meta=document.querySelector('meta[name="description"]');const desc=meta?.content;document.title=detail.city+' · '+detail.label+'｜未来城市 · CHINA GUIDE';if(meta)meta.content=detail.lead;window.scrollTo(0,0);return()=>{document.title=old;if(meta)meta.content=desc;};},[detail]);
 return <main className="garden-page future-detail">
 <header className="garden-header"><a className="brand" href="/" aria-label="CHINA GUIDE 首页"><img className="brand-logo" src="/assets/china-guide-logo.png" alt="CHINA GUIDE" /></a><nav><a href="/discover/future-cities/">未来城市</a><a href="#experiences">深入体验</a><a href="#private-plan">私人定制</a></nav><a className="garden-back" href="/discover/future-cities/#theme-directions">返回主题概览 ↗</a></header>
 <section className="garden-hero"><img src={photo.src} alt={photo.alt} fetchPriority="high"/><div className="garden-hero-shade"/><div className="garden-hero-copy"><p className="eyebrow">发现中国 / 未来城市 / {detail.city}</p><h1>{detail.title[0]}<br/>{detail.title[1]}</h1><p>{detail.label} · 私人旅行灵感</p><a href="#experiences">深入这一程 ↓</a></div><div className="garden-hero-caption">{photo.caption}</div></section>
 <nav className="garden-pillar-nav" aria-label="未来城市体验">{futureCityDetails.map(d=>d===detail?<strong key={d.slug} aria-current="page">{d.city} · {d.label}</strong>:<a key={d.slug} href={'/discover/future-cities/'+d.slug+'/'}>{d.city} · {d.label}</a>)}</nav>
 <section className="garden-intro garden-wrap"><p className="eyebrow">带着一个问题，走近一座城市</p><h2>{detail.question}</h2><div><p>{detail.lead}</p><p>{detail.intro}</p><p className="future-fit">{detail.fit}</p></div></section>
 <section className="garden-wrap" id="experiences"><div className="garden-section-head"><div><p className="eyebrow">从观看，到理解</p><h2>这一程，值得慢下来的三件事</h2></div></div><div className="future-experiences">{detail.experiences.map((e,i)=><article key={e[0]}><p className="garden-kicker"><span>0{i+1}</span>{detail.label}</p><h3>{e[0]}</h3><p>{e[1]}</p><div className="future-observe"><strong>试着这样观察</strong><p>{e[2]}</p></div></article>)}</div></section>
 <section className="garden-reading"><div className="garden-wrap"><p className="eyebrow">按照你的节奏</p><h2>把体验连成一段私人旅程</h2><p className="future-route-intro">下面是体验顺序的建议，可单独安排，也可融入已有行程。具体时长、交通与费用，按出行日期及同行者需求确认。</p><ol className="future-route">{detail.route.map(r=><li key={r}>{r}</li>)}</ol><p className="garden-travel-note">{detail.note}</p></div></section>
 <section className="garden-wrap future-faq"><p className="eyebrow">出发前，你可能想知道</p><h2>关于这一程</h2>{detail.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
 <section id="private-plan" className="garden-plan"><p className="eyebrow">你的兴趣，决定旅程的深度</p><h2>让城市观察，成为你的私人旅程</h2><p>告诉我们你的日期、同行者与最想了解的问题。<br/>从公开可体验的内容出发，为你调整节奏与组合。</p><a className="primary" href="/?theme=future-cities#contact">聊聊我的未来城市之旅 ↗</a><small>本页为旅行灵感，不是已确认的行程或报价；预约、展览与开放情况以出行前核实结果为准。</small></section>
 <section id="detail-sources" className="garden-sources garden-wrap"><details><summary>资料来源与图片说明 ＋</summary><p>基础资料核对：2026年11月。现场开放及活动安排仍需按出行日期确认。</p>{detail.sources.map(([name,url])=><p key={url}><a href={url} target="_blank" rel="noreferrer">{name} ↗</a></p>)}<h3>图片来源</h3><p><a href={photo.source} target="_blank" rel="noreferrer">{photo.caption} · 摄图网 ↗</a><br/>作者：{photo.author}<br/>{photo.license}。图片沿用现有素材记录，图库小样保留原有水印。</p></details></section>
 <footer className="garden-footer"><a href="/">CHINA GUIDE</a><a href="/discover/future-cities/">返回未来城市</a><small>从千年文明，到未来城市</small></footer>
 </main>;
}
