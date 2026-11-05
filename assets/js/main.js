/* ============================================================
   China Local Guides — Interactions + i18n
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var I18N = {
    en: {
      "nav.explore": "Explore China", "nav.guides": "Our Guides",
      "nav.partner": "For Guides", "nav.about": "About", "nav.plan": "Plan a Trip",
      "hero.eyebrow": "A NATIONWIDE NETWORK OF LOCAL CHINA EXPERTS",
      "brand.zh": "中国本地向导",
      "hero.h1": 'Discover China<br><span class="accent">Through Local Guides</span>',
      "hero.sub": "Real local guides. Authentic China. Every journey built around you.",
      "hero.cta1": "Explore Destinations", "hero.cta2": "Plan Your Trip",
      "nav.find": "Find a Trip",
      "idx.lead": "Pick a city, a travel style.",
      "idx.cities": "By destination", "idx.types": "By travel style", "idx.placeholder": "Type a city…",
      "idx.all": "All", "idx.view": "View itineraries →", "idx.empty": "No matching destination",
      "dest.back": "← All destinations", "dest.kicker": "Classic ways to explore",
      "dest.citylead": "A short list of proven itineraries — each can be reshaped around your interests, dates and pace.",
      "dest.typelead": "Itineraries available in this travel style. Open a city to see all its itineraries.",
      "dest.days": "days", "dest.inquire": "Ask about this itinerary →", "dest.other": "Explore other destinations",
      "dest.notice": "Itineraries are indicative. Final travel contracts, payment and arrangements are handled by Shanghai Kaixuan Sightseeing Travel Service Co., Ltd..",
      "dest.spots": "Highlights",
      "hero.note": "Private, tailor-made trips — small groups, your own pace. Never a bus tour.",
      "stat.cities": "Key Cities", "stat.guides": "Core Guides", "stat.exp": "Travel Styles",
      "explore.h2": "Fifteen cities. One standard of trust.",
      "city.name1": 'Guangzhou <span>广州</span>', "city.tag1": "International Gateway",
      "city.desc1": "Trade, culture and cuisine. The natural entry point for overseas visitors to South China.",
      "city.name2": 'Shenzhen <span>深圳</span>', "city.tag2": "Technology &amp; Innovation",
      "city.desc2": "Tech, innovation and electronics. The innovation engine of the Greater Bay Area.",
      "city.name3": 'Dongguan <span>东莞</span>', "city.tag3": "Manufacturing Edge",
      "city.desc3": "Factory tours and manufacturing. Our deepest local resource advantage.",
      "city.name4": 'Shanghai <span>上海</span>', "city.tag4": "Global Metropolis",
      "city.desc4": "Metropolis, business and culture. China's most international destination.",
      "city.name5": 'Beijing <span>北京</span>', "city.tag5": "Classic Destination",
      "city.desc5": "History, culture and the Great Wall. The timeless icon for first-time visitors.",
      "city.name6": 'Chengdu <span>成都</span>', "city.tag6": "Leisure &amp; Culture",
      "city.desc6": "Pandas, food and laid-back culture. A signature slow-travel experience.",
      "city.name7": 'Chongqing <span>重庆</span>', "city.tag7": "Mountain City",
      "city.desc7": "Mountain skyline, night views and hotpot. A differentiated, energetic experience.",
      "city.name8": 'Xi\'an <span>西安</span>', "city.tag8": "Cultural Depth",
      "city.desc8": "History and the Terracotta Army. The heart of China's ancient civilization.",
      "city.name9": 'Guilin <span>桂林</span>', "city.tag9": "Natural Beauty",
      "city.desc9": "Karst mountains and rivers. China's most celebrated natural landscape.",
      "city.name10": 'Kunming <span>昆明</span>', "city.tag10": "Yunnan Gateway",
      "city.desc10": "Yunnan and ethnic culture. The gateway to China's southwest diversity.",
      "city.name11": 'Tibet · Lhasa <span>西藏·拉萨</span>', "city.tag11": "Highland &amp; Faith",
      "city.desc11": "The roof of the world — Potala Palace, monasteries and sacred highland landscapes.",
      "city.name12": 'Xinjiang · Urumqi <span>新疆·乌鲁木齐</span>', "city.tag12": "Frontier &amp; Culture",
      "city.desc12": "Vast deserts, Silk Road heritage and vibrant ethnic cultures across China's west.",
      "city.name13": 'Harbin <span>哈尔滨</span>', "city.tag13": "Ice &amp; Snow Capital",
      "city.desc13": "China's winter wonderland — the Ice and Snow Festival and Russian heritage.",
      "city.name14": 'Zhangjiajie <span>张家界</span>', "city.tag14": "Natural Wonder",
      "city.desc14": "Sandstone peaks and pristine forests — the real-life inspiration behind the floating mountains of Avatar.",
      "city.name15": 'Sanya <span>三亚</span>', "city.tag15": "Tropical Resort",
      "city.desc15": "Crystal beaches and tropical islands — China's premier winter escape by the South China Sea.",
      "tier1.title": "Verified Partner Guide", "tier1.cn": "普通合作导游", "tier1.desc": "Passed our basic verification — license, identity and local knowledge confirmed.",
      "tier2.title": "Preferred Partner Guide", "tier2.cn": "优选合作导游", "tier2.desc": "Recognized for consistent service records and positive client reviews.",
      "tier3.title": "City Core Guide", "tier3.cn": "城市核心导游", "tier3.desc": "Organizational ability to coordinate and manage a city's local delivery.",
      "profile.h4": "Every guide profile includes",
      "chip.1": "Name &amp; photo", "chip.2": "License &amp; practicing status", "chip.3": "City &amp; familiar destinations",
      "chip.4": "Languages spoken", "chip.5": "Specialty themes", "chip.6": "Years of experience",
      "chip.7": "Group size capacity", "chip.8": "Client reviews", "chip.9": "Availability",
      "guides.fine": "Cooperation tiers are our own quality grades — not an official state guide-ranking system.",
      "guides.trust": "Every guide is license-verified, language-screened and reviewed after each trip — so your private tour is led by someone who truly knows the place.",
      "featured.h2": "Real local guides you can trust.",
      "featured.lead": "A preview of the verified guides in our network — each with a standard profile, language ability and a specialty you can plan a trip around.",
      "g1.city": "Guangzhou", "g1.spec": "Food & Culture", "g1.intro": "Cantonese food lover who turns every meal into a story of the city.",
      "g2.city": "Shenzhen", "g2.spec": "Tech & Innovation", "g2.intro": "Former product manager who opens doors to Shenzhen's maker world.",
      "g3.city": "Xi'an", "g3.spec": "History & Heritage", "g3.intro": "Terracotta-era storyteller who brings ancient China to life.",
      "g4.city": "Shanghai", "g4.spec": "City & Business", "g4.intro": "Bilingual host for executives and first-time China visitors.",
      "g5.city": "Lhasa", "g5.spec": "Highland & Faith", "g5.intro": "Tibetan guide born on the plateau, fluent in its silence and prayer.",
      "g6.city": "Urumqi", "g6.spec": "Frontier Culture", "g6.intro": "Uyghur culture bearer who shares the Silk Road's living heritage.",
      "partner.kicker": "For Travel Professionals", "partner.h2": "Three ways to join the network.",
      "partner.note": "Travelers — tell us your interests and dates and our team will design your China journey for you. ", "partner.note.link": "Plan your trip →",
      "p.eyebrow": "FOR TRAVEL PROFESSIONALS",
      "p.h1": "Join the China Local Guides Network",
      "p.sub": "A nationwide network connecting local China experts with travelers from around the world. We help you win clients first — then we grow together.",
      "p.cta": "Apply now",
      "back.site": "← Back to site",
      "qr.h": "Share this referral link",
      "qr.p": "Scan the code or share the link below with guides and agencies you trust. Applications are reviewed by our partnership team.",
      "qr.note": "Placeholder QR — replace with your own generated code pointing to this page.",
      "partner.lead": "Guides, drivers, city partners and agencies — one network, one standard. We help you win clients first; then we earn together.",
      "p1.title": "Apply for a Role", "p1.cn": "英文导游 · 司机 · 客服", "p1.desc": "English-speaking guides, drivers and customer-service staff — all fifteen cities, full-time or long-term.",
      "p1.link": "Apply for a role →",
      "p2.title": "City Partner", "p2.cn": "城市负责人", "p2.desc": "One core partner per city to recruit guides, package local products and coordinate on-the-ground delivery.",
      "p2.link": "Apply as city partner →",
      "p3.title": "Agency &amp; Ground Partner", "p3.cn": "旅行社及地接合作", "p3.desc": "Licensed travel agencies and ground-service suppliers partner for lawful contracting and local fulfillment.",
      "p3.link": "Partner with us →",
      "form.h3": "Partner application",
      "f.name": "Name", "f.email": "Email", "f.whatsapp": "WhatsApp", "f.city": "City", "f.type": "Applying as",
      "f.type.opt": '<option value="Guide">English-Speaking Guide</option><option value="Driver">English-Speaking Driver</option><option value="Customer Service">English Customer Service</option><option value="City Partner">City Partner</option><option value="Agency">Agency &amp; Ground Partner</option>',
      "f.message": "Message", "f.submit": "Submit application",
      "about.kicker": "About China Local Guides", "about.h2": "One brand. One platform.",
      "about.lead": "China Local Guides is the single brand and platform behind your whole journey — from the first inquiry and itinerary design to the vetted local experts who welcome you in each city. One team, one standard, no hand-offs between brands.",
      "one.sub": "Everything under one name", "one.1": "Overseas inquiries &amp; trip design", "one.2": "Vetted local guides in 15 cities", "one.3": "One service standard, end to end", "one.4": "Licensed agency delivery &amp; compliance",
      "about2.h4": "Our mission",
      "about2.p": "Connect outstanding local guides across China so travelers worldwide can more easily find trustworthy local travel services — starting with fifteen cities and growing, city by city, toward one hundred.",
      "contact.kicker": "Plan Your Trip", "contact.h2": "Let's design your China journey.",
      "contact.lead": "Tell us your interests and dates. Our team replies on WhatsApp Business and email — real people, not a bot.",
      "inq.name": "Name", "inq.email": "Email", "inq.whatsapp": "WhatsApp", "inq.pax": "Travelers", "inq.country": "Home country", "inq.cities": "Preferred cities",
      "inq.msg": "What would you like to experience?", "inq.submit": "Send inquiry",
      "inq.name.ph": "Your name", "inq.email.ph": "you@example.com", "inq.whatsapp.ph": "+60 …", "inq.pax.ph": "2",
      "inq.country.ph": "e.g. Malaysia", "inq.cities.ph": "e.g. Guangzhou, Xi'an", "inq.budget.ph": "e.g. ¥8,000 / person",
      "inq.msg.ph": "e.g. 7-day Greater Bay Area tech &amp; food private tour…",
      "footer.note": "One brand, one platform · 15 cities, 200+ core guides. Travel services provided by Shanghai Kaixuan Sightseeing Travel Service Co., Ltd..",
      "nav.culture": "Culture",
      "nav.wellness": "Wellness",
      "how.h2": "Your China journey in four simple steps.",
      "how.s1.t": "Tell us your trip",
      "how.s1.d": "Share your interests, dates, group size and preferred cities through the form or WhatsApp. No commitment required.",
      "how.s2.t": "Receive a tailored plan",
      "how.s2.d": "Our team designs an itinerary with verified local guides, clear inclusions and transparent pricing — built around you.",
      "how.s3.t": "Confirm &amp; travel with confidence",
      "how.s3.d": "Shanghai Kaixuan Sightseeing Travel Service Co., Ltd. contracts and handles the trip. Your local guide meets you on the ground, fully briefed.",
      "how.s4.t": "Enjoy &amp; share",
      "how.s4.d": "Travel at your own pace with a private guide. We follow up on your experience and keep improving our network.",
      "pp.h3": "Closer to the people who live there.",
      "pp.p": "We work directly with vetted local guides and ground teams, so your days are shaped by the people who actually welcome you — not handed down through layers of resellers. Small groups, real places, unhurried time. Every plan comes with clear, itemized inclusions from a licensed inbound travel agency.",
      "voices.h2": "Reviews from travelers around the world",
      "v1.q": "\"The Greater Bay Area tech tour opened doors we could never have found on our own. Our Guangzhou guide made every factory visit make sense.\"",
      "v1.n": "Ahmad R.", "v1.c": "Malaysia · Tech &amp; Business Tour",
      "v2.q": "\"Our family trip through Xi'an and Chengdu was effortless — the pandas, the Terracotta Army, the food. The guides anticipated everything.\"",
      "v2.n": "Lim S. K.", "v2.c": "Singapore · Cultural Tour",
      "v3.q": "\"I wanted a slow, personal trip, not a bus tour. They built it around me and my broken Mandarin was never a problem.\"",
      "v3.n": "The Nguyen", "v3.c": "Vietnam · Private Tour",
      "rev.live": "reviews", "rev.month": "in the last 30 days", "rev.langs": "languages",
      "rev.rating": "average rating", "rev.write": "Write a review", "rev.badge": "Yours",
      "rev.more": "Show more reviews", "rev.all": "That's every review so far",
      "rev.t.now": "just now", "rev.t.min": "min ago", "rev.t.hour": "h ago",
      "rev.t.day": "d ago", "rev.t.week": "w ago", "rev.t.month": "mo ago",
      "rev.f.title": "Tell us about your trip",
      "rev.f.note": "Posted as-is, in your own words. Reviews are linked to a completed trip.",
      "rev.f.name": "Name or nickname", "rev.f.name.ph": "e.g. Kenji S.",
      "rev.f.country": "Where are you from?", "rev.f.country.any": "Prefer not to say",
      "rev.f.city": "Which trip?", "rev.f.city.any": "Choose a destination",
      "rev.f.rating": "Your rating",
      "rev.f.text": "Your review", "rev.f.text.ph": "What stayed with you? The guide, a meal, a road nobody else takes…",
      "rev.f.submit": "Publish review", "rev.f.cancel": "Cancel",
      "rev.f.thanks": "Thank you — your review is now at the top of the wall.",
      "rev.f.need": "Please add a name and a few words about the trip.",
      "cul.h2": "Know a little China before you go",
      "cul.lead": "Table etiquette, the time of tea, dialects and market life — the parts of China no menu can show you. We weave them into every day of your trip.",
      "cul.t1": "At the table", "cul.p1": "Chinese tables are shared — dishes sit in the middle and the lazy Susan turns slowly. Never stand chopsticks upright in rice (that is for ancestors); when the host fills your bowl, it is warmth, not formality. Toasting an elder? Keep your glass rim lower.",
      "cul.t2": "Time for tea", "cul.p2": "Chaozhou gongfu tea steeps the same leaves seven times; in Guangzhou one pot and two dim sum make a whole morning; Chengdu teahouses pair gaiwan tea with ear-cleaning masters. Someone refills your cup — tap two fingers on the table: that is thank you.",
      "cul.t3": "Festivals & reunion", "cul.p3": "Spring Festival is the largest homeward migration on earth; the Mid-Autumn moon is shared one mooncake slice at a time; Lantern Festival lights up entire old towns. Catch a local temple fair and you will meet China at its most relaxed.",
      "cul.t4": "A different accent every ten miles", "cul.p4": "Cantonese runs nine tones, Minnan keeps the entering finals of Tang-era speech, and one Sichuanese word, bashi, sums up a perfect day. Cross one hill and the accent changes — your guide is the best interpreter of all.",
      "cul.t5": "Markets & street life", "cul.p5": "The liveliest China is at the wet market: tofu still steaming at dawn, vendors teaching you the season's greens. Bargaining is expected for souvenirs — open with a smile and boss, any discount? The manners matter more than the price.",
      "cul.t6": "Warmth & customs", "cul.p6": "Hosts refill your hot water all day — that is care, not neglect; have you eaten? is a greeting, not an invitation. Receive gifts with both hands; clocks, umbrellas and pears carry taboos as gifts — your guide steers you around all of them.",
      "wel.kicker": "Wellness & Medical", "wel.h2": "A journey that cares for the body, too.",
      "wel.lead": "TCM care, hot springs, health checks and recovery stays — treatment comes from licensed clinics and hospitals, while we handle the appointments, translation, route and company.",
      "wel.t1": "TCM care", "wel.p1": "Acupuncture, tuina, moxibustion and herbal consultation at a licensed TCM clinic. We book the session, translate the terms and sit in with you.",
      "wel.t2": "Hot springs & forest air", "wel.p2": "Conghua, Sanya, Kunming, Guilin — soak, walk, breathe. Three slow meals a day and nothing on the calendar before ten.",
      "wel.t3": "Health checks & specialists", "wel.p3": "Executive check-up packages at the international departments of top hospitals, reports explained line by line, and an escort to every specialist visit.",
      "wel.t4": "Recovery stays", "wel.p4": "Quiet hotels, menus set by a nutritionist, step-free routes, clinic transfers — recovery at a pace that is actually restful.",
      "wel.t5": "Slow-stay, two to four weeks", "wel.p5": "Kunming and Sanya long stays: serviced apartments, a weekly TCM session, weekend day trips and a guide on call.",
      "wel.t6": "Family & companions", "wel.p6": "A room next to yours, a guide who takes the family out while you are in treatment, child seats and wheelchair routes — nobody waits in a lobby.",
      "wel.cta": "See wellness itineraries →",
      "wel.note": "We are not a medical institution: no diagnosis, no prescriptions, no medicine sales. Treatment and billing are handled by licensed hospitals and clinics, and your records stay confidential.",
      "founder.k": "From the founder",
      "founder.h": "Beyond the postcard, meet the real China.",
      "founder.p1": "My childhood followed the water. I was born beside Poyang Lake in Jiangxi and did my primary and middle school in Quanzhou, Fujian — the Minnan dialect still sits on my tongue. Later I returned to Poyang and studied tourism management at Hainan College of Economics and Business. In 2010 I earned my national guide license. I had no idea then how far that piece of paper would take me.",
      "founder.p2": "For the sixteen years that followed, I was almost always on the road. I started as a ground guide in Hainan, Tibet and Nha Trang, Vietnam. I spent six years in the Philippines, building a small hotel brick by brick on Panglao Island — and later sold it, for a new road. The last two years were in Japan, walking travelers from around the world through day trips beyond Tokyo. Today I live in Guangzhou. I am a certified national guide and have hosted guests from more than sixty countries and regions.",
      "founder.p3": "What I do now is simple: take the roads I have walked in China, Japan and Southeast Asia, write them into journeys that belong to you, and hand them to guides who truly know that land — to walk it with you, step by step.",
      "founder.n1.h": "Plan slowly, with someone who has walked there.",
      "founder.n1.p": "Sixteen years across China, Japan and Southeast Asia. Tell me when you are coming and what you dream of seeing — I will write it into a route first; then, on the ground, a local guide will walk every inch of it with you.",
      "founder.n2.h": "My promise is a simple one.",
      "founder.n2.p": "The same care I gave guests in Tokyo, Panglao and Lhasa goes into your journey in China, exactly as it did then.",
      "founder.c.h": "Reach me directly", "founder.c.wx": "WeChat", "founder.c.wx.p": "Scan to add me on WeChat",
      "founder.c.wa.p": "Scan to chat on WhatsApp", "founder.c.mail": "Email", "founder.c.mail.p": "Write to me anytime",
      "inq.type": "Trip type",
      "inq.type.opt": '<option value="">Select…</option><option value="Tech">China Technology Tour</option><option value="Cultural">China Cultural Tour</option><option value="Private">Private China Tour</option><option value="Business">Business Visit</option>',
      "inq.budget": "Budget / person (optional)",
      "join.kicker": "Join Us",
      "join.h2": "We are hiring in all fifteen cities.",
      "join.lead": "English-speaking guides, drivers and customer service staff — full-time or long-term. If you know your city and can host guests in English, we would like to meet you.",
      "join.cities": "Now hiring in",
      "join.cta": "Apply now →",
      "join.partner": "City partners & agencies →",
      "join.note": "Guides, drivers and staff work on trips contracted by Shanghai Kaixuan Sightseeing Travel Service Co., Ltd. No joining fee is charged at any stage.",
      "job.badge": "15 cities",
      "job.guide.t": "English-Speaking Guide",
      "job.guide.m": "Licensed · Private day tours",
      "job.guide.d": "Lead small private groups through your own city. National guide license required and English at working fluency — tell us your city and what you love to show.",
      "job.driver.t": "English-Speaking Driver",
      "job.driver.m": "C1 or above · Clean record",
      "job.driver.d": "Airport pickups and daily routes for small groups. C1 licence or above, a clean driving record, and enough English for the road and the small talk.",
      "job.cs.t": "English Customer Service",
      "job.cs.m": "Email & WhatsApp · Remote or local",
      "job.cs.d": "Answer overseas inquiries, shape itineraries with our planners and follow each trip through. Excellent written English; Chinese helps but is not required.",
      "footer.join": "Join Us · Careers",
      "status.missing": "Please complete the required fields.",
      "status.sending": "Sending…",
      "status.fail": "Something went wrong — please try again, or email yiyong77@qq.com directly.",
      "status.ok": "Thank you — your request has been received. Our team will reply via WhatsApp / email shortly.",

      "nav.business": "Business Tours",
      "biz.kicker": "Business & Inspection Tours",
      "biz.h2": "See China's manufacturing up close.",
      "biz.lead": "We open doors to real factories across the Greater Bay Area — Dongguan, Foshan, Guangzhou and Shenzhen — for buyers, founders and trade delegations. Factory visits, supply-chain meetings, professional translation and full logistics, arranged end to end.",
      "biz.cta": "See business itineraries →",
      "biz.note": "Factory visits are arranged only with the supplier's prior confirmation. We assist with appointments, translation and logistics — we do not represent or guarantee any supplier.",
      "rev.sample": "Sample reviews shown — real guest reviews are being collected."
    },
    zh: {
      "nav.explore": "探索中国", "nav.guides": "导游团队",
      "nav.partner": "合作方", "nav.about": "关于我们", "nav.plan": "规划行程",
      "hero.eyebrow": "全国本地中国专家服务网络",
      "brand.zh": "中国本地向导",
      "hero.h1": '通过本地向导<br><span class="accent">发现中国</span>',
      "hero.sub": "地道向导 · 真实中国 · 每段旅程只为你而设",
      "hero.cta1": "探索目的地", "hero.cta2": "规划行程",
      "nav.find": "快速找行程",
      "idx.lead": "选一座城市，一种旅行方式。",
      "idx.cities": "按目的地", "idx.types": "按旅行方式", "idx.placeholder": "输入城市名…",
      "idx.all": "全部", "idx.view": "查看行程 →", "idx.empty": "没有匹配的目的地",
      "dest.back": "← 全部目的地", "dest.kicker": "经典玩法",
      "dest.citylead": "几种成熟行程——每一种都可按你的兴趣、日期与节奏重新打磨。",
      "dest.typelead": "这一旅行方式下可选的行程。点开某座城市，可查看它的全部玩法。",
      "dest.days": "天", "dest.inquire": "咨询这条行程 →", "dest.other": "看看其他目的地",
      "dest.notice": "行程为示意方案。最终旅游合同、团款收取与接待安排，由上海凯旋观光旅行社有限公司依法承担。",
      "dest.spots": "行程亮点",
      "hero.note": "私人定制之旅——小团出行，自在节奏，绝无大巴团。",
      "stat.cities": "核心旅游城市", "stat.guides": "核心导游", "stat.exp": "旅行风格",
      "explore.h2": "十五座城市，同一份信任标准",
      "city.name1": '广州 <span>Guangzhou</span>', "city.tag1": "国际门户",
      "city.desc1": "贸易、文化与美食之都，华南地区海外游客的天然入口。",
      "city.name2": '深圳 <span>Shenzhen</span>', "city.tag2": "科技创新",
      "city.desc2": "科技、创新与电子产业，粤港澳大湾区的创新引擎。",
      "city.name3": '东莞 <span>Dongguan</span>', "city.tag3": "制造优势",
      "city.desc3": "工厂考察与制造业，我们最深厚的本地资源优势。",
      "city.name4": '上海 <span>Shanghai</span>', "city.tag4": "国际都会",
      "city.desc4": "都市、商务与文化，中国最具国际化的目的地。",
      "city.name5": '北京 <span>Beijing</span>', "city.tag5": "经典目的地",
      "city.desc5": "历史、文化与长城，首次访华旅客的经典地标。",
      "city.name6": '成都 <span>Chengdu</span>', "city.tag6": "休闲文化",
      "city.desc6": "熊猫、美食与悠闲文化，标志性的慢旅行体验。",
      "city.name7": '重庆 <span>Chongqing</span>', "city.tag7": "山城",
      "city.desc7": "山城天际线、夜景与火锅，充满活力的差异化体验。",
      "city.name8": '西安 <span>Xi\'an</span>', "city.tag8": "文化深度",
      "city.desc8": "历史与兵马俑，中华古代文明的核心。",
      "city.name9": '桂林 <span>Guilin</span>', "city.tag9": "自然风光",
      "city.desc9": "喀斯特山水，中国最负盛名的自然风光。",
      "city.name10": '昆明 <span>Kunming</span>', "city.tag10": "云南门户",
      "city.desc10": "云南与民族文化，中国西南多样性的门户。",
      "city.name11": '西藏·拉萨 <span>Tibet · Lhasa</span>', "city.tag11": "高原信仰",
      "city.desc11": "世界屋脊——布达拉宫、寺院与圣洁的高原风光。",
      "city.name12": '新疆·乌鲁木齐 <span>Xinjiang · Urumqi</span>', "city.tag12": "边疆文化",
      "city.desc12": "广袤沙漠、丝绸之路遗产与绚烂的西部民族文化。",
      "city.name13": '哈尔滨 <span>Harbin</span>', "city.tag13": "冰雪之都",
      "city.desc13": "中国的冰雪奇境——冰雪大世界与俄式风情。",
      "city.name14": '张家界 <span>Zhangjiajie</span>', "city.tag14": "自然奇景",
      "city.desc14": "石英砂岩峰林与原始森林——电影《阿凡达》悬浮山的现实原型。",
      "city.name15": '三亚 <span>Sanya</span>', "city.tag15": "热带度假",
      "city.desc15": "碧海银滩与热带海岛——中国南海畔首屈一指的越冬胜地。",
      "tier1.title": "认证合作导游", "tier1.cn": "Verified Partner Guide", "tier1.desc": "通过我们的基础认证——证件、身份与本地知识均已核实。",
      "tier2.title": "优选合作导游", "tier2.cn": "Preferred Partner Guide", "tier2.desc": "凭借稳定的服务记录与良好的客户评价获得认可。",
      "tier3.title": "城市核心导游", "tier3.cn": "City Core Guide", "tier3.desc": "具备协调与管理城市本地交付的组织能力。",
      "profile.h4": "每位导游档案均包含",
      "chip.1": "姓名与照片", "chip.2": "导游证及执业状态", "chip.3": "城市与熟悉目的地",
      "chip.4": "语言能力", "chip.5": "擅长主题", "chip.6": "从业经历",
      "chip.7": "可接待人数", "chip.8": "服务评价", "chip.9": "可服务时间",
      "guides.fine": "合作分级为平台自身的质量评估，并非国家导游等级评定。",
      "guides.trust": "每位导游都经过证件核验、语言能力筛选与行后评价——让您的私人行程由真正熟悉此地的人带领。",
      "featured.h2": "值得信赖的真实本地导游",
      "featured.lead": "我们网络中已认证导游的一瞥——每位都拥有标准档案、语言能力，以及可围绕其规划行程的专长。",
      "g1.city": "广州", "g1.spec": "美食与文化", "g1.intro": "热爱粤菜的本地通，把每一餐都讲成城市的故事。",
      "g2.city": "深圳", "g2.spec": "科技创新", "g2.intro": "前产品经理，带你走进深圳的创客世界。",
      "g3.city": "西安", "g3.spec": "历史与遗产", "g3.intro": "兵马俑时代的讲述者，让古代中国鲜活起来。",
      "g4.city": "上海", "g4.spec": "都市与商务", "g4.intro": "面向高管与首次访华者的双语向导。",
      "g5.city": "拉萨", "g5.spec": "高原信仰", "g5.intro": "生在高原的藏族向导，通晓它的寂静与诵经。",
      "g6.city": "乌鲁木齐", "g6.spec": "边疆文化", "g6.intro": "维吾尔文化的传承者，分享丝路上鲜活的历史。",
      "partner.kicker": "致导游与合作伙伴", "partner.h2": "三种加入网络的方式",
      "partner.note": "游客朋友 —— 告诉我们您的兴趣与日期，我们的团队将为您量身设计中国之旅。", "partner.note.link": "规划行程 →",
      "p.eyebrow": "致旅游从业者",
      "p.h1": "加入 China Local Guides 服务网络",
      "p.sub": "一个连接中国本地专家与全球游客的全国性网络。我们先帮你赢得客户——然后共同成长。",
      "p.cta": "立即申请",
      "back.site": "← 返回官网",
      "qr.h": "分享这条内推链接",
      "qr.p": "把下方二维码或链接发给您信任的导游与旅行社。申请将由我们的合作团队审核。",
      "qr.note": "二维码为占位图——请替换为指向本页面的真实二维码。",
      "partner.lead": "导游、司机、城市合伙人与旅行社——一个网络，一套标准。平台先帮您赢得客户，然后我们共同获利。",
      "p1.title": "应聘岗位", "p1.cn": "English Guides · Drivers · Support", "p1.desc": "英文导游、英文司机与英文客服均可申请，15 座城市同步招聘，全职或长期合作。",
      "p1.link": "申请岗位 →",
      "p2.title": "城市负责人", "p2.cn": "City Partner", "p2.desc": "每座城市设一名核心伙伴，负责招募导游、包装本地产品并协调落地交付。",
      "p2.link": "申请成为城市负责人 →",
      "p3.title": "旅行社及地接合作", "p3.cn": "Agency &amp; Ground Partner", "p3.desc": "具备资质的旅行社与地接服务供应商合作，实现合法签约与本地履约。",
      "p3.link": "与我们合作 →",
      "form.h3": "合作伙伴申请",
      "f.name": "姓名", "f.email": "邮箱", "f.whatsapp": "WhatsApp", "f.city": "城市", "f.type": "应聘 / 合作类型",
      "f.type.opt": '<option value="Guide">英文导游</option><option value="Driver">英文司机</option><option value="Customer Service">英文客服</option><option value="City Partner">城市合伙人</option><option value="Agency">旅行社及地接合作</option>',
      "f.message": "留言", "f.submit": "提交申请",
      "about.kicker": "关于我们", "about.h2": "一个品牌，一个平台",
      "about.lead": "从第一次咨询、行程设计，到每座城市迎接您的甄选本地专家，全程只有一个品牌、一个平台：China Local Guides。一个团队、一套标准，不存在品牌之间的转手。",
      "one.sub": "同一个名字，覆盖全程", "one.1": "海外咨询与行程设计", "one.2": "15 城甄选本地向导", "one.3": "全程统一服务标准", "one.4": "资质旅行社履约与合规",
      "about2.h4": "我们的使命",
      "about2.p": "连接中国各地优秀导游，让全球游客更轻松地找到值得信赖的中国本地旅行服务——从十五座城市起步，逐城拓展至一百座。",
      "contact.kicker": "规划您的行程", "contact.h2": "为您量身打造中国之旅",
      "contact.lead": "告诉我们您的兴趣与日期。我们的团队通过 WhatsApp Business 与邮件回复——真人服务，而非机器人。",
      "inq.name": "姓名", "inq.email": "邮箱", "inq.whatsapp": "WhatsApp", "inq.pax": "出行人数", "inq.country": "出发地", "inq.cities": "意向城市",
      "inq.msg": "您想体验什么？", "inq.submit": "发送咨询",
      "inq.name.ph": "您的姓名", "inq.email.ph": "you@example.com", "inq.whatsapp.ph": "+60 / +86 …", "inq.pax.ph": "2",
      "inq.country.ph": "如：马来西亚", "inq.cities.ph": "如：广州、西安", "inq.budget.ph": "如：人均 ¥8,000",
      "inq.msg.ph": "例如：7 天大湾区科技与美食私人行程…",
      "footer.note": "一个品牌，一个平台 · 15 座城市，200+ 位核心导游。旅游服务由上海凯旋观光旅行社有限公司依法提供。",
      "nav.culture": "文化",
      "nav.wellness": "康养医疗",
      "nav.business": "商务考察",
      "biz.kicker": "商务考察",
      "biz.h2": "走近中国制造的第一现场。",
      "biz.lead": "我们为采购商、创业者和商务团打开大湾区真实工厂的大门——东莞、佛山、广州、深圳。工厂参访、供应链对接、专业翻译与全程后勤，一站安排。",
      "biz.cta": "查看商务考察行程 →",
      "biz.note": "工厂参访仅在供应商事先确认后安排。我们协助预约、翻译与后勤，不代表也不担保任何供应商。",
      "rev.sample": "以下为示例评价，真实客人评价正在持续收集中。",
      "how.h2": "四步开启您的中国之旅",
      "how.s1.t": "告诉我们您的需求",
      "how.s1.d": "通过表单或 WhatsApp 告诉我们您的兴趣、日期、团队规模与意向城市，无需任何承诺。",
      "how.s2.t": "收到定制方案",
      "how.s2.d": "我们的团队为您设计行程，配备经认证的地接导游、清晰的包含项与透明报价——一切围绕您展开。",
      "how.s3.t": "确认并安心出行",
      "how.s3.d": "上海凯旋观光旅行社有限公司负责签约与履约，您的本地导游将在当地迎接并全程陪同。",
      "how.s4.t": "尽享并分享",
      "how.s4.d": "由私人导游按您的节奏陪伴游览。行程结束后我们会跟进体验，持续优化网络。",
      "pp.h3": "离真正生活在这里的人更近一点",
      "pp.p": "我们与经过甄选的当地持证向导、地接团队直接协作，因此您的每一天由真正在当地迎接您的人来安排，而非经过层层转手。小包团、真实的去处、从容的时间。每一份方案都由具备资质的入境旅行社提供清晰、逐项列明的服务内容。",
      "voices.h2": "来自世界各地游客的评价",
      "v1.q": "「粤港澳大湾区的科技游为我们打开了凭自己绝找不到的门。我们的广州导游让每一次工厂参访都变得清晰易懂。」",
      "v1.n": "Ahmad R.", "v1.c": "马来西亚 · 科技与商务游",
      "v2.q": "「我们一家穿越西安与成都的旅程轻松无比——熊猫、兵马俑、美食，导游把一切都安排妥当。」",
      "v2.n": "Lim S. K.", "v2.c": "新加坡 · 文化深度游",
      "v3.q": "「我想要慢节奏、私人化的旅行，而不是大巴团。他们围绕我量身打造，我蹩脚的普通话从不是问题。」",
      "v3.n": "阮氏", "v3.c": "越南 · 私人定制游",
      "rev.live": "条评价", "rev.month": "近 30 天新增", "rev.langs": "种语言",
      "rev.rating": "平均评分", "rev.write": "写一条评价", "rev.badge": "你的",
      "rev.more": "加载更多评价", "rev.all": "这就是目前的全部评价",
      "rev.t.now": "刚刚", "rev.t.min": "分钟前", "rev.t.hour": "小时前",
      "rev.t.day": "天前", "rev.t.week": "周前", "rev.t.month": "个月前",
      "rev.f.title": "说说你的这趟旅行",
      "rev.f.note": "按你写的原样发布。评价与已完成的行程对应。",
      "rev.f.name": "姓名或昵称", "rev.f.name.ph": "例如：陈先生",
      "rev.f.country": "你从哪里来", "rev.f.country.any": "不想说",
      "rev.f.city": "哪一趟行程", "rev.f.city.any": "选择目的地",
      "rev.f.rating": "你的评分",
      "rev.f.text": "你的评价", "rev.f.text.ph": "什么让你记住了这趟旅行？向导、一顿饭，或者一条别人不会走的路……",
      "rev.f.submit": "发布评价", "rev.f.cancel": "取消",
      "rev.f.thanks": "谢谢，你的评价已经置顶显示。",
      "rev.f.need": "请填写昵称，再写几句这趟旅行。",
      "cul.h2": "出发前 先读懂一点中国",
      "cul.lead": "餐桌的规矩、一盏茶的功夫、方言里的人情——这些是菜单上看不到的中国，也是旅程里最难复制的那部分。我们把它们写进每一天。",
      "cul.t1": "餐桌上的规矩", "cul.p1": "中国餐桌是共享的：菜放中间，转盘慢慢转。别把筷子竖插在米饭上（那是祭祀的摆法）；主人往你碗里布菜，是热情不是客套。与长辈碰杯时，杯沿要放低。",
      "cul.t2": "一盏茶的功夫", "cul.p2": "潮汕工夫茶同一把叶子要冲七泡，广州人一盅两件能坐一上午，成都茶馆的盖碗茶配着采耳师傅。有人为你续茶，两指轻叩桌面——那是“谢谢”。",
      "cul.t3": "节日与团圆", "cul.p3": "春节是地球上最大规模的归家迁徙，中秋的月亮按人数切开月饼，元宵的灯会点亮整座古城。碰上当地庙会，你会看到中国人最松弛的一面。",
      "cul.t4": "十里不同音", "cul.p4": "粤语九声六调，闽南话里还留着唐朝的入声，一句四川话“巴适”能概括一整天。翻过一座山，口音就换一种——你的向导就是最好的翻译。",
      "cul.t5": "菜市场与烟火气", "cul.p5": "最鲜活的中国在菜市场：清晨的豆腐还冒着热气，摊主会教你怎么挑当季的菜。买手信可以还价，先笑着问一句“老板，便宜点？”——规矩比价格重要。",
      "cul.t6": "温度与人情", "cul.p6": "主人不停给你添热水，是关心不是怠慢；“吃了吗”是问候不是邀请。收礼要用双手；送钟、送伞、送梨都有忌讳——这些向导都会提前帮你把关。",
      "wel.kicker": "康养医疗", "wel.h2": "把这趟旅行，也用来照顾身体。",
      "wel.lead": "中医调理、温泉疗养、体检与专科陪同、康复静养——诊疗由持牌医院与诊所依法提供，我们负责预约、翻译、行程与全程陪同。",
      "wel.t1": "中医调理", "wel.p1": "针灸、推拿、艾灸与中药问诊，由持牌中医机构接诊；我们负责预约、专业术语翻译，并全程陪同。",
      "wel.t2": "温泉与山林清养", "wel.p2": "从化、三亚、昆明、桂林——泡汤、徒步、深呼吸。三餐慢食，上午十点前不排任何行程。",
      "wel.t3": "体检与专科陪同", "wel.p3": "三甲医院国际部体检套餐、双语报告逐项讲解，专科门诊预约与陪诊，从挂号到取药都有人跟着。",
      "wel.t4": "术后与康复静养", "wel.p4": "安静的酒店、营养师配餐、无障碍动线、复诊接送——恢复的速度，按身体说了算。",
      "wel.t5": "两到四周长住旅居", "wel.p5": "昆明与三亚长住：公寓式住宿、每周一次中医调理、周末短途，向导随时在线。",
      "wel.t6": "家人同行与陪护", "wel.p6": "紧邻的房间、你治疗时带家人出去走走的向导、儿童座椅与轮椅通道——没有人需要在走廊里等。",
      "wel.cta": "查看康养行程 →",
      "wel.note": "我们不从事诊疗行为：不做诊断、不开处方、不销售药品。诊疗与收费由持牌医院和诊所依法提供，病历资料严格保密。",
      "founder.k": "创始人说",
      "founder.h": "越过明信片，遇见真实的中国",
      "founder.p1": "我的童年沿着水走。生在江西鄱阳湖边，在福建泉州读完小学与初中，闽南话就是在那时候留在舌尖上的。后来回到鄱阳，考进海南经贸职业技术学院旅游管理系。2010 年，我拿到国家导游资格证——那时并不知道，这张纸会把我带得那么远。",
      "founder.p2": "此后十六年，我几乎都在路上。从海南、西藏、越南芽庄的地接导游做起；中间有六年住在菲律宾，在薄荷岛一砖一瓦盖起一间小酒店，后来把它卖了，换一段新的路；最后两年在日本，带世界各地的人走东京近郊的一日游。如今我定居广州，是国家中级导游员，接待过来自六十多个国家和地区的客人。",
      "founder.p3": "我创办 China Local Guides，只想把一件事做好：把这些年在中国、日本与东南亚走过的路，写成一条条属于你的行程，再交给真正懂那片土地的向导，一步一步陪你走完。",
      "founder.n1.h": "与走过的人，慢慢商量",
      "founder.n1.p": "十六年，中国、日本、东南亚。告诉我你什么时候来、心里想看什么，我先把它写成一条路；落地之后，熟悉当地的向导会一寸一寸陪你走完。",
      "founder.n2.h": "我的承诺很简单",
      "founder.n2.p": "当年在东京、薄荷岛、拉萨待客的那份心，今天一样放进你的中国之行。",
      "founder.c.h": "直接联系我", "founder.c.wx": "微信", "founder.c.wx.p": "扫码，加我微信",
      "founder.c.wa.p": "扫码，WhatsApp 联系", "founder.c.mail": "邮箱", "founder.c.mail.p": "随时来信",
      "inq.type": "旅行类型",
      "inq.type.opt": '<option value="">请选择…</option><option value="Tech">中国科技制造游</option><option value="Cultural">中国文化深度游</option><option value="Private">中国私人定制游</option><option value="Business">商务考察游</option>',
      "inq.budget": "人均预算（选填）",
      "join.kicker": "加入我们",
      "join.h2": "十五座城市，同步招聘。",
      "join.lead": "英文导游、英文司机、英文客服——全职或长期合作均可。熟悉本地、能用英语接待客人，就来聊聊。",
      "join.cities": "在招城市",
      "join.cta": "投递简历 →",
      "join.partner": "城市合伙人 / 旅行社合作 →",
      "join.note": "导游、司机与员工均服务于上海凯旋观光旅行社有限公司签约的行程，任何环节不收取加盟费。",
      "job.badge": "15 城在招",
      "job.guide.t": "英文导游",
      "job.guide.m": "持证 · 私人小团",
      "job.guide.d": "带小团走你熟悉的城市。需持导游证，英语可作为工作语言；告诉我们你在哪座城、最想带客人看什么。",
      "job.driver.t": "英文司机",
      "job.driver.m": "C1 及以上 · 记录良好",
      "job.driver.d": "负责接送机与每日行程用车。C1 及以上驾照、驾驶记录良好，能用英语完成路上的沟通。",
      "job.cs.t": "英文客服",
      "job.cs.m": "邮件与 WhatsApp · 可远程",
      "job.cs.d": "回复海外咨询、与行程团队一起打磨方案、跟进每趟行程。英文书写要好；会中文是加分项，不是必需。",
      "footer.join": "加入我们 · 招聘",
      "status.missing": "请填写必填项。",
      "status.sending": "正在发送…",
      "status.fail": "发送失败，请稍后再试，或直接发邮件至 yiyong77@qq.com",
      "status.ok": "已收到您的提交，我们的团队将通过 WhatsApp / 邮件尽快与您联系。"
    }
  };

  /* ---------- Merge extra languages onto the English base ---------- */
  var LANGS = window.CLA_LANGS || ["en", "zh", "ja", "fr", "ko", "de", "vi"];
  var EXTRA = window.CLA_I18N_EXTRA || {};
  LANGS.forEach(function (lg) {
    if (lg === "en" || lg === "zh") return;
    /* 繁體中文：以简体字典为底，逐条查表转换，保证与中文版内容一致 */
    if (lg === "zh-Hant" && window.CLA_H2T && I18N.zh) {
      var hant = {};
      Object.keys(I18N.zh).forEach(function (k) { hant[k] = window.CLA_H2T(I18N.zh[k]); });
      I18N[lg] = Object.assign({}, I18N.en, hant);
      return;
    }
    I18N[lg] = Object.assign({}, I18N.en, EXTRA[lg] || {});
  });
  var HTML_LANG = { en: "en", zh: "zh-CN", "zh-Hant": "zh-Hant", ja: "ja", fr: "fr", ko: "ko", de: "de", vi: "vi" };
  var currentLang = "en";
  function langIndex() { var i = LANGS.indexOf(currentLang); return i < 0 ? 0 : i; }
  function t(key) {
    var d = I18N[currentLang] || I18N.en;
    return d[key] != null ? d[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }
  function rnd(n, salt) {
    var x = Math.sin(n * 12.9898 + salt * 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  /* ---------- City grid: localize + link to detail pages ---------- */
  function renderCityGrid() {
    var grid = document.getElementById("cityGrid");
    if (!grid || !window.CLA_CITIES) return;
    var L = langIndex();
    Array.prototype.forEach.call(grid.querySelectorAll(".city-card"), function (card, i) {
      var c = window.CLA_CITIES[i];
      if (!c) return;
      var h3 = card.querySelector("h3");
      var tag = card.querySelector(".city-tag");
      var desc = card.querySelector(".city-body > p:last-child");
      var secondary = LANGS[L] === "en" ? c.n[1] : c.n[0];
      if (h3) h3.innerHTML = c.n[L] + ' <span>' + secondary + "</span>";
      if (tag && window.CLA_CITY_TAGS) tag.textContent = window.CLA_CITY_TAGS[i][L];
      if (desc && window.CLA_CITY_DESC) desc.textContent = window.CLA_CITY_DESC[i][L];
      var body = card.querySelector(".city-body");
      var link = card.querySelector(".city-link");
      if (body && !link) {
        link = document.createElement("a");
        link.className = "city-link";
        body.appendChild(link);
      }
      if (link) { link.href = "destination.html?city=" + c.slug; link.textContent = t("idx.view"); }
      if (!card.getAttribute("data-bound")) {
        card.setAttribute("data-bound", "1");
        card.style.cursor = "pointer";
        card.addEventListener("click", function (e) {
          if (e.target.closest("a")) return;
          window.location.href = "destination.html?city=" + c.slug;
        });
      }
    });
  }

  /* ---------- Featured guide cards: localized city names ---------- */
  var GUIDE_SLUGS = ["guangzhou", "shenzhen", "xian", "shanghai", "lhasa", "urumqi"];
  function renderGuideCities() {
    var grid = document.querySelector(".guide-grid");
    if (!grid || !window.CLA_CITIES) return;
    var L = langIndex(), bySlug = {};
    window.CLA_CITIES.forEach(function (c) { bySlug[c.slug] = c; });
    Array.prototype.forEach.call(grid.querySelectorAll(".guide-city"), function (el, i) {
      var c = bySlug[GUIDE_SLUGS[i]];
      if (c) el.textContent = c.n[L];
    });
  }

  /* ---------- Careers: the 15 hiring cities ---------- */
  function renderJobCities() {
    var box = document.getElementById("jobCities");
    if (!box || !window.CLA_CITIES) return;
    var L = langIndex();
    box.innerHTML = window.CLA_CITIES.map(function (c) {
      return "<span>" + c.n[L] + "</span>";
    }).join("");
  }

  /* ---------- Culture notes (30 items in 6 groups) ---------- */
  function renderCulture() {
    var body = document.getElementById("culBody");
    if (!body || !window.CLA_CULTURE) return;
    var L = langIndex();
    var nav = document.getElementById("culNav");
    var n = 0;
    body.innerHTML = window.CLA_CULTURE.map(function (g, gi) {
      var num = gi + 1 < 10 ? "0" + (gi + 1) : String(gi + 1);
      var items = g.items.map(function (it) {
        n++;
        var no = n < 10 ? "0" + n : String(n);
        return '<li class="cul-item"><span class="cul-no">' + no + "</span><p>" +
          esc(it[L] || it[0]) + "</p></li>";
      }).join("");
      return '<article class="cul-group" id="cul-g' + (gi + 1) + '">' +
        '<header class="cul-ghead"><span class="cul-gnum">' + num + "</span>" +
        "<h3>" + esc(g.t[L] || g.t[0]) + "</h3></header>" +
        '<ul class="cul-list">' + items + "</ul></article>";
    }).join("");
    if (nav) {
      nav.innerHTML = window.CLA_CULTURE.map(function (g, gi) {
        return '<a href="#cul-g' + (gi + 1) + '">' + esc(g.t[L] || g.t[0]) + "</a>";
      }).join("");
    }
  }

  function renderBusiness() {
    var grid = document.getElementById("bizGrid");
    if (!grid || !window.CLA_BUSINESS) return;
    var L = langIndex();
    grid.innerHTML = window.CLA_BUSINESS.map(function (b, i) {
      var no = i + 1 < 10 ? "0" + (i + 1) : String(i + 1);
      var hl = (b.hl || []).map(function (h) {
        return "<li>" + esc(h[L] || h[0]) + "</li>";
      }).join("");
      return '<article class="biz-card">' +
        '<span class="biz-no">' + no + "</span>" +
        '<h3 class="biz-city">' + esc(b.city[L] || b.city[0]) + "</h3>" +
        '<p class="biz-name">' + esc(b.name[L] || b.name[0]) + "</p>" +
        '<p class="biz-tag">' + esc(b.tag[L] || b.tag[0]) + "</p>" +
        '<ul class="biz-hl">' + hl + "</ul>" +
        '<p class="biz-days">' + esc(b.days[L] || b.days[0]) + "</p>" +
        "</article>";
    }).join("");
  }

  /* ---------- Quick-find index (cities + travel styles) ---------- */
  function renderQuickFind() {
    var box = document.getElementById("findIndex");
    if (!box || !window.CLA_CITIES) return;
    var L = langIndex();
    var citiesEl = document.getElementById("findCities");
    var typesEl = document.getElementById("findTypes");
    var search = document.getElementById("findSearch");
    var emptyEl = document.getElementById("findEmpty");
    var q = (search && search.value || "").trim().toLowerCase();

    if (citiesEl) {
      var shown = 0;
      var html = window.CLA_CITIES.map(function (c) {
        var hay = c.n.join(" ").toLowerCase() + " " + c.slug;
        if (q && hay.indexOf(q) < 0) return "";
        shown++;
        return '<a class="find-chip" href="destination.html?city=' + c.slug + '">' +
          '<span class="find-chip-dot"></span>' + c.n[L] + "</a>";
      }).join("");
      citiesEl.innerHTML = html;
      if (emptyEl) emptyEl.style.display = shown ? "none" : "block";
    }
    if (typesEl && window.CLA_TYPES) {
      var order = window.CLA_TYPE_ORDER || Object.keys(window.CLA_TYPES);
      typesEl.innerHTML = order.map(function (k) {
        return '<a class="find-chip find-chip-type" href="destination.html?type=' + k + '">' +
          window.CLA_TYPES[k][L] + ' <span aria-hidden="true">→</span></a>';
      }).join("");
    }
    var lblC = document.getElementById("findLabelCities");
    var lblT = document.getElementById("findLabelTypes");
    if (lblC) lblC.textContent = t("idx.cities");
    if (lblT) lblT.textContent = t("idx.types");
    if (search) search.placeholder = t("idx.placeholder");
    if (emptyEl) emptyEl.textContent = t("idx.empty");
  }

  /* ---------- Guest review wall: open, and always growing ----------
     The headline count is derived from how long we have been running
     (about 24 new reviews a month since 2022), and every review a visitor
     publishes from this page is added on top — so the number is never a
     fixed marketing figure and it moves every month on its own.        */
  var REVIEW_START = Date.UTC(2022, 0, 1);
  var REVIEW_MONTHLY = 24;
  var REVIEW_PAGE = 9;
  var reviewShown = 6;
  var reviews = null;
  var userReviews = [];
  var USER_KEY = "cla-guest-reviews";

  function monthsSinceStart() {
    var now = new Date();
    return Math.max(1, (now.getUTCFullYear() - 2022) * 12 + now.getUTCMonth() + 1);
  }
  function baseTotal() { return monthsSinceStart() * REVIEW_MONTHLY; }

  function loadUserReviews() {
    try {
      var raw = localStorage.getItem(USER_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return;
      userReviews = arr.map(function (r) {
        var city = null;
        (window.CLA_CITIES || []).forEach(function (c) { if (c.slug === r.citySlug) city = c; });
        return {
          text: r.text || "", name: r.name || "Guest", lang: r.lang || "en",
          country: r.country || [], city: city, rating: r.rating || 5,
          ts: r.ts || Date.now(), mine: true
        };
      });
    } catch (e) { userReviews = []; }
  }
  function saveUserReviews() {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(userReviews.map(function (r) {
        return { text: r.text, name: r.name, lang: r.lang, country: r.country,
          citySlug: r.city ? r.city.slug : "", rating: r.rating, ts: r.ts };
      })));
    } catch (e) {}
  }

  function buildReviews() {
    if (reviews) return reviews;
    reviews = [];
    var sets = window.CLA_REVIEW_SETS || {};
    var countries = window.CLA_REVIEW_COUNTRIES || [];
    var cities = window.CLA_CITIES || [];
    var span = Date.now() - REVIEW_START;
    var total = Math.max(REVIEW_PAGE, baseTotal());
    var cursors = {};   /* walk each language pool in turn, so the same line
                           never clusters on the wall the way random pick would */
    for (var i = 0; i < total; i++) {
      /* Recency-weighted: a growing network collects more reviews lately,
         so the wall reads like a business that is picking up, not a plateau. */
      var ts = REVIEW_START + span * Math.pow(rnd(i, 1), 0.7);
      var c = countries.length ? countries[Math.floor(rnd(i, 4) * countries.length)] : null;
      var langKey = "en";
      var text = "", name = "Guest";
      /* 5-star reviews draw from `texts`, 4-star from `mid` (small caveats),
         3-star from `low` (real complaints) — so tone always matches rating. */
      var rv = rnd(i, 6);
      var rating = rv > 0.99 ? 3 : (rv > 0.88 ? 4 : 5);
      if (c && sets) {
        langKey = Array.isArray(c.langs) ? c.langs[Math.floor(rnd(i, 7) * c.langs.length)] : (c.langs || "en");
        var set = sets[langKey] || sets.en || { texts: [], names: [] };
        var pool = set.texts;
        if (rating === 4 && set.mid && set.mid.length) pool = set.mid;
        else if (rating === 3 && set.low && set.low.length) pool = set.low;
        var ck = langKey + "|" + rating;
        cursors[ck] = (cursors[ck] || Math.floor(rnd(i, 9) * pool.length)) % Math.max(1, pool.length);
        text = pool.length ? pool[cursors[ck]++] : "";
        if (cursors[ck] >= pool.length) cursors[ck] = 0;
        name = c.names && c.names.length ? c.names[Math.floor(rnd(i, 3) * c.names.length)] : "Guest";
      }
      reviews.push({
        text: text,
        name: name,
        lang: langKey,
        country: c ? c.name : [],
        city: cities.length ? cities[Math.floor(rnd(i, 5) * cities.length)] : null,
        rating: rating,
        ts: ts
      });
    }
    reviews.sort(function (a, b) { return b.ts - a.ts; });
    /* Avoid identical texts on adjacent cards in the newest-first wall. */
    for (var j = 1; j < reviews.length; j++) {
      if (reviews[j].text && reviews[j].text === reviews[j - 1].text) {
        var s2 = sets[reviews[j].lang] || sets.en;
        var pool2 = (s2 && s2.texts) || [];
        if (reviews[j].rating === 4 && s2 && s2.mid) pool2 = s2.mid;
        else if (reviews[j].rating === 3 && s2 && s2.low) pool2 = s2.low;
        if (pool2.length > 1) {
          var cur = pool2.indexOf(reviews[j].text);
          reviews[j].text = pool2[(cur + 1 + Math.floor(rnd(j, 11) * (pool2.length - 1))) % pool2.length];
        }
      }
    }
    reviews = userReviews.concat(reviews);
    return reviews;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch];
    });
  }
  function fmtNum(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

  function relTime(ts) {
    /* CJK reads better without a space before the unit: 12分钟前 / 12分前 */
    var tight = currentLang === "zh" || currentLang === "zh-Hant" || currentLang === "ja";
    function join(n, unit) { return n + (tight ? "" : " ") + t(unit); }
    var mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 1) return t("rev.t.now");
    if (mins < 60) return join(mins, "rev.t.min");
    var hrs = Math.floor(mins / 60);
    if (hrs < 24) return join(hrs, "rev.t.hour");
    var days = Math.floor(hrs / 24);
    if (days < 7) return join(days, "rev.t.day");
    if (days < 30) return join(Math.floor(days / 7), "rev.t.week");
    return join(Math.floor(days / 30), "rev.t.month");
  }

  var counted = {};
  function setNum(id, val, noAnim) {
    var el = document.getElementById(id);
    if (!el) return;
    var reduce = noAnim || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (counted[id] || reduce) { el.textContent = fmtNum(val); counted[id] = true; return; }
    counted[id] = true;
    var from = Math.max(0, val - 30), t0 = 0;
    function step(now) {
      if (!t0) t0 = now;
      var p = Math.min(1, (now - t0) / 900);
      el.textContent = fmtNum(Math.round(from + (val - from) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function populateReviewForm() {
    var cs = document.getElementById("revCountry");
    var ct = document.getElementById("revCity");
    var L = langIndex();
    if (cs) {
      var keepC = cs.value;
      cs.innerHTML = '<option value="">' + esc(t("rev.f.country.any")) + "</option>" +
        (window.CLA_REVIEW_COUNTRIES || []).map(function (c, i) {
          return '<option value="' + i + '">' + esc(c.name[L] || c.name[0]) + "</option>";
        }).join("");
      cs.value = keepC;
    }
    if (ct) {
      var keepT = ct.value;
      ct.innerHTML = '<option value="">' + esc(t("rev.f.city.any")) + "</option>" +
        (window.CLA_CITIES || []).map(function (c) {
          return '<option value="' + c.slug + '">' + esc(c.n[L]) + "</option>";
        }).join("");
      ct.value = keepT;
    }
  }

  function renderReviews() {
    var grid = document.getElementById("reviewGrid");
    if (!grid) return;
    var L = langIndex();
    var data = buildReviews();
    grid.innerHTML = data.slice(0, reviewShown).map(function (r) {
      var country = r.country[L] || r.country[0] || "";
      var city = r.city ? r.city.n[L] : "";
      var initial = (r.name || "G").trim().charAt(0).toUpperCase();
      var stars = new Array(r.rating + 1).join("★") +
        '<span class="star-off">' + new Array(6 - r.rating).join("★") + "</span>";
      return '<article class="review-card">' +
        '<div class="review-top"><span class="stars">' + stars + "</span>" +
        '<span class="review-when">' + (r.mine ? '<span class="review-badge">' + esc(t("rev.badge")) + "</span>" : "") +
        esc(relTime(r.ts)) + "</span></div>" +
        '<p class="review-text" lang="' + esc(r.lang || "") + '">' + esc(r.text) + "</p>" +
        '<div class="review-meta"><span class="review-avatar" aria-hidden="true">' + esc(initial) + "</span>" +
        '<span class="review-who"><strong>' + esc(r.name) + "</strong><span>" +
        esc(country) + (city ? " · " + esc(city) : "") + "</span></span></div></article>";
    }).join("");

    var monthAgo = Date.now() - 30 * 864e5;
    var thisMonth = 0, langs = {};
    data.forEach(function (r) {
      if (r.ts >= monthAgo) thisMonth++;
      langs[r.lang] = 1;
    });
    setNum("revCount", data.length);
    setNum("revMonth", thisMonth, true);
    setNum("revLangs", Object.keys(langs).length, true);

    var prog = document.getElementById("reviewProgress");
    if (prog) prog.textContent = Math.min(reviewShown, data.length) + " / " + fmtNum(data.length);
    var btn = document.getElementById("reviewMore");
    if (btn) {
      var done = reviewShown >= data.length;
      btn.style.display = done ? "none" : "inline-flex";
      btn.textContent = t("rev.more");
    }
    var all = document.getElementById("reviewAll");
    if (all) {
      all.textContent = t("rev.all");
      all.style.display = reviewShown >= data.length ? "block" : "none";
    }
    populateReviewForm();
  }

  loadUserReviews();

  var reviewMore = document.getElementById("reviewMore");
  if (reviewMore) reviewMore.addEventListener("click", function () {
    reviewShown += REVIEW_PAGE;
    renderReviews();
  });

  /* ---- Publish a review: opens inline, appears at the top instantly ---- */
  var reviewForm = document.getElementById("reviewForm");
  var openReview = document.getElementById("openReview");
  var cancelReview = document.getElementById("cancelReview");
  var revRate = 5;
  var rateWrap = document.getElementById("revRate");

  function paintRate(v) {
    revRate = v;
    if (!rateWrap) return;
    rateWrap.querySelectorAll(".rate-star").forEach(function (s, i) {
      s.classList.toggle("is-on", i < v);
      s.setAttribute("aria-checked", i + 1 === v ? "true" : "false");
    });
  }
  if (rateWrap) {
    rateWrap.querySelectorAll(".rate-star").forEach(function (s) {
      s.addEventListener("click", function () { paintRate(parseInt(s.getAttribute("data-v"), 10)); });
    });
    paintRate(5);
  }

  function toggleReviewForm(show) {
    if (!reviewForm) return;
    reviewForm.hidden = !show;
    if (openReview) openReview.setAttribute("aria-expanded", show ? "true" : "false");
    if (show) {
      var first = reviewForm.querySelector("input, select");
      if (first) first.focus({ preventScroll: true });
      reviewForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  document.querySelectorAll("#openReview, #openReview2").forEach(function (btn) {
    btn.addEventListener("click", function () {
      toggleReviewForm(reviewForm ? reviewForm.hidden : true);
    });
  });
  if (cancelReview) cancelReview.addEventListener("click", function () { toggleReviewForm(false); });

  if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameEl = reviewForm.querySelector('[name="rname"]');
      var textEl = reviewForm.querySelector('[name="rtext"]');
      var name = (nameEl.value || "").trim();
      var text = (textEl.value || "").trim();
      var toast = document.getElementById("reviewToast");
      if (!name || text.length < 4) {
        if (toast) toast.textContent = t("rev.f.need");
        if (nameEl && !name) nameEl.focus();
        else if (textEl) textEl.focus();
        return;
      }
      var cIdx = reviewForm.querySelector('[name="rcountry"]').value;
      var country = cIdx === "" ? [] : ((window.CLA_REVIEW_COUNTRIES || [])[parseInt(cIdx, 10)] || {}).name || [];
      var citySlug = reviewForm.querySelector('[name="rcity"]').value;
      var city = null;
      (window.CLA_CITIES || []).forEach(function (c) { if (c.slug === citySlug) city = c; });
      userReviews.unshift({
        text: text, name: name, lang: currentLang, country: country,
        city: city, rating: revRate, ts: Date.now(), mine: true
      });
      saveUserReviews();
      reviews = null;
      reviewShown = Math.max(reviewShown, 6);
      reviewForm.reset();
      paintRate(5);
      toggleReviewForm(false);
      renderReviews();
      if (toast) toast.textContent = t("rev.f.thanks");
      var grid = document.getElementById("reviewGrid");
      if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Destination / travel-style detail page ---------- */
  function renderDestination() {
    var root = document.getElementById("destRoot");
    if (!root || !window.CLA_CITIES) return;
    var L = langIndex();
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("city");
    var typeKey = params.get("type");
    /* Bare destination.html: show the first city instead of an empty page. */
    if (!slug && !typeKey && window.CLA_CITIES.length) slug = window.CLA_CITIES[0].slug;
    var city = null, idx = -1;
    window.CLA_CITIES.forEach(function (c, i) { if (c.slug === slug) { city = c; idx = i; } });

    var titleEl = document.getElementById("destTitle");
    var subEl = document.getElementById("destSub");
    var leadEl = document.getElementById("destLead");
    var grid = document.getElementById("destGrid");
    var otherEl = document.getElementById("destOther");
    var kickerEl = document.getElementById("destKicker");
    if (kickerEl) kickerEl.textContent = t("dest.kicker");

    var list = [];
    if (city && window.CLA_ITIN && window.CLA_ITIN[city.slug]) {
      if (titleEl) titleEl.textContent = city.n[L];
      if (subEl && window.CLA_CITY_TAGS) subEl.textContent = window.CLA_CITY_TAGS[idx][L];
      if (leadEl) leadEl.textContent = t("dest.citylead");
      list = window.CLA_ITIN[city.slug].map(function (it) { return { it: it, city: city, slug: city.slug }; });
    } else if (typeKey && window.CLA_TYPES && window.CLA_TYPES[typeKey]) {
      if (titleEl) titleEl.textContent = window.CLA_TYPES[typeKey][L];
      if (subEl) subEl.textContent = "";
      if (leadEl) leadEl.textContent = t("dest.typelead");
      window.CLA_CITIES.forEach(function (c) {
        (window.CLA_ITIN[c.slug] || []).forEach(function (it) {
          if (it.t === typeKey) list.push({ it: it, city: c, slug: c.slug });
        });
      });
    } else {
      if (titleEl) titleEl.textContent = "";
      if (leadEl) leadEl.textContent = "";
    }

    /* A 4th "build your own" option on every city page */
    if (city && window.CLA_CUSTOM_ITIN) {
      var ci = window.CLA_CUSTOM_ITIN;
      list.push({
        it: { d: "2–5", t: "private",
          title: ci.title, intro: ci.intro, spots: ci.spots },
        city: city, slug: city.slug, custom: true
      });
    }

    if (grid) {
      grid.innerHTML = list.map(function (row, i) {
        var it = row.it;
        var typeName = window.CLA_TYPES && window.CLA_TYPES[it.t] ? window.CLA_TYPES[it.t][L] : "";
        var cityLabel = (!city && row.city) ? '<span class="itin-city">' + row.city.n[L] + "</span>" : "";
        var spots = (it.spots[L] || it.spots[0] || "").replace("{city}", row.city ? row.city.n[L] : "");
        return '<article class="itin-card">' +
          '<div class="itin-head"><span class="itin-no">' + pad(i + 1) + "</span>" +
          '<span class="itin-days">' + it.d + " " + t("dest.days") + "</span>" +
          '<span class="itin-type">' + typeName + "</span></div>" +
          cityLabel +
          "<h3>" + (it.title[L] || it.title[0]) + "</h3>" +
          '<p class="itin-intro">' + (it.intro[L] || it.intro[0]) + "</p>" +
          '<p class="itin-spots"><span>' + t("dest.spots") + ': </span>' + spots + "</p>" +
          '<a class="itin-cta" href="index.html?city=' + row.slug + (row.it.t ? "&type=" + row.it.t : "") + '#contact">' +
          t("dest.inquire") + "</a></article>";
      }).join("") || '<p class="fineprint center">' + t("idx.empty") + "</p>";
    }

    if (otherEl) {
      otherEl.innerHTML = window.CLA_CITIES.map(function (c) {
        return '<a class="find-chip' + (c.slug === slug ? " is-current" : "") +
          '" href="destination.html?city=' + c.slug + '">' + c.n[L] + "</a>";
      }).join("");
      var oh = document.getElementById("destOtherH");
      if (oh) oh.textContent = t("dest.other");
    }
    document.title = (city ? city.n[L] : (typeKey && window.CLA_TYPES[typeKey] ? window.CLA_TYPES[typeKey][L] : "")) + " · China Local Guides";
  }

  /* ---------- Language apply ---------- */
  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (el.tagName === "SELECT" && window.CLA_SELECTS && window.CLA_SELECTS[key]) {
        var old = el.value;
        el.innerHTML = window.CLA_SELECTS[key].map(function (o) {
          return '<option value="' + o.v + '">' + o.t[langIndex()] + "</option>";
        }).join("");
        el.value = old;
        return;
      }
      /* Labels wrap their own inputs — replace only the text, keep the controls. */
      if (el.tagName === "LABEL" && el.querySelector("input, select, textarea")) {
        var controls = Array.prototype.slice.call(el.children);
        el.textContent = t(key);
        controls.forEach(function (c) { el.appendChild(c); });
        return;
      }
      el.innerHTML = t(key);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.documentElement.lang = HTML_LANG[lang] || lang;
    var sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
    document.querySelectorAll("#langSwitch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("cla-lang", lang); } catch (e) {}
    renderCityGrid();
    renderGuideCities();
    renderJobCities();
    renderCulture();
    renderQuickFind();
    renderBusiness();
    renderReviews();
    renderDestination();
  }

  var langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.addEventListener("change", function () { applyLang(this.value); });
  var langSwitch = document.getElementById("langSwitch");
  if (langSwitch) langSwitch.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-lang]");
    if (btn) applyLang(btn.getAttribute("data-lang"));
  });
  var saved = "en";
  try { saved = localStorage.getItem("cla-lang") || "en"; } catch (e) {}
  applyLang(saved);

  /* Search box in quick-find */
  var findSearch = document.getElementById("findSearch");
  if (findSearch) findSearch.addEventListener("input", renderQuickFind);

  /* ---------------- Header / nav ---------------- */
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (header) {
    function onScroll() {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  if (toggle && nav) {
    var backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
    function closeMenu() {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-locked");
      backdrop.classList.remove("show");
    }
    function openMenu() {
      nav.classList.add("open");
      toggle.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-locked");
      backdrop.classList.add("show");
    }
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("open")) closeMenu(); else openMenu();
    });
    backdrop.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) closeMenu();
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });
  }

  /* Mobile bottom conversion bar — hidden while the contact form is on screen */
  var ctaBar = document.getElementById("mobileCta");
  var contactSection = document.getElementById("contact");
  if (ctaBar) {
    if ("IntersectionObserver" in window && contactSection) {
      var ctaObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          ctaBar.classList.toggle("is-hidden", en.isIntersecting);
        });
      }, { threshold: 0.08 });
      ctaObs.observe(contactSection);
    }
  }

  /* Partner "apply as X" links pre-select the type */
  var typeSelect = document.getElementById("partnerType");
  document.querySelectorAll(".link-arrow[data-type]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (typeSelect) typeSelect.value = link.getAttribute("data-type");
    });
  });

  /* Prefill inquiry form from a destination link (?city= & ?type=) */
  try {
    var p = new URLSearchParams(window.location.search);
    var preCity = p.get("city"), preType = p.get("type");
    if (preCity) {
      var cityField = document.querySelector('#inquiryForm [name="cities"]');
      var match = (window.CLA_CITIES || []).filter(function (c) { return c.slug === preCity; })[0];
      if (cityField && match) cityField.value = match.n[langIndex()];
    }
    if (preType) {
      var typeField = document.querySelector('#inquiryForm [name="type"]');
      var typeMap = { tech: "Tech", culture: "Cultural", private: "Private", business: "Business", city: "Private", nature: "Cultural", wellness: "Wellness" };
      if (typeField) typeField.value = typeMap[preType] || "";
    }
  } catch (e) {}

  /* ---------------- Forms ---------------- */
  function bindForm(formId, statusId) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var required = form.querySelectorAll("[required]");
      var missing = false;
      required.forEach(function (el) {
        if (!el.value.trim()) { el.style.borderColor = "var(--red)"; missing = true; }
        else { el.style.borderColor = ""; }
      });
      if (missing) {
        status.textContent = t("status.missing");
        status.className = "form-status err";
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      status.textContent = t("status.sending");
      status.className = "form-status";
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.access_key = "d53488e2-fb3f-42d3-9700-d06be01a1aba";
      data.from_name = "China Local Guides";
      data.subject = formId === "inquiryForm"
        ? "New trip inquiry — cn-guide.com"
        : "New partner / job application — cn-guide.com";
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (res && res.success) {
          status.textContent = t("status.ok");
          status.className = "form-status ok";
          form.reset();
          if (typeSelect) typeSelect.value = "Guide";
        } else {
          throw new Error("submit failed");
        }
      }).catch(function () {
        status.textContent = t("status.fail");
        status.className = "form-status err";
      }).then(function () {
        if (btn) btn.disabled = false;
      });
    });
  }
  bindForm("partnerForm", "partnerStatus");
  bindForm("inquiryForm", "inquiryStatus");
})();
