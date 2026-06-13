# 📝 Redux ToDo App (Vite + React + Tailwind)

## 📌 Overview

This project is a **ToDo Application** built using **React (Vite)** and **Redux Toolkit** to manage global state.
It allows users to create, edit, filter, and persist tasks using **localStorage**.

---

## 🚀 Features

* ➕ Add new tasks
* ✅ Mark tasks as done / not done
* ✏️ Edit task description
* 🔍 Filter tasks:

  * All
  * Done
  * Not Done
* 💾 Persistent storage using **localStorage**
* ⚡ Fast development with **Vite**
* 🎨 Styled using **Tailwind CSS**

---

## 🧠 Task Structure

Each task contains:

```js
{
  id: number,
  description: string,
  isDone: boolean
}
```

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── AddTask.jsx
│   ├── ListTask.jsx
│   └── Task.jsx
│
├── redux/
│   ├── store.js
│   └── taskSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

### 1. Create Project

```bash
npm create vite@latest todo-redux-app
cd todo-redux-app
npm install
```

### 2. Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Run the App

```bash
npm run dev
```

---

## 🧩 Redux Logic

* **Store** is configured using `configureStore`
* **Slice** handles:

  * Adding tasks
  * Toggling task status
  * Editing tasks
  * Filtering tasks

---

## 💾 LocalStorage Persistence

Tasks are saved automatically in the browser:

* On app load → tasks are loaded from `localStorage`
* On update → tasks are saved back to `localStorage`

```js
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

---

## 🎨 Styling

* Built with **Tailwind CSS**
* Responsive layout
* Simple and clean UI

---

## 📌 Future Improvements

* ❌ Delete task feature
* 🌙 Dark / Light mode toggle
* 🎬 Animations with Tailwind
* 📦 Drag & drop tasks
* 🔐 Backend integration

---

## 👨‍💻 Author

Built as part of a Redux checkpoint project using modern React tools.

---

## 📄 License

This project is open-source and free to use.
