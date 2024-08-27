# Chat-App

## Deployment

The project is live and can be accessed at the following link:

[Convo Sphere - Live Demo](https://convo-sphere.onrender.com)

## Overview

Chat-App is a real-time messaging application built with modern web technologies. It features user authentication, real-time communication, and online status indicators. The app is built with the MERN stack (MongoDB, Express, React, Node.js), and leverages Socket.io for real-time functionalities. TailwindCSS and Daisy UI are used for styling, ensuring a responsive and visually appealing user interface.

## Features

- **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI
- **Authentication & Authorization**: Secure authentication using JWT (JSON Web Token) to protect user data and ensure secure access.
- **Real-time Messaging**: Seamless real-time communication powered by Socket.io.
- **Online User Status**: Display online/offline status of users using Socket.io and React Context.
- **Global State Management**: Efficient state management across the application with Zustand.
- **Error Handling**: Comprehensive error handling on both the server and client sides to ensure a smooth user experience.
- **Deployment**: Deploy the application for free with a professional setup.
- **Additional Features**: Further enhancements and optimizations are continuously integrated.

## Setup Instructions

### Prerequisites

Before you start, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (locally or a MongoDB Atlas account)

### Environment Variables

Create a `.env` file in the root of your project and configure the following variables:

```plaintext
PORT=your_port_number
MONGO_DB_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development_or_production
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vivekraj2704/Chat-App.git
   cd your-repository
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment:**

   Configure your `.env` file as described above.

4. **Build the application:**

   ```bash
   npm run build
   ```

5. **Start the application:**

   ```bash
   npm start
   ```

6. **Access the application:**

   Open your browser and navigate to `http://localhost:<your_port_number>`.

## Tech Stack

- **MongoDB**: A NoSQL database for storing user data, messages, and more.
- **Express**: A lightweight web framework for building the server-side API.
- **React**: A JavaScript library for building user interfaces, handling the client-side logic.
- **Node.js**: A JavaScript runtime for executing server-side code.
- **Socket.io**: A library for real-time web applications, enabling real-time messaging and online status features.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Daisy UI**: A component library built on TailwindCSS for quick and easy UI creation.

## Global State Management

Zustand is used for global state management, ensuring efficient data handling across the application without the overhead of more complex solutions like Redux.

## Error Handling

Error handling is implemented on both the server and client sides to provide a robust user experience. Server-side errors are caught and returned with appropriate HTTP status codes, while client-side errors are gracefully handled with user-friendly messages.

## Deployment

To deploy the application, follow these steps:

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Start the app:**

   ```bash
   npm start
   ```

3. **Deploy to your preferred hosting service.** Free options include platforms like Heroku, Vercel, and Netlify.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue to report bugs or suggest features.

