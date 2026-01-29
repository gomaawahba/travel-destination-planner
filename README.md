# Travel Management System

A full-stack travel management system with **admin** and **user** dashboards, built using **Angular 16+** for the frontend and **Spring Boot 3+** for the backend. This project allows admins to manage destinations, users to search destinations, and includes authentication with JWT.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)

---

## Features
- User authentication (login/register) with JWT
- Admin dashboard:
  - Bulk add destinations
  - Delete destinations
  - View all destinations
- User dashboard:
  - Search destinations in real-time
  - View details: country, capital, region, population, currency, flag
  - Mark destinations as "Want to Visit"
- Responsive UI using Angular components
- RESTful backend APIs using Spring Boot

---

## Tech Stack
**Frontend:** Angular 16+, TypeScript, HTML, CSS  
**Backend:** Spring Boot 3+, Java 17+, Spring Data JPA, MySQL (or any preferred DB)  
**Authentication:** JWT  
**Other Tools:** Postman for testing APIs

---

## Setup Instructions

### 1. Clone the Project
```bash
git clone https://github.com/<your-username>/travel-destination-planner.git
cd travel-destination-planner
###########################################################################Backend Setup
1.nstall Java 17+ and Maven.
2.cd backend
3.Configure application.properties for your database (MySQL)
spring.application.name=TravelDestinationBacken

# Server Configuration
server.port=8080

spring.datasource.url=jdbc:mysql://localhost:3306/YOUR_DATABASE_NAME?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=USENAME
spring.datasource.password=YOURPASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver


spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.properties.hibernate.format_sql=true


jwt.secret=GOMAAGSGHSBUW763E5EVDHYEHDHYHDHYFEIEIEJCNXjcjdnjdnjdyeyye77
jwt.expiration=86400000


logging.level.root=INFO
logging.level.com.travelplanner=DEBUG

# External API

rest-countries.api.url=https://restcountries.com/v3.1
#--------------------------------------------------------------
4.Install dependencies and run Spring Boot backend:
Backend will run at: http://localhost:8080
###########################################################################Frontend Setup#################################
1.nstall Node.js 18+ and Angular CLI.

2.Navigate to frontend folder:
cd frontend
3.Install Node.js dependencies:
npm install
4.Start Angular development server:
ng serve
Open in browser: http://localhost:4200
################################################################################################################################3
## API Endpoints

### Authentication
| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| POST   | `/auth/login`          | Login user, returns JWT      |
| POST   | `/auth/register`       | Register new user            |

### Admin
| Method | Endpoint                             | Description                       |
|--------|--------------------------------------|-----------------------------------|
| POST   | `/admin/destinations/bulk`           | Add multiple destinations         |
| GET    | `/admin/destinations/all`            | Get all destinations from DB      |
| DELETE | `/admin/destinations/{id}`           | Delete a destination by ID        |
| GET    | `/admin/fetch-destinations`          | Fetch countries from external API |

### User
| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/user/search?keyword=` | Search destinations by keyword |

---

## Postman Requests

### 1. Login
```http
POST http://localhost:8080/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "123456"
}

##########################################################################Images###############################################################3
### Use Case Diagram
<img width="480" height="771" alt="imm" src="https://github.com/user-attachments/assets/a7cfa832-83bd-4bc7-b979-eb7fd1b7632d" />
### ERD
<img width="975" height="777" alt="image" src="https://github.com/user-attachments/assets/fd0ecd4e-427c-405d-a647-611e35255ecd" />
### Postman Requests
#################################################Login###############################################
<img width="1445" height="978" alt="image" src="https://github.com/user-attachments/assets/072f5d4d-ad09-4a01-b977-20c6347a4b04" />
#########################################Bulk
<img width="1440" height="1060" alt="image" src="https://github.com/user-attachments/assets/4cf79ea6-b51d-470e-a6ef-a8277f94aee3" />
###########################################pagenation
<img width="1527" height="1078" alt="image" src="https://github.com/user-attachments/assets/2473ed4a-ca83-4839-b573-e3039696fea2" />
#############################################Login UI
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/eb4bab06-165b-4f75-87f3-02c6375bcceb" />
#############################################DashBord  admin
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/e9e071e6-94c4-455d-9ec5-c444b4b08af9" />
############################################DashBord  user
<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/55839250-584c-49c7-8a42-63d21b020e5f" />
############################################Pagenation ui
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/f4a1a584-30be-40fb-88a2-255de60ac749" />















