

A full-featured Project Management Web App built with the MERN stack — allowing users to manage projects, assign tasks, and track deadlines efficiently.

## 🚀 Features

- User Signup/Login (JWT Auth)
- Create, update, delete projects
- Track project deadlines & status
- View all projects by logged-in user
- Responsive UI with Bootstrap

## 🛠️ Tech Stack

- **Frontend**: React, Bootstrap, Axios  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Auth**: JWT, Bcrypt  
- **API**: RESTful

## 🗂️ Folder Structure

```

/backend     → Express server, DB, API routes
/frontend    → React UI

````

## 📦 Installation


cd backend
npm install
npm run dev
````

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## 📡 API Overview

| Method | Route                | Function           |
| ------ | -------------------- | ------------------ |
| POST   | /api/auth/signup     | Register user      |
| POST   | /api/auth/login      | Login user         |
| GET    | /api/projects/all    | Get all projects   |
| POST   | /api/projects/create | Create new project |



