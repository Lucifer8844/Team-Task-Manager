# 🗂️ Team Task Manager

A full-stack **Task Management Web Application** with role-based access control, allowing Admins to create and assign tasks while Members track and update their progress.

🔗 **Live Demo**: [team-task-manager-production-e0ad.up.railway.app](https://team-task-manager-production-e0ad.up.railway.app/login)

---

## 🔐 Demo Login Credentials

| Role   | Username | Password |
|--------|----------|----------|
| Admin  | admin    | 123      |
| Member | *(contact for member credentials)* | — |

---

## ✨ Features

- 🔑 **Role-Based Access Control** — Separate Admin and Member views/permissions
- 📋 **Task Assignment** — Admin can create tasks and assign them to team members
- ✅ **Task Status Tracking** — Members can update task status (Pending / In Progress / Done)
- 👥 **Member Management** — Admin can manage team members
- 🔒 **Secure Authentication** — Session-based login system
- 📱 **Responsive UI** — Works across desktop and mobile browsers

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Java | Core language |
| Spring Boot | REST API framework |
| Spring Security | Authentication & Authorization |
| Spring Data JPA | ORM & Database access |
| PostgreSQL | Persistent data storage |
| Maven | Dependency management |

### Frontend
| Technology | Purpose |
|---|---|
| TypeScript | Type-safe scripting |
| HTML5 | Markup |
| CSS3 | Styling & Layouts |

### Deployment
| Technology | Purpose |
|---|---|
| Railway | Cloud deployment (frontend + backend) |
| Git | Version control |

---

## 🏗️ Architecture

```
┌─────────────────────┐        ┌──────────────────────┐
│   Frontend (TS)     │──────▶ │  Spring Boot REST API │
│   HTML + CSS        │ HTTP   │  (Java)               │
└─────────────────────┘        └──────────┬───────────┘
                                           │
                                           ▼
                                ┌──────────────────────┐
                                │   PostgreSQL DB       │
                                │   (Tasks, Users)      │
                                └──────────────────────┘
```

---

## 🚀 How to Run Locally

### Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL running locally

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/Lucifer8844/Team-Task-Manager.git
cd Team-Task-Manager/backend

# Configure your DB credentials in src/main/resources/application.properties
# spring.datasource.url=jdbc:postgresql://localhost:5432/taskmgr
# spring.datasource.username=your_username
# spring.datasource.password=your_password

# Run the Spring Boot app
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd Team-Task-Manager/frontend

# Install dependencies
npm install

# Start the development server
npm start
```

Then open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
Team-Task-Manager/
├── backend/                  # Spring Boot application
│   ├── src/
│   │   ├── main/java/        # Java source files
│   │   │   ├── controller/   # REST controllers
│   │   │   ├── service/      # Business logic
│   │   │   ├── model/        # JPA entities
│   │   │   └── repository/   # Spring Data repos
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
└── frontend/                 # TypeScript + HTML frontend
    ├── src/
    └── package.json
```

---

## 🔮 Future Improvements

- [ ] Email notifications for task assignments
- [ ] Due date reminders
- [ ] Dashboard with task analytics
- [ ] REST API documentation with Swagger

---

## 👨‍💻 Author

**Lucifer8844** — [GitHub](https://github.com/Lucifer8844)

---
