# Project Management Web Application

A web-based project management system developed as a **group project** for the Database Management Systems course. The application provides functionality for managing projects, organizing tasks, and maintaining employee information.

## Features

- **Project Management:** Creating, listing, updating, and deleting projects.
- **Task Management:** Managing tasks, tracking their status and deadlines, and calculating delays.
- **Employee Management:** Adding, listing, updating, and deleting employee records.
- **User Registration and Login:** User registration and login functionality.
- **Database Management:** Storing project, task, employee, and user data in a PostgreSQL database.

## Technologies Used

- **Backend:** Java, Spring Boot
- **Data Access:** Spring Data JPA, Hibernate
- **Database:** PostgreSQL
- **Frontend:** Angular, TypeScript, HTML, SCSS
- **UI Libraries:** Angular Material, Bootstrap
- **Build Tool:** Maven

## Architecture

The application follows a layered backend structure consisting of:

- **Controller:** Handles HTTP requests and API endpoints.
- **Service:** Contains application logic and coordinates operations.
- **Repository:** Provides database access through Spring Data JPA.
- **Model:** Defines the application's data entities and their relationships.

The Angular frontend communicates with the Spring Boot backend through REST API endpoints.

## Project Type

**Academic Group Project — Database Management Systems**

The project was developed collaboratively as part of a university course, providing practical experience in backend development, relational database management, REST API development, and frontend–backend integration.
