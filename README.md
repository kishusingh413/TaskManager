## Overview
The **Task Manager App** is a web-based task management system that allows users to create, update, delete, and categorize tasks efficiently. It also supports overdue task tracking. The application is built using **React (Vite), JavaScript, and CSS**, with state management handled through React hooks.

## Features
- ✅ Create, update, and delete tasks
- ⏳ Track overdue tasks
- 🔄 Restore deleted tasks // not available currently //
- 📋 Organize tasks into categories
- 🎨 Responsive UI using CSS 
- ⚡ Fast rendering and optimized performance

## Setup Instructions
### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm or yarn package manager

### Installation Steps
1. **Clone the Repository**
   ```sh
   git clone [https://github.com/kishusingh413/TaskManager.git]
   cd task-manager
   ```
2. **Install Dependencies**
   ```sh
   npm install  # or yarn install
   ```
3. **Run the Development Server**
   ```sh
   npm run dev  # or yarn dev
   ```
4. **Open in Browser**
   - The app should now be running at: `http://localhost:5173`

## Assumptions Made During Development
- Tasks have a unique `id` and contain properties like `title`, `description`, `status`, and `dueDate`.
- Overdue tasks are identified based on the `dueDate` compared to the current system date.
- Deleted tasks are stored temporarily but can be restored.
- The UI dynamically resizes based on the viewport using `vw` and `vh` units instead of fixed pixel values.
