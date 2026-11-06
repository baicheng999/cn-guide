/* ============================================================
   China Guide — central image manifest (the "image backend")
   ------------------------------------------------------------
   Every image position on every page is declared ONCE here.
   A future admin/CMS only needs to write a URL into `src` —
   no HTML, CSS or JavaScript has to be touched.

   Fields
     src    image URL; EMPTY STRING = neutral placeholder is shown
     alt    accessible description
     ratio  CSS aspect-ratio of the slot (keeps layout stable)
     fit    object-fit: cover | contain
     focus  object-position, i.e. the crop focal point
     usage  where the image appears (for the asset request list)

   Existing images are kept exactly as they are. No image was
   downloaded, generated, or swapped during the visual upgrade.
   ============================================================ */
window.CLA_IMAGES = {
  /* --- Brand identity ------------------------------------------------
     Two transparent variants of the same supplied logo:
       light = cream + champagne gold, for the dark forest hero / footer
       dark  = original navy + gold, for the cream scrolled header
     Replace these three paths here to rebrand the whole site.
     brand.icon is referenced directly from each page <head> (favicon). */
  "brand.logo":         { src: "assets/img/brand/china-guide-logo.png",       alt: "China Guide — Your Gateway to China", ratio: "1200 / 253", fit: "contain", focus: "center", usage: "Header logo on cream (scrolled state)" },
  "brand.logo.light":   { src: "assets/img/brand/china-guide-logo-light.png", alt: "China Guide — Your Gateway to China", ratio: "1200 / 253", fit: "contain", focus: "center", usage: "Header logo on dark hero + site footer" },
  "brand.icon":         { src: "assets/img/brand/china-guide-icon.png",       alt: "China Guide icon",                    ratio: "1 / 1",     fit: "contain", focus: "center", usage: "Favicon / apple-touch-icon (declared in <head>)" },

  /* --- Reserved slots: supply these photos to complete the look --- */
  "hero.brand":          { src: "", alt: "", ratio: "4 / 3", fit: "cover",   focus: "center",       usage: "Homepage hero, right-hand brand photograph (landscape, height-capped frame)" },
  "feature.wellness":   { src: "", alt: "", ratio: "4 / 3", fit: "cover",   focus: "center",       usage: "Homepage Wellness & Medical feature band" },
  "feature.business":   { src: "", alt: "", ratio: "4 / 3", fit: "cover",   focus: "center",       usage: "Homepage Business & Manufacturing feature band" },

  /* --- Existing artwork, kept in place --- */
  "service.travel":     { src: "assets/img/home/service-travel.svg",   alt: "China travel illustration",       ratio: "640 / 420", fit: "contain", focus: "center", usage: "Homepage China Travel pillar" },
  "service.wellness":   { src: "assets/img/home/service-wellness.svg", alt: "Wellness illustration",            ratio: "640 / 420", fit: "contain", focus: "center", usage: "Homepage Wellness pillar emblem" },
  "service.business":   { src: "assets/img/home/service-business.svg", alt: "Business illustration",           ratio: "640 / 420", fit: "cover",   focus: "center 70%", usage: "Homepage Business pillar strip" },
  "dest.guangzhou":     { src: "assets/img/home/dest-guangzhou.svg",    alt: "Guangzhou illustration",          ratio: "320 / 200", fit: "contain", focus: "center", usage: "Homepage destination collage 01 (large)" },
  "dest.shanghai":      { src: "assets/img/home/dest-shanghai.svg",     alt: "Shanghai illustration",           ratio: "320 / 200", fit: "contain", focus: "center", usage: "Homepage destination collage 02" },
  "dest.beijing":       { src: "assets/img/home/dest-beijing.svg",      alt: "Beijing illustration",            ratio: "320 / 200", fit: "contain", focus: "center", usage: "Homepage destination collage 03" },
  "dest.xian":          { src: "assets/img/home/dest-xian.svg",         alt: "Xi'an illustration",             ratio: "320 / 200", fit: "contain", focus: "center", usage: "Homepage destination collage 04" },
  "dest.guilin":        { src: "assets/img/home/dest-guilin.svg",        alt: "Guilin illustration",             ratio: "320 / 200", fit: "contain", focus: "center", usage: "Homepage destination collage 05" },
  "dest.chengdu":       { src: "assets/img/home/dest-chengdu.svg",      alt: "Chengdu illustration",           ratio: "320 / 200", fit: "contain", focus: "center", usage: "Homepage destination collage 06" },
  "founder":            { src: "assets/img/founder.jpg",                alt: "Yiyong Liu, Founder of China Guide", ratio: "4 / 5", fit: "cover", focus: "50% 24%", usage: "Homepage founder portrait, vertical crop" },
  "qr.whatsapp":        { src: "assets/img/whatsapp-qr.jpg",           alt: "WhatsApp QR code",                 ratio: "1 / 1", fit: "cover",   focus: "50% 56.5%", usage: "Contact / homepage WhatsApp QR" },
  "qr.wechat":          { src: "assets/img/wechat-qr.jpg",             alt: "WeChat QR code",                   ratio: "1 / 1", fit: "cover",   focus: "50% 53.5%", usage: "Contact / homepage WeChat QR" },
  "map.china":           { src: "assets/img/china-outline.svg",         alt: "",                                 ratio: "1 / 1", fit: "contain", focus: "center", usage: "Nationwide coordination illustration (non-geographic service map)" },
  "guide.payments":     { src: "assets/img/bya/payments.svg",           alt: "", ratio: "1 / 1", fit: "contain", focus: "center", usage: "Before You Arrive — payments" },
  "guide.transport":    { src: "assets/img/bya/transport.svg",          alt: "", ratio: "1 / 1", fit: "contain", focus: "center", usage: "Before You Arrive — transport" },
  "guide.connectivity": { src: "assets/img/bya/connectivity.svg",       alt: "", ratio: "1 / 1", fit: "contain", focus: "center", usage: "Before You Arrive — connectivity" },
  "guide.food":         { src: "assets/img/bya/food.svg",               alt: "", ratio: "1 / 1", fit: "contain", focus: "center", usage: "Before You Arrive — food culture" },
  "guide.healthcare":   { src: "assets/img/bya/healthcare.svg",         alt: "", ratio: "1 / 1", fit: "contain", focus: "center", usage: "Before You Arrive — healthcare" },
  "guide.business":     { src: "assets/img/bya/business.svg",           alt: "", ratio: "1 / 1", fit: "contain", focus: "center", usage: "Before You Arrive — business travel" }
};
