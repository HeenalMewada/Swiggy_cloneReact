# 🍔 Swiggy Clone — React Application

A production-deployed food ordering app built with React, Redux, and React Router — consuming **live Swiggy API data** (not mocked).

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-orange?style=for-the-badge)](https://swiggy-clone-react-ebon.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/HeenalMewada/Swiggy_cloneReact)

---

## 🚀 Live Demo

👉 **[swiggy-clone-react-ebon.vercel.app](https://swiggy-clone-react-ebon.vercel.app/)**

---

## ✨ Features

- 🔴 **Live API Integration** — Fetches real restaurant data from Swiggy's API (not mock/static data)
- 🛒 **Redux Cart** — Add, remove, update quantity with instant UI sync — zero page reload
- 🔍 **Search & Filter** — Filter restaurants by name in real time
- 🗺️ **Dynamic Routing** — React Router deep-linking to any restaurant page — shareable URLs out of the box
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast Performance** — Built with Vite for lightning-fast dev and optimized production builds
- 🧩 **10+ Reusable Components** — Clean component architecture with separation of concerns

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| React.js | UI Component Library |
| Redux | Global State Management (Cart) |
| React Router DOM | Client-side Routing |
| Vite | Build Tool & Dev Server |
| CSS3 | Styling |
| Swiggy API | Live Restaurant Data |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Navbar with cart icon
│   ├── RestaurantCard/  # Individual restaurant card
│   ├── RestaurantMenu/  # Menu page for selected restaurant
│   ├── Cart/            # Cart page
│   ├── Search/          # Search and filter
│   └── Shimmer/         # Loading skeleton UI
├── store/
│   ├── appStore.js      # Redux store configuration
│   └── cartSlice.js     # Cart reducer and actions
├── utils/
│   └── constants.js     # API endpoints, config
└── App.js               # Root component with routing
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/HeenalMewada/Swiggy_cloneReact.git
cd Swiggy_cloneReact

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

App runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🧠 Key Technical Decisions

**Why Redux for cart?**
Cart state needs to be accessible across multiple components (Header cart count, Cart page, Restaurant menu). Redux avoids prop drilling and keeps state predictable.

**Why live API instead of mock data?**
Real APIs return unpredictable structures, handle CORS, and change over time. Building with live data proves the ability to work with real-world, production-grade integrations.

**Why Vite over CRA?**
Vite offers significantly faster hot module replacement during development and smaller production bundle sizes compared to Create React App.

---

## 👩‍💻 Author

**Heenal Mewada** — Full Stack Developer
📧 mewadaheenal304@gmail.com
🔗 [Portfolio](https://github.com/HeenalMewada) · [LinkedIn](https://linkedin.com/in/heenal-mewada)

---

> **Note:** Live API data depends on Swiggy's API availability. If restaurant data doesn't load, it may be due to CORS restrictions in your region. The app is fully functional on the deployed Vercel link.
