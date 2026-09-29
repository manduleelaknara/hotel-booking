# 🏨 Hotel Booking System

A full-stack **Hotel Booking System** developed using **React, Node.js, Express, and MongoDB**. The system provides a modern web interface for users to explore hotels, manage bookings, authenticate securely, and make online payments.

The application follows a client-server architecture with a React-based frontend and a Node.js/Express backend.

---

## 📌 Project Overview

The **Hotel Booking System** is designed to simplify the process of searching for hotels and making hotel reservations through an online platform.

The system provides features such as:

* 🔐 Secure user authentication
* 🏨 Hotel browsing and booking
* 📅 Reservation management
* 💳 Online payment processing
* 🖼️ Image upload and cloud storage
* 📧 Email notifications
* 👤 User account management
* 🔄 REST API communication between frontend and backend
* 🔔 User-friendly notifications

---

## ✨ Features

### 👤 User Features

* User registration and login
* Secure authentication using Clerk
* Browse available hotels
* View hotel information
* Make hotel reservations
* Manage bookings
* Online payment
* Receive booking-related notifications

### 🏨 Hotel Management

* Add and manage hotel information
* Upload hotel images
* Store images using Cloudinary
* Manage hotel and booking data

### 💳 Payment

* Secure online payment integration using Stripe
* Payment processing for hotel bookings
* Booking status management

### 📧 Email Services

* Email functionality using Nodemailer
* Supports sending booking-related emails and notifications

---

## 🛠️ Technologies Used

### Frontend

| Technology      | Purpose                             |
| --------------- | ----------------------------------- |
| React           | Building the user interface         |
| Vite            | Frontend development and build tool |
| Tailwind CSS    | Styling and responsive UI           |
| React Router    | Client-side navigation              |
| Axios           | Communication with backend APIs     |
| Clerk           | User authentication                 |
| React Hot Toast | User notifications                  |
| JavaScript      | Frontend programming                |

### Backend

| Technology    | Purpose                         |
| ------------- | ------------------------------- |
| Node.js       | Backend runtime environment     |
| Express.js    | Backend web framework           |
| Mongoose      | MongoDB database interaction    |
| MongoDB       | Database                        |
| Clerk Express | Backend authentication          |
| JWT           | Token-based authentication      |
| CORS          | Cross-origin communication      |
| Dotenv        | Environment variable management |

### Third-Party Services

| Service    | Purpose                      |
| ---------- | ---------------------------- |
| Cloudinary | Image storage and management |
| Stripe     | Online payment processing    |
| Nodemailer | Email services               |
| Svix       | Webhook/event handling       |

### Development Tools

| Tool    | Purpose                          |
| ------- | -------------------------------- |
| Vite    | Frontend development             |
| Nodemon | Automatic backend server restart |
| ESLint  | Code quality and linting         |

---

## 🏗️ System Architecture

The project follows a **Full-Stack Client-Server Architecture**.

```text
                   ┌─────────────────────┐
                   │       User          │
                   └──────────┬──────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │   React Frontend   │
                   │      + Vite        │
                   │   + Tailwind CSS   │
                   └──────────┬──────────┘
                              │
                         REST APIs
                              │
                              ▼
                   ┌─────────────────────┐
                   │ Node.js + Express   │
                   │      Backend        │
                   └──────────┬──────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
          ┌──────────┐  ┌──────────┐  ┌──────────┐
          │ MongoDB  │  │Cloudinary│  │  Stripe  │
          │ Database │  │  Images   │  │ Payments │
          └──────────┘  └──────────┘  └──────────┘
```

---

## 🔐 Authentication

The system uses **Clerk** for user authentication.

Clerk is integrated with:

* React frontend using `@clerk/clerk-react`
* Express backend using `@clerk/express`

This provides secure user authentication and user session management.

---

## 💳 Payment Integration

The application uses **Stripe** to handle online payments.

The payment process allows users to:

1. Select a hotel/booking.
2. Proceed to payment.
3. Make an online payment through Stripe.
4. Process the payment securely.
5. Update the booking/payment status.

---

## 🖼️ Image Management

Hotel images are managed using **Cloudinary**.

The backend uses:

* `cloudinary`
* `multer`
* `multer-storage-cloudinary`
* `streamifier`

This allows uploaded images to be stored and managed in cloud storage instead of storing large image files directly in the database.

---

## 🗄️ Database

The system uses **MongoDB** as the main database.

**Mongoose** is used in the backend to:

* Connect to MongoDB
* Define database schemas
* Create and manage documents
* Perform database operations

---

## 📡 API Communication

The React frontend communicates with the Express backend using **REST APIs**.

Axios is used on the frontend to send HTTP requests such as:

```text
GET
POST
PUT
DELETE
```

The backend processes these requests and communicates with MongoDB and external services when required.

---

## 📧 Email Notifications

The backend uses **Nodemailer** to provide email functionality.

This can be used for:

* Booking confirmations
* Booking-related notifications
* User communication

---

## 📁 Project Structure

The project is divided into two main parts:

```text
Hotel-Booking-System/
│
├── client/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│
├── server/
│   ├── package.json
│   ├── server.js
│   └── ...
│
└── README.md
```

> The exact internal files and folders may vary depending on the final project implementation.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

---

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

SMTP_USER=your_email
SMTP_PASSWORD=your_email_password
```

Create the required frontend environment variables according to the Clerk/Vite configuration used in the project.

> Never commit secret keys, passwords, API keys, or `.env` files to GitHub.

---

## ▶️ Running the Application

### Start Frontend

Inside the `client` folder:

```bash
npm run dev
```

The Vite development server will start the frontend application.

---

### Start Backend

Inside the `server` folder:

```bash
npm run server
```

The backend runs using **Nodemon**, which automatically restarts the server when changes are detected.

For production-style execution:

```bash
npm start
```

---

## 📜 Available Scripts

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Checks the project for linting issues.

```bash
npm run preview
```

Previews the production build locally.

### Backend

```bash
npm run server
```

Starts the backend using Nodemon.

```bash
npm start
```

Starts the backend using Node.js.

---

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Authentication / Hotel Selection
  ↓
Axios API Request
  ↓
Express Backend
  ↓
Business Logic
  ↓
MongoDB / Cloudinary / Stripe
  ↓
Response
  ↓
React Frontend
  ↓
User
```

---

## 🔒 Security

The application includes several security-related technologies:

* Clerk authentication
* JWT support
* Environment variables for sensitive credentials
* CORS configuration
* Secure payment processing through Stripe
* Server-side API processing

---

## 📱 Responsive Design

The frontend is developed using **Tailwind CSS**, allowing the application interface to be responsive across different screen sizes such as:

* 💻 Desktop
* 📱 Mobile
* 💻 Laptop
* 📟 Tablet

---

## 🚀 Future Improvements

Possible future improvements include:

* Advanced hotel search and filtering
* Hotel reviews and ratings
* Google Maps integration
* Admin dashboard improvements
* Booking cancellation and refund management
* Advanced analytics
* Hotel availability calendar
* Promotional offers and discount codes
* Improved email notification system

---

## 👩‍💻 Development

This project was developed as a **full-stack web application** using modern JavaScript technologies and third-party services.

### Main Stack

```text
Frontend  → React + Vite + Tailwind CSS
Backend   → Node.js + Express.js
Database  → MongoDB + Mongoose
Auth      → Clerk
Payments  → Stripe
Images    → Cloudinary
Email     → Nodemailer
API       → REST + Axios
```

---

## ⭐ Conclusion

The Hotel Booking System demonstrates the development of a modern full-stack web application by combining a React frontend with a Node.js/Express backend, MongoDB database, authentication, cloud image storage, online payments, and email services.

The system provides a complete foundation for managing online hotel reservations through a user-friendly web application.
