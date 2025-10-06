🧑‍💼 Employee Data Management System

A Full Stack Employee Management Application built using React (Vite) on the frontend, Node.js + Express on the backend, and MongoDB for data storage.

This project allows users to Add, View, Update, Delete, and Search employee records — with real-time UI updates and toast notifications.

🚀 Features
🌐 Frontend

⚡ Built with React + Vite for fast performance.

🧭 Three main pages:

Home Page → Displays employee data with a search feature.

Add Employee → Add new employee details.

Update Employee → Edit existing employee information.

🧱 One reusable Navbar Component for navigation between pages.

🛣️ Routing handled using react-router-dom (BrowserRouter, Route, Routes).

🔗 Axios used for all API communications.

🔔 React Toastify for success/error notifications (Add, Update, Delete).

🔍 Search functionality to filter employees by ID, Name, or Email.

🎨 Styled using Tailwind CSS for a clean, responsive design.

⚙️ React Hooks used for state and lifecycle management:

useState → Manage component state.

useEffect → Fetch and update data dynamically.

🖥️ Backend

🧩 Built using Node.js and Express.js.

📡 API Endpoints for all CRUD operations:

GET → Fetch all employees.

POST → Add a new employee.

PUT → Update employee details.

DELETE → Remove employee records.

🗃️ Database: MongoDB (using Mongoose ODM).

🌍 CORS enabled for secure frontend-backend communication.

🔐 dotenv used for environment variables.

✅ express-validator for input validation.

🌀 Nodemon for automatic server restarts during development.

⚙️ Frontend Dependencies
"@tailwindcss/vite": "^4.1.14",
"axios": "^1.12.2",
"dom-router": "^5.1.3",
"lucide-react": "^0.544.0",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-router-dom": "^7.9.3",
"react-toastify": "^11.0.5",
"tailwindcss": "^4.1.14"

⚙️ Backend Dependencies
"cors": "^2.8.5",
"dotenv": "^17.2.3",
"express": "^5.1.0",
"express-validator": "^7.2.1",
"mongoose": "^8.19.0",
"nodemon": "^3.1.10"

🧱 Tech Stack
Layer	Technology
Frontend	React (Vite), Tailwind CSS, Axios, React Toastify
Backend	Node.js, Express.js
Database	MongoDB
Routing	React Router DOM
Validation	express-validator
🛠️ Installation & Setup
🔧 Backend Setup
# Navigate to backend folder
cd Server

# Install dependencies
npm install

# Create a .env file and add:
MONGO_URI=your_mongodb_connection_string

# Run the backend server
nodemon server.js
# or (for development)
node server.js

💻 Frontend Setup
# Navigate to frontend folder
cd client

# Install dependencies
npm install

# Run the frontend
npm run dev


🌐 Now open your browser and go to:

http://localhost:5173

📸 Application Highlights

✨ Features at a Glance:

🏠 View all employees with search & filtering.

➕ Add new employees with validation.

✏️ Update employee details.

❌ Delete employees with confirmation.

🔔 Toast notifications for all CRUD actions.

🔍 Real-time search by ID, name, or email.

🎨 Clean UI powered by Tailwind CSS.

🧑‍💻 Author
👤 Pandurang Teke





