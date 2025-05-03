# 📚 Student-Teacher Management System

A full-stack **MERN** (MongoDB, Express, React, Node.js) application for managing students and teachers with full CRUD operations. Data is displayed in a tabular format with inline editing and deletion capabilities.

---

## 🚀 Features

- 🎓 Add, update, delete, and view **Students**
- 🧑‍🏫 Add, update, delete, and view **Teachers**
- 📊 Display all records in a responsive **Bootstrap table**
- 🔄 Real-time updates after each operation
- 🧩 Separated backend & frontend folders for clean architecture

---

## 📁 Project Structure

student-teacher-management/
│
├── backend/ # Express + MongoDB API
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── frontend/ # React app
│ ├── src/
│ │ ├── components/
│ │ │ ├── StudentTable.js
│ │ │ └── TeacherTable.js
│ │ ├── App.js
│ │ └── index.js
│
└── README.md



---

## ⚙️ Tech Stack

| Tech      | Description                         |
|-----------|-------------------------------------|
| MongoDB   | NoSQL Database                      |
| Express   | Backend web framework for Node.js   |
| React     | Frontend library                    |
| Node.js   | Backend runtime                     |
| Axios     | API calls from frontend             |
| Bootstrap | Styling and layout                  |

---

## 🛠️ Installation Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/student-teacher-management.git
cd student-teacher-management

### 2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install

 ``` Create MongoDB Database
Ensure MongoDB is running locally:
  mongod

``` Start the backend server:
node server.js

## It should run at: http://localhost:8000

### 3️⃣ Frontend Setup
cd ../frontend
npm install
npm start
Frontend will run on: http://localhost:3000

📦 API Endpoints

** Students **  
Method	    Route	              Description
GET	    /api/students        	Get all students
POST	  /api/students	        Add student
PUT	    /api/students/:id    	Update student
DELETE	/api/students/:id	    Delete student

** Teachers **
Method        	Route              	Description
GET	        /api/teachers	        Get all teachers
POST       	/api/teachers        	Add teacher
PUT	      /api/teachers/:id	      Update teacher
DELETE  	/api/teachers/:id	      Delete teacher


❓ Troubleshooting
1) MongoDB not running
Make sure MongoDB is installed and started using mongod.

2) Network Error in Axios
Ensure CORS is enabled in server.js and both servers are running.

✍️ Author
**Suraj Aghav**
[GitHub](https://github.com/surajaghav1/)
