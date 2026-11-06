# CHINA GUIDE 全网站品牌文案与转化升级 — 交付报告

> 生成日期：2026-11（续前次会话）
> 状态：**本地预览完成，未部署**（按任务书约束，未经你确认不执行 `git push`）
> 备份分支：`backup-pre-copy-20261106`（改动前已创建）

---

## 一、本次变更范围

**重写 / 修改**
- `index.html` — 首页 8 屏重写（Hero、品牌介绍、三大支柱、Why Choose、Local Network、东南亚、创始人、转化）+ 合规修正 + SEO/JSON-LD
- `assets/js/main.js` — i18n 文案（en/zh 基线）+ 合规声明清理
- `assets/css/style.css` — 少量新增样式 + 注释品牌名修正
- `destination.html`、`partner.html` — 遗留页：页脚、导航、元数据合规化（两页仍被全站页脚「For Guides & Drivers」及首页 explore 链接引用，故一并修正）

**新增 7 个页面（独立自包含，复用原 header/footer/11 语切换/「游」字标）**
- `china-travel.html`（China Travel）
- `wellness-medical.html`（Wellness & Medical）
- `business.html`（Business & Manufacturing）
- `network.html`（Local Guide Network）
- `about.html`（About Us）
- `contact.html`（Contact，含扩展咨询表单）
- `faq.html`（FAQ，9 条问答）

---

## 二、品牌定位落地（最终英文文案）

| 项目 | 文案 |
|---|---|
| 品牌名 | **CHINA GUIDE** |
| 标语 | **Your Gateway to China** |
| 使命 | To make China more accessible, understandable and meaningful to the world |
| 愿景 | Connecting the world with the real China, one journey at a time |
| 核心表达 | Explore China. Experience China. Connect with China. |

**三大业务支柱（平等权重，Local Guide Network 为支撑网络而非第 4 个产品）**
1. **China Travel** — 私人定制游 / 本地体验
2. **Wellness & Medical** — 养生与医疗体验（含明确免责声明）
3. **Business & Manufacturing** — 工厂参访 / 商务考察

首页品牌介绍句：**“More Than a Journey. A Connection to China.”**

---

## 三、关键页面文案（英文，最终版摘要）

- **首页 Hero**：`Discover the Real China.` / `Your Gateway to China.` + 简述 + CTA `Explore China` / `Plan Your Journey`
- **三大支柱卡**：分别链向 china-travel / wellness-medical / business 三页
- **Why Choose（4 卡）**：换真实价值，去掉任何数字承诺
- **Local Network**：强调「接单后按城市/语言/兴趣匹配」，并明示「不展示虚构向导照片、简历、资质或客户评价，不声称无法证实的覆盖数字」
- **Southeast Asia**：马来西亚 / 菲律宾 / 新加坡 / 越南 / 印尼 / 泰国 六地标签（英文优先阶段）
- **创始人**：真实可核实创始人 Yiyong Liu 简介 + 签名
- **转化区**：统一 CTA
- **子页 H1/模块**：见各页面 `<title>` 与正文（已按任务书提供）

**统一 CTA（已落地）**
`Plan My China Trip` · `Request a Medical Visit Plan` · `Arrange a Factory Visit` · `Explore Local Experts` · `Talk to Our Team` · `Plan Your Journey`

---

## 四、已删除 / 修正的违规与未核实声明（合规）

| 位置 | 原内容（违规） | 处理 |
|---|---|---|
| `main.js` `footer.note`（en/zh） | “15 cities, 200+ local partners” | 改为合规平台说明（含签约旅行社披露） |
| `index.html` JSON-LD `description` | “across 15 Chinese cities with vetted… guides” | 改为 “across China with English-speaking local guides” |
| `destination.html` meta description | “with verified local guides” | 改为 “arranged with local guides” |
| `partner.html` `p1.desc`（en/zh 及静态回退） | “all fifteen cities / 15 座城市同步招聘” | 改为 “across China / 面向全国招募” |
| `index.html` 网络卡 | “verified credentials” | 改为 “necessary credential checks” |
| `network.html` | “verified credentials” / “vetted local service partners” | 改为 “credential checks” / “selected local service partners” |
| `index.html` 静态回退 | `how.s2.d` “verified” / `pp.p` “vetted” / `join.h2` “all fifteen cities” / `job-badge` “15 cities” | 全部改为合规表述（JS i18n 值早已合规，此处对齐静态回退） |
| `faq.html` | **泄露的编辑批注** “(State this accurately; do not imply…)” | 已删除，仅保留事实陈述 |
| `main.js` `faq.a6`（死键） | “verified, license-checked local guides” | 清除，仅留签约旅行社事实 |
| `main.js` `one.2` / `about2.p`（en/zh 死键） | “15 cities / fifteen cities / 15 城 / 十五座城市” | 清除数字宣称 |
| `style.css` 注释 | “China Local Guides — Design System” | 改为 “China Guide” |
| `index.html` 虚构好评区 `#voices`（4.9/5 + 虚构评价） | 整段删除 | 改为 `#stories`（「经你许可后展示真实故事」，链向联系页） |

**新增免责声明**：wellness-medical / business / 首页业务说明均加入「不保证医疗效果 / 不保证工厂准入或商业结果 / 签约与履约由具备资质旅行社负责」等合规措辞。

---

## 五、待业主确认 / 补充（Pending Owner Inputs）

1. **真实 LOGO**：当前为占位「游」字标，需替换正式品牌标识。
2. **web3forms 收件**：代码收件地址已为 `hello@auronixa.com`，需在 web3forms 后台绑定该 access key 的收件邮箱。
3. **真实评价机制**：决定何时上线「经许可展示的真实客户评价」，并清理 `data.js` 中的虚构评价种子数据。
4. **遗留页去留**：`destination.html`、`partner.html` 仍被全站引用，请决定保留 / 重定向（建议 destination → china-travel 城市深链，partner → network 的「成为伙伴」）/ 删除。
5. **真实二维码图片**：联系页 / partner 页的微信、WhatsApp 二维码目前为占位 SVG。
6. **GA4 Measurement ID**：替换 `G-XXXXXXXXXXX`。
7. **多语言深翻**：当前英文优先；zh 为第二基线；ja/fr/ko/de/vi/ru/ms/th 对非界面文案回退英文、简体经繁体映射。东南亚语种（ms/th/vi）建议后续专业翻译。
8. **城市覆盖表述**：JSON-LD `areaServed` 仍枚举约 15 个锚点城市（事实列表，非数字宣称），如需更保守可调整。

---

## 六、功能与预览测试（Phase 4）

- **本地预览**：`python -m http.server 8126`，10 个页面全部 **HTTP 200**。
- **关键文案核对**：首页含 `Your Gateway to China`；全站页脚合规文案已生效（index/partner/destination 均验证）。
- **JS 语法**：`main.js` / `zh-hant.js` / `i18n-extra.js` 均通过 `node --check`。
- **联系表单契约**：`contact.html` 含 `id="inquiryForm"` / `id="inqType"` / `id="inquiryStatus"`，与 `main.js` 提交逻辑匹配（web3forms）。
- **联系方式**：WhatsApp `wa.me/8613113119919`、邮箱 `hello@auronixa.com` 正确。
- **SEO 标题/描述**：8 个主页面 `<title>` 已按页面独立设置（例如 china-travel：`China Private Tours & Local Travel Experiences | China Guide`）。
- **导航 / 语言**：遗留页 `destination.html`、`partner.html` 导航已对齐新 IA 锚点/页面，消除断链。
- **统一 CTA**：六大 CTA 已在对应页面落地（见第三节）。

---

## 七、未完成 / 风险提示

- **未部署**：严格遵守「未经确认不线上部署」。当前仅为本地预览结果，待你确认后我再执行 `git push` / Vercel 上线。
- **虚构评价数据**：`data.js` 仍含虚构评价种子（当前**不渲染**，因 `#reviewGrid` 已从首页移除且 `renderReviews` 有空网格守卫）。建议上线前删除或替换为真实评价机制。
- **i18n 死键残留**：`i18n-extra.js` 中 ja/fr/ko/de/vi/ru/ms/th 的 `one.2`/`about2.p` 等少数**不再渲染**的键仍含 “15 cities” 字样；不影响展示，建议清理。
- **redesign.html**：旧概念稿，含 “One brand · 15 cities · 200+ guides”，未上线，建议归档或删除。
- **视觉**：按约束沿用原风格 / 配色 / LOGO / 架构，本次未做重设计；仅新增少量必要样式。

---

## 八、Git 状态

- 分支：`main`（领先 `origin/main`）
- 已修改：`index.html`、`assets/js/main.js`、`assets/css/style.css`
- 未跟踪（新增）：`china-travel.html`、`wellness-medical.html`、`business.html`、`network.html`、`about.html`、`contact.html`、`faq.html`
- **未提交、未推送**（待你确认上线）
- 备份：`backup-pre-copy-20261106`（改动前干净快照）

---

## 九、下一步建议

1. 你确认预览无误后，回复「可以上线」，我再提交并 `git push` 触发 Vercel 部署。
2. 并行处理第五节待办（LOGO、web3forms 绑定、二维码、GA4、多语言深翻、遗留页去留）。
3. 上线前清理 `data.js` 虚构评价种子与 `i18n-extra.js` 死键。
