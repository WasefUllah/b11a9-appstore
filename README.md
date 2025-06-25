# 📱 AppStore - React App

A responsive and interactive web application that showcases a collection of apps, including detailed information, user reviews, and a simple install/uninstall feature. Designed for a seamless experience across mobile, tablet, and desktop.

🔗 **Live Site:** [https://appstore-by-wasefullah.netlify.app/](https://appstore-by-wasefullah.netlify.app/)

---

## ✨ Features

- 🔍 **App Listing:** Browse apps by category with thumbnails, ratings, and downloads.
- 📄 **App Details Page:** View descriptions, features, and user reviews.
- 📥 **Install/Uninstall:** Install apps to enable review and rating.
- ⭐ **Rating System:** Submit star-based ratings and written reviews.
- 📱 **Responsive Design:** Fully responsive layout using Tailwind CSS.

---

## 🛠️ Technologies Used

- **React** – UI and state management  
- **React Router** – Page routing and dynamic app detail views  
- **Tailwind CSS** – Modern utility-first styling  
- **React Icons** – Visual icons (e.g., stars, users)  
- **React Toastify** – Toast notifications for user actions  
- **Firebase** – (Present in dependencies, can be extended for backend/data)

---

## 📦 Dependencies

```json
"@tailwindcss/vite": "^4.1.5",
"firebase": "^11.7.1",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-icons": "^5.5.0",
"react-router": "^7.5.3",
"react-toastify": "^11.0.5",
"tailwindcss": "^4.1.5"

📁 Project Structure
src/
├── components/
│   ├── AppCard.js         # Displays app summary cards
│   ├── AppDetails.js      # Shows detailed app info
│   ├── Review.js          # Renders user reviews
├── data/                  # Mock data for apps
├── App.js                 # Main app layout and routes
├── index.js               # Entry point
└── styles.css             # Tailwind CSS styles

🚀 Run Locally
Clone the repository

git clone https://github.com/WasefUllah/b11a9-appstore.git
cd b11a9-appstore

📄 License
This project is licensed under the MIT License — free to use and modify.
Let me know if you want this turned into a downloadable file or need one for your next project — I'm ready!


Install dependencies
npm install

Start the development server
npm run dev

🧩 Setup Notes
Make sure you have Node.js and npm installed.
Tailwind is already configured via tailwind.config.js.
React Router is used with dynamic routing for app detail pages.

🤝 Contribution Guidelines
Feel free to fork, clone, or suggest improvements via pull requests.
Found a bug? Open an issue with clear reproduction steps.
