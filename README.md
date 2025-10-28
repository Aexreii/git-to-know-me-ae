# 🚀 git-to-know-me-ae

A **mobile-first portfolio application** built with **React Native** and **Expo**, featuring a **sleek Neobrutalist-themed UI**, **user authentication**, and a **full admin dashboard** for managing projects.

---

## 🎯 Objective

To develop a **cross-platform portfolio application** (iOS, Android, and Web) using **React Native and Expo Go**.  
The app follows a **Neobrutalist design aesthetic** and includes **separate views** for public users and an administrator.

---

## 🚀 Features

The application is structured around **three main screens**:

### 1. 🔐 Login Screen
- Entry point for all users.
- Includes inputs for **username** and **password**.
- **Primary button:** “Log In”.
- **Secondary option:** “Continue as Guest” for public viewing.

### 2. 🏠 Landing Page (Public View)
- The **main portfolio showcase** visible to guests and logged-in users.
- Displays a list of all **Works (projects)** from the database.
- Each project is presented in a **Project Card** component:
  - Title  
  - Description  
  - Technologies Used
- Conditionally shows an **Admin Page link** if the user is an admin.
- Includes a **Login** or **Logout** button depending on authentication state.

### 3. 🧑‍💻 Admin Page (Private View)
- Accessible **only to authenticated administrators**.
- Provides **full CRUD functionality** for managing projects:
  - **Create:** Add a new project using a form.
  - **Read:** View a list of existing projects with admin controls.
  - **Update:** Edit existing projects using an “Edit” button.
  - **Delete:** Remove projects with a confirmation modal.

---

## 🧱 Technical Stack & Architecture

| Layer | Technology |
|-------|-------------|
| **Framework** | React Native (Expo) |
| **Version Control** | GitHub |
| **Authentication** | Supabase Auth |
| **Database** | Supabase (PostgreSQL) |
| **Styling** | Neobrutalist UI with React Native StyleSheet |

### 🗝️ Authentication
- Powered by **Supabase Auth**.
- Handles logic to differentiate between:
  - Guests
  - Standard Users
  - Administrators

### 💾 Database (CRUD)
- Uses **Supabase PostgreSQL** for project storage.
- All CRUD operations comply with **row-level security (RLS)** policies.
- Projects are stored in a **public `projects` table**.

### 🎨 Styling & Design
- **Neobrutalism principles**:
  - High-contrast, vibrant color palette  
  - Bold, chunky typography (Archivo Black / Typewriter style)  
  - Offset drop-shadows for buttons, cards, and UI elements  

---

## 🗺️ Project Roadmap

### 1️⃣ Initial Template
- Build a **single-file `App.jsx`** containing all three screens.  
- Implement **mock authentication** and **state-based navigation** to simulate flow in **Expo Go**.

### 2️⃣ Backend Integration
- Refactor the template to integrate **live Supabase Auth** and **Database CRUD** operations.  
- Enable real-time project management for authenticated admins.

### 3️⃣ Deployment
- Deploy the final build to:
  - **Web**
  - **iOS**
  - **Android**

---

## 🧩 Future Enhancements
- Implement **image uploads** for project thumbnails.  
- Add **theme toggle** (light/dark Neobrutalism).  
- Integrate **in-app chat or feedback form** for users.  
- Enable **offline caching** for faster access.

---

## 🖌️ Design Language
- **Aesthetic:** Neobrutalism  
- **Font Styles:** Archivo Black / Typewriter  
- **UI Feel:** Retro, bold, minimalistic, and tactile  

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Aexreii/mobile-portfolio-app.git

# Navigate into the project
cd mobile-portfolio-app

# Install dependencies
npm install

# Start the Expo development server
npx expo start
