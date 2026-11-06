/* ============================================================
   CLA Data — destinations, itineraries, review pool
   Shared by index.html / destination.html. No external deps.
   ============================================================ */
(function () {
  "use strict";

  /* Language order used by every multilingual array below:
     0 en, 1 zh, 2 ja, 3 fr, 4 ko, 5 de, 6 vi */
  window.CLA_LANGS = ["en", "zh", "ja", "fr", "ko", "de", "vi"];

  /* ---------- City names (7 languages) ---------- */
  window.CLA_CITIES = [
    { slug: "guangzhou",   n: ["Guangzhou", "广州", "広州", "Canton", "광저우", "Guangzhou", "Quảng Châu"], type: "culture" },
    { slug: "shenzhen",    n: ["Shenzhen", "深圳", "深圳", "Shenzhen", "선전", "Shenzhen", "Thâm Quyến"], type: "tech" },
    { slug: "dongguan",    n: ["Dongguan", "东莞", "東莞", "Dongguan", "둥관", "Dongguan", "Đông Quan"], type: "tech" },
    { slug: "shanghai",    n: ["Shanghai", "上海", "上海", "Shanghai", "상하이", "Shanghai", "Thượng Hải"], type: "city" },
    { slug: "beijing",     n: ["Beijing", "北京", "北京", "Pékin", "베이징", "Peking", "Bắc Kinh"], type: "culture" },
    { slug: "chengdu",     n: ["Chengdu", "成都", "成都", "Chengdu", "청두", "Chengdu", "Thành Đô"], type: "nature" },
    { slug: "chongqing",   n: ["Chongqing", "重庆", "重慶", "Chongqing", "충칭", "Chongqing", "Trùng Khánh"], type: "city" },
    { slug: "xian",        n: ["Xi'an", "西安", "西安", "Xi'an", "시안", "Xi'an", "Tây An"], type: "culture" },
    { slug: "guilin",      n: ["Guilin", "桂林", "桂林", "Guilin", "구이린", "Guilin", "Quế Lâm"], type: "nature" },
    { slug: "kunming",     n: ["Kunming", "昆明", "昆明", "Kunming", "쿤밍", "Kunming", "Côn Minh"], type: "nature" },
    { slug: "lhasa",       n: ["Tibet · Lhasa", "西藏·拉萨", "チベット・ラサ", "Tibet · Lhassa", "티베트 · 라사", "Tibet · Lhasa", "Tây Tạng · Lhasa"], type: "culture" },
    { slug: "urumqi",      n: ["Xinjiang · Urumqi", "新疆·乌鲁木齐", "新疆・ウルムチ", "Xinjiang · Urumqi", "신장 · 우루무치", "Xinjiang · Ürümqi", "Tân Cương · Urumqi"], type: "culture" },
    { slug: "harbin",      n: ["Harbin", "哈尔滨", "ハルビン", "Harbin", "하얼빈", "Harbin", "Cáp Nhĩ Tân"], type: "culture" },
    { slug: "zhangjiajie", n: ["Zhangjiajie", "张家界", "張家界", "Zhangjiajie", "장자제", "Zhangjiajie", "Trương Gia Giới"], type: "nature" },
    { slug: "sanya",       n: ["Sanya", "三亚", "三亜", "Sanya", "싼야", "Sanya", "Tam Á"], type: "nature" }
  ];

  /* City tags — 7 languages, aligned with CLA_CITIES order */
  window.CLA_CITY_TAGS = [
    ["Trade & Cuisine", "商贸·美食", "商貿とグルメ", "Commerce & gastronomie", "무역·미식", "Handel & Küche", "Thương mại & ẩm thực"],
    ["Tech & Innovation", "科技创新", "テック・革新", "Tech & innovation", "테크·혁신", "Technik & Innovation", "Công nghệ & đổi mới"],
    ["Manufacturing", "制造业", "ものづくり", "Industrie manufacturière", "제조업", "Fertigung", "Sản xuất"],
    ["Global Metropolis", "国际都会", "国際都市", "Métropole mondiale", "국제도시", "Weltmetropole", "Đô thị quốc tế"],
    ["History & Great Wall", "历史·长城", "歴史と長城", "Histoire & Grande Muraille", "역사·만리장성", "Geschichte & Große Mauer", "Lịch sử & Trường Thành"],
    ["Pandas & Food", "熊猫·美食", "パンダとグルメ", "Pandas & cuisine", "판다·미식", "Pandas & Küche", "Gấu trúc & ẩm thực"],
    ["Mountain City", "山城", "山城", "Cité montagneuse", "산성", "Bergstadt", "Thành phố núi"],
    ["Ancient Capital", "古都", "古都", "Capitale antique", "고도", "Alte Hauptstadt", "Cố đô"],
    ["Karst Landscapes", "山水", "カルスト山水", "Paysages karstiques", "카르스트 풍경", "Karstlandschaft", "Cảnh quan đá vôi"],
    ["Yunnan Gateway", "云南门户", "雲南の玄関", "Porte du Yunnan", "윈난 관문", "Tor zu Yunnan", "Cửa ngõ Vân Nam"],
    ["Highland & Faith", "高原信仰", "高地と信仰", "Foi des hauts plateaux", "고원·신앙", "Hochland & Glaube", "Cao nguyên & tín ngưỡng"],
    ["Silk Road", "丝路", "シルクロード", "Route de la Soie", "실크로드", "Seidenstraße", "Con đường Tơ lụa"],
    ["Ice & Snow", "冰雪", "氷雪", "Glace & neige", "빙설", "Eis & Schnee", "Băng tuyết"],
    ["Natural Wonder", "自然奇景", "自然の驚異", "Merveille naturelle", "자연 경이", "Naturwunder", "Kỳ quan thiên nhiên"],
    ["Tropical Resort", "热带度假", "トロピカルリゾート", "Tropical & balnéaire", "열대 휴양", "Tropenresort", "Nghỉ dưỡng nhiệt đới"]
  ];

  /* City one-liners — 7 languages, aligned with CLA_CITIES order */
  window.CLA_CITY_DESC = [
    ["Canton trade, morning dim sum and the Pearl River after dark.", "千年商都、一盅两件与珠江夜色。", "広東の商い、飲茶、珠江の夜。", "Canton, le dim sum et la Rivière des Perles la nuit.", "광둥의 무역, 딤섬, 주강의 밤.", "Kanton-Handel, Dim Sum und der Perlfluss am Abend.", "Thương mại Quảng Đông, dimsum và sông Châu Giang về đêm."],
    ["Smart factories, maker culture and a skyline built on ideas.", "智能工厂、创客文化与由创意堆出的天际线。", "スマート工場、メイカー文化、発想がつくる天際線。", "Usines intelligentes, culture maker et skyline d'idées.", "스마트 공장, 메이커 문화, 아이디어의 스카이라인.", "Smart Factories, Maker-Kultur und eine Skyline aus Ideen.", "Nhà máy thông minh, văn hóa maker và đường chân trời của ý tưởng."],
    ["The workshop of the Greater Bay — see how things are really made.", "大湾区的车间，看一件东西究竟怎样被造出来。", "大湾区の工房——ものが作られる現場を。", "L'atelier de la Grande Baie : voir comment les objets se fabriquent.", "대만구의 작업장, 물건이 만들어지는 현장.", "Die Werkstatt der Greater Bay – wie Dinge wirklich entstehen.", "Xưởng của Vùng vịnh lớn – tận mắt thấy sản phẩm được làm ra."],
    ["The Bund, old villas and China's most international city.", "外滩、老洋房，中国最具国际感的城市。", "外灘、旧洋館、中国で最も国際的な街。", "Le Bund, les villas anciennes et la ville la plus internationale de Chine.", "와이탄, 옛 저택, 중국 가장 국제적인 도시.", "Bund, alte Villen und Chinas internationalste Stadt.", "Bến Thượng Hải, biệt thự cổ và đô thị quốc tế nhất Trung Quốc."],
    ["The Great Wall, the Forbidden City and living hutong lanes.", "长城、故宫，以及仍然有人生活的胡同。", "長城、故宮、今も人が暮らす胡同。", "Grande Muraille, Cité interdite et hutongs habités.", "만리장성, 자금성, 사람 사는 후통.", "Große Mauer, Verbotene Stadt und bewohnte Hutongs.", "Trường Thành, Tử Cấm Thành và những ngõ hồ đồng còn có người ở."],
    ["Pandas, teahouses and a city that never hurries.", "熊猫、茶馆，和一座不赶时间的城。", "パンダ、茶館、急がない街。", "Pandas, salons de thé et une ville qui ne se presse jamais.", "판다, 찻집, 서두르지 않는 도시.", "Pandas, Teehäuser und eine Stadt ohne Eile.", "Gấu trúc, quán trà và thành phố chẳng bao giờ vội."],
    ["Cliffside lights, hotpot and a river running through the hills.", "崖上灯火、火锅，以及穿山而过的江。", "崖の灯り、火鍋、山を貫く川。", "Lumières à flanc de falaise, fondue et fleuve entre les collines.", "절벽 야경, 훠궈, 산을 가로지르는 강.", "Lichter am Felsen, Hotpot und ein Fluss durch die Hügel.", "Đèn vách núi, lẩu và dòng sông xuyên qua đồi."],
    ["The Terracotta Army and the city where the Silk Road began.", "兵马俑，与丝路起点的那座城。", "兵馬俑、そしてシルクロードが始まった街。", "L'armée de terre cuite et la ville où débuta la Route de la Soie.", "병마용, 실크로드가 시작된 도시.", "Terrakotta-Armee und die Stadt am Anfang der Seidenstraße.", "Đội quân đất nung và thành phố khởi đầu Con đường Tơ lụa."],
    ["Karst peaks and the Li River — China's classic landscape.", "喀斯特峰林与漓江，最经典的中国山水。", "カルストの峰と漓江——中国の原風景。", "Pics karstiques et rivière Li, le paysage classique de la Chine.", "카르스트 봉우리와 리강, 중국의 대표 풍경.", "Karstgipfel und Li-Fluss – Chinas klassische Landschaft.", "Đỉnh đá vôi và sông Ly – cảnh quan kinh điển của Trung Quốc."],
    ["Spring-like weather, flowers and the door to Yunnan.", "四季如春、鲜花，以及通往云南的门。", "常春の気候、花、雲南への扉。", "Climat printanier, fleurs et porte d'entrée du Yunnan.", "사계절 봄, 꽃, 윈난으로 가는 문.", "Frühlingsklima, Blumen und das Tor nach Yunnan.", "Khí hậu như xuân, hoa và cửa ngõ vào Vân Nam."],
    ["Potala Palace, monasteries and the vast highland sky.", "布达拉宫、寺院，与辽阔的高原天空。", "ポタラ宮、僧院、広大な高地の空。", "Potala, monastères et l'immense ciel d'altitude.", "포탈라궁, 사원, 드넓은 고원의 하늘.", "Potala, Klöster und der weite Himmel des Hochlands.", "Cung Potala, tu viện và bầu trời cao nguyên mênh mông."],
    ["Deserts, bazaars and the living heritage of the Silk Road.", "沙漠、巴扎，与仍然鲜活的丝路遗产。", "砂漠、バザール、今も生きるシルクロードの遺産。", "Déserts, bazars et héritage vivant de la Route de la Soie.", "사막, 바자르, 살아있는 실크로드 유산.", "Wüsten, Basare und das lebendige Erbe der Seidenstraße.", "Sa mạc, chợ lớn và di sản sống của Con đường Tơ lụa."],
    ["Ice festivals, Russian heritage and a northern winter.", "冰雪节、俄式风情，与地道的北国冬天。", "氷雪祭り、ロシアの面影、北国の冬。", "Festival de glace, héritage russe et hiver du Nord.", "빙설 축제, 러시아 유산, 북녘의 겨울.", "Eisfestival, russisches Erbe und ein Winter des Nordens.", "Lễ hội băng, di sản Nga và mùa đông phương Bắc."],
    ["Sandstone peaks above the clouds, forests below.", "云上的砂岩峰林，云下的原始森林。", "雲上の砂岩峰、雲下の原生林。", "Pics de grès au-dessus des nuages, forêts en dessous.", "구름 위 사암 봉우리, 아래 원시림.", "Sandsteingipfel über den Wolken, Wälder darunter.", "Đỉnh sa thạch trên mây, rừng nguyên sinh bên dưới."],
    ["Warm beaches, tropical islands and a winter by the South China Sea.", "温暖海滩、热带海岛，南海边的越冬之地。", "暖かな浜、熱帯の島、南シナ海の冬。", "Plages chaudes, îles tropicales et hiver en mer de Chine méridionale.", "따뜻한 해변, 열대 섬, 남중국해의 겨울.", "Warme Strände, Tropeninseln und Winter am Südchinesischen Meer.", "Bãi biển ấm, đảo nhiệt đới và mùa đông bên Biển Đông."]
  ];

  /* ---------- Travel style / type names (7 languages) ---------- */
  window.CLA_TYPES = {
    tech:    ["Technology & Manufacturing", "科技制造", "テクノロジー・製造", "Technologie & industrie", "기술·제조", "Technik & Industrie", "Công nghệ & Sản xuất"],
    culture: ["Culture & Heritage", "文化深度", "文化・遺産", "Culture & patrimoine", "문화·유산", "Kultur & Geschichte", "Văn hóa & Di sản"],
    private: ["Private & Tailor-made", "私人定制", "プライベート・オーダーメイド", "Privé & sur mesure", "프라이빗 맞춤", "Privat & individuell", "Riêng tư & theo yêu cầu"],
    business:["Business & Inspection", "商务考察", "ビジネス視察", "Affaires & visites d'usines", "비즈니스·시찰", "Geschäftsreisen", "Doanh nghiệp & khảo sát"],
    city:    ["City & Nightlife", "都市与夜色", "都市と夜景", "Villes & nuits", "도시·야경", "Stadt & Nachtleben", "Đô thị & về đêm"],
    nature:  ["Nature & Landscapes", "自然与山水", "自然・絶景", "Nature & paysages", "자연·풍경", "Natur & Landschaft", "Thiên nhiên & cảnh quan"],
    wellness:["Wellness & Medical", "康养医疗", "ウェルネス・医療", "Bien-être & santé", "웰니스·의료", "Wellness & Medizin", "Dưỡng sinh & Y tế"]
  };
  window.CLA_TYPE_ORDER = ["tech", "culture", "private", "business", "city", "nature", "wellness"];

  /* ---------- Business & Inspection tours (Greater Bay manufacturing) ----------
     Each entry: 7-language arrays [en, zh, ja, fr, ko, de, vi] */
  window.CLA_BUSINESS = [
    {
      slug: "dongguan",
      city: ["Dongguan", "东莞", "東莞", "Dongguan", "둥관", "Dongguan", "Đông Quan"],
      name: ["Electronics & Hardware", "电子与硬件制造", "電子・ハードウェア製造", "Électronique & matériel", "전자·하드웨어", "Elektronik & Hardware", "Điện tử & phần cứng"],
      tag:  ["From workshop to supply chain", "从车间到供应链", "工場からサプライチェーン", "De l'atelier à la chaîne", "현장부터 공급망", "Vom Werk zum Supply Chain", "Từ xưởng đến chuỗi cung ứng"],
      days: ["1–2 days", "1–2 天", "1〜2日", "1 à 2 jours", "1~2일", "1–2 Tage", "1–2 ngày"],
      hl: [
        ["See real automation lines", "看真实自动化产线", "実際の自動化ラインを見学", "Visitez de vraies lignes d'automatisation", "실제 자동화 라인 견학", "Echte Automatisierungslinien sehen", "Tham quan dây chuyền tự động thực tế"],
        ["Meet component suppliers", "对接零部件供应商", "部品サプライヤーと面談", "Rencontrez les fournisseurs de composants", "부품 공급업체 미팅", "Komponenten-Lieferanten treffen", "Gặp nhà cung cấp linh kiện"],
        ["Private translator & logistics", "私人翻译与后勤", "専任通訳と手配", "Traducteur privé et logistique", "전담 통역·물류", "Privater Dolmetscher & Logistik", "Thông dịch viên & hậu cần riêng"]
      ]
    },
    {
      slug: "foshan",
      city: ["Foshan", "佛山", "仏山", "Foshan", "포산", "Foshan", "Phật Sơn"],
      name: ["Home, Ceramics & Appliances", "家居·陶瓷·家电", "家具・陶磁器・家電", "Maison, céramique & électroménager", "가구·도자기·가전", "Haushalt, Keramik & Elektro", "Nội thất, gốm sứ & gia dụng"],
      tag:  ["The workshop of everyday goods", "日用制造的车间", "日用品の工房", "L'atelier des objets du quotidien", "일용품 제조의 작업장", "Die Werkstatt des Alltags", "Xưởng hàng tiêu dùng"],
      days: ["1–2 days", "1–2 天", "1〜2日", "1 à 2 jours", "1~2일", "1–2 Tage", "1–2 ngày"],
      hl: [
        ["Furniture & ceramics clusters", "家具与陶瓷产业集群", "家具・陶磁器の集積地", "Clusters de meubles et céramique", "가구·도자기 클러스터", "Möbel- & Keramikcluster", "Cụm nội thất & gốm sứ"],
        ["Kitchen & lighting factories", "厨电与照明工厂", "キッチン家電・照明工場", "Usines d'électroménager et d'éclairage", "주방가전·조명 공장", "Küchen- & Beleuchtungswerke", "Nhà máy gia dụng & chiếu sáng"],
        ["Bulk & OEM sourcing", "大宗与代工采购", "卸売・OEM調達", "Sourcing en gros et OEM", "도매·OEM 소싱", "Groß- & OEM-Beschaffung", "Thu mua sỉ & OEM"]
      ]
    },
    {
      slug: "guangzhou",
      city: ["Guangzhou", "广州", "広州", "Canton", "광저우", "Guangzhou", "Quảng Châu"],
      name: ["Trade, Auto & Markets", "外贸·汽车·专业市场", "貿易・自動車・専門市場", "Commerce, automobile & marchés", "무역·자동차·전문시장", "Handel, Auto & Märkte", "Thương mại, ô tô & chợ chuyên doanh"],
      tag:  ["China's trade gateway", "中国外贸门户", "中国貿易の玄関", "La porte du commerce chinois", "중국 무역 관문", "Chinas HandelsTor", "Cửa ngõ thương mại Trung Quốc"],
      days: ["1–3 days", "1–3 天", "1〜3日", "1 à 3 jours", "1~3일", "1–3 Tage", "1–3 ngày"],
      hl: [
        ["Canton Fair & trade hubs", "广交会与贸易枢纽", "広州交易会と貿易拠点", "Foire de Canton et pôles commerciaux", "캔톤페어·무역 거점", "Canton Fair & Handelshubs", "Hội chợ Canton & đầu mối thương mại"],
        ["Auto & EV supply chain", "汽车与新能源产业链", "自動車・EVサプライチェーン", "Chaîne auto & VE", "자동차·EV 공급망", "Auto- & E-Auto-Kette", "Chuỗi ô tô & xe điện"],
        ["Professional wholesale markets", "专业批发市场", "専門卸売市場", "Marchés de gros spécialisés", "전문 도매시장", "Fachgroßmärkte", "Chợ bán sỉ chuyên doanh"]
      ]
    },
    {
      slug: "shenzhen",
      city: ["Shenzhen", "深圳", "深圳", "Shenzhen", "선전", "Shenzhen", "Thâm Quyến"],
      name: ["Hard Tech & Innovation", "硬科技与创新创业", "ハードテックとイノベーション", "Deep tech & innovation", "하드테크·혁신", "Deep Tech & Innovation", "Công nghệ lõi & đổi mới"],
      tag:  ["The innovation engine", "创新引擎", "イノベーションのエンジン", "Le moteur de l'innovation", "혁신 엔진", "Der Innovationsmotor", "Động cơ đổi mới"],
      days: ["1–2 days", "1–2 天", "1〜2日", "1 à 2 jours", "1~2일", "1–2 Tage", "1–2 ngày"],
      hl: [
        ["Tech parks & maker spaces", "科技园与创客空间", "科技園・メイカースペース", "Parcs technologiques et espaces maker", "테크파크·메이커스페이스", "Tech-Parks & Maker-Spaces", "Công viên công nghệ & không gian maker"],
        ["Hardware & supply-chain tours", "硬件与供应链考察", "ハードウェア・サプライチェーン視察", "Visites hardware & chaîne", "하드웨어·공급망 투어", "Hardware- & Supply-Chain-Touren", "Tham quan phần cứng & chuỗi cung ứng"],
        ["Investor & founder meetups", "投资人与创业者对接", "投資家・起業家交流会", "Rencontres investisseurs", "투자자·창업가 미팅", "Investor- & Founder-Treffen", "Gặp gỡ nhà đầu tư & founder"]
      ]
    }
  ];

  /* ---------- Itineraries: 3 classic ways per city ----------
     Each: { d: days, t: theme key, title: [7], intro: [7], spots: [7] }
     Spots are kept short so they read well in every language.            */
  function I(d, t, title, intro, spots) { return { d: d, t: t, title: title, intro: intro, spots: spots }; }

  window.CLA_ITIN = {
    guangzhou: [
      I(3, "culture",
        ["Cantonese Food & Old Town", "广府美食与老城", "広東グルメと旧市街", "Cuisine cantonaise et vieille ville", "광둥 미식과 옛거리", "Kantonesische Küche & Altstadt", "Ẩm thực Quảng Đông và phố cổ"],
        ["Morning dim sum, Shamian arcades and a Pearl River evening cruise with a local food lover.", "与本地美食向导饮早茶、逛沙面骑楼，夜游珠江。", "飲茶、沙面のアーケード、珠江の夜景クルーズを地元ガイドと。", "Dim sum matinal, arcades de Shamian et croisière nocturne sur la Rivière des Perles.", "아침 딤섬, 사몐 옛거리, 주강 야간 유람을 현지 가이드와.", "Morgendliches Dim Sum, Shamian-Arkaden und eine Abendfahrt auf dem Perlfluss.", "Dimsum sáng, phố cổ Sa Diện và du thuyền đêm trên sông Châu Giang."],
        ["Chen Clan Hall · Shamian · Pearl River", "陈家祠 · 沙面 · 珠江", "陳家祠・沙面・珠江", "Chen Clan · Shamian · Rivière des Perles", "진가사 · 사몐 · 주강", "Chen-Clan-Halle · Shamian · Perlfluss", "Trần Gia Từ · Sa Diện · Châu Giang"]),
      I(4, "tech",
        ["Greater Bay Area Trade & Tech", "大湾区商贸科技线", "大湾区の商貿・テック", "Commerce & tech de la Grande Baie", "다완구 무역·테크", "Handel & Technik in der Greater Bay", "Thương mại & công nghệ Vùng vịnh lớn"],
        ["Canton Fair connections, wholesale markets and a Shenzhen–Dongguan factory extension.", "广交会资源、专业批发市场，延伸深圳与东莞工厂考察。", "広交会、専門市場、深圳・東莞の工場視察へとつなぐ。", "Salon de Canton, marchés de gros et extension usines Shenzhen–Dongguan.", "캔톤페어, 도매시장, 선전–둥관 공장 연계.", "Canton Fair, Großmärkte und Fabrikbesuche in Shenzhen–Dongguan.", "Hội chợ Quảng Châu, chợ đầu mối và nhà máy Thâm Quyến–Đông Quan."],
        ["Canton Fair · Yuexiu · Shenzhen", "广交会 · 越秀 · 深圳", "広交会・越秀・深圳", "Canton Fair · Yuexiu · Shenzhen", "캔톤페어 · 웨슈 · 선전", "Canton Fair · Yuexiu · Shenzhen", "Canton Fair · Việt Tú · Thâm Quyến"]),
      I(2, "private",
        ["Lingnan Gardens & Slow Living", "岭南园林慢生活", "嶺南庭園とスローライフ", "Jardins Lingnan et art de vivre", "링난 정원과 느린 하루", "Lingnan-Gärten & langsames Leben", "Vườn Lĩnh Nam & sống chậm"],
        ["Yuexiu Park, the Nanyue King Museum and an unhurried afternoon in a teahouse.", "越秀公园、南越王博物院，再来一整个下午的茶楼时光。", "越秀公園、南越王博物院、茶楼でゆったりした午後。", "Parc Yuexiu, musée Nanyue et un après-midi sans hâte en maison de thé.", "웨슈 공원, 남월왕 박물관, 찻집의 여유로운 오후.", "Yuexiu-Park, Nanyue-Museum und ein entspannter Nachmittag im Teehaus.", "Công viên Việt Tú, bảo tàng Nam Việt và chiều thong thả trong quán trà."],
        ["Yuexiu · Nanyue Museum · Teahouse", "越秀 · 南越王博物院 · 茶楼", "越秀・南越王博物院・茶楼", "Yuexiu · Musée Nanyue · Salon de thé", "웨슈 · 남월왕 · 찻집", "Yuexiu · Nanyue-Museum · Teehaus", "Việt Tú · Nam Việt · quán trà"])
    ],
    shenzhen: [
      I(3, "tech",
        ["Maker & Hardware Tour", "创客与硬件之旅", "メイカーとハードウェア", "Circuit makers & hardware", "메이커·하드웨어 투어", "Maker- & Hardware-Tour", "Maker & phần cứng"],
        ["Huaqibei electronics markets, maker spaces and a session with a product engineer.", "华强北电子市场、创客空间，与产品工程师面对面交流。", "華強北の電子市場、メイカースペース、技術者との対話。", "Marchés de Huaqibei, espaces makers et rencontre avec un ingénieur produit.", "화창베이 전자시장, 메이커 스페이스, 엔지니어 미팅.", "Huaqibei-Elektronikmärkte, Maker-Spaces und ein Gespräch mit einem Produktentwickler.", "Chợ điện tử Hoa Cường Bắc, không gian maker và gặp kỹ sư sản phẩm."],
        ["Huaqibei · OCT-LOFT · Nanshan", "华强北 · 华侨城创意园 · 南山", "華強北・OCT-LOFT・南山", "Huaqibei · OCT-LOFT · Nanshan", "화창베이 · OCT-LOFT · 난산", "Huaqibei · OCT-LOFT · Nanshan", "Hoa Cường Bắc · OCT-LOFT · Nam Sơn"]),
      I(2, "city",
        ["Skyline & Coastal Escape", "天际线与海岸", "スカイラインと海辺", "Skyline et échappée côtière", "스카이라인과 해안", "Skyline & Küste", "Đường chân trời & ven biển"],
        ["Futian CBD, a bayfront walk and a private car out to the old Dapeng fortress.", "福田 CBD、深圳湾漫步，专车前往大鹏所城。", "福田CBD、深圳湾の散歩、専用車で大鵬所城へ。", "CBD de Futian, promenade sur la baie et voiture privée vers la forteresse de Dapeng.", "푸톈 CBD, 선전만 산책, 전용차로 다펑 소성.", "Futian-CBD, Spaziergang an der Bucht und Privatwagen zur Festung Dapeng.", "CBD Phúc Điền, dạo vịnh Thâm Quyến và xe riêng đến thành Đại Bằng."],
        ["Futian · Shenzhen Bay · Dapeng", "福田 · 深圳湾 · 大鹏所城", "福田・深圳湾・大鵬所城", "Futian · Baie de Shenzhen · Dapeng", "푸톈 · 선전만 · 다펑", "Futian · Shenzhen Bay · Dapeng", "Phúc Điền · vịnh Thâm Quyến · Đại Bằng"]),
      I(1, "business",
        ["Tech Company Visit", "科技企业参访", "テック企業視察", "Visite d'entreprise tech", "테크 기업 방문", "Tech-Unternehmensbesuch", "Tham quan doanh nghiệp công nghệ"],
        ["A curated half-day at a robotics or EV campus with an English-speaking host.", "由英语向导陪同，参访机器人或新能源企业园区半天。", "英語ガイド同行でロボット・EV拠点を半日視察。", "Une demi-journée dans un campus robotique ou véhicules électriques, avec hôte anglophone.", "영어 가이드와 함께 로봇·전기차 캠퍼스 반나절 방문.", "Ein halber Tag in einem Robotik- oder E-Mobilitäts-Campus mit englischsprachiger Begleitung.", "Nửa ngày tại khu robotics hoặc xe điện, có hướng dẫn viên nói tiếng Anh."],
        ["Robotics campus · EV campus", "机器人园区 · 新能源园区", "ロボット拠点・EV拠点", "Campus robotique · Campus VE", "로봇 캠퍼스 · EV 캠퍼스", "Robotik-Campus · E-Mobilität", "Khu robotics · khu xe điện"])
    ],
    dongguan: [
      I(2, "tech",
        ["Factory Floor Insight", "工厂一线考察", "工場フロア視察", "Au cœur de l'usine", "생산 현장 견학", "Einblick in die Fabrik", "Tham quan dây chuyền"],
        ["A guided walk through a working line, from moulding to assembly and quality control.", "走进真实产线，从模具、组装到质检全程讲解。", "金型から組立・検査まで稼働中のラインを案内付きで。", "Parcours guidé sur une ligne en activité : moulage, assemblage, contrôle qualité.", "금형·조립·품질관리까지 가동 중인 라인을 견학.", "Geführter Rundgang durch eine laufende Linie: Formgebung, Montage, Qualitätskontrolle.", "Tham quan dây chuyền đang vận hành: từ khuôn, lắp ráp đến kiểm định."],
        ["Moulding · Assembly · QC", "模具 · 组装 · 质检", "金型・組立・検査", "Moulage · Assemblage · QC", "금형 · 조립 · 품질검사", "Formgebung · Montage · QS", "Khuôn · lắp ráp · QC"]),
      I(1, "business",
        ["Supplier Matching Day", "供应商对接日", "サプライヤーマッチング", "Journée de mise en relation fournisseurs", "공급업체 매칭의 날", "Lieferanten-Matching-Tag", "Ngày kết nối nhà cung cấp"],
        ["Pre-arranged meetings with vetted manufacturers and a bilingual sourcing interpreter.", "预约甄选制造商会谈，配双语采购翻译。", "審査済みメーカーとの面談とバイリンガル通訳を手配。", "Rendez-vous planifiés avec des fabricants vérifiés et interprète bilingue.", "검증된 제조사 미팅과 이중언어 통역을 미리 예약해 드립니다.", "Vorab vereinbarte Gespräche mit geprüften Herstellern und zweisprachigem Dolmetscher.", "Cuộc hẹn với nhà sản xuất đã thẩm định, kèm thông dịch viên song ngữ."],
        ["Vetted manufacturers · Interpreter", "甄选制造商 · 双语翻译", "審査済みメーカー・通訳", "Fabricants vérifiés · Interprète", "검증 제조사 · 통역", "Geprüfte Hersteller · Dolmetscher", "Nhà sản xuất đã thẩm định · thông dịch"]),
      I(1, "culture",
        ["Old Town & Waterfront", "老城与水乡", "旧市街と水辺", "Vieille ville et quais", "옛거리와 물가", "Altstadt & Wasserfront", "Phố cổ & ven sông"],
        ["Ke Garden, Qifeng Mountain and a slow lunch in a century-old neighbourhood.", "可园、旗峰山，在百年老街区慢慢吃一顿午饭。", "可園、旗峰山、百年の街並みでゆっくり昼食。", "Jardin Ke, mont Qifeng et déjeuner tranquille dans un quartier centenaire.", "가원, 기봉산, 백년 노포에서 여유로운 점심.", "Ke-Garten, Qifeng-Berg und ein ruhiges Mittagessen im historischen Viertel.", "Vườn Khả, núi Kỳ Phong và bữa trưa chậm trong phố trăm tuổi."],
        ["Ke Garden · Qifeng · Old lanes", "可园 · 旗峰山 · 老街", "可園・旗峰山・古い路地", "Jardin Ke · Qifeng · Vieilles rues", "가원 · 기봉 · 옛골목", "Ke-Garten · Qifeng · Altgassen", "Vườn Khả · Kỳ Phong · ngõ cũ"])
    ],
    shanghai: [
      I(2, "city",
        ["Bund, Art Deco & Old Villas", "外滩与老洋房", "外灘とアールデコ", "Bund, Art déco et villas", "와이탄·아르데코·옛 저택", "Bund, Art déco & Villen", "Bến Thượng Hải & biệt thự cổ"],
        ["A private walking route from the Bund through the former concession with a local historian.", "由本地历史学者带领，从外滩走到老租界街区。", "地元の歴史研究家と外灘から旧租界を歩く。", "Parcours privé du Bund à l'ancienne concession avec un historien local.", "현지 역사 가이드와 와이탄에서 옛 조계지를 걷기.", "Privater Spaziergang vom Bund durch die ehemalige Konzession mit einem Stadthistoriker.", "Lộ trình đi bộ riêng từ Bến Thượng Hải qua khu tô giới cũ cùng sử gia địa phương."],
        ["The Bund · Wukang Road · Xintiandi", "外滩 · 武康路 · 新天地", "外灘・武康路・新天地", "Bund · Rue Wukang · Xintiandi", "와이탄 · 우캉루 · 신톈디", "Bund · Wukang Road · Xintiandi", "Bến Thượng Hải · Vũ Khang · Tân Thiên Địa"]),
      I(2, "business",
        ["Business & Showroom Visit", "商务与展厅参访", "ビジネス＆ショールーム", "Visite d'affaires & showroom", "비즈니스·쇼룸 방문", "Geschäfts- & Showroombesuch", "Tham quan doanh nghiệp & showroom"],
        ["Pudong headquarters, a design showroom and a hosted business lunch.", "浦东总部、设计展厅，以及安排妥当的商务午餐。", "浦東の本社、デザインショールーム、商談ランチ。", "Siège à Pudong, showroom design et déjeuner d'affaires organisé.", "푸둥 본사, 디자인 쇼룸, 비즈니스 오찬.", "Hauptsitz in Pudong, Design-Showroom und organisiertes Geschäftsessen.", "Trụ sở Phố Đông, showroom thiết kế và bữa trưa công vụ."],
        ["Pudong · Showroom · Business lunch", "浦东 · 展厅 · 商务午餐", "浦東・ショールーム・商談ランチ", "Pudong · Showroom · Déjeuner d'affaires", "푸둥 · 쇼룸 · 오찬", "Pudong · Showroom · Geschäftsessen", "Phố Đông · showroom · ăn trưa công vụ"]),
      I(1, "private",
        ["Water Town Day Trip", "江南水乡一日", "江南水郷の一日", "Excursion dans un village d'eau", "강남 수향마을 당일", "Wasserstadt-Tagesausflug", "Làng nước Giang Nam trong ngày"],
        ["A private car to Zhujiajiao or Tongli, away from the bus-tour crowds.", "专车前往朱家角或同里，避开大巴团人潮。", "専用車で朱家角か同里へ、団体客を避けて。", "Voiture privée vers Zhujiajiao ou Tongli, loin des groupes en autocar.", "전용차로 주가각 또는 동리, 단체 관광객을 피해.", "Privatwagen nach Zhujiajiao oder Tongli, abseits der Busgruppen.", "Xe riêng đến Chu Gia Giác hoặc Đồng Lý, tránh đoàn xe buýt."],
        ["Zhujiajiao · Tongli", "朱家角 · 同里", "朱家角・同里", "Zhujiajiao · Tongli", "주가각 · 동리", "Zhujiajiao · Tongli", "Chu Gia Giác · Đồng Lý"])
    ],
    beijing: [
      I(3, "culture",
        ["Great Wall & Imperial Axis", "长城与中轴线", "長城と中軸線", "Grande Muraille & axe impérial", "만리장성과 중축선", "Große Mauer & Kaiserachse", "Vạn Lý Trường Thành & trục đế đô"],
        ["Mutianyu at opening hour, then the Forbidden City and a hutong dinner.", "一早出发慕田峪，午后故宫，傍晚胡同人家晚餐。", "開門直後の慕田峪、故宮、胡同での夕食。", "Mutianyu dès l'ouverture, Cité interdite puis dîner dans un hutong.", "개장 시간에 맞춘 무톈위, 자금성, 후통 저녁 식사.", "Mutianyu zur Öffnung, dann Verbotene Stadt und Abendessen in einer Hutong-Gasse.", "Mộ Điền Dụ lúc mở cửa, Tử Cấm Thành và bữa tối trong ngõ hồ đồng."],
        ["Mutianyu · Forbidden City · Hutong", "慕田峪 · 故宫 · 胡同", "慕田峪・故宮・胡同", "Mutianyu · Cité interdite · Hutong", "무톈위 · 자금성 · 후통", "Mutianyu · Verbotene Stadt · Hutong", "Mộ Điền Dụ · Tử Cấm Thành · hồ đồng"]),
      I(2, "private",
        ["Hidden Hutong & Craft", "胡同与手作", "胡同と手仕事", "Hutongs cachés & artisanat", "숨은 후통과 공예", "Versteckte Hutongs & Handwerk", "Ngõ hồ đồng & thủ công"],
        ["Courtyard lanes, a calligraphy studio and a family-run dumpling kitchen.", "穿行四合院巷子，体验书法工作室与家庭饺子宴。", "四合院の路地、書道工房、家庭的な餃子の台所。", "Ruelles de cours, atelier de calligraphie et cuisine familiale de raviolis.", "사합원 골목, 서예 공방, 가정식 만두.", "Innenhofgassen, Kalligrafie-Atelier und hausgemachte Jiaozi.", "Ngõ sân trong, xưởng thư pháp và bánh chéo gia đình."],
        ["Hutong · Calligraphy · Dumplings", "胡同 · 书法 · 饺子", "胡同・書道・餃子", "Hutong · Calligraphie · Raviolis", "후통 · 서예 · 만두", "Hutong · Kalligrafie · Jiaozi", "Hồ đồng · thư pháp · bánh chéo"]),
      I(1, "business",
        ["Tech & Innovation Briefing", "科技创新交流", "テック・イノベーション視察", "Rencontre tech & innovation", "테크·혁신 브리핑", "Tech- & Innovationsbriefing", "Trao đổi công nghệ & đổi mới"],
        ["A Zhongguancun innovation hub visit with a bilingual moderator.", "参访中关村创新园区，配双语主持交流。", "中関村のイノベーション拠点をバイリンガル司会で視察。", "Visite du pôle d'innovation de Zhongguancun avec modérateur bilingue.", "중관촌 혁신 허브를 이중언어 진행과 함께 방문.", "Besuch des Innovationszentrums Zhongguancun mit zweisprachiger Moderation.", "Tham quan trung tâm đổi mới Trung Quan Thôn có điều phối viên song ngữ."],
        ["Zhongguancun · Bilingual host", "中关村 · 双语主持", "中関村・バイリンガル司会", "Zhongguancun · Hôte bilingue", "중관촌 · 이중언어 진행", "Zhongguancun · zweisprachige Begleitung", "Trung Quan Thôn · dẫn chương trình song ngữ"])
    ],
    chengdu: [
      I(2, "private",
        ["Panda & Teahouse", "熊猫与茶馆", "パンダと茶館", "Pandas & maison de thé", "판다와 찻집", "Pandas & Teehaus", "Gấu trúc & quán trà"],
        ["A morning at the panda base, a People's Park teahouse and a Sichuan cooking class.", "上午熊猫基地，午后人民公园茶馆与川菜体验课。", "午前はパンダ基地、人民公園の茶館と四川料理教室。", "Matinée au centre des pandas, salon de thé et cours de cuisine sichuanaise.", "오전 판다 기지, 인민공원 찻집, 쓰촨 요리 수업.", "Vormittag in der Panda-Station, Teehaus und Sichuan-Kochkurs.", "Sáng ở trại gấu trúc, chiều quán trà và lớp nấu ăn Tứ Xuyên."],
        ["Panda Base · People's Park · Kitchen", "熊猫基地 · 人民公园 · 川菜厨房", "パンダ基地・人民公園・四川厨房", "Centre pandas · Parc du Peuple · Cuisine", "판다기지 · 인민공원 · 주방", "Panda-Station · Volkspark · Kochkurs", "Trại gấu · Công viên Nhân Dân · bếp Tứ Xuyên"]),
      I(2, "culture",
        ["Sichuan Flavours Trail", "川味寻踪", "四川の味を辿る", "Parcours des saveurs du Sichuan", "쓰촨 미식 기행", "Sichuans Geschmacksroute", "Hành trình vị Tứ Xuyên"],
        ["Hotpot, a spice market and a chef-led lesson on the classic flavour profiles.", "火锅、香料市场，与主厨聊聊川菜的复合味型。", "火鍋、香辛料市場、シェフによる味の解説。", "Fondue, marché aux épices et leçon sur les saveurs classiques par un chef.", "훠궈, 향신료 시장, 셰프의 미각 수업.", "Hotpot, Gewürzmarkt und eine vom Küchenchef geleitete Geschmackskunde.", "Lẩu, chợ gia vị và bài học hương vị cùng đầu bếp."],
        ["Hotpot · Spice market · Chef", "火锅 · 香料市场 · 主厨", "火鍋・香辛料市場・シェフ", "Fondue · Marché aux épices · Chef", "훠궈 · 향신료시장 · 셰프", "Hotpot · Gewürzmarkt · Küchenchef", "Lẩu · chợ gia vị · đầu bếp"]),
      I(2, "nature",
        ["Leshan & Emei Extension", "乐山峨眉延伸", "楽山・峨眉山への延伸", "Extension Leshan & Emei", "러산·어메이 연장", "Leshan- & Emei-Verlängerung", "Lạc Sơn & Nga My"],
        ["A two-day private extension to the Giant Buddha and Emei's mountain temples.", "私车两日延伸：乐山大佛与峨眉山寺院。", "専用車で2日間、楽山大仏と峨眉山の寺院へ。", "Extension privée de deux jours vers le Grand Bouddha et les temples de l'Emei.", "전용차 2일, 러산 대불과 어메이 사원.", "Zweitägige Privatverlängerung zum Großen Buddha und den Tempeln am Emei.", "Hai ngày xe riêng đến Đại Phật Lạc Sơn và chùa Nga My."],
        ["Leshan Buddha · Mount Emei", "乐山大佛 · 峨眉山", "楽山大仏・峨眉山", "Bouddha de Leshan · Mont Emei", "러산대불 · 어메이산", "Leshan-Buddha · Emei", "Đại Phật Lạc Sơn · Nga My"])
    ],
    chongqing: [
      I(2, "city",
        ["Mountain City Nights", "山城夜色", "山城の夜", "Nuits de la cité montagneuse", "산성의 밤", "Nächte der Bergstadt", "Đêm thành phố núi"],
        ["Hongyadong lights, the Yangtze cableway and a hillside hotpot table.", "洪崖洞灯火、长江索道，再来一桌山城火锅。", "洪崖洞の灯り、長江ロープウェイ、丘の上の火鍋。", "Lumières de Hongyadong, téléphérique du Yangtsé et fondue sur les hauteurs.", "홍야동 야경, 양쯔 케이블카, 언덕 훠궈.", "Hongyadong-Lichter, Yangtse-Seilbahn und Hotpot am Hang.", "Đèn Hồng Nhai Động, cáp treo Trường Giang và lẩu trên sườn núi."],
        ["Hongyadong · Cableway · Hotpot", "洪崖洞 · 长江索道 · 火锅", "洪崖洞・ロープウェイ・火鍋", "Hongyadong · Téléphérique · Fondue", "홍야동 · 케이블카 · 훠궈", "Hongyadong · Seilbahn · Hotpot", "Hồng Nhai Động · cáp treo · lẩu"]),
      I(2, "culture",
        ["Three Gorges Gateway", "三峡门户", "三峡への入口", "Porte des Trois Gorges", "삼협 관문", "Tor zu den Drei Schluchten", "Cửa ngõ Tam Hiệp"],
        ["A riverfront orientation and an optional private cruise briefing.", "滨江导览，可加选三峡游轮说明与安排。", "川沿いのオリエンテーションと任意のクルーズ説明。", "Découverte des quais et briefing optionnel pour une croisière privée.", "강변 안내와 선택적 크루즈 브리핑.", "Orientierung am Flussufer und optionale Kreuzfahrt-Beratung.", "Dạo ven sông và tư vấn du thuyền riêng (tùy chọn)."],
        ["Chaotianmen · Riverfront · Cruise", "朝天门 · 滨江 · 游轮", "朝天門・川沿い・クルーズ", "Chaotianmen · Quais · Croisière", "차오톈먼 · 강변 · 크루즈", "Chaotianmen · Ufer · Kreuzfahrt", "Triều Thiên Môn · ven sông · du thuyền"]),
      I(1, "business",
        ["Industry & Logistics Visit", "产业与物流参访", "産業・物流視察", "Visite industrielle & logistique", "산업·물류 견학", "Industrie- & Logistikbesuch", "Tham quan công nghiệp & logistics"],
        ["A guided look at the city's automotive plants and inland-port logistics.", "参访汽车制造与内河港口物流体系。", "自動車工場と内陸港の物流を案内付きで。", "Découverte guidée des usines automobiles et de la logistique portuaire.", "자동차 공장과 내륙항 물류 견학.", "Geführter Einblick in Automobilwerke und Binnenhafen-Logistik.", "Tham quan nhà máy ô tô và logistics cảng nội địa."],
        ["Auto plants · Inland port", "汽车工厂 · 内河港口", "自動車工場・内陸港", "Usines auto · Port intérieur", "자동차공장 · 내륙항", "Autowerke · Binnenhafen", "Nhà máy ô tô · cảng nội địa"])
    ],
    xian: [
      I(2, "culture",
        ["Terracotta Army Deep Dive", "兵马俑深度讲解", "兵馬俑を深く読む", "L'armée de terre cuite en profondeur", "병마용 심층 해설", "Terrakotta-Armee im Detail", "Đội quân đất nung chuyên sâu"],
        ["An archaeology-focused guide at the pits, then the old city wall at sunset.", "考古背景向导详解俑坑，黄昏登古城墙。", "考古学に詳しいガイドと俑坑、夕暮れの城壁へ。", "Guide archéologique aux fosses, puis remparts au coucher du soleil.", "고고학 전문 가이드와 갱도, 일몰 성벽.", "Archäologisch versierter Guide an den Gruben, dann Stadtmauer bei Sonnenuntergang.", "Hướng dẫn viên chuyên khảo cổ tại hố quân, rồi tường thành lúc hoàng hôn."],
        ["Terracotta pits · City wall", "兵马俑坑 · 古城墙", "兵馬俑坑・城壁", "Fosses · Remparts", "병마용갱 · 성벽", "Terrakotta-Gruben · Stadtmauer", "Hố đất nung · tường thành"]),
      I(1, "private",
        ["Muslim Quarter & Tang Heritage", "回坊与唐韵", "回民街と唐の面影", "Quartier Hui & héritage Tang", "회방과 당나라 유산", "Hui-Viertel & Tang-Erbe", "Phố Hồi & di sản Đường"],
        ["A food walk through the Muslim Quarter and the Big Wild Goose Pagoda.", "回民街美食漫步与大雁塔唐文化线。", "回民街の食べ歩きと大雁塔。", "Balade gourmande dans le quartier Hui et pagode de l'Oie sauvage.", "회민가 먹거리 산책과 대안탑.", "Kulinarischer Spaziergang durch das Hui-Viertel zur Großen Wildgans-Pagode.", "Dạo ẩm thực phố Hồi và chùa Đại Nhạn."],
        ["Muslim Quarter · Big Wild Goose", "回民街 · 大雁塔", "回民街・大雁塔", "Quartier Hui · Grande Oie", "회민가 · 대안탑", "Hui-Viertel · Wildgans-Pagode", "Phố Hồi · Đại Nhạn Tháp"]),
      I(1, "culture",
        ["Silk Road Starter", "丝路起点", "シルクロードの起点", "Départ de la Route de la Soie", "실크로드의 출발점", "Start der Seidenstraße", "Khởi đầu Con đường Tơ lụa"],
        ["The Shaanxi History Museum and a private briefing on westward routes.", "陕西历史博物馆，配合丝路西行路线讲解。", "陝西歴史博物館と西域ルートの解説。", "Musée d'histoire du Shaanxi et briefing privé sur les routes de l'Ouest.", "산시역사박물관과 서역 노선 브리핑.", "Shaanxi-Historisches Museum und privates Briefing zu den Westrouten.", "Bảo tàng lịch sử Thiểm Tây và chia sẻ về tuyến Tây vực."],
        ["Shaanxi Museum · Silk Road", "陕历博 · 丝路", "陝西歴史博物館・シルクロード", "Musée du Shaanxi · Route de la Soie", "산시박물관 · 실크로드", "Shaanxi-Museum · Seidenstraße", "Bảo tàng Thiểm Tây · Con đường Tơ lụa"])
    ],
    guilin: [
      I(2, "nature",
        ["Li River & Karst Peaks", "漓江与喀斯特", "漓江とカルスト", "Rivière Li & pics karstiques", "리강과 카르스트", "Li-Fluss & Karstgipfel", "Sông Ly & núi đá vôi"],
        ["A private Li River cruise to Yangshuo with a photography stop at dawn.", "私享漓江游船至阳朔，清晨预留摄影时间。", "漓江をプライベートクルーズで陽朔へ、夜明けの撮影付き。", "Croisière privée sur la rivière Li jusqu'à Yangshuo, arrêt photo à l'aube.", "리강 전용 유람으로 양숴까지, 새벽 사진 시간.", "Private Li-Fluss-Kreuzfahrt nach Yangshuo mit Fotostopp am Morgen.", "Du thuyền riêng trên sông Ly đến Dương Sóc, dừng chụp ảnh bình minh."],
        ["Li River · Yangshuo · Dawn", "漓江 · 阳朔 · 晨光", "漓江・陽朔・夜明け", "Rivière Li · Yangshuo · Aube", "리강 · 양숴 · 새벽", "Li-Fluss · Yangshuo · Morgen", "Sông Ly · Dương Sóc · bình minh"]),
      I(2, "culture",
        ["Rice Terraces & Villages", "龙脊梯田与村寨", "棚田と村", "Rizières en terrasses & villages", "계단식 논과 마을", "Reisterrassen & Dörfer", "Ruộng bậc thang & bản làng"],
        ["Longji terraces, a Zhuang village lunch and a guided terrace walk.", "龙脊梯田、壮族村寨午餐与梯田徒步。", "龍脊の棚田、チワン族の村の昼食と散策。", "Terrasses de Longji, déjeuner dans un village Zhuang et marche guidée.", "룽지 계단논, 좡족 마을 점심, 논길 산책.", "Longji-Terrassen, Mittagessen in einem Zhuang-Dorf und geführter Spaziergang.", "Ruộng bậc thang Long Tích, bữa trưa bản người Tráng và đi bộ."],
        ["Longji · Zhuang village · Walk", "龙脊 · 壮族村寨 · 徒步", "龍脊・チワン族村・散策", "Longji · Village Zhuang · Marche", "룽지 · 좡족마을 · 산책", "Longji · Zhuang-Dorf · Spaziergang", "Long Tích · bản Tráng · đi bộ"]),
      I(3, "private",
        ["Yangshuo Slow Stay", "阳朔慢居", "陽朔でゆっくり滞在", "Séjour lent à Yangshuo", "양숴 느린 체류", "Langsamer Aufenthalt in Yangshuo", "Nghỉ chậm ở Dương Sóc"],
        ["Cycling, a cooking class and an evening by the river, entirely at your own pace.", "骑行、烹饪课与江边夜晚，全按自己的节奏。", "サイクリング、料理教室、川辺の夜を自分のペースで。", "Vélo, cours de cuisine et soirée au bord de l'eau, à votre rythme.", "자전거, 요리 수업, 강가의 저녁을 내 페이스로.", "Radfahren, Kochkurs und ein Abend am Fluss – ganz in Ihrem Tempo.", "Đạp xe, lớp nấu ăn và tối bên sông, theo nhịp của bạn."],
        ["Cycling · Cooking · Riverside", "骑行 · 烹饪课 · 江边", "サイクリング・料理・川辺", "Vélo · Cuisine · Bord de l'eau", "자전거 · 요리 · 강가", "Radfahren · Kochen · Flussufer", "Đạp xe · nấu ăn · ven sông"])
    ],
    kunming: [
      I(2, "culture",
        ["Yunnan Gateway", "云南门户", "雲南の玄関", "Porte du Yunnan", "윈난의 관문", "Tor zu Yunnan", "Cửa ngõ Vân Nam"],
        ["The Stone Forest, a flower market and an introduction to Yunnan's ethnic cultures.", "石林、鲜花市场，认识云南多民族文化。", "石林、花市場、雲南の民族文化入門。", "Forêt de pierres, marché aux fleurs et découverte des cultures du Yunnan.", "석림, 꽃시장, 윈난 소수민족 문화.", "Steinwald, Blumenmarkt und Einführung in Yunnans Kulturen.", "Rừng đá, chợ hoa và tìm hiểu văn hóa các dân tộc Vân Nam."],
        ["Stone Forest · Flower market", "石林 · 鲜花市场", "石林・花市場", "Forêt de pierres · Marché aux fleurs", "석림 · 꽃시장", "Steinwald · Blumenmarkt", "Rừng đá · chợ hoa"]),
      I(3, "private",
        ["Dali & Erhai Extension", "大理洱海延伸", "大理・洱海への延伸", "Extension Dali & Erhai", "다리·얼하이 연장", "Dali- & Erhai-Verlängerung", "Đại Lý & Nhĩ Hải"],
        ["A private three-day extension to old Dali and Erhai lakeside villages.", "私车三日延伸：大理古城与洱海村落。", "専用車で3日間、大理古城と洱海の村へ。", "Extension privée de trois jours vers la vieille Dali et les villages du lac Erhai.", "전용차 3일, 다리 고성과 얼하이 마을.", "Dreitägige Privatverlängerung nach Alt-Dali und an die Dörfer des Erhai-Sees.", "Ba ngày xe riêng đến Đại Lý cổ và làng ven hồ Nhĩ Hải."],
        ["Dali old town · Erhai villages", "大理古城 · 洱海村落", "大理古城・洱海の村", "Vieille Dali · Villages d'Erhai", "다리 고성 · 얼하이 마을", "Alt-Dali · Erhai-Dörfer", "Đại Lý cổ · làng Nhĩ Hải"]),
      I(1, "nature",
        ["Tea & Highland Botany", "茶山与高原植物", "茶山と高原植物", "Thé & botanique d'altitude", "차산과 고원 식물", "Tee & Hochlandbotanik", "Đồi chè & thực vật cao nguyên"],
        ["A tea mountain visit with a local grower and a botanical garden walk.", "随本地茶农走访茶山，并漫步高原植物园。", "地元の茶農家と茶山へ、植物園を散策。", "Visite d'une montagne de thé avec un producteur et balade botanique.", "현지 차농과 차산, 식물원 산책.", "Besuch eines Teebergs mit Erzeuger und Spaziergang im botanischen Garten.", "Thăm đồi chè cùng nông dân và dạo vườn thực vật."],
        ["Tea mountain · Botanic garden", "茶山 · 植物园", "茶山・植物園", "Montagne de thé · Jardin botanique", "차산 · 식물원", "Teeberg · Botanischer Garten", "Đồi chè · vườn thực vật"])
    ],
    lhasa: [
      I(3, "culture",
        ["Potala & Sacred Circuit", "布达拉与转经道", "ポタラと巡礼路", "Potala & circuit sacré", "포탈라와 순례길", "Potala & heiliger Rundweg", "Potala & vòng hành hương"],
        ["Potala Palace, Jokhang Temple and the Barkhor kora with a Tibetan guide.", "藏族向导带领布达拉宫、大昭寺与八廓街转经。", "チベットガイドとポタラ宮、ジョカン、パルコルを巡る。", "Palais du Potala, temple de Jokhang et kora de Barkhor avec un guide tibétain.", "티베트 가이드와 포탈라궁, 조캉 사원, 바코르 순례.", "Potala-Palast, Jokhang-Tempel und Barkhor-Kora mit tibetischem Guide.", "Cung Potala, chùa Jokhang và vòng Barkhor cùng hướng dẫn viên Tạng."],
        ["Potala · Jokhang · Barkhor", "布达拉宫 · 大昭寺 · 八廓街", "ポタラ宮・ジョカン・パルコル", "Potala · Jokhang · Barkhor", "포탈라 · 조캉 · 바코르", "Potala · Jokhang · Barkhor", "Potala · Jokhang · Barkhor"]),
      I(2, "nature",
        ["Highland Lakes", "高原圣湖", "高地の聖なる湖", "Lacs sacrés d'altitude", "고원의 성호", "Heilige Hochlandseen", "Hồ thiêng cao nguyên"],
        ["A private drive to Yamdrok Lake with an acclimatisation-friendly pace.", "专车前往羊卓雍措，节奏兼顾高原适应。", "専用車でヤムドク湖へ、高度順應に配慮したペースで。", "Excursion privée au lac Yamdrok, à un rythme adapté à l'altitude.", "전용차로 얌드록 호수, 고도 적응을 고려한 일정.", "Privatfahrt zum Yamdrok-See mit höhenangepasstem Tempo.", "Xe riêng đến hồ Dương Trác, nhịp trình phù hợp độ cao."],
        ["Yamdrok · Kamba La pass", "羊卓雍措 · 岗巴拉山口", "ヤムドク湖・カンバラ峠", "Yamdrok · Col de Kamba La", "얌드록 · 캄바라 고개", "Yamdrok · Kamba-La-Pass", "Dương Trác · đèo Kamba La"]),
      I(1, "culture",
        ["Monastery & Thangka Craft", "寺院与唐卡手作", "僧院とタンカ", "Monastère & art du thangka", "사원과 탕카 공예", "Kloster & Thangka-Kunst", "Tu viện & tranh Thangka"],
        ["Sera or Drepung monastery and an introduction to a thangka workshop.", "色拉寺或哲蚌寺，并探访唐卡绘制工坊。", "セラ寺かデプン寺、タンカ工房を訪ねる。", "Monastère de Sera ou Drepung et découverte d'un atelier de thangka.", "세라사 또는 드레풍사, 탕카 공방.", "Kloster Sera oder Drepung und Besuch einer Thangka-Werkstatt.", "Tu viện Sera hoặc Drepung và xưởng vẽ Thangka."],
        ["Sera · Drepung · Thangka", "色拉寺 · 哲蚌寺 · 唐卡", "セラ寺・デプン寺・タンカ", "Sera · Drepung · Thangka", "세라 · 드레풍 · 탕카", "Sera · Drepung · Thangka", "Sera · Drepung · Thangka"])
    ],
    urumqi: [
      I(2, "culture",
        ["Silk Road & Grand Bazaar", "丝路与大巴扎", "シルクロードとバザール", "Route de la Soie & Grand Bazar", "실크로드와 대바자르", "Seidenstraße & Großer Basar", "Con đường Tơ lụa & Chợ lớn"],
        ["The Grand Bazaar, a regional museum and a Uyghur family meal.", "国际大巴扎、新疆博物馆，与维吾尔家庭共餐。", "大巴扎、博物館、ウイグル家庭の食事。", "Grand Bazar, musée régional et repas dans une famille ouïghoure.", "대바자르, 지역 박물관, 위구르 가정식.", "Großer Basar, Regionalmuseum und Essen bei einer uigurischen Familie.", "Chợ lớn, bảo tàng vùng và bữa cơm gia đình Uyghur."],
        ["Grand Bazaar · Museum · Family", "大巴扎 · 博物馆 · 家宴", "大巴扎・博物館・家庭料理", "Grand Bazar · Musée · Famille", "대바자르 · 박물관 · 가정식", "Basar · Museum · Familie", "Chợ lớn · bảo tàng · gia đình"]),
      I(2, "nature",
        ["Tianshan & Desert Edge", "天山与沙漠边缘", "天山と砂漠の縁", "Tianshan & bord du désert", "톈산과 사막 가장자리", "Tianshan & Wüstenrand", "Thiên Sơn & ven sa mạc"],
        ["Tianchi lake and a private desert-edge sunset excursion.", "天山天池，专车前往沙漠边缘看日落。", "天池と砂漠縁の夕日を専用車で。", "Lac Tianchi et excursion privée au coucher du soleil en lisière du désert.", "톈츠 호수와 사막 가장자리 일몰.", "Tianchi-See und privater Sonnenuntergang am Wüstenrand.", "Hồ Thiên Trì và hoàng hôn ven sa mạc bằng xe riêng."],
        ["Tianchi · Desert sunset", "天山天池 · 沙漠日落", "天池・砂漠の夕日", "Tianchi · Coucher de soleil", "톈츠 · 사막 일몰", "Tianchi · Wüsten-Sonnenuntergang", "Thiên Trì · hoàng hôn sa mạc"]),
      I(1, "business",
        ["Cross-border Trade Visit", "边贸与物流参访", "越境貿易・物流視察", "Commerce transfrontalier & logistique", "국경무역·물류 견학", "Grenzhandel & Logistik", "Thương mại biên & logistics"],
        ["A hosted look at cross-border trade hubs and cold-chain logistics.", "参访跨境贸易枢纽与冷链物流，配双语陪同。", "越境貿易拠点とコールドチェーンを案内付きで。", "Découverte accompagnée des hubs commerciaux et de la logistique du froid.", "국경무역 허브와 콜드체인 물류를 안내와 함께.", "Begleiteter Einblick in Handelsdrehkreuze und Kühllogistik.", "Tham quan trung tâm thương mại biên và logistics lạnh."],
        ["Trade hub · Cold chain", "边贸枢纽 · 冷链物流", "貿易拠点・コールドチェーン", "Hub commercial · Chaîne du froid", "무역허브 · 콜드체인", "Handelsdrehkreuz · Kühlkette", "Trung tâm thương mại · chuỗi lạnh"])
    ],
    harbin: [
      I(2, "culture",
        ["Ice & Snow Festival", "冰雪大世界", "氷雪祭り", "Festival de glace et de neige", "빙설 축제", "Eis- und Schneefestival", "Lễ hội Băng Tuyết"],
        ["The Ice and Snow World after dark, with a warm-up stop and private transfer.", "夜场冰雪大世界，安排取暖点与专车接送。", "夜の氷雪大世界、休憩スポットと専用送迎付き。", "Le monde de glace après la tombée de la nuit, avec halte chauffée et transfert privé.", "야간 빙설대세계, 휴식처와 전용 차량.", "Ice and Snow World nach Einbruch der Dunkelheit, mit Aufwärmstopp und Privattransfer.", "Thế giới Băng Tuyết về đêm, có điểm sưởi và xe đưa đón riêng."],
        ["Ice & Snow World · Night", "冰雪大世界 · 夜场", "氷雪大世界・夜", "Monde de glace · Nuit", "빙설대세계 · 야간", "Ice & Snow World · Nacht", "Thế giới Băng Tuyết · đêm"]),
      I(1, "city",
        ["Russian Heritage Walk", "俄式风情漫步", "ロシア様式の散歩", "Promenade de l'héritage russe", "러시아풍 산책", "Russisches Erbe-Spaziergang", "Dạo phố di sản Nga"],
        ["Central Street, St. Sophia and a Russian-style bakery breakfast.", "中央大街、圣索菲亚教堂与俄式面包房早餐。", "中央大街、聖ソフィア、ロシア風ベーカリーの朝食。", "Rue Centrale, Sainte-Sophie et petit-déjeuner en boulangerie russe.", "중앙대가, 성소피아, 러시아식 빵집 아침.", "Central Street, Sophienkathedrale und russisches Bäckerfrühstück.", "Phố Trung Ương, nhà thờ Sophia và bánh mì Nga buổi sáng."],
        ["Central Street · St. Sophia", "中央大街 · 圣索菲亚", "中央大街・聖ソフィア", "Rue Centrale · Sainte-Sophie", "중앙대가 · 성소피아", "Central Street · Sophia", "Phố Trung Ương · Sophia"]),
      I(2, "private",
        ["Winter Private Escape", "冬季私享之旅", "冬のプライベート旅", "Escapade privée d'hiver", "겨울 프라이빗 여행", "Privater Winterurlaub", "Nghỉ đông riêng tư"],
        ["A warm, flexible winter itinerary combining city highlights and local cuisine.", "温暖灵活的冬季行程，兼顾城市精华与本地风味。", "暖かく柔軟な冬の行程、名所と地元の味を組み合わせて。", "Itinéraire d'hiver chaleureux et flexible, entre temps forts urbains et cuisine locale.", "따뜻하고 유연한 겨울 일정, 도시 명소와 현지 미식.", "Warmes, flexibles Winterprogramm mit Stadthighlights und lokaler Küche.", "Hành trình mùa đông ấm áp, linh hoạt giữa danh lam và ẩm thực địa phương."],
        ["City highlights · Local cuisine", "城市精华 · 本地风味", "市内名所・地元の味", "Temps forts urbains · Cuisine locale", "도시 명소 · 현지 미식", "Stadthighlights · Lokale Küche", "Danh lam · ẩm thực địa phương"])
    ],
    zhangjiajie: [
      I(2, "nature",
        ["Avatar Peaks & Glass Bridge", "峰林与玻璃桥", "アバター峰林とガラス橋", "Pics Avatar & pont de verre", "아바타 봉림과 유리다리", "Avatar-Gipfel & Glasbrücke", "Đỉnh Avatar & cầu kính"],
        ["A guided park route through the quartz-sandstone peaks and the glass bridge.", "导览穿越石英砂岩峰林与玻璃桥。", "石英砂岩の峰々とガラス橋をガイドと巡る。", "Parcours guidé parmi les pics de grès et le pont de verre.", "규암 봉우리와 유리다리를 가이드와.", "Geführte Route durch die Quarzsandstein-Gipfel und über die Glasbrücke.", "Lộ trình có hướng dẫn qua đỉnh sa thạch và cầu kính."],
        ["Wulingyuan · Glass Bridge", "武陵源 · 玻璃桥", "武陵源・ガラス橋", "Wulingyuan · Pont de verre", "우링위안 · 유리다리", "Wulingyuan · Glasbrücke", "Vũ Lăng Nguyên · cầu kính"]),
      I(1, "nature",
        ["Forest & Canyon Hike", "森林峡谷徒步", "森と渓谷ハイク", "Forêt & randonnée de gorge", "숲·협곡 트레킹", "Wald- & Schluchtenwanderung", "Rừng & trek hẻm núi"],
        ["A private half-day walk along Golden Whip Stream with a nature guide.", "自然向导带走的金鞭溪半日私享徒步。", "自然ガイドと金鞭渓を半日プライベートハイク。", "Demi-journée privée le long du ruisseau du Fouet d'or avec guide naturaliste.", "자연 가이드와 금편계 반나절 단독 트레킹.", "Private Halbtageswanderung am Golden Whip Stream mit Naturführer.", "Nửa ngày đi bộ riêng dọc suối Kim Tiên cùng hướng dẫn viên thiên nhiên."],
        ["Golden Whip Stream · Forest", "金鞭溪 · 森林", "金鞭渓・森", "Ruisseau du Fouet d'or · Forêt", "금편계 · 숲", "Golden Whip Stream · Wald", "Suối Kim Tiên · rừng"]),
      I(1, "private",
        ["Tianmen Mountain Day", "天门山一日", "天門山の一日", "Journée au mont Tianmen", "톈먼산 하루", "Tianmen-Berg-Tag", "Một ngày Thiên Môn Sơn"],
        ["Cable car, cliff walk and the 999 steps at an unhurried pace.", "索道、鬼谷栈道与九百九十九级台阶，从容不赶。", "ロープウェイ、断崖遊歩道、999段をゆっくりと。", "Téléphérique, passerelle de falaise et 999 marches, sans précipitation.", "케이블카, 절벽 산책로, 999계단을 여유롭게.", "Seilbahn, Klippenweg und 999 Stufen in aller Ruhe.", "Cáp treo, đường vách đá và 999 bậc thang thong thả."],
        ["Cable car · Cliff walk · 999 steps", "索道 · 鬼谷栈道 · 999 阶", "ロープウェイ・断崖道・999段", "Téléphérique · Passerelle · 999 marches", "케이블카 · 절벽길 · 999계단", "Seilbahn · Klippenweg · 999 Stufen", "Cáp treo · đường vách · 999 bậc"])
    ],
    sanya: [
      I(2, "private",
        ["Island & Beach Escape", "海岛与沙滩", "島とビーチ", "Île & plages", "섬과 해변", "Insel & Strand", "Đảo & bãi biển"],
        ["Yalong Bay, a private boat outing and a seaside seafood dinner.", "亚龙湾、私享出海与海边海鲜晚餐。", "亜龍湾、プライベートボート、海辺の海鮮ディナー。", "Baie de Yalong, sortie en bateau privé et dîner de fruits de mer.", "야룽완, 전용 보트, 해변 해산물 저녁.", "Yalong Bay, private Bootstour und Meeresfrüchte-Dinner am Strand.", "Vịnh Á Long, du thuyền riêng và tối hải sản ven biển."],
        ["Yalong Bay · Boat · Seafood", "亚龙湾 · 出海 · 海鲜", "亜龍湾・ボート・海鮮", "Yalong · Bateau · Fruits de mer", "야룽완 · 보트 · 해산물", "Yalong Bay · Boot · Meeresfrüchte", "Á Long · du thuyền · hải sản"]),
      I(1, "culture",
        ["Rainforest & Li Culture", "雨林与黎族文化", "雨林とリー族文化", "Forêt tropicale & culture Li", "열대우림과 리족 문화", "Regenwald & Li-Kultur", "Rừng mưa & văn hóa Lê"],
        ["A Yanoda rainforest walk and a Li village craft visit.", "呀诺达雨林漫步与黎族村寨手作探访。", "ヤノダ雨林とリー族の村の工芸を訪ねる。", "Balade dans la forêt de Yanoda et visite artisanale d'un village Li.", "야노다 우림과 리족 마을 공예.", "Yanoda-Regenwald und Handwerk in einem Li-Dorf.", "Dạo rừng mưa Yanoda và thủ công làng người Lê."],
        ["Yanoda · Li village", "呀诺达 · 黎族村寨", "ヤノダ・リー族の村", "Yanoda · Village Li", "야노다 · 리족마을", "Yanoda · Li-Dorf", "Yanoda · làng Lê"]),
      I(2, "business",
        ["Resort MICE & Incentive", "度假会奖与奖励旅游", "リゾートMICE・報奨旅行", "MICE & voyage de récompense", "리조트 MICE·포상여행", "Resort-MICE & Incentive", "MICE nghỉ dưỡng & thưởng lữ"],
        ["A hosted resort program designed for small corporate and incentive groups.", "面向小型企业团与奖励旅游的度假接待方案。", "少人数の企業・報奨旅行向けリゾートプログラム。", "Programme resort accompagné pour petits groupes d'entreprise et voyages de récompense.", "소규모 기업·포상 단체를 위한 리조트 프로그램.", "Betreutes Resort-Programm für kleine Firmen- und Incentive-Gruppen.", "Chương trình nghỉ dưỡng có dẫn đoàn cho đoàn doanh nghiệp nhỏ."],
        ["Resort · Meetings · Incentive", "度假村 · 会议 · 奖励旅游", "リゾート・会議・報奨", "Resort · Réunions · Incentive", "리조트 · 회의 · 포상", "Resort · Tagungen · Incentive", "Resort · họp mặt · khen thưởng"])
    ]
  };

  /* ---------- Reviews, written in each traveler's own language ----------
     CLA_REVIEW_SETS: review texts + typical names per language.
     CLA_REVIEW_COUNTRIES: which language each country's guests write in. */
  window.CLA_REVIEW_SETS = {
    en: {
      texts: [
        "4:30am start for the Great Wall and honestly?? worth every minute. we basically had it to ourselves.",
        "Asked for real cantonese food, not the hotel version... ended up in a tiny tea house in Guangzhou, still think about it lol",
        "Factory visits in Dongguan for work, then two easy days in Guangzhou. the interpreter actually knew our industry!! not just the language.",
        "Hotpot in Chongqing at a table hanging over the river, my kids still talk about that night haha",
        "It rained on our Li River day and tbh it looked even better?? guide rearranged the whole afternoon in like 10 min, zero drama.",
        "3rd time in China, first time with no tour bus. never going back to the big groups lol",
        "The pandas were for the kids. the sichuan cooking class was for ME. everyone won.",
        "Clear quote, no hidden extras, driver waiting with a sign at arrivals. simple things, done right!!",
        "Changed our minds halfway and wanted two more days in Chengdu... sorted within the hour. how??",
        "Zhangjiajie in the mist looks like a film set. bring proper shoes though, the steps are no joke",
        "Not one single souvenir shop the whole week!! just markets, noodle joints and people's lives.",
        "Our terracotta army guide had an archaeology background. you could ask him literally anything.",
        "The driver knew every back road into the mountains + the best hour for each stop. uncanny.",
        "They remembered my daughter's name from the very first email... 60 countries of guests and it still felt personal. who does that??"
      ],
      mid: [
        "Great trip overall. the wall day started a bit too early for the kids though, they were zombies by lunch.",
        "Only hiccup: our first hotel in Chengdu was meh. one message and they moved us. would book again.",
        "4 stars only because the high-speed rail seats were not together. everything else, flawless.",
        "Loved it, fair warning though - the days are LONG. we were wiped by dinner haha"
      ],
      low: [
        "Good guide, but it rained two days straight and honestly we should have been offered to reschedule. still made the best of it.",
        "Trip was fine. expected a bit more hand-holding at the airport, we waited ~20 min for the driver.",
        "Solid overall, though the itinerary felt a bit packed for my parents. ask for a slower pace from the start."
      ],
      names: ["James H.", "Emily C.", "Michael B.", "Sarah J.", "Jack T.", "Olivia T.", "Ryan M.", "Emma S.", "Oliver P.", "Amanda R.", "Liam B.", "Jessica L."]
    },
    zh: {
      texts: [
        "慕田峪赶在开门就上去，导游连第一班缆车都算好了，长城几乎没人！！太值了",
        "在广州跟向导说想去本地人排队的那家早茶，结果地图上根本找不到，好吃到加单三次 哈哈",
        "东莞看厂是正事，随行翻译连我们行业的术语都懂，省了很多来回解释，赞！",
        "重庆的火锅桌就挂在江边，孩子到现在还在讲那晚的夜景~",
        "漓江那天下雨，雾里的喀斯特反而更好看（真的），向导十分钟就把下午的行程调顺了，没有一句抱怨",
        "报价一项一项列得清清楚楚，全程没多收一分钱，司机还举着名字牌在到达口等我们。这种服务哪里找！",
        "孩子看熊猫，我上川菜课，各玩各的哈哈，谁都没将就",
        "西安一定要配懂考古的向导，兵马俑整个听下来完全不一样。",
        "中途想多留成都两天，一小时内酒店和后面的行程全改好了，这效率吓人",
        "八天没有一个购物点！！逛的都是菜市场、面馆和本地人的日常。",
        "司机师傅认识进山的小路，也知道每个点几点去人最少，服了",
        "从第一封邮件到最后一天，连我女儿的英文名都记得，感觉很暖。会推荐给朋友"
      ],
      mid: [
        "整体很满意，就是长城那天起太早，孩子有点撑不住哈哈，其他节奏都刚刚好。",
        "成都第一晚的酒店普通了一点，留言之后马上帮我们换了，就冲这售后给4星。",
        "扣一星是因为高铁座位没排在一起，其余都很顺，下次还找他们。",
        "很棒，但行程排得比较满，晚上回酒店都累瘫了，带老人家要提前说慢一点。"
      ],
      low: [
        "导游人很好，但那两天都在下雨，其实应该主动建议我们改期的。不过也玩得算开心。",
        "行程还可以，就是接机等了大概20分钟，其他没毛病。",
        "整体过得去，带爸妈的话节奏偏赶，一开始就该要求放慢。"
      ],
      names: ["Tan W.J.", "Chua H.L.", "Lim S.K.", "Siti N.", "Wong M.Y.", "Ng B.K.", "Kelvin O.", "Farah B."]
    },
    ja: {
      texts: [
        "朝4時半はきつかったけど、長城ほぼ貸し切り！やる価値ありました。",
        "広州で「観光客向けじゃない店で」とお願いしたら、地元の方が並ぶ朝茶の店へ連れて行ってもらいました。めちゃ美味しかった…！",
        "出張で東莞の工場見学＋休日の桂林を一度に手配。通訳の方が業界用語まで分かって本当に助かりました！",
        "重慶の火鍋、川に張り出したテーブルで！辛さも「本場のまま少し弱め」と上手に伝えてくれました。",
        "雨の漓江でしたが、霧の峰々が逆に幻想的で…。予定の組み替えも10分で終わりました。ガイドさんありがとう！",
        "パンダ基地は朝いちばんが正解です！ガイドの言う通りにして本当によかった。",
        "見積もりが項目ごとに明細で出てきて、追加料金の心配ゼロ。安心してお任せできました。",
        "兵馬俑のガイドさんが考古学に詳しくて、何を聞いても答えてくれる。西安はガイドで全然変わります！",
        "母が車椅子だったのですが、段差の少ないルートを全部調整してくれて…感謝しかありません。",
        "一日だけお願いしましたが、市場と老舗の茶館だけの贅沢な一日に。最高でした！",
        "8日間、土産物屋に一度も連れて行かれず！！市場と麺屋と日常だけ。これがよかった。",
      ],
      mid: [
        "全体としてはとても良かったです。ただ長城の日は子供には少し早すぎたかも…。",
        "成都の最初のホテルがイマイチだったので星マイナス1。連絡したらすぐ変えてもらえました。",
        "新幹線の座席がバラバラだったのが残念。それ以外は文句なしです！",
        "楽しかったです！ただ日程が少し詰まっていたので、翌日疲れました…。",
      ],
      low: [
        "ガイドさんは良かったですが、2日続けて雨…。日程変更の提案があればもっと良かったかも。",
        "旅行自体は良かったけど、空港で20分ほど待ちました。",
        "旅程は普通でした。高齢の親連れなら、もっとゆっくり頼んだ方がいいです。",
      ],
      names: ["Kenji S.", "Yuki T.", "Haruto M.", "Aoi K.", "Sakura N.", "Ryo F.", "Nanami O.", "Takumi H."]
    },
    fr: {
      texts: [
        "Mutianyu dès l'ouverture — la Grande Muraille quasi pour nous tout seuls. Le réveil à 5h, oui, mais ça le vaut !!",
        "À Canton on voulait la VRAIE cuisine cantonaise... on a fini dans une maison de thé de quartier, zéro touriste. Parfait !!",
        "Visites d'usines à Dongguan avec une interprète qui connaissait vraiment notre secteur. C'est rare, franchement.",
        "La fondue à Chongqing, table au-dessus du fleuve, les néons sur les falaises... un des meilleurs soirs du voyage, sans exagérer.",
        "Il pleuvait sur la rivière Li et honnêtement ?? c'était encore plus beau. Après-midi réorganisé en 20 minutes, zéro stress.",
        "Devis clair, aucun supplément surprise, chauffeur avec notre prénom à l'arrivée. Ça change tout, vraiment.",
        "Les enfants voulaient les pandas, moi le cours de cuisine du Sichuan. Meilleur souvenir du voyage (chut, pas dit aux enfants haha).",
        "À Xi'an, demandez un guide qui connaît l'archéologie pour la Terre cuite !! Le voyage devient complètement différent.",
        "On a changé d'avis en pleine route : deux jours de plus à Chengdu. Réglé en moins d'une heure... comment c'est possible ??",
        "Pas un seul magasin de souvenirs en huit jours. Des marchés, des nouilles, la vraie vie. Merci !!",
        "Mon mandarin est nul et ma mère ne parle que français... le guide a géré les deux avec une patience infinie. Un immense merci.",
      ],
      mid: [
        "Très bon voyage dans l'ensemble. Juste le réveil très tôt pour la Muraille, les enfants ont un peu souffert !",
        "4 étoiles parce que le premier hôtel à Chengdu était moyen. Un message et on a été déplacés.",
        "Un bémol : les places de train n'étaient pas ensemble. Le reste, sans faute.",
        "Superbe. Attention quand même, les journées sont longues... on tombait de fatigue le soir haha",
      ],
      low: [
        "Bon guide, mais deux jours de pluie... on aurait aimé qu'on nous propose de décaler. On s'est bien amusés quand même.",
        "Voyage correct. On a juste attendu ~20 min le chauffeur à l'aéroport.",
        "Sympa mais le rythme était un peu soutenu pour mes parents. Demandez plus calme dès le départ.",
      ],
      names: ["Camille D.", "Julien M.", "Sophie L.", "Élodie B.", "Thomas R.", "Amélie C.", "Nicolas P.", "Claire V."]
    },
    ko: {
      texts: [
        "무톈위 개장 시간 맞춰 갔는데 케이블카 첫 차까지 계산해 주셨어요. 장성 거의 혼자 다녀온 기분!!",
        "광저우에서 관광지 음식 말고 진짜 로컬로 부탁했더니 동네 사람들 줄 서는 딤섬 집으로 데려가 주셨어요. 대박ㅎㅎ",
        "둥관 공장 견학 출장으로 갔는데 통역분이 우리 업계 용어까지 알아서 놀랐어요 ㅎㅎ",
        "충칭에서 강 위에 매달린 테이블에서 훠궈!! 애들이 아직도 그날 저녁 얘기합니다 ㅋㅋ",
        "리강 가는 날 비 왔는데 오히려 안개 낀 봉우리가 더 예뻤어요. 일정도 10분 만에 바꿔주셨습니다.",
        "견적 항목별로 깔끔, 추가 비용 0원, 공항에 기사님이 이름표 들고 기다리고 계셨어요. 완전 강추!!",
        "판다는 애들, 쓰촨 요리 수업은 나. 다 만족한 여행이었어요 ㅎㅎ",
        "시안은 꼭 고고학 아는 가이드로!!! 병마용 해설이 완전 다르게 들립니다.",
        "중간에 마음 바뀌어서 청두 이틀 더 늘렸는데 한 시간 만에 다 정리됨. 어떻게 이렇게 빨라요 ㅋㅋ",
        "8일 동안 기념품 가게 한 번도 안 들렀어요!! 시장, 국집, 사람들 일상만. 이게 진짜 여행.",
      ],
      mid: [
        "전체적으로 좋았어요. 다만 만리장성 날이 아이들에겐 좀 이른 시간이었던… ㅎㅎ",
        "청두 첫 호텔이 아쉬워서 별 하나 깎아요. 연락하니 바로 바꿔주셨습니다.",
        "기차 좌석이 떨어져서 나온 게 아쉬웠어요. 나머지는 완벽!",
        "좋았어요! 근데 일정이 좀 빡빡해서 저녁엔 다 녹았습니다 ㅋㅋ",
      ],
      low: [
        "가이드분은 좋았는데 이틀 연속 비… 미리 일정 변경을 제안해 주셨으면 더 좋았을 듯.",
        "여행은 무난했어요. 공항에서 기사님 20분 정도 기다린 것만 아쉬웠습니다.",
        "무난한데 부모님 모시고 가려면 애초에 더 여유 일정으로 신청하세요.",
      ],
      names: ["Min-jun K.", "Ji-woo P.", "Seo-yeon L.", "Hye-jin C.", "Tae-yang S.", "Su-bin H.", "Jae-min L.", "Yu-jin N."]
    },
    de: {
      texts: [
        "Mutianyu zur Öffnungszeit — wir waren fast allein auf der Mauer! Der frühe Start hat sich definitiv gelohnt.",
        "In Guangzhou echtes kantonesisches Essen gesucht... und in einem Teehaus gelandet, wo sonst nur Nachbarn sitzen. Genau richtig!!",
        "Werksbesuche in Dongguan, und die Dolmetscherin kannte wirklich unsere Branche. Selten so etwas erlebt.",
        "Hotpot in Chongqing, Tisch über dem Fluss, die Lichter der Stadt... bester Abend der Reise. Punkt.",
        "Es regnete am Li-Fluss — und es war, ehrlich, noch schöner. Guide hat den Nachmittag in 20 Minuten umorganisiert, null Stress.",
        "Klares Angebot, keine versteckten Kosten, Fahrer mit Namensschild am Ausgang. So einfach kann das sein!!",
        "Kinder: Pandas. Ich: Kochkurs. Alle glücklich. Mehr braucht es nicht.",
        "In Xi'an unbedingt einen Guide mit archäologischem Hintergrund nehmen!! Die Terrakotta-Armee ist damit ein komplett anderes Erlebnis.",
        "Unterwegs umgebucht — zwei Tage länger in Chengdu. In einer Stunde geregelt. Wie??",
        "Acht Tage, null Souvenir-Stops. Nur Märkte, Nudelläden und echtes Leben. Danke!!",
      ],
      mid: [
        "Insgesamt sehr gut. Nur der frühe Start für die Mauer war für die Kids hart.",
        "Ein Stern Abzug für das erste Hotel in Chengdu — nach einer Nachricht direkt gewechselt.",
        "Schade nur: Die Zugplätze lagen auseinander. Ansonsten tadellos!",
        "War super. Nur warnen möchte ich: lange Tage! Abends waren wir platt haha",
      ],
      low: [
        "Guter Guide, aber zwei Tage Regen... ein Vorschlag zum Verschieben wäre nett gewesen. Spaß hatten wir trotzdem.",
        "Ordentliche Reise. Mussten am Flughafen ca. 20 Min. auf den Fahrer warten.",
        "Ganz okay, aber für die Eltern war das Programm zu straff. Von Anfang an langsamer planen.",
      ],
      names: ["Lukas M.", "Anna S.", "Klaus W.", "Lena H.", "Stefan B.", "Miriam K.", "Jonas F.", "Petra L."]
    },
    vi: {
      texts: [
        "Mộ Điền Dụ đúng giờ mở cửa, HDV tính sẵn chuyến cáp treo đầu tiên nên Trường Thành gần như vắng khách!! Quá đáng tiền.",
        "Ở Quảng Châu nhờ dẫn đi quán trà sáng dân địa phương xếp hàng — không cẩm nang nào có luôn. Ngon phát đi lên :)",
        "Xem nhà máy ở Đông Quan cho chuyến công tác, phiên dịch hiểu cả thuật ngữ ngành của mình. Hiếm thấy thật!",
        "Lẩu Trùng Khánh, bàn ăn treo bên sông, đèn leo khắp sườn đồi — buổi tối đáng nhớ nhất chuyến đi!!!",
        "Hôm đi sông Ly trời mưa mà sương mù phủ đỉnh đá vôi lại đẹp hơn cả nắng, đổi lịch có 10 phút là xong.",
        "Báo giá rõ từng mục, không phụ phí bất ngờ, tài xế đứng đón sẵn với bảng tên ở sân bay. Ổn áp!",
        "Bọn nhỏ mê gấu trúc còn mình mê lớp nấu ăn Tứ Xuyên, cả nhà đều vui :))",
        "Tây An phải kiếm HDV hiểu khảo cổ, nghe giảng Binh Mã Dũng xong mới biết trước đó mình đi kiểu gì :))",
        "Giữa đường đổi ý thêm 2 ngày Thành Đô, chưa đến 1 tiếng là xong hết. Tốc độ ghê.",
        "8 ngày không bị lôi vào tiệm lưu niệm một lần nào!! Chỉ có chợ, quán mì và đời thường.",
      ],
      mid: [
        "Chuyến đi chung là rất ổn. Chỉ hôm Trường Thành dậy sớm quá, bon nhỏ hơi mệt :)",
        "Trừ 1 sao vì khách sạn đêm đầu ở Thành Đô hơi bình thường. Nhắn một tin là đổi ngay.",
        "Tiếc là ghế tàu không ngồi cạnh nhau, còn lại thì ổn áp.",
        "Rất vui nhưng lịch trình hơi dày, tối về là lăn ra ngủ luôn :))",
      ],
      low: [
        "HDV nhiệt tình nhưng 2 ngày mưa liên tục, đáng lẽ nên gợi ý mình dời lịch.",
        "Chuyến đi tạm ổn, chỉ hơi chờ tài xế ở sân bay khoảng 20 phút.",
        "Tạm được, nhưng đi với bố mẹ thì nên yêu cầu lịch trãi hơn từ đầu.",
      ],
      names: ["Nguyen T.M.", "Trang N.", "Bao L.", "Hanh D.", "Minh Q.", "Thao P.", "Duc T.", "Linh V."]
    },
    th: {
      texts: [
        "ตื่นตีสี่ครึ่งไปมู่เทียนหยู่ บอกเลยว่าคุ้มมากกก กำแพงเมืองแบบแทบไม่มีคน มัคคุเทศก์คำนวณรถกระเช้ารอบแรกให้ด้วยค่ะ",
        "ที่กว่างโจวขอกินของจริงแบบคนท้องถิ่น เขาพาไปร้านติ่มซำที่คนแถวนั้นต่อแถว ไม่มีในไกด์บุ๊คเลยค่ะ อร่อยมากกก",
        "ดูโรงงานที่ตงกวนเพื่องาน ล่ามเข้าใจศัพท์ในสายงานเราด้วย ประทับใจมากครับ",
        "หม้อไฟที่ฉงชิ่ง โต๊ะแขวนอยู่เหนือแม่น้ำ ไฟเมืองทั้งแถว คืนที่ดีที่สุดของทริปเลยค่ะ",
        "วันล่องแม่น้ำหลี่ฝนตก แต่หมอกบนภูเขาหินปูนสวยกว่าที่เห็นในเน็ตอีก เปลี่ยนแผนในสิบนาทีเรียบร้อย ไม่ต้องเครียดเลย",
        "ใบเสนอราคาชัดเจนทุกรายการ ไม่มีค่าใช้จ่ายแอบแฝง คนขับมายืนรับพร้อมป้ายชื่อ ทำได้ดีมากค่ะ",
        "ลูกเอาแพนด้า แม่เอาคลาสทำอาหารเสฉวน ทุกคนได้ดังใจ555",
        "ซีอานต้องขอมัคคุเทศก์ที่เข้าใจโบราณคดีนะคะ ฟังอธิบายกองทหารดินเผาแล้วต่างจากเดิมคนละเรื่องเลย",
        "เปลี่ยนใจกลางทริปอยากอยู่เฉิงตูต่อสองวัน จัดให้เสร็จในชั่วโมงเดียว เร็วมากค่ะ",
        "แปดวันไม่พาเข้าร้านของฝากเลยสักครั้ง!! มีแต่ตลาด ร้านบะหมี่ และชีวิตผู้คนจริงๆ ค่ะ",
      ],
      mid: [
        "โดยรวมดีค่ะ แต่วันไปกำแพงเมืองตื่นเช้ามากไปนิด เด็กๆ เหนื่อยหน่อยค่ะ",
        "หักหนึ่งดาวเพราะโรงแรมคืนแรกที่เฉิงตูเฉยๆ แต่ทักไปเปลี่ยนให้ทันทีค่ะ",
        "เสียดายที่ที่นั่งรถไฟไม่ได้อยู่ด้วยกัน นอกนั้นเรียบร้อยเลยค่ะ",
        "ดีมากค่ะ แต่ตารางเข้มไปหน่อย กลับโรงแรมแล้วหมดแรงเลย555",
      ],
      low: [
        "มัคคุเทศก์ดีค่ะ แต่ฝนตกสองวันซ้อน เสียดายที่ไม่ได้เสนอเลื่อนแผนให้",
        "ทริปโอเคค่ะ แต่รอคนขับที่สนามบินนานไปหน่อย ราวๆ 20 นาที",
        "เฉยๆ ค่ะ ถ้าพาผู้ใหญ่ไปด้วยควรขอจังหวะช้ากว่านี้ตั้งแต่แรก",
      ],
      names: ["Somchai K.", "Malee S.", "Ploy T.", "Anucha W.", "Kannika R.", "Nong P.", "Siriporn L.", "Thanet C."]
    }
  };

  /* Each country: localized display name [7], the language(s) its guests write in,
     and a name pool typical of that country. */
  window.CLA_REVIEW_COUNTRIES = [
    { name: ["Malaysia", "马来西亚", "マレーシア", "Malaisie", "말레이시아", "Malaysia", "Malaysia"], langs: ["en", "zh"], names: ["Ahmad R.", "Lim S.K.", "Siti N.", "Tan W.J.", "Ravi K.", "Chua H.L.", "Nurul A.", "Wong M.Y."] },
    { name: ["Singapore", "新加坡", "シンガポール", "Singapour", "싱가포르", "Singapur", "Singapore"], langs: ["en", "zh"], names: ["Kelvin O.", "Priya S.", "Farah B.", "Melissa T.", "Daniel W.", "Hui L."] },
    { name: ["Vietnam", "越南", "ベトナム", "Vietnam", "베트남", "Vietnam", "Việt Nam"], langs: ["vi"], names: ["Nguyen T.M.", "Trang N.", "Bao L.", "Hanh D.", "Minh Q.", "Thao P."] },
    { name: ["Indonesia", "印尼", "インドネシア", "Indonésie", "인도네시아", "Indonesien", "Indonesia"], langs: ["en"], names: ["Budi S.", "Dewi K.", "Agus P.", "Rina W.", "Andi H.", "Sari M."] },
    { name: ["Philippines", "菲律宾", "フィリピン", "Philippines", "필리핀", "Philippinen", "Philippines"], langs: ["en"], names: ["Maria C.", "Jose R.", "Angel D.", "Carlo M.", "Grace L.", "Paolo S."] },
    { name: ["Thailand", "泰国", "タイ", "Thaïlande", "태국", "Thailand", "Thái Lan"], langs: ["th"], names: ["Somchai K.", "Malee S.", "Ploy T.", "Anucha W.", "Kannika R.", "Nong P."] },
    { name: ["Japan", "日本", "日本", "Japon", "일본", "Japan", "Nhật Bản"], langs: ["ja"], names: ["Kenji S.", "Yuki T.", "Haruto M.", "Aoi K.", "Sakura N.", "Ryo F."] },
    { name: ["France", "法国", "フランス", "France", "프랑스", "Frankreich", "Pháp"], langs: ["fr"], names: ["Camille D.", "Julien M.", "Sophie L.", "Élodie B.", "Thomas R.", "Amélie C."] },
    { name: ["Germany", "德国", "ドイツ", "Allemagne", "독일", "Deutschland", "Đức"], langs: ["de"], names: ["Lukas M.", "Anna S.", "Klaus W.", "Lena H.", "Stefan B.", "Miriam K."] },
    { name: ["South Korea", "韩国", "韓国", "Corée du Sud", "한국", "Südkorea", "Hàn Quốc"], langs: ["ko"], names: ["Min-jun K.", "Ji-woo P.", "Seo-yeon L.", "Hye-jin C.", "Tae-yang S.", "Su-bin H."] },
    { name: ["Australia", "澳大利亚", "オーストラリア", "Australie", "호주", "Australien", "Úc"], langs: ["en"], names: ["Jack T.", "Olivia T.", "Ethan W.", "Mia H.", "Liam B.", "Chloe S."] },
    { name: ["United Kingdom", "英国", "イギリス", "Royaume-Uni", "영국", "Vereinigtes Königreich", "Anh"], langs: ["en"], names: ["James H.", "Emily C.", "Oliver P.", "Sophie W.", "Harry M.", "Grace T."] },
    { name: ["United States", "美国", "アメリカ", "États-Unis", "미국", "USA", "Hoa Kỳ"], langs: ["en"], names: ["Michael B.", "Sarah J.", "David K.", "Jessica L.", "Kevin P.", "Amanda R."] },
    { name: ["Canada", "加拿大", "カナダ", "Canada", "캐나다", "Kanada", "Canada"], langs: ["en"], names: ["Ryan M.", "Emma S.", "Lucas T.", "Hannah W.", "Noah C.", "Lily D."] },
    { name: ["India", "印度", "インド", "Inde", "인도", "Indien", "Ấn Độ"], langs: ["en"], names: ["Priya S.", "Arjun M.", "Vikram N.", "Ananya R.", "Rahul D.", "Kavya S."] },
    { name: ["UAE", "阿联酋", "UAE", "Émirats arabes unis", "UAE", "VAE", "UAE"], langs: ["en"], names: ["Omar A.", "Fatima H.", "Khalid M.", "Layla S.", "Yusuf R.", "Mariam K."] }
  ];

  /* A 4th, fully flexible option shown on every city page */
  window.CLA_CUSTOM_ITIN = {
    title: ["Build Your Own Day", "由你定义的一天", "あなただけの一日", "Composez votre journée", "나만의 하루 만들기", "Gestalten Sie Ihren Tag", "Tự thiết kế một ngày"],
    intro: [
      "Tell us what you love and we will shape a private day around it — a market, a workshop, a neighbourhood, or simply nowhere in particular.",
      "告诉我们你的喜好，我们围绕它设计一整天——一个市场、一间作坊、一片街区，或者干脆什么都不安排。",
      "好きなことを教えていただければ、市場、工房、街並み、あるいは何も決めない一日まで、丸ごと組み立てます。",
      "Dites-nous ce que vous aimez : nous composerons une journée privée autour d'un marché, d'un atelier, d'un quartier — ou de rien de précis.",
      "좋아하는 것을 알려주시면 시장, 공방, 동네, 혹은 아무 계획 없는 하루까지 전부 맞춰 드립니다.",
      "Sagen Sie uns, was Sie lieben – wir gestalten einen privaten Tag um einen Markt, eine Werkstatt, ein Viertel oder einfach um nichts Bestimmtes.",
      "Hãy nói điều bạn thích, chúng tôi sẽ thiết kế trọn một ngày riêng – một khu chợ, một xưởng thủ công, một góc phố, hoặc đơn giản là không kế hoạch nào cả."
    ],
    spots: ["Your choice · Flexible pace · Private guide", "随心选择 · 自由节奏 · 私人向导", "お任せ・自由なペース・専属ガイド", "Au choix · Rythme libre · Guide privé", "원하는 대로 · 자유로운 페이스 · 전용 가이드", "Nach Wahl · Freies Tempo · Privater Guide", "Tùy bạn · Nhịp tự do · HDV riêng"]
  };

  /* ---------- Translated <select> options ---------- */
  /* ---------- Wellness & medical product line ----------
     Added on top of the three classic ways per city, so the
     "Wellness & Medical" style page has real itineraries.      */
  var WELLNESS_ITIN = {
    sanya: [
      I(5, "wellness",
        ["Coastal Wellness & TCM", "海岛康养与中医调理", "海辺のウェルネスと中医ケア", "Bien-être côtier et médecine chinoise", "해변 웰니스와 중의 케어", "Küsten-Wellness & TCM", "Dưỡng sinh ven biển & Đông y"],
        ["Five slow days: a licensed TCM clinic for acupuncture and tuina, sunrise walks on the beach, and three meals set by a nutritionist.", "五天慢节奏：持牌中医门诊做针灸与推拿，清晨海边散步，三餐由营养师配好。", "5日間のスローな滞在。認可中医クリニックでの鍼灸と推拿、日の出の浜辺の散歩、栄養士が組んだ食事。", "Cinq jours sans hâte : clinique agréée pour acupuncture et tuina, promenades à l'aube et repas composés par une nutritionniste.", "닷새의 느린 일정: 허가된 중의 클리닉에서 침과 추나, 새벽 해변 산책, 영양사가 짠 식단.", "Fünf ruhige Tage: zugelassene TCM-Klinik für Akupunktur und Tuina, Strandspaziergänge im Sonnenaufgang, Menüs von der Ernährungsberatung.", "Năm ngày chậm rãi: phòng khám Đông y có phép với châm cứu và xoa bóp, đi bộ bãi biển lúc bình minh, thực đơn do chuyên gia dinh dưỡng lên."],
        ["Sanya Bay · TCM clinic · Hot spring", "三亚湾 · 中医门诊 · 温泉", "三亜湾・中医クリニック・温泉", "Baie de Sanya · Clinique TCM · Source chaude", "싼야만 · 중의 클리닉 · 온천", "Sanya-Bucht · TCM-Klinik · Thermalquelle", "Vịnh Tam Á · phòng khám Đông y · suối nóng"])
    ],
    kunming: [
      I(7, "wellness",
        ["Highland Slow-stay", "高原旅居调养", "高原ロングステイ", "Séjour long sur le plateau", "고원 장기 체류", "Langer Aufenthalt im Hochland", "Lưu trú cao nguyên"],
        ["A week at 1,900 m: mild air, morning walks by the lake, one TCM session a week and a serviced apartment with a kitchen instead of a hotel.", "在海拔一千九百米住一周：气候温和，清晨湖边散步，每周一次中医调理，住带厨房的公寓而不是酒店。", "標高1,900mで一週間。穏やかな気候、湖沿いの朝の散歩、週1回の中医ケア、キッチン付きのアパート。", "Une semaine à 1 900 m : air doux, promenades matinales au bord du lac, une séance de médecine chinoise par semaine et un appartement avec cuisine.", "해발 1,900m에서 일주일: 온화한 기후, 호숫가 아침 산책, 주 1회 중의 케어, 주방이 있는 아파트.", "Eine Woche auf 1.900 m: milde Luft, Morgenspaziergänge am See, eine TCM-Sitzung pro Woche und ein Apartment mit Küche.", "Một tuần ở độ cao 1.900 m: khí hậu ôn hòa, sáng đi bộ ven hồ, mỗi tuần một buổi Đông y, ở căn hộ có bếp."],
        ["Dianchi Lake · TCM hall · Fuxian Lake", "滇池 · 中医馆 · 抚仙湖", "滇池・中医館・撫仙湖", "Lac Dianchi · Maison TCM · Lac Fuxian", "뎬츠호 · 중의관 · 푸셴호", "Dianchi-See · TCM-Haus · Fuxian-See", "Hồ Điền Trì · nhà Đông y · hồ Phủ Tiên"])
    ],
    guilin: [
      I(4, "wellness",
        ["Riverside Recuperation", "山水疗养与温泉", "山水の療養と温泉", "Convalescence au bord de la rivière", "강변 요양과 온천", "Erholung am Fluss", "Tĩnh dưỡng bên sông"],
        ["Karst air, river walks and hot spring evenings — every day closes with a TCM session, and nothing starts before nine.", "喀斯特的空气、江边散步、傍晚泡温泉——每天以一次中医调理收尾，上午九点前不排行程。", "カルストの空気、川沿いの散歩、夕暮れの温泉。毎日を中医ケアで締めくくり、九時前には予定を入れません。", "L'air des karsts, des marches au bord de la rivière et des soirées aux sources chaudes — chaque journée se termine par une séance de médecine chinoise.", "카르스트의 공기, 강변 산책, 저녁 온천 — 하루를 중의 케어로 마무리하고 오전 아홉 시 전에는 일정을 잡지 않습니다.", "Karstluft, Spaziergänge am Fluss und Thermalabende — jeder Tag endet mit einer TCM-Sitzung, vor neun Uhr beginnt nichts.", "Không khí núi đá vôi, đi bộ ven sông và tối ngâm suối nóng — mỗi ngày khép lại bằng một buổi Đông y, trước chín giờ không xếp lịch."],
        ["Li River · Yangshuo · Hot spring", "漓江 · 阳朔 · 温泉", "漓江・陽朔・温泉", "Rivière Li · Yangshuo · Source chaude", "리강 · 양숴 · 온천", "Li-Fluss · Yangshuo · Thermalquelle", "Sông Ly · Dương Sóc · suối nóng"])
    ],
    guangzhou: [
      I(3, "wellness",
        ["TCM Consult & Health Check", "中医调理与体检", "中医診察と健康診断", "Consultation TCM et bilan de santé", "중의 진료와 건강검진", "TCM-Konsultation & Gesundheitscheck", "Khám Đông y & kiểm tra sức khỏe"],
        ["A consultation at a licensed TCM hospital, an executive check-up package, and a market walk with a Cantonese nutritionist.", "持牌中医院问诊、一套体检套餐，再跟粤菜营养师逛一趟菜市场。", "認可中医病院での診察、人間ドック、広東料理の栄養士と市場散策。", "Consultation dans un hôpital de médecine chinoise agréé, bilan complet et marché avec une nutritionniste cantonaise.", "허가된 중의병원 진료, 종합검진, 광둥 요리 영양사와 시장 산책.", "Konsultation in einem zugelassenen TCM-Krankenhaus, Vorsorgecheck und ein Marktrundgang mit kantonesischer Ernährungsberatung.", "Khám tại bệnh viện Đông y có phép, gói kiểm tra sức khỏe và đi chợ cùng chuyên gia dinh dưỡng Quảng Đông."],
        ["TCM hospital · Check-up centre · Qingping market", "中医医院 · 体检中心 · 清平市场", "中医病院・健診センター・清平市場", "Hôpital TCM · Centre de bilan · Marché Qingping", "중의병원 · 검진센터 · 칭핑시장", "TCM-Krankenhaus · Check-up-Zentrum · Qingping-Markt", "Bệnh viện Đông y · trung tâm khám · chợ Thanh Bình"])
    ],
    shanghai: [
      I(3, "wellness",
        ["International Clinic & Check-up", "国际门诊与体检", "国際外来と人間ドック", "Clinique internationale et bilan", "국제 진료와 검진", "Internationale Klinik & Check-up", "Phòng khám quốc tế & kiểm tra sức khỏe"],
        ["Appointments at a hospital international department, bilingual reports explained line by line, and a private car between every visit.", "三甲医院国际部预约、双语报告逐项讲解，每次就诊都有专车接送。", "大病院の国際部での予約、バイリンガル報告書の逐条説明、毎回の通院に専用車。", "Rendez-vous au service international d'un grand hôpital, rapports bilingues expliqués point par point et voiture privée à chaque visite.", "대형 병원 국제부 예약, 이중언어 결과지를 항목별로 설명, 진료마다 전용차.", "Termine in der internationalen Abteilung eines großen Klinikums, zweisprachige Befunde Zeile für Zeile erklärt, Privatwagen zu jedem Termin.", "Đặt lịch tại khoa quốc tế bệnh viện lớn, giải thích kết quả song ngữ từng mục, xe riêng cho mỗi lần khám."],
        ["International clinic · Check-up centre · Private hospital", "国际门诊 · 体检中心 · 私立医院", "国際外来・健診センター・私立病院", "Clinique internationale · Centre de bilan · Hôpital privé", "국제 진료 · 검진센터 · 사립병원", "Internationale Klinik · Check-up-Zentrum · Privatklinik", "Phòng khám quốc tế · trung tâm khám · bệnh viện tư"])
    ],
    beijing: [
      I(4, "wellness",
        ["Senior TCM Physician & Specialist Escort", "中医名家与专科陪诊", "中医の名医と専門医の付き添い", "Médecin TCM senior et accompagnement spécialisé", "중의 명의와 전문의 동행", "TCM-Arzt mit Erfahrung & Facharztbegleitung", "Danh y Đông y & đồng hành chuyên khoa"],
        ["A consultation with a senior TCM physician, a specialist appointment with an interpreter, and quiet afternoons back at a courtyard hotel.", "中医专家门诊、带翻译的专科就诊，午后回四合院酒店安静休息。", "中医のベテラン医師の診察、通訳付きの専門外来、午後は四合院ホテルで静かに。", "Consultation avec un médecin TCM expérimenté, rendez-vous spécialisé avec interprète et après-midis calmes dans un hôtel en cour carrée.", "경력 있는 중의 전문의 진료, 통역 동반 전문의 진료, 오후에는 사합원 호텔에서 조용히 휴식.", "Konsultation bei einem erfahrenen TCM-Arzt, Facharzttermin mit Dolmetscher und ruhige Nachmittage im Hofhotel.", "Khám với danh y Đông y, khám chuyên khoa có phiên dịch, chiều về khách sạn sân trong tĩnh lặng."],
        ["TCM hospital · Specialist clinic · Courtyard rest", "中医医院 · 专科门诊 · 四合院静养", "中医病院・専門外来・四合院", "Hôpital TCM · Clinique spécialisée · Cour carrée", "중의병원 · 전문의 · 사합원", "TCM-Krankenhaus · Facharztpraxis · Hofhotel", "Bệnh viện Đông y · phòng khám chuyên khoa · sân trong"])
    ]
  };
  Object.keys(WELLNESS_ITIN).forEach(function (slug) {
    window.CLA_ITIN[slug] = (window.CLA_ITIN[slug] || []).concat(WELLNESS_ITIN[slug]);
  });

  window.CLA_SELECTS = {
    "inq.type.opt": [
      { v: "", t: ["Select…", "请选择…", "選択してください…", "Choisir…", "선택하세요…", "Bitte wählen…", "Chọn…"] },
      { v: "China Travel", t: ["China Travel", "中国旅游", "中国旅行", "Voyage en Chine", "중국 여행", "China-Reise", "Du lịch Trung Quốc"] },
      { v: "Wellness & Medical", t: ["Wellness & Medical", "康养医疗", "ウェルネス・医療", "Bien-être & santé", "웰니스·의료", "Wellness & Medizin", "Dưỡng sinh & Y tế"] },
      { v: "Business & Manufacturing", t: ["Business & Manufacturing", "商务与制造", "ビジネス・製造", "Affaires & industrie", "비즈니스·제조", "Geschäft & Industrie", "Kinh doanh & sản xuất"] },
      { v: "Local Guide Services", t: ["Local Guide Services", "本地向导服务", "現地ガイドサービス", "Services de guide local", "현지 가이드 서비스", "Lokaler Reiseleiterservice", "Dịch vụ hướng dẫn viên địa phương"] },
      { v: "Other", t: ["Other", "其他", "その他", "Autre", "기타", "Sonstiges", "Khác"] }
    ],
    "f.type.opt": [
      { v: "Guide", t: ["Join as a Guide or Driver", "导游与司机加入", "ガイド・ドライバーとして参加", "Rejoindre comme guide ou chauffeur", "가이드·기사로 참여", "Als Guide oder Fahrer dabei sein", "Tham gia làm HDV / tài xế"] },
      { v: "Driver", t: ["Private-Car Driver", "私车司机", "専用車ドライバー", "Chauffeur privé", "전용 차량 기사", "Privatfahrer", "Tài xế xe riêng"] },
      { v: "City Partner", t: ["City Partner", "城市负责人", "都市パートナー", "Partenaire ville", "도시 파트너", "Stadtpartner", "Đối tác thành phố"] },
      { v: "Agency", t: ["Agency & Ground Partner", "旅行社及地接合作", "旅行社・ランドオペレーター", "Agence & réceptif", "여행사 · 랜드사", "Agentur & Leistungsträger", "Công ty lữ hành & đối tác địa phương"] }
    ]
  };
})();
