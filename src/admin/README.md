# CHINA GUIDE 管理后台

本文件夹集中保存网站管理后台的界面代码。

- `Admin.jsx`：行程、咨询和图片管理界面
- `admin.css`：后台专用样式
- 正式入口：`https://china-guide-song.liuyiyong9999.chatgpt.site/?admin=1`
- 管理员账号：`liuyiyong9999@icloud.com`

后台使用网站 Worker API、D1 数据库和 R2 图片存储；相关服务端代码仍位于 `worker/`，数据库迁移位于 `drizzle/`，以符合 Sites 的部署结构。
