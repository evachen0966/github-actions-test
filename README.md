# 專案名稱

簡單的專案描述。

## 安裝

使用 npm 安裝依賴：
bash
npm test


## CI/CD

本專案使用 GitHub Actions 進行持續整合。每次推送至 main 分支或建立 Pull Request 時都會自動運行測試。

CI 流程包括：
- 在多個 Node.js 版本 (16.x, 18.x, 20.x) 上運行測試
- 安裝依賴
- 執行測試套件
