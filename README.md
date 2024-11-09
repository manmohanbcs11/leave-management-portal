# Leave Management Portal

A comprehensive portal for managing employee leave applications within an organization, including both backend and frontend components.

This repository contains:
- **Backend** (in the `api` directory) and **Frontend** (in the `web` directory) codebases, organized within a single repository for centralized management. 
- Alternatively, backend and frontend can be separated into individual repositories if needed.

---

## Table of Contents

1. [Backend Guide](#backend-guide)
   - [Description](#description)
   - [Guide to Run Locally](#guide-to-run-locally)
   - [API Documentation](#api-documentation)

---

## Backend Guide

### Description

- Backend is written in **TypeScript** and powered by **Node.js**.
- **Express.js** is used for API routing.
- **JSON Web Token (JWT)** manages user authentication and authorization.
- **MongoDB** is the database for data persistence.
- **Mocha** and **Chai** are used for unit testing.

### Guide to Run Locally

1. Configure environment variables:
   - Create a `.env` file in the root directory based on `.env.example`.
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project:
   - Production mode: `npm run start`
   - Development mode: `npm run start-dev`

4. Run tests:
   - Single test file: `npm run test-single '/path/to/testfile.ts'`
   - All tests: `npm run test`

### API Documentation

#### Authentication APIs

1. **User Signup**
   - **Endpoint:** `POST /api/auth/signup`
   - **Example Endpoint:** `localhost:3000/api/auth/signup`
   - **Request Body:**
     ```json
     {
       "name": "Virat Kohli",
       "empId": 100,
       "email": "virat@xxx.com",
       "password": "123456789",
       "role": "ADMIN",
       "department": "Developer",
       "jobTitle": "SSE",
       "managerIds": ["abcd", "defg"],
       "leaveBalance": "20"
     }
     ```
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

2. **User Login**
   - **Endpoint:** `POST /api/auth/login`
   - **Request Body:**
     ```json
     {
       "email": "ajay@xxx.com",
       "password": "123456789"
     }
     ```
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

3. **User Logout**
   - **Endpoint:** `DELETE /api/auth/logout`
   - **Responses:** `200`: Success, `500`: Internal Server Error

#### Employee Management APIs

1. **Create Employee**
   - **Endpoint:** `POST /api/user/createuser`
   - **Request Body:** Similar to the User Signup request body
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

2. **Get Employee Details**
   - **Endpoint:** `GET /api/user/getuser`
   - **Responses:** `200`: Success, `500`: Internal Server Error

3. **Get Employee's Manager Details**
   - **Endpoint:** `GET /api/user/getmanagers`
   - **Responses:** `200`: Success, `500`: Internal Server Error

4. **Update Employee Data**
   - **Endpoint:** `PUT /api/user/updateuser`
   - **Request Body:** 
     ```json
     {
       "name": "Suresh Raina",
       "empId": 100,
       "email": "suresh@xxx.com",
       "role": "ADMIN",
       "department": "Developer",
       "managerIds": ["abcd", "defg"],
       "leaveBalance": "20"
     }
     ```
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

5. **Delete Employee**
   - **Endpoint:** `DELETE /api/user/deleteuser/:emailid`
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

#### Leave Management APIs

1. **Fetch Employee Leave**
   - **Endpoint:** `GET /api/leave/fetchleaves`
   - **Responses:** `200`: Success, `500`: Internal Server Error

2. **Get Leave by ID**
   - **Endpoint:** `GET /api/leave/getleave/:id`
   - **Responses:** `200`: Success, `500`: Internal Server Error

3. **Create Leave Request**
   - **Endpoint:** `POST /api/leave/createleave`
   - **Request Body:**
     ```json
     {
       "leaveType": "Sick",
       "startDate": 8882999,
       "endDate": 10000000,
       "managerIds": ["662786ea966c8200a148c0f0"],
       "status": "Pending",
       "comments": "Any comment"
     }
     ```
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

4. **Update Leave Request**
   - **Endpoint:** `PUT /api/leave/updateleave`
   - **Request Body:** Same as Create Leave Request
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

5. **Delete Leave Request**
   - **Endpoint:** `DELETE /api/user/deleteleave/:id`
   - **Responses:** `200`: Success, `500`: Internal Server Error

6. **Create Leave Calendar for a Year**
   - **Endpoint:** `POST /api/leave/createleavecalendar`
   - **Request Body:**
     ```json
     {
       "year": 2023,
       "country": "India",
       "csvFilePath": "/path/to/resources/Calendar2023.csv"
     }
     ```
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

7. **Fetch Leave Calendar for a Year**
   - **Endpoint:** `POST /api/leave/fetchleavecalendar`
   - **Request Body:**
     ```json
     {
       "year": 2024,
       "country": "India"
     }
     ```
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

8. **Delete Leave Calendar**
   - **Endpoint:** `DELETE /api/leave/deleteleavecalendar`
   - **Responses:** `200`: Success, `400`: Bad Request, `500`: Internal Server Error

--- 

---

## Frontend Guide

The frontend development is in progress. Currently, only the navigation bar and some template cards styled with Bootstrap have been implemented. Full functionality, including API calls, will be operational once the environment is properly configured during deployment.

### Description

- The frontend is written in **TypeScript** using the **React.js** library, with **Node.js** powering the development and production environments.

### Guide to Run Locally

1. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory, following the format in the `.env.example` file.

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Project:**
   - **Development Mode:** To run in development mode, use:
     ```bash
     npm run start
     ```
   - **Production Mode:** To build and start the project in production, use:
     ```bash
     npm run build && npm run start
     ```

--- 
