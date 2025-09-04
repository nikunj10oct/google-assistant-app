# Google Assistant App

This repository contains a Google Assistant-inspired project with separate backend and mobile (React Native) codebases.

## 📁 Folder Structure

```
/backend
  app.js
  package.json
  /routes
    alarm.js
    music.js
    news.js
    user.js
    whatsapp.js

/mobile
  App.js
  /components
    HomeScreen.js
  /routes
    whatsapp.js
  /utils

/components
  BiometricLogin.js

README.md
```

- **/backend:** Node.js/Express REST API server
- **/mobile:** React Native mobile application (not deployed on Render)
- **/components:** Shared or extra JS components

---

## 🚀 Deploying the Backend on Render

1. **Go to [Render](https://render.com/) and create a new Web Service.**
2. **Connect your GitHub repository.**
3. **Settings for Render:**
    - **Root Directory:** `backend`
    - **Build Command:** `npm install`
    - **Start Command:** `npm start`
4. Click **"Save"** or **"Update Fields"** and deploy.
5. After build, you’ll get a public API URL (e.g., `https://your-app.onrender.com`).

**If you see a "backend not found" error:**  
Double-check that your GitHub repo root contains a folder named `backend` (not that everything is inside another folder like `google-assistant-app/backend`).  
If your repo root _is_ `google-assistant-app` (with `backend` inside), set the root directory in Render to `google-assistant-app/backend`.

---

## 📱 Running the Mobile App

You cannot deploy the React Native app to Render.  
To run the mobile app locally:

```bash
cd mobile
npm install
npm start
```
Or use [Expo Go](https://expo.dev/) for live reload and device preview.

---

## 💡 Troubleshooting

- **404 or backend errors on Render:**  
  Double-check the Render root directory and that your backend folder is at the correct path in your GitHub repo.
- **First request is slow:**  
  Free Render plans may “sleep”; first request may take up to 1 minute to respond.

---

## 📝 License

MIT
