# PCG-SPA - Land Management Single-Page Application

This application allows users to sign up, manage owners and land holdings, and upload related files.

## Features
- **User Authentication**: Users can sign up and authenticate using JWT tokens.
- **CRUD Operations**: Users can create, read, update, and delete owners and land holdings.
- **File Uploads**: Users can upload files related to owners and land holdings.
- **Responsive Frontend**: Built with Vue.js.

## Setup
Install Docker/Docker Desktop 

## Build and run applicaiton 

  docker-compose up --build

This will build and start three services:
  MongoDB: The database for storing owner and landholding data.
  Backend: The Node.js server handling API requests.
  Frontend: The Vue.js application serving the frontend.

**1.Using the Application**
  Sign Up: Create an account using the signup form.
  Manage Owners and Landholdings: Add, edit, and delete owners and their associated landholdings.
  Upload Files: Upload files related to an owner or landholding, which can be viewed by any authenticated user.

**2. API Endpoints**
  
  **Owners:**
    GET /owners: Retrieve all owners.
    POST /owners: Add a new owner.
    PUT /owners/:id: Update an existing owner.
    DELETE /owners/:id: Delete an owner.
    
  **Landholdings:**
    GET /landholdings: Retrieve all landholdings.
    POST /landholdings: Add a new landholding.
    PUT /landholdings/:id: Update an existing landholding.
    DELETE /landholdings/:id: Delete a landholding.
  
  **File Upload:**
    POST /upload: Upload a file related to an owner or landholding.



**3. Authentication**

  JWT: The application uses JWT (JSON Web Token) for user authentication. Upon signup or login, a token is generated and must be included in the Authorization header of subsequent requests.


**4. Troubleshooting**

  Port Conflicts: Ensure that ports 8080 and 5001 are not being used by other services.
  MongoDB Connection: If MongoDB fails to connect, ensure that the MONGO_URI is correctly set in the .env file.
  Module Not Found: If you encounter issues with missing modules, ensure that npm install has been run successfully in both the backend/ and frontend/ directories.
