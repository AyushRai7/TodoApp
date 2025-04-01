# Advanced Todo App

## Overview
This is an advanced Todo App built using React, Redux, and Material UI. It features with smooth animations and an intuitive task management system. Tasks are categorized by priority and displayed in a **stylish card-based layout**.

## Features
- **Add Tasks:** Users can add tasks with a priority selection (High, Medium, Low).
- **Delete Tasks:** Remove tasks easily with a delete button.
- **Task Sorting:** Tasks are automatically sorted by priority.
- **Smooth Animations:** Uses Framer Motion for elegant UI transitions.
- **Responsive Design:** Fully optimized for mobile and desktop.
- **Persistent State Management:** Uses Redux for centralized task management.

## Demo
![Homepage Screenshot](assets/homepage1.png)
![Task List Screenshot](assets/homepage2.png)

## Installation and Setup
### Prerequisites
- Node.js installed (v16+ recommended)
- Git installed

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at **http://localhost:5173**.

4. Build the project for production:
   ```sh
   npm run build
   ```

## Folder Structure
```
/todo-app
│── /src
│   ├── /components
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── TodoApp.jsx
│   ├── /redux
│   │   ├── reducer.js
│   │   ├── action.js
│   ├── App.jsx
│   ├── main.jsx
│── /public
│── /assets
│── package.json
│── README.md
```

## Technologies Used
- **React.js** – Frontend framework
- **Redux** – State management
- **Material UI** – UI components
- **Framer Motion** – Animations
- **Vite** – Fast build tool

## Contribution
Feel free to fork the repo, raise issues, or contribute by submitting a pull request.

## License
This project is licensed under the MIT License.

