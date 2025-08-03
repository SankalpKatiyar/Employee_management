📋 Task Management App
A sleek, responsive React.js-based Task Management System for assigning, tracking, and updating task statuses like New, Accepted, Completed, and Failed. Built for simplicity, speed, and productivity.

🚀 Features
🔐 Login authentication with localStorage

📊 Dashboard showing task status counts

🧾 Task cards with dynamic status components:

New Tasks
Accepted Tasks
Completed Tasks
Failed Tasks
🎨 Fully responsive and stylish UI using Tailwind CSS
📦 Local storage-based task management (no backend required)
🛠 Tech Stack
Frontend: React.js, Tailwind CSS
State Management: useState, useEffect
Auth: LocalStorage (basic session control)

📂 Folder Structure
css
Copy
Edit
src/
├── components/
│   ├── auth/
│   │   └── Login.jsx
│   ├── dashboard/
│   │   ├── Header.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskListNumbers.jsx
│   ├── tasks/
│   │   ├── AcceptTask.jsx
│   │   ├── NewTask.jsx
│   │   ├── CompleteTask.jsx
│   │   └── FailedTask.jsx
├── utilities/
│   └── LocalStorage.js
└── App.js
📦 Installation & Setup
bash
Copy
Edit
# 1. Clone the repo
git clone https://github.com/SankalpKatiyar/Employee_management.git

# 2. Navigate into the project folder
cd task-manager-react

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
# or
npm start
🧪 Sample Credentials
Role	Email	Password
Admin/User	admin@gmail.com	123

📌 Todos
 Add backend (Express/MongoDB)

 Task filtering and search

 Drag-and-drop task prioritization

 User roles (Admin, Employee)

 Notification system

🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

