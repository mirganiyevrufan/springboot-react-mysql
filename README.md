# Full Stack User Management System

This is a full-stack user management application. The project is divided into two parts:

- `fullstack-front`: A front-end application built using React.js and Bootstrap 5.
- `fullstack-backend`: A back-end REST API built with Spring Boot, Spring Data JPA, and MySQL.

## FullStack-Front

The front-end application is designed with a focus on User Experience. It provides an easy-to-use interface for managing users. Bootstrap 5 is used for the styling, providing a modern, responsive design. The application includes functionality to add, update, view and and delete users.

### Installation

1. Install [Node.js and npm](https://nodejs.org/en/download/) (npm is included with Node.js) on your machine.
2. Navigate to the `fullstack-front` directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the application.
5. Open your browser to `http://localhost:3000` to view the application.

## FullStack-BackEnd

The back-end REST API is implemented using Spring Boot and Spring Data JPA with a MySQL database. It provides CRUD operations for a `User` model. The application includes exception handling, a repository for data access, and a controller for handling HTTP requests.

### Installation

1. Ensure you have a MySQL database running. You can update your database name, MySQL username, and password in the `application.properties` file in the `src/main/resources` directory.
2. Import the `fullstack-backend` directory as a Maven project in your IDE.
3. Run the application from your IDE.
4. The API will be available at `http://localhost:8080`.

## Usage

The front-end application communicates with the back-end API to create, read, update, and delete users.

![UserManagementSystemHome](https://github.com/rufanmirganiyev/springboot-react-mysql/assets/109354732/f070308e-b834-43eb-8593-d1016a1e22ba)

![RegisterUser](https://github.com/rufanmirganiyev/springboot-react-mysql/assets/109354732/0f4905bc-f65c-47aa-8d9a-14eaed201a5f)

![EditUser](https://github.com/rufanmirganiyev/springboot-react-mysql/assets/109354732/076f74b9-7152-4393-851d-2eba62f67f95)
