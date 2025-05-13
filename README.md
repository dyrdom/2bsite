# 2bVPN Landing Page
![d86664b8-a110-48c8-b3ea-f471b93a](https://github.com/user-attachments/assets/382380ba-f2b8-4b57-a9c8-b0d25d80c6e8)

Одностраничный сайт для сервиса 2bVPN, собранный на **Vite** и **React**.  
Полноэкранный Hero-блок фирменным фоном, секции с чётким разделением, SVG-разделители, адаптивная верстка, плавный скролл и микровзаимодействия.

---

## 🔥 Функциональные возможности

- **Технологии**: Vite, React, CSS  
- **Hero** на весь экран с фоновым изображением и кнопкой «Скачать»  
- Секции:  
  - **Features** («Почему выбирают нас?»)  
  - **Pricing** (тарифы)  
  - **Download** (загрузки для разных платформ)  
- SVG-разделители между блоками  
- Чередующийся фон у секций для визуального разграничения  
- Плавный скролл и hover-эффекты  
- Lazy loading для изображений  
- Адаптивная сетка (`grid` / `flex`)  
- Sticky-секция, если понадобится (ранее был Header, можно вернуть)

---

## 📁 Структура проекта
2bvpn-vite/

├─ public/

│  ├─ 2b.png        # Логотип

│  └─ chuchu.png    # Фон Hero

├─ src/

│  ├─ assets/       # Логотип для импорта в React

│  ├─ components/   # Features, Pricing, Download, Separator

│  ├─ App.jsx       # Главный компонент

│  ├─ main.jsx      # Рендеринг и импорт index.css

│  └─ index.css     # Глобальные и секционные стили

├─ index.html       # Точка входа Vite (script type="module" src="/src/main.jsx")

├─ package.json

├─ vite.config.js

└─ .gitignore

© 2025 2bVPN | 2bTeam. Все права защищены.
