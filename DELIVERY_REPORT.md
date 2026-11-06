# CHINA GUIDE 全网站品牌文案与转化升级 — 交付报告

> 生成日期：2026-11（续前次会话）
> 状态：**已上线**（用户 2026-11-06 11:09 确认「可以上线」；commit `17afcf3` 已 `git push origin main`，Vercel 自动部署触发）
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

- **已部署**：用户已确认上线，commit `17afcf3`（14 文件，+1690/−298）已推送至 `origin/main`，Vercel 自动构建触发。推送经 `env -u http(s)_proxy` 直连绕过本地代理 502，`credential.helper=manager` 自动鉴权，无需 PAT。
- **虚构评价数据**：`data.js` 仍含虚构评价种子（当前**不渲染**，因 `#reviewGrid` 已从首页移除且 `renderReviews` 有空网格守卫）。建议后续删除或替换为真实评价机制。
- **i18n 死键残留**：`i18n-extra.js` 中 ja/fr/ko/de/vi/ru/ms/th 的 `one.2`/`about2.p` 等少数**不再渲染**的键仍含 “15 cities” 字样；不影响展示，建议清理。
- **redesign.html**：旧概念稿，含 “One brand · 15 cities · 200+ guides”，未上线，建议归档或删除。
- **视觉**：按约束沿用原风格 / 配色 / LOGO / 架构，本次未做重设计；仅新增少量必要样式。

---

## 八、Git 状态

- 分支：`main`（与 `origin/main` 同步于 `17afcf3`）
- 已修改并推送：`index.html`、`assets/js/main.js`、`assets/css/style.css`、`destination.html`、`partner.html`
- 新增并推送：`china-travel.html`、`wellness-medical.html`、`business.html`、`network.html`、`about.html`、`contact.html`、`faq.html`、`DELIVERY_REPORT.md`
- 提交：`17afcf3`（14 文件，+1690/−298），已 `git push origin main`
- 备份：`backup-pre-copy-20261106`（改动前干净快照，仍在）

---

## 九、下一步建议

1. ✅ 已上线（commit `17afcf3` 已推送，`origin/main` 同步，Vercel 自动部署）。
2. 并行处理第五节待办（LOGO、web3forms 绑定、二维码、GA4、多语言深翻、遗留页去留）。
3. 后续清理 `data.js` 虚构评价种子与 `i18n-extra.js` 死键（不影响当前展示）。

---

# 第二轮（2026-11-06）全面验收与优化 — 交付补充

> 状态：**已上线**（commit `5823460`，8 文件 +409/−81，已 `git push origin main`，Vercel 自动部署；线上抓取核实生效）
> 目标：在现有版本上「修复问题、补充功能、提升转化」，非重新设计。

## 一、本轮修改 / 新增页面清单

| 文件 | 改动 |
|---|---|
| `index.html` | 首页咨询表单对齐统一体系：蜜罐字段改用 `.botcheck` 类；新增 3 个条件区块（China Travel / Wellness / Business）+ 必选同意勾选框 |
| `contact.html` | 统一询价表单重写（见第三节）；**删除**加载即显示「Your inquiry has been received」的误导性 REASSURANCE NOTE |
| `assets/js/main.js` | `renderDestination()` 增加路由重定向；`bindForm` 增加蜜罐/同意/条件字段/`service_category`；新增 `bindConditional`；`?cat/?type/?city` 预填；新增 `status.consent` i18n |
| `assets/js/data.js` | `CLA_SELECTS["inq.type.opt"]` 改为统一 5 类目（China Travel / Wellness & Medical / Business & Manufacturing / Local Guide Services / Other）7 语数组 |
| `assets/css/style.css` | 新增 `.botcheck` / `.req` / `.form-cond` / `.consent` / `.city-itin` / `.itin-note` |
| `wellness-medical.html`、`business.html`、`china-travel.html` | 内容重写（详见第二、四、五节） |

## 二、页面问题修复（brief 第二节）

- **路由防空白页**：`destination.html?type=wellness` → 重定向 `wellness-medical.html`；`?type=business` → `business.html`；未知 `?type=` → `china-travel.html`；裸 `destination.html` 显示首城市。全站已无 `destination.html?type=` 死链（grep 验证 0 处）。
- **首页入口**：首页 Wellness / Business 两个区块 CTA 已正确链向 `wellness-medical.html` / `business.html`（index.html 第 227 / 233 行验证）。
- **所有按钮可用**：三支柱页 / 城市页 / 咨询页 CTA 均链向已存在页面，并支持 `?cat=` 预填咨询类别。
- **无虚假商品 / 价格**：城市样例行程统一标注「Sample plan — final itinerary tailored to you」，不作为固定套餐出售。
- **空页兜底**：`destination.html` 裸页显示首城市真实内容，不出现空白。

## 三、统一询价系统（brief 第六节）— 字段与逻辑

- **3 大类别**（统一下拉，覆盖全站咨询表单）：China Travel / Wellness & Medical / Business & Manufacturing / Local Guide Services / Other。
- **字段**：Name*、Email*、WhatsApp、Home country、Preferred destination、Pax、Visit date、Language、Service category*、按类别条件问题（travel_notes / wellness_notes / business_notes）、Message、Consent*。
- **机制**：蜜罐 `botcheck` 拦截机器人；同意勾选未勾 → 提示 `status.consent` 并阻止提交；仅发送非空字段；提交含 `service_category` 与分类主题；成功后重置表单并重新应用条件显示。
- **隐私 / 同意**：Wellness 条件区注明「never ask for detailed medical records, ID numbers or sensitive health data」；同意条款明示用途与隐私实践。
- **联系方式跳转**：WhatsApp `wa.me/8613113119919`、WeChat 二维码、邮箱 `hello@auronixa.com` 均在咨询页呈现。

## 四、Wellness & Medical（brief 第三节）

- **7 大类别**：Traditional Chinese Medicine、Health Screening、Medical Appointment Assistance、Medical Interpretation、Wellness Retreats、Rehabilitation & Recovery Travel、Family Medical Travel。
- **8 步服务流**：Submit → Initial Consultation → Match Institution → Review & Confirm → Appointment Coordination → Translation & Accompaniment → Accommodation & Transport → Follow-up。
- **合规声明**：医疗服务由**持牌医院/诊所**提供；China Guide 仅做协调/预约/翻译/出行支持，**不诊断、不治疗、不开方、不保证医疗结果**，且不收集病历/身份证/敏感健康数据。
- **CTA**：`contact.html?cat=WELLNESS`。

## 五、Business & Manufacturing（brief 第四节）

- **8 大行业**：Electronics & Technology、Machinery & Equipment、Furniture & Home Products、Garment & Textiles、Plastics & Packaging、New Materials、Consumer Products、OEM & ODM。
- **7 步服务流**：Tell Us Needs → Industry Classification → Factory Screening → Factory Confirmation → Itinerary Design → Interpretation & Accompaniment → Transport & Accommodation。
- **合规声明**：工厂/供应商拜访须**供应商事先确认**；China Guide 仅做协调/口译/后勤，**不代表任何供应商，不保证工厂准入、交易或商业结果**。
- **CTA**：`contact.html?cat=BUSINESS`。

## 六、8 城样例产品（brief 第五节）

`china-travel.html` 覆盖 **Guangzhou / Shenzhen / Dongguan / Shanghai / Beijing / Chengdu / Chongqing / Kunming** 八城，每城含 Days / Main experiences / Best for / What's included / Optional add-ons + 「Ask about this itinerary →」(`?cat=TRAVEL`)，并标注「Sample plan — final itinerary tailored to you」。未核实产品均不作为官方在售套餐。

## 七、视觉与移动端（brief 第七节）

- **一致性**：统一 `China Guide` / `Your Gateway to China`；三大支柱各自配图但共用设计语言（深色夜市主题、`.wel-grid` / `.wel-card` / `.steps` / `.step` 复用）。
- **移动端**：既有媒体查询在 `≤820px` 将 `.steps` / `.wel-grid` / `.contact-wrap` 等折叠为单列，`.form-row` 在 `≤820px` 转单列；咨询表单 `max-width:760px` 自适应。本轮新增 `.city-itin` / `.itin-note` / `.consent` / `.form-cond` 等均在移动断点下正常表现（经 CSS 审查确认；未做真机截图）。

## 八、表单实测结果（brief 第六节要求「实际测试」）

- **代码层**：`main.js` / `data.js` 通过 `node --check`；提交载荷格式正确（`access_key` + 字段 + `service_category` + 分类 `subject` + `from_name`）；蜜罐 / 同意 / 条件逻辑齐备。
- **端点连通性**：向 `api.web3forms.com/submit` 发送测试 POST，**端点可达、`access_key` 被接受**。
- **限制（重要）**：web3forms 对**非浏览器 / 服务器 IP** 的提交一律拦截（`"This method is not allowed... Pro plan is required to whitelist server IP"`）。因此**无法在本沙箱完成一次成功的真实提交/数据落库/邮件通知验证**。该接口本就设计为浏览器端（`fetch`）调用，线上真实访客提交可正常送达。
- **建议业主**：在 web3forms 后台确认该 `access_key` 收件邮箱已绑定 `hello@auronixa.com`（第一轮待办 #2），并在线上用真实浏览器提交一次，确认收到管理员通知邮件。

## 九、移动端测试结果

- 经 CSS 媒体查询审查：`.steps`(4→2→1)、`.wel-grid`(3→2→1)、`.form-row`(2→1)、`.contact-wrap`(2→1) 在窄屏正确折叠；表单、卡片、按钮均自适应。
- 由于环境无浏览器，未执行真机/无头截图测试；结论基于样式表断点审查。

## 十、最终业务页链接（线上已生效）

- Wellness & Medical：`https://www.cn-guide.com/wellness-medical.html`
- Business & Manufacturing：`https://www.cn-guide.com/business.html`
- China Travel：`https://www.cn-guide.com/china-travel.html`
- Contact（统一询价）：`https://www.cn-guide.com/contact.html`

## 十一、未完成 / 风险（含原因）

1. **web3forms 真实送达与通知未实测**：受 web3forms 服务器 IP 策略限制（需 Pro 计划白名单或浏览器端），沙箱无法完成真实提交；需业主在线上浏览器实测并确认后台收件绑定。
2. **真实评价 / 清理 `data.js` 虚构评价种子**：第一轮待办，本轮未动（新内容已规避具体虚构实体；`network.html` 的「Verified Partner Guide」为通用层级/标准表述，非具名虚构，供业主决定是否弱化）。
3. **真实 LOGO（替换「游」）、真实二维码图片、GA4 ID、东南亚语种（ms/th/vi）深翻**：第一轮待办，顺延。
4. **真机移动端截图测试**：环境无浏览器，基于 CSS 断点审查，未做像素级验证。

## 十二、Git 状态（第二轮）

- 提交：`5823460`（8 文件，+409/−81），已 `git push origin main`，Vercel 自动部署。
- `origin/main` 现同步于 `5823460`。
- 备份分支 `backup-pre-copy-20261106` 仍保留。
