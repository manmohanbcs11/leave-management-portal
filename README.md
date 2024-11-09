# Leave Management Portal

[Backend + Frontend] A Leave Management Portal to manage employee leave applications within an organization.

This repository contains both the backend and frontend codebase. The backend code is located under the `api` directory, while the frontend code is under the `web` directory. Both frontend and backend codebases are maintained in a single repository for easy access and management, though separating them into distinct repositories is also feasible.

---

## Table of Contents

1. [Backend Guide](#backend-guide)
   - [Description](#description)
   - [Guide to Run Locally](#guide-to-run-locally)
   - [API Details](#api-details)

---

## Backend Guide

### Description

- The backend code is entirely written in **TypeScript** and runs on **Node.js**.
- **Express.js** is used as the web framework for API routing.
- **JSON Web Token (JWT)** is used for user authentication and authorization.
- **MongoDB** is employed as the database to store information.
- **Mocha** and **Chai** are used to create unit tests.

### Guide to Run Locally

1. Set up environment variables by creating a `.env` file in the root directory, following the template provided in the `.env.example` file.
2. From the root directory, run `npm install` to install all necessary dependencies.
3. Use the following commands to run the project:
   - Start the project in production mode: `npm run start`
   - Start the project in development mode: `npm run start-dev`
4. To run single unit tests, use: `npm run test-single '/path/to/testfile.ts'`
5. To run all unit tests, use: `npm run test`

### API Details

#### Authentication API

1. **User Signup**

   - **Endpoint:** `POST /api/auth/signup`
   - **Example Local Endpoint:** `localhost:4000/api/auth/signup`
   - **Request Body:**
     ```json
     {
       "name": "Virat Kohli",
       "empId": 100,
       "email": "virat@2pirad.com",
       "password": "123456789",
       "role": "ADMIN",
       "department": "Developer",
       "jobTitle": "SSE",
       "managerIds": ["abcd", "defg"],
       "leaveBalance": "20"
     }
     ```
   - **Responses:** 
     - `200`: Success
     - `500`: Internal Server Error

2. **User Login**

   - **Endpoint:** `POST /api/auth/login`
   - **Example Local Endpoint:** `localhost:4000/api/auth/login`
   - **Request Body:**
     ```json
     {
       "email": "ajay@2pirad.com",
       "password": "123456789"
     }
     ```
   - **Responses:** 
     - `200`: Success
     - `500`: Internal Server Error

---

