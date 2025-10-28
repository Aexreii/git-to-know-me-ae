# 🚀 git-to-know-me-ae

A **mobile-first portfolio application** built with **React Native** and **Expo**, featuring a **sleek Neobrutalist-themed UI**, **user authentication**, and a **full admin dashboard** for managing projects.

---

## 📊 Current Status

The front-end UI is complete and fully interactive using mock data. All screens (Login, Landing, Admin, and Project Detail) are built and styled according to the Neobrutalist theme. The initial single-file structure has been successfully refactored into a clean, component-based architecture.

**The next major phase is to integrate a live backend with Supabase.**

---

## 🎯 Objective

To develop a **cross-platform portfolio application** (iOS, Android, and Web) using **React Native and Expo Go**.  
The app follows a **Neobrutalist design aesthetic** and includes **separate views** for public users and an administrator.

---

## 🚀 Features

The application includes the following key screens:

### 1. 🔐 Login Screen (Entry Point)
- Entry point for all users.
- Includes inputs for **username** and **password**.
- **Primary button:** “Log In”.
- **Secondary option:** “Continue as Guest” for public viewing.

### 2. 🏠 Landing Page (Public View)
- The **main portfolio showcase** visible to guests and logged-in users.
- Displays a list of all **Works (projects)** from the database.
- Each project is presented in a **Project Card** component:
  - Title  
  - Tapping a card leads to a **Project Detail Page**.
  - Description  
  - Technologies Used
- Conditionally shows an **Admin Page link** if the user is an admin.
- Includes a **Login** or **Logout** button depending on authentication state.
- Provides navigation to the **About the Developer** and **Chatbot** pages.

### 3. 📄 Project Detail Page
- Accessible by tapping on any **Project Card** from the Landing Page.
- Provides a detailed view of a single project, including:
  - A large project image.
  - A more in-depth description.
  - A formatted code snippet, if provided.

### 4. ℹ️ About the Developer Page
- A dedicated screen with a photo and short biography of the developer.

### 5. 🧑‍💻 Admin Page (Private View)
- Accessible **only to authenticated administrators**.
- Provides **full CRUD functionality** for managing projects:
  - **Create:** Add a new project using a form.
  - **Read:** View a list of existing projects with admin controls.
  - **Update:** Edit existing projects using an “Edit” button.
  - **Delete:** Remove projects with a confirmation modal.

### 6. 🤖 Chatbot
- A mock chatbot interface for user inquiries, ready for future AI integration.

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

### 1️⃣ ✅ Front-End Foundation (Complete)
- **Initial Template:** Built a single-file `App.jsx` with all three screens and mock state.
- **Refactoring:** Reorganized the code into a clean, component-based architecture (`/screens`, `/components`).
- **Interactivity:** Implemented navigation between all screens, including a dedicated, interactive page for each project.
- **UI Polish:** Enhanced the project detail page to display images and code snippets.

### 2️⃣ ⏳ Backend Integration (Next Up)
- **Setup Supabase:** Create a new Supabase project and define the `projects` table schema.
- **Install Libraries:** Add Supabase client libraries to the Expo project (`@supabase/supabase-js`, `react-native-url-polyfill`, `expo-secure-store`).
- **Implement Authentication:**
  - Create a Supabase client helper.
  - Replace the mock login logic in `LoginScreen.jsx` with real Supabase authentication.
  - Manage user sessions securely across the app.
- **Implement Database CRUD:**
  - Fetch projects from the database to populate the `LandingPage`.
  - Enable full Create, Update, and Delete functionality on the `AdminPage`.

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
- Add an **AI-powered Chatbot** for project inquiries.
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
