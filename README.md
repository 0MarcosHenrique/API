# 📦 User Registration API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![Prisma](https://img.shields.io/badge/Prisma-5.x-purple)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

A robust and secure RESTful API for user registration, built with **Node.js**, **Express**, **Prisma**, and **MongoDB**. This API supports full CRUD operations and is designed with best practices for future scalability.

Developed to integrate with a React Front-End, this project represents a complete journey of learning, debugging, and overcoming challenges.

---

## ✨ Features

- ✅ **Create** a new user
- 📋 **Read** all users or filter by name/email/age (via query params)
- ✏️ **Update** user information by ID
- 🗑️ **Delete** users by ID
- 🔐 Password field structured and ready for encryption (bcrypt ready)
- 🌐 CORS enabled for seamless frontend integration
- 🍃 MongoDB integration with Prisma ORM for type-safe database access

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| Node.js    | 18.x / 24.x |
| Express    | 5.x      |
| Prisma     | 5.22.0   |
| MongoDB    | 7.x      |
| CORS       | ^2.8.6   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (Atlas account or local instance)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/0MarcosHenrique/API.git
   cd API
Install dependencies

bash
npm install
Configure environment variables
Create a .env file in the root directory and add your MongoDB connection string:

env
DATABASE_URL="mongodb+srv://<your_username>:<your_password>@<your_cluster>.mongodb.net/<your_database_name>?retryWrites=true&w=majority"
(Replace the placeholders with your actual MongoDB Atlas credentials.)

Set up the database with Prisma
This command synchronizes your Prisma schema with the MongoDB database and generates the Prisma Client.

bash
npx prisma db push
npx prisma generate
Run the server

bash
node server.js
Or for development with auto-reload:

bash
npx nodemon server.js
The API will be available at http://localhost:3000 🚀

### 📡 API Endpoints
Here's how to interact with the API. All endpoints are relative to http://localhost:3000.
---
### ➕ Create a user
Method: POST

Endpoint: /users

Body (JSON):

json
{<br>
  "email": "user@example.com",<br>
  "name": "John Doe",<br>
  "password": "your_password",<br>
  "age": "25"<br>
<br>}
---
### 📋 Get all users
Method: GET

Endpoint: /users

🔍 Get users with filters
Method: GET

Endpoint: /users?name=John&email=user@example.com&age=25

Note: You can filter by name, email, password, and age using query parameters.
---

### ✏️ Update a user
Method: PUT

Endpoint: /users/:id

Body (JSON): (Include only the fields you want to update)

json
{ <br>
  "email": "newemail@example.com",<br>
  "name": "John Updated",<br>
  "age": "26"<br>
<br>}
---

### 🗑️ Delete a user
Method: DELETE

Endpoint: /users/:id

Response (Success):

json
{
  "message": "User successfully deleted"
}
---

### 📦 Database Schema (Prisma)
The data structure is defined in prisma/schema.prisma:

prisma
model User {<br>
  id       String @id @default(auto()) @map("_id") @db.ObjectId<br>
  email    String @unique<br>
  name     String<br>
  password String?<br>
  age      String<br>
<br>}
### 💡 Note: The password field is currently optional (?) for development flexibility. For production use, it's strongly recommended to hash passwords (e.g., with bcrypt) and make the field mandatory.
---
🧪 Testing the Connection
A simple test script (teste.js) is included to verify the connection to MongoDB:

bash
node teste.js
Expected output: ✅ CONECTOU NO MONGO COM SUCESSO!
---

### 📁 Project Structure<br>
API/<br>
├── node_modules/        &nbsp;&nbsp;  #Project dependencies<br>
├── prisma/<br>
│   └── schema.prisma     &nbsp; #Database schema definition<br>
├── .env                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Environment variables (not in repo)<br>
├── .gitattributes        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;#Git settings<br>
├── .gitignore            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Files ignored by Git<br>
├── package-lock.json     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#Locked dependency versions<br>
├── package.json         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#Project metadata and dependencies<br>
├── server.js             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#Main API application file<br>
├── teste.js               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#Script to test DB connection<br>
└── README.md              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#Project documentation (you are here!)<br>
---
### 🧠 The Journey: From Bugs to a Working API
This project was more than just coding; it was a true debugging adventure. Here are some of the major battles fought and won:

⚔️ The Great Prisma Migration: Faced with version conflicts between Prisma 5 and 6, which broke the connection configuration.

🔴 The Phantom VS Code Error: Conquered a persistent red error line that was a false positive from the Prisma extension.

🍃 The MongoDB Name Conflict: Resolved a critical error where the database name case (Users vs. users) caused a synchronization failure.

🗑️ The Case of the Null Passwords: Eliminated inconsistent data (password: null) that was blocking the Prisma Studio and the API from working correctly.

🔧 Building the Core: Successfully implemented full CRUD (Create, Read, Update, Delete) operations.

🐛 The users is not defined Bug: Fixed a classic variable naming error in the GET /users route.

🔐 Securing the Future: Laid the groundwork for future security by understanding and preparing for password encryption.

This journey transformed initial "let's go" moments into a solid, functional API.
---
### 🗺️ Roadmap / Future Improvements
Implement Security: Add password hashing with bcrypt.

Add Authentication: Create login routes and issue JWT tokens.

Input Validation: Validate user input using libraries like zod or joi.

Error Handling: Implement more robust and centralized error handling.

API Documentation: Generate automatic API documentation with Swagger.

Dockerize: Create a Dockerfile and docker-compose.yml for easy setup.

Write Tests: Add unit and integration tests.

Deploy: Deploy the API to a cloud platform like Render, Railway, or AWS.
---

### 🧑‍💻 Author
Marcos Henrique (0MarcosHenrique)
Built with ❤️, JavaScript, and a whole lot of debugging (RIP Prisma errors).
---

###📄 License
This project is licensed under the ISC License.
---

### 🙏 Acknowledgements
Stack Overflow and the developer community for the endless knowledge base.

MongoDB Atlas for the free database tier.

Prisma ORM for creating a type-safe way to interact with MongoDB.

And you, for checking out this project!
