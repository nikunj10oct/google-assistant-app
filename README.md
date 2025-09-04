# Google Assistant App

A project inspired by Google Assistant, featuring a Node.js backend and a React Native mobile app.

---

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

- **/backend** — Node.js/Express REST API server
- **/mobile** — React Native mobile application
- **/components** — Shared or extra JS components

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

---

## 💡 Troubleshooting

### 404 or backend errors on Render
- Double-check the **Root Directory** setting in your Render service.
  - If your backend code is in a `backend` folder at the root of your repo, set Root Directory to `backend`.
  - If the code is in the root (no `backend` folder), leave Root Directory blank.
- Make sure your GitHub repo actually has a folder named `backend` at the top level if you set Root Directory to `backend`.
- After making changes, always redeploy your service on Render.

### First request is slow
- Free Render plans may “sleep” after a period of inactivity.
- The first request after sleeping can take up to 1 minute to respond (“cold start”).
- This is normal for free hosting services and will resolve itself after the first request.

---

## 📱 Running the Mobile App

> **Note:** You cannot deploy the React Native app to Render.  
> To run the mobile app locally:

```sh
cd mobile
npm install
npm start
```
Or use [Expo Go](https://expo.dev/) for live reload and device preview.

---

## 📝 License

MIT
