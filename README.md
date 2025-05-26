# 📚 Node and Mongoose Practice

A practice project for building a RESTful API using **Node.js**, **Express**, **MongoDB**, and **Mongoose**. This project demonstrates CRUD operations, file uploads with Multer, and proper API design.

---

## 🚀 Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB & Mongoose**: NoSQL database and ODM
- **Multer**: File uploads
- **Morgan**: Request logging middleware

---

## 🏗️ Project Structure
```
├── controllers/
│   └── bookController.js
├── db/
│   └── configDb.js
├── middleware/
│   ├── requestLogger.js
│   └── upload.js
├── models/
│   └── booksModel.js
├── routes/
│   └── booksRoute.js
├── uploads/
│   └── (uploaded images)
├── .gitignore
├── package.json
└── index.js
```

---

## 🔑 Features
- Create, Read, Update, Delete (CRUD) for books  
- Upload cover images with Multer  
- MongoDB connection with error handling  
- Request logging with Morgan  
- Clean code organization and error responses

---

## 📦 Installation & Setup

**1️⃣ Clone the repository:**
```bash
git clone https://github.com/mo0hamed-shoaib/Node-and-Mongoose-Practice.git
cd Node-and-Mongoose-Practice
```

**2️⃣ Install dependencies:**
```bash
npm install
```

**3️⃣ Create the uploads folder for storing images:**
```bash
mkdir uploads
```

**4️⃣ Set up environment variables (if using a .env):**
```ini
MONGO_URI=<your-mongodb-uri>
```

**5️⃣ Run the app:**
```bash
npm start
```

---

## 📚 API Endpoints

### 📖 Get All Books
`GET /books`

Response: List of books

### 🔍 Get Book by ID
`GET /books/:id`

### ➕ Create a Book
`POST /books`

Body: `title`, `author`

Upload: `coverImage` (file)

### ✏️ Update a Book
`PUT /books/:id`

Body: `title`, `author`

Upload: `coverImage` (file)

### ❌ Delete a Book
`DELETE /books/:id`

---

## 🌟 Example Request (Create Book)
```bash
POST /books
Content-Type: multipart/form-data

Body:
- title: "Advanced JS"
- author: "Jane Doe"
- coverImage: (attach image file)
```

---

## 🛠️ How the Project Works

### 1. Server Setup (`index.js`)
- Express server is created and middleware is applied:
  - **Morgan** logs all incoming HTTP requests for easier debugging.
  - **RequestLogger** is a custom middleware that logs requests.
  - `express.json()` parses JSON request bodies.
- The `/books` API routes are linked to the `booksRoute`.
- Database connection is established with MongoDB using `connectDB` from `db/configDb.js`.
- The server listens on port 3000 once the DB connection is successful.
- A fallback 404 route handler responds to unmatched requests.

### 2. Database Connection (`db/configDb.js`)
- Uses **Mongoose** to connect to a MongoDB instance at `mongodb://localhost:27017/express-demo`.
- If the connection fails, the server exits with an error.
- Successful connection allows the server to start accepting requests.

### 3. Defining the Data Model (`models/booksModel.js`)
- Defines a **Mongoose schema** for books with fields:
  - `title` (required string)
  - `author` (required string)
  - `coverImage` (optional string — filename of uploaded image)
- Mongoose model `Book` is created from the schema, mapping to the `books` collection in MongoDB.

### 4. Handling File Uploads (`middleware/upload.js`)
- Uses **Multer** middleware configured to:
  - Save uploaded images to the `uploads/` directory.
  - Generate unique filenames to avoid conflicts.
- This middleware is applied to routes that accept image uploads (`POST /books` and `PUT /books/:id`).

### 5. API Routes (`routes/booksRoute.js`)
- Express router defines RESTful endpoints for `/books`:
  - `GET /books`: Fetch all books.
  - `POST /books`: Create a new book with optional image upload.
  - `GET /books/:id`: Fetch a single book by ID.
  - `PUT /books/:id`: Update a book by ID, optionally replacing the cover image.
  - `DELETE /books/:id`: Delete a book by ID.
- Routes use controller functions and apply the upload middleware where necessary.

### 6. Controller Logic (`controllers/bookController.js`)
- Contains asynchronous functions to interact with MongoDB using Mongoose:
  - `getAllBooks`: Queries all books from the database and returns JSON.
  - `getBookById`: Finds a book by its MongoDB `_id` and returns it or a 404 error if not found.
  - `createBook`: Creates a new book document from the request body and file upload, saves it, and returns it.
  - `updateBook`: Updates book fields and cover image if provided; returns the updated document or 404 if not found.
  - `deleteBook`: Deletes a book document by ID and responds with success or 404.
- Each controller handles errors with proper HTTP status codes and messages.

---

## 📸 API Screenshots

### 📖 Getting All Books
![GET All Books](screenshots/GET%20All%20Books.png)

### 🔍 Getting a Single Book
**Success Response:**
![GET Book Success](screenshots/GET%20A%20Book%20by%20ID%20Success.png)

**Not Found Response:**
![GET Book Fail](screenshots/GET%20A%20Book%20by%20ID%20Fail.png)

### ➕ Creating a New Book
**Form Setup Example:**
![POST Form Example](screenshots/POST%20Form%20Example.png)

**Without Cover Image:**
![POST Without Cover](screenshots/POST%20Form%20Without%20Cover%20Image.png)
![POST Response No Cover](screenshots/POST%20Form%20Response%20No%20Cover%20Image.png)

**With Cover Image:**
![POST Response With Cover](screenshots/POST%20Form%20Response%20With%20Cover%20Image.png)

### ✏️ Updating a Book
**Before Update:**
![PUT Before](screenshots/PUT%20Before%20Updating%20A%20Book%20by%20ID.png)

**After Update:**
![PUT After](screenshots/PUT%20After%20Updating%20A%20Book%20by%20ID.png)

### ❌ Deleting a Book
**Success Response:**
![DELETE Success](screenshots/DELETE%20A%20Book%20by%20ID%20Success.png)

**Not Found Response:**
![DELETE Fail](screenshots/DELETE%20A%20Book%20by%20ID%20Fail.png)

### 🖥️ Terminal Output
![Terminal Output](screenshots/Terminal%20Output.png)

---

## 📝 License
This project is for educational purposes. Feel free to fork and contribute! 🚀

## 🤝 Contributions
Built by Mohamed Gamal as a practice project for mastering Node.js and MongoDB.
