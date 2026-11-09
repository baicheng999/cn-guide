import { DestinationCityPage } from "./DestinationCityPage";
import { DestinationItinerarySection } from "./DestinationItinerarySection";
import { DestinationItineraryPage } from "./DestinationItineraryPage";
import { destinationItineraries, destinationCities } from "./destinationItineraries";
import { FoodCultureDetailPage } from "./FoodCultureDetailPage";
import { foodCultureDetails } from "./foodCultureDetails";
import { LandscapeDetailPage } from "./LandscapeDetailPage";
import { landscapeDetails } from "./landscapeDetails";
import { InfrastructureDetailPage } from "./InfrastructureDetailPage";
import { infrastructureDetails } from "./infrastructureDetails";
import { FutureCityDetailPage } from "./FutureCityDetailPage";
import { futureCityDetails } from "./futureCityDetails";
import { DiscoverThemePage } from "./DiscoverThemePage";
import { discoverThemes } from "./discoverThemes";
import { HomePhotoCredits } from "./HomePhotoCredits";
import "./home-photos.css";
import "./hero-worlds.css";
import "./discover-polish.css";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { guidePages } from "./guideContent";
import { HeritagePage } from "./HeritagePage";
import { TeaPage } from "./TeaPage";
import { ArchitecturePage } from "./ArchitecturePage";
import { GardenPage } from "./GardenPage";
import { PublishedJourneys } from "./PublishedJourneys";
import "./song-decor.css";
import "./material-decor.css";

const worlds = [
  {
    "name": "东方美学",
    "image": "/assets/discover-photos/tiantan-a.webp",
    "alt": "暖光下仰望北京天坛祈年殿三重檐",
    "note": "园林、古建、茶与非遗",
    "position": "48% 48%"
  },
  {
    "name": "未来城市",
    "image": "/assets/discover-photos/city-approved.webp",
    "alt": "深圳湾人才公园水面与华润大厦春笋天际线",
    "note": "科技、设计与城市生活",
    "position": "51% 48%"
  },
  {
    "name": "超级基建",
    "image": "/assets/discover-photos/airport-approved.webp",
    "alt": "日落时北京大兴机场航站楼放射形全景",
    "note": "高铁、机场与超级工程",
    "position": "51% 54%"
  },
  {
    "name": "山河自然",
    "image": "/assets/home-photos/hero.webp",
    "alt": "桂林阳朔漓江河湾与青绿峰林全景",
    "note": "漓江峰林、峡谷与乡间慢行",
    "position": "66% 50%"
  },
  {
    "name": "饮食日常",
    "image": "/assets/discover-photos/food-approved.webp",
    "alt": "炭火上的羊肉串与现场翻烤撒料动作",
    "note": "市场、早餐与地方风味",
    "position": "58% 48%"
  },
  {
    "name": "人与文化",
    "image": "/assets/discover-photos/culture.webp",
    "alt": "手艺人用双手在陶轮上拉坯",
    "note": "日常相遇与手艺传承",
    "position": "56% 48%"
  }
];
const worldTopicLabels = [
  ["园林", "古建", "茶文化", "非遗"],
  ["城市更新", "设计文化", "低碳生活", "科技观察"],
  ["跨海桥梁", "高铁", "机场建筑", "江河工程"],
  ["桂林峰林", "张家界", "云南河谷", "乡间慢行"],
  ["广府早茶", "川味茶馆", "市场食材", "地方餐桌"],
  ["工坊手艺", "村落社区", "街巷日常", "川剧聆听"],
];
const assurances = [
  { title: "因你而定", note: "依兴趣，也依节奏" },
  { title: "熟门知路", note: "在地向导，从容相伴" },
  { title: "专心去看", note: "不设购物安排" },
  { title: "全程照应", note: "从抵达到归程" },
];
const serviceWays = [
  { no: "01", id: "wellness", title: "康养医疗服务", text: "来华就医、体检与康养的联络、翻译及行程协助。", action: "了解康养医疗" },
  { no: "02", id: "business", title: "商务访问支持", text: "企业访问、产业考察与跨文化沟通支持。", action: "了解商务服务" },
];
const languageRoutes = [
  { code: "zh-CN", label: "简体中文", path: "/", ready: true },
  { code: "en", label: "English", path: "/en/", ready: false },
  { code: "zh-Hant", label: "繁體中文", path: "/zh-hant/", ready: false },
  { code: "vi", label: "Tiếng Việt", path: "/vi/", ready: false },
  { code: "ms", label: "Bahasa Melayu", path: "/ms/", ready: false },
  { code: "th", label: "ภาษาไทย", path: "/th/", ready: false },
  { code: "id", label: "Bahasa Indonesia", path: "/id/", ready: false },
];
const guideRoutes = [
  { no: "01", label: "入境准备", path: "/guide/entry/", ready: true },
  { no: "02", label: "移动支付", path: "/guide/payments/", ready: true },
  { no: "03", label: "网络通信", path: "/guide/connectivity/", ready: true },
  { no: "04", label: "城际交通", path: "/guide/transport/", ready: true },
];

function GuidePage({ page }) {
  useEffect(() => {
    document.title = `${page.title}｜CHINA GUIDE 来华指南`;
    window.scrollTo(0, 0);
  }, [page]);

  return <main className="guide-page">
    <header className="guide-page-header">
      <a className="brand" href="/" aria-label="返回 CHINA GUIDE 首页"><span className="brand-mark" aria-hidden="true">山</span><span><strong>CHINA GUIDE</strong><small>走进中国，不止于所见</small></span></a>
      <a className="guide-back" href="/#guide">返回来华指南</a>
    </header>
    <section className="guide-hero">
      <p className="eyebrow">来华指南 · {page.no}</p>
      <h1>{page.title}</h1>
      <p>{page.intro}</p>
      <span>信息核对：2026年11月</span>
    </section>
    <section className="guide-content">
      <div className="guide-article">
        {page.sections.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><div><h2>{title}</h2><p>{text}</p></div></article>)}
      </div>
      <aside>
        <h2>出发前提醒</h2>
        <p>签证、支付限额及交通规则可能调整。请在出发前通过下列官方来源再次确认。</p>
        <div className="guide-sources">{page.sources.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{label}<span>↗</span></a>)}</div>
      </aside>
    </section>
    <section className="guide-next">
      <p className="eyebrow">需要有人一起准备</p>
      <h2>把第一次中国之行<br />安排得从容一些</h2>
      <a className="primary" href="/#contact">开始咨询</a>
    </section>
    <footer><a className="footer-brand" href="/"><strong>CHINA GUIDE</strong><span>走进中国，不止于所见</span></a><p>本页提供一般旅行信息，不构成法律、移民、金融或医疗意见。<br />© 2026 CHINA GUIDE</p></footer>
  </main>;
}

export function App() {
  useEffect(() => { const hash=window.location.hash; if(hash !== "#destinations" && hash !== "#more-destinations" && !hash.startsWith("#destination-")) return; const timer=window.setTimeout(()=>document.getElementById(hash.slice(1))?.scrollIntoView({behavior:"instant",block:"start"}),150);return()=>window.clearTimeout(timer); }, []);
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [contactError, setContactError] = useState("");
  const [formData, setFormData] = useState({ service: "", timing: "", group: "", city: "", interests: "", name: "", region: "", email: "", chat: "", reply: "电子邮箱" });
  useEffect(() => { if (new URLSearchParams(window.location.search).get("garden") === "1") { setFormData(current => ({ ...current, service: "私人旅行定制", interests: "希望了解中国园林：拙政园、留园、颐和园、余荫山房。" })); setModalOpen(true); } }, []);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("architecture") === "1") { setFormData(current => ({ ...current, service: "私人旅行定制", interests: "希望了解中国古建：故宫、佛光寺、悬空寺、福建土楼与开平碉楼。" })); setModalOpen(true); } }, []);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("tea") === "1") { setFormData(current => ({ ...current, service: "私人旅行定制", interests: "希望了解茶文化：杭州龙井、武夷岩茶、安溪铁观音或景迈山古茶林。" })); setModalOpen(true); } }, []);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("heritage") === "1") { setFormData(current => ({ ...current, service: "私人旅行定制", interests: "希望了解非遗：昆曲、苏绣、景德镇手工制瓷或宣纸传统制作。" })); setModalOpen(true); } }, []);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => setPointer({ x: (event.clientX / innerWidth - .5) * 12, y: (event.clientY / innerHeight - .5) * 8 });
    addEventListener("pointermove", onMove);
    return () => removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const section = document.querySelector("#worlds");
    const stage = section?.querySelector(".world-stage");
    if (!section || !stage) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const range = Math.max(1, section.offsetHeight - innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      const shift = Math.max(0, stage.scrollWidth - innerWidth + Math.min(120, innerWidth * .08));
      section.style.setProperty("--world-progress", progress.toFixed(4));
      section.style.setProperty("--world-shift", `${-progress * shift}px`);
      const next = Math.min(worlds.length - 1, Math.round(progress * (worlds.length - 1)));
      setActive((current) => current === next ? current : next);
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", requestUpdate, { passive: true });
    addEventListener("resize", requestUpdate);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", requestUpdate); removeEventListener("resize", requestUpdate); };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === "Escape") { setModalOpen(false); setMenuOpen(false); } };
    document.body.style.overflow = modalOpen ? "hidden" : "";
    addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; removeEventListener("keydown", onKeyDown); };
  }, [modalOpen]);

  const scrollToWorlds = () => document.querySelector("#worlds")?.scrollIntoView({ behavior: "smooth" });
  const updateForm = (field) => (event) => setFormData((current) => ({ ...current, [field]: event.target.value }));
  const nextFormStep = (event) => { if (event.currentTarget.form.reportValidity()) { setContactError(""); setFormStep(2); } };
  const submit = async (event) => { event.preventDefault(); if (!formData.email.trim() && !formData.chat.trim()) { setContactError("请至少留下电子邮箱、WhatsApp 或微信中的一种联系方式。"); return; } setContactError(""); try { const response = await fetch("/api/inquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(formData) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "提交失败"); setSent(true); } catch (error) { setContactError(error.message || "暂时无法提交，请通过 WhatsApp 或微信联系我们。"); } };
  const openConsultation = (service = "", city = "") => { setFormData((current) => ({ ...current, service: service || current.service, city: city || current.city })); setContactError(""); setFormStep(1); setSent(false); setModalOpen(true); };
  useEffect(() => { const chosenTheme = discoverThemes.find(t=>t.slug===new URLSearchParams(window.location.search).get("theme")); if (!chosenTheme) return; setFormData(current => ({...current, service:"私人旅行定制", interests:"希望规划"+chosenTheme.name+"主题的私人旅程。"})); setFormStep(1); setSent(false); setModalOpen(true); }, []);
  useEffect(() => { const chosen = destinationItineraries.find(t=>t.slug===new URLSearchParams(window.location.search).get("itinerary")); if(!chosen)return;const city=destinationCities.find(c=>c.slug===chosen.city);setFormData(current=>({...current,service:"私人旅行定制",city:city.name,interests:"希望了解"+chosen.title+"，请按日期、人数和酒店偏好安排私家团。"}));setFormStep(1);setSent(false);setModalOpen(true); }, []);
  const destinationCity = destinationCities.find(c=>window.location.pathname.replace(/\/$/, "") === "/destinations/"+c.slug);
  const itinerary = destinationItineraries.find(t=>window.location.pathname.replace(/\/$/, "") === "/itineraries/"+t.slug);
  const guidePage = guidePages[window.location.pathname];
  const overviewTheme = discoverThemes.find(t=>t.path.replace(/\/$/, "")===window.location.pathname.replace(/\/$/, ""));
  const futureDetail = futureCityDetails.find(d => window.location.pathname.replace(/\/$/, "") === "/discover/future-cities/"+d.slug);
  const infrastructureDetail = infrastructureDetails.find(d => window.location.pathname.replace(/\/$/, "") === "/discover/infrastructure/"+d.slug);
  const landscapeDetail = landscapeDetails.find(d => window.location.pathname.replace(/\/$/, "") === "/discover/landscapes/"+d.slug);
  const foodCultureDetail = foodCultureDetails.find(d => window.location.pathname.replace(/\/$/, "") === "/discover/"+d.theme+"/"+d.slug);
  if (destinationCity) return <DestinationCityPage city={destinationCity} />;
  if (itinerary) return <DestinationItineraryPage tour={itinerary} />;
  if (foodCultureDetail) return <FoodCultureDetailPage detail={foodCultureDetail} />;
  if (landscapeDetail) return <LandscapeDetailPage detail={landscapeDetail} />;
  if (infrastructureDetail) return <InfrastructureDetailPage detail={infrastructureDetail} />;
  if (futureDetail) return <FutureCityDetailPage detail={futureDetail} />;
  if (overviewTheme) return <DiscoverThemePage theme={overviewTheme} />;
  if (window.location.pathname.replace(/\/$/, "") === "/discover/eastern-aesthetics/gardens") return <GardenPage />;
  if (window.location.pathname.replace(/\/$/, "") === "/discover/eastern-aesthetics/architecture") return <ArchitecturePage />;
  if (window.location.pathname.replace(/\/$/, "") === "/discover/eastern-aesthetics/tea") return <TeaPage />;
  if (window.location.pathname.replace(/\/$/, "") === "/discover/eastern-aesthetics/heritage") return <HeritagePage />;
  if (guidePage) return <GuidePage page={guidePage} />;

  return <main className="home-photography">
    <header className="site-header">
      <a className="brand" href="#worlds" aria-label="CHINA GUIDE 首页"><span><img className="brand-logo" src="/assets/china-guide-logo.png" alt="CHINA GUIDE" /><small>走进中国，不止于所见</small></span></a>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="主导航"><a onClick={() => setMenuOpen(false)} href="#worlds">发现中国</a><a onClick={() => setMenuOpen(false)} href="#destinations">目的地</a><a onClick={() => setMenuOpen(false)} href="#routes">私人旅程</a><a onClick={() => setMenuOpen(false)} href="#business">商务访问</a><a onClick={() => setMenuOpen(false)} href="#guide">来华指南</a></nav>
      <details className="language-menu"><summary aria-label="选择语言"><Globe aria-hidden="true" size={18} strokeWidth={1.8} /><span>中文</span></summary><div>{languageRoutes.map((language) => language.ready ? <a key={language.code} href={language.path} lang={language.code} aria-current="page">{language.label}</a> : <span key={language.code} lang={language.code} data-future-route={language.path}>{language.label}<small>筹备中</small></span>)}</div></details>
      <button className="primary header-cta" onClick={openConsultation}>开始规划旅程</button>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="打开导航" aria-expanded={menuOpen}>☰</button>
    </header>

    <section id="top" className="hero hero-worlds">
      <div className="hero-image" style={{ transform: `scale(1.035) translate3d(${pointer.x * -.18}px, ${pointer.y * -.14}px, 0)` }} />
      <img className="song-architecture-overlay" src="/assets/song-architecture-overlay-v2.png" alt="" aria-hidden="true" />
      <div className="paper-plane plane-one" style={{ transform: `translate3d(${pointer.x * .7}px, ${pointer.y * .45}px, 0) rotateY(-8deg)` }} />
      <div className="paper-plane plane-two" style={{ transform: `translate3d(${pointer.x * 1.05}px, ${pointer.y * .6}px, 0) rotateY(-13deg)` }} />
      <div className="hero-history" role="img" aria-label="金山岭长城云海与重庆朝天门两江天际线实景照片的编辑拼贴" /><div className="hero-shade" /><div className="hero-place-notes"><span>千年文明 <small>河北 · 金山岭长城</small></span><i /><span>未来城市 <small>重庆 · 朝天门</small></span></div>
      <div className="hero-copy"><p className="eyebrow">深入中国 · 私人定制 · 在地体验</p><h1>一个中国<br />多重世界</h1><span className="rule" /><p>从千年文明到未来城市，<br />由真正了解中国的人，<br />为你设计一段只属于你的旅程。</p><div className="actions"><button className="primary" onClick={openConsultation}>开始规划旅程</button><button className="secondary" onClick={scrollToWorlds}>探索中国的六种面貌</button></div></div>
      <button className="scroll-cue" onClick={scrollToWorlds} aria-label="向下浏览"><span>向下探索</span>⌄</button>
    </section>

    <section className="trust" aria-label="服务承诺">{assurances.map((item) => <div className="trust-item" key={item.title}><span className="trust-seal" aria-hidden="true" /><span className="trust-copy"><strong>{item.title}</strong><em>{item.note}</em></span></div>)}</section>

    <section id="worlds" className="worlds-section worlds-immersive">
      <div className="section-heading"><div><p className="eyebrow">发现中国</p><h2>什么样的中国最打动你？</h2></div><p>从心之所向，看见中国的不同面貌。</p></div>
      <div className="world-stage">{worlds.map((world, index) => {
        const distance = Math.abs(index - active);
        return <article key={world.name} className={index === active ? "world-card active" : "world-card"} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} style={{ "--i": index, "--tilt": `${-5 + distance * 1.2}deg`, "--depth": `${-distance * 55}px`, "--card-scale": Math.max(.82, 1 - distance * .035), "--card-opacity": Math.max(.5, 1 - distance * .1), "--card-saturation": Math.max(.55, 1 - distance * .09), "--card-brightness": Math.max(.6, 1 - distance * .08) }}><img src={world.image} alt={world.alt} loading={index < 2 ? "eager" : "lazy"} style={{objectPosition:world.position||"center"}} /><span className="card-shade" /><div className="card-copy"><small>0{index + 1}</small><strong>{world.name}</strong><nav className="world-links" aria-label={`${world.name}内容入口`}>{discoverThemes[index].sections.map((section, topicIndex) => <a key={section.href} href={section.href}>{worldTopicLabels[index][topicIndex]}<span aria-hidden="true">↗</span></a>)}</nav></div></article>;
      })}</div>
      <div className="world-scroll-hud" aria-hidden="true"><span>0{active + 1} / 06</span><i><b /></i><em>向下滚动 · 穿行中国</em></div>
    </section>

    <DestinationItinerarySection onConsult={openConsultation} />

    <PublishedJourneys onConsult={(destination) => openConsultation("私人旅行定制", destination)} />

    <section className="services-section services-compact" aria-label="专项服务">
      <div className="service-list">{serviceWays.map((service) => <article id={service.id} key={service.no}><span>{service.no}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><button onClick={() => openConsultation(service.title)}>{service.action} ↗</button></article>)}</div>
    </section>

    <section className="partner-network">
      <div className="network-intro"><p className="eyebrow">在地服务网络</p><h2>走到不同城市<br />都有可靠的当地伙伴</h2><p>一程一地，由合适的人相迎。</p></div>
      <div className="network-panel"><div className="network-roles"><span>持证导游</span><span>行程司机</span><span>城市负责人</span><span>旅行社及地接伙伴</span></div><details><summary>查看正在招募的城市</summary><p>广州 · 深圳 · 东莞 · 上海 · 北京 · 成都 · 重庆 · 西安 · 桂林 · 昆明 · 拉萨 · 乌鲁木齐 · 哈尔滨 · 张家界 · 三亚</p></details><a href="https://www.cn-guide.com/partner.html" target="_blank" rel="noreferrer">申请加入本地服务网络 ↗</a><small>加入网络不收取费用；合作安排以资质审核及双方确认为准。</small></div>
    </section>

    <section className="gateway-section guide-only">
      <article id="guide" className="gateway-card guide-gateway"><div className="guide-intro"><p className="eyebrow">来华指南</p><h2>第一次来中国</h2><p>入境、支付、网络与交通，出发前一一备好。</p><button onClick={() => openConsultation("私人旅行定制")}>咨询第一次中国之行 ↗</button></div><div className="guide-topics" aria-label="来华指南内容">{guideRoutes.map((topic) => <a key={topic.path} href={topic.path} aria-disabled={!topic.ready} data-future-route={topic.path} onClick={topic.ready ? undefined : (event) => event.preventDefault()}><small>{topic.no}</small>{topic.label}</a>)}</div></article>
    </section>

    <section className="founder-section">
      <div className="founder-profile"><figure className="founder-photo"><img src="/assets/founder-liu-yiyong.png" alt="CHINA GUIDE 创始人刘怡勇" /><figcaption><strong>刘怡勇</strong><span>CHINA GUIDE 创始人</span></figcaption></figure><div className="profile-credentials"><span><strong>2010</strong>取得导游资格证</span><span><strong>60+</strong>国家和地区客人</span><span><strong>持证</strong>国家中级导游员</span></div></div>
      <div className="founder-copy"><div className="founder-heading"><div><p className="eyebrow">关于 CHINA GUIDE</p><h2>走过许多地方<br />更懂得如何陪你出发</h2></div></div><p>十六年行旅之后，刘怡勇更相信：好的向导，不替你定义中国，只陪你走近它。</p><details className="founder-story"><summary>阅读刘怡勇的完整故事</summary><div><p>我的童年沿着水走。生在江西鄱阳湖边，少年时在福建泉州生活，闽南话也在那时留在舌尖。后来回到鄱阳，再到海南学习旅游管理。2010年，我取得国家导游资格证——那时并不知道，这张证会把我带得那么远。</p><p>此后十六年，我几乎都在路上。从海南、西藏到越南芽庄，从菲律宾薄荷岛到日本东京，我做过地接导游，也经营过一间亲手建起的小酒店。如今定居广州，是国家中级导游员，接待过来自六十多个国家和地区的客人。</p><p>我创办 CHINA GUIDE，只想把一件事做好：把这些年走过的路与积累的经验，写成一条条属于你的行程，再交给真正熟悉那片土地的向导，陪你一步一步走近中国。</p></div></details><details className="legal-fold"><summary>查看旅游服务资质说明</summary><p>旅游服务由具备资质的入境旅行社——上海凯旋观光旅行社有限公司——依法提供。</p></details></div>
    </section>

    <section id="contact" className="contact-section">
      <div className="contact-intro"><p className="eyebrow">从这里开始</p><h2>告诉我们<br />你准备怎样出发</h2><p>说说大概时间与心中所想，其余交给我们。</p><div className="contact-links"><a className="contact-primary" href="https://wa.me/8613113119919" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+86 131 1311 9919 ↗</strong></a><div className="wechat-id-row"><span>微信号</span><strong>Coconut_Yong</strong></div><a href="mailto:hello@cn-guide.com"><span>联系邮箱</span><strong>hello@cn-guide.com</strong></a><div><span>回复时效</span><strong>通常24小时内回复</strong></div></div></div>
      <div className="contact-channels"><div className="channel-card"><div className="qr-crop qr-whatsapp"><img src="/assets/contact-whatsapp-qr.jpg" alt="刘怡勇的 WhatsApp 联系二维码" /></div><p className="qr-kicker">WhatsApp</p><h3>扫码开始对话</h3><p>+86 131 1311 9919</p></div><div className="channel-card"><div className="qr-crop qr-wechat"><img src="/assets/contact-wechat-qr.jpg" alt="刘怡勇的微信联系二维码" /></div><p className="qr-kicker">微信</p><h3>扫码添加微信</h3><p>Coconut_Yong</p></div><button className="primary" onClick={openConsultation}>告诉我们你的想法</button></div>
    </section>

    <HomePhotoCredits />
    <footer><a className="footer-brand" href="#top"><strong>CHINA GUIDE</strong><span>走进中国，不止于所见</span></a><div><a href="#worlds">发现中国</a><a href="#destinations">目的地</a><a href="#business">商务访问</a><a href="#guide">来华指南</a><a href="#contact">联系我们</a><a href="https://china-guide-song.liuyiyong9999.chatgpt.site/?admin=1">管理登录</a></div><p>旅游服务由上海凯旋观光旅行社有限公司依法提供。康养医疗服务仅提供机构对接、预约、翻译与出行协调，不提供诊断、治疗或医疗结果保证。<br />© 2026 CHINA GUIDE · 让世界更自然地走进中国</p></footer>

    {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setModalOpen(false)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="plan-title"><button className="close" onClick={() => setModalOpen(false)} aria-label="关闭">×</button>{!sent ? <><p className="eyebrow">旅程咨询 · 第 {formStep} 步 / 2</p><h2 id="plan-title">{formStep === 1 ? "先说说你的旅程" : "我们该如何联系你"}</h2><p>{formStep === 1 ? "只需大概信息，不必现在决定完整路线。" : "请至少留下电子邮箱、WhatsApp 或微信中的一种联系方式。"}</p><form onSubmit={submit}>{formStep === 1 ? <><label>需要的服务 *<select required value={formData.service} onChange={updateForm("service")}><option value="" disabled>请选择</option><option>私人旅行定制</option><option>康养医疗服务</option><option>商务访问支持</option></select></label><label>预计时间 *<input required value={formData.timing} onChange={updateForm("timing")} placeholder="例如：2027年4月" /></label><label>同行人数<select value={formData.group} onChange={updateForm("group")}><option value="">暂未确定</option><option>1–2人</option><option>3–5人</option><option>6人以上</option></select></label><label>意向城市<input value={formData.city} onChange={updateForm("city")} placeholder="例如：北京、上海、广州" /></label><label className="full-field">你最希望体验什么？<textarea value={formData.interests} onChange={updateForm("interests")} placeholder="简单说说你的兴趣、节奏或特别需要。康养医疗咨询请勿在此填写病历等敏感信息。" /></label><button className="primary" type="button" onClick={nextFormStep}>下一步：留下联系方式</button></> : <><label>怎么称呼你 *<input required value={formData.name} onChange={updateForm("name")} placeholder="姓名或称呼" /></label><label>国家 / 地区<input value={formData.region} onChange={updateForm("region")} placeholder="例如：新加坡" /></label><label>电子邮箱<input type="email" value={formData.email} onChange={updateForm("email")} placeholder="name@example.com" /></label><label>WhatsApp / 微信<input value={formData.chat} onChange={updateForm("chat")} placeholder="至少填写一种联系方式" /></label><label>希望我们如何回复<select value={formData.reply} onChange={updateForm("reply")}><option>电子邮箱</option><option>WhatsApp</option><option>微信</option></select></label>{contactError && <p className="form-error full-field" role="alert">{contactError}</p>}<label className="privacy full-field"><input required type="checkbox" /> <span>我同意 CHINA GUIDE 使用以上信息回复咨询并协调相关服务。我们不会通过本表单索取不必要的医疗或敏感资料。</span></label><button className="back-button" type="button" onClick={() => setFormStep(1)}>← 返回上一步</button><button className="primary" type="submit">提交咨询</button></>}</form></> : <div className="success"><span>✓</span><h2>想法已记录</h2><p>这是中文预览版的演示状态，暂不会发送资料。正式上线后将连接真实咨询渠道。</p><a className="primary whatsapp-after" href="https://wa.me/8613113119919" target="_blank" rel="noreferrer">也可以直接 WhatsApp 联系</a><button className="secondary" onClick={() => setModalOpen(false)}>返回浏览</button></div>}</section></div>}
  </main>;
}
