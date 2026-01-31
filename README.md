# 🚨 PulseOps — Incident Response & Automation Platform

A mini **PagerDuty / OpsGenie–like** backend system built with **TypeScript, REST, gRPC, Kafka, and PostgreSQL**.

PulseOps simulates how real companies **detect**, **manage**, and **automate** production incidents when systems fail.

---

## 🧠 The Problem

In real production systems, failures happen:

- Payment service goes down
- Authentication fails
- Background job crashes
- Database becomes slow

Engineers must quickly:

1. Detect the issue
2. Create an incident
3. Notify the right team
4. Take action
5. Track resolution time

Companies use tools like **PagerDuty, OpsGenie, Jira**, or custom internal tools.

👉 **PulseOps is a simplified version of those systems.**

---

## 🎯 What PulseOps Does

When something breaks, PulseOps automatically:

- Detects failures using rules
- Creates an incident
- Notifies the responsible team
- Runs automation (retry / escalate)
- Tracks metrics and resolution time

---

## 🧩 Real-Life Example

You run an e-commerce website.

❌ Payment service stops responding.

PulseOps will:

1. Detect the failure
2. Create an incident
3. Notify the payment team
4. Trigger retry automation
5. Track how long it takes to resolve

---

## 🏗️ Architecture

This project mimics **real production architecture** used in large companies.

```
Frontend / API Clients
        │
        ▼
   REST API (Express + TypeScript)
        │
        ├──────── gRPC ────────► Internal Services
        │
        └──────── Kafka ───────► Event Consumers
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                             |
| -------------- | ----------------------------------- |
| TypeScript     | Type-safe backend                   |
| Express (REST) | External API for users              |
| gRPC           | Fast internal service communication |
| Kafka          | Event-driven architecture           |
| PostgreSQL     | Persistent storage                  |
| Docker         | Local environment setup             |

---

## 🔹 Technology Roles

### REST (Express)

Used by frontend or API clients for:

- Authentication
- Creating services
- Viewing incidents
- Dashboard & analytics

### gRPC

Used for internal service-to-service calls:

- Incident → Auth (permission check)
- Workflow → Notification (send alerts)

### Kafka

Used for asynchronous events:

- Incident created
- Incident resolved

Other services listen and react independently.

### PostgreSQL

Stores:

- Users
- Services
- Incidents
- Rules
- Workflows
- Metrics

---

## 👤 User Capabilities

Users can:

- Register / Login
- Create services (payment, auth, orders)
- Define rules  
  _“If payment fails → create incident”_
- View incidents
- Acknowledge incidents
- Resolve incidents
- View analytics (MTTR, history)

---

## 📦 Core Concepts

| Concept  | Description                                |
| -------- | ------------------------------------------ |
| Service  | A system component (Payment, Auth, Orders) |
| Incident | A failure that needs attention             |
| Rule     | Condition to trigger an incident           |
| Workflow | Automation executed on incidents           |

---

## 🗂️ Project Structure (Example)

```
pulseops/
│
├── api-gateway/          # REST API
├── auth-service/         # gRPC Auth service
├── incident-service/     # Incident management
├── workflow-service/     # Automation engine
├── notification-service/ # Alerts
├── proto/                # gRPC definitions
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pulseops.git
cd pulseops
```

### 2. Start infrastructure

```bash
docker-compose up -d
```

This starts:

- PostgreSQL
- Kafka
- Zookeeper

### 3. Install dependencies

```bash
npm install
```

### 4. Run services

```bash
npm run dev
```

---

## 🔌 Example Flow

1. User creates a Service (Payment)
2. User defines a Rule
3. Payment failure happens
4. Kafka event is published
5. Incident is created
6. Workflow triggers notification
7. Engineer resolves incident
8. Metrics are recorded

---

## 📊 Analytics

PulseOps tracks:

- Total incidents
- Open vs resolved incidents
- Mean Time To Resolve (MTTR)
- Incidents per service

---

## 🧠 What This Project Demonstrates

This project demonstrates:

- System Design knowledge
- Microservices architecture
- Event-driven systems
- gRPC communication
- Incident management flow used in real companies

This is **not a CRUD project** — it is **production-inspired architecture**.

---

## 🔮 Future Improvements

- Escalation policies
- Retry strategies
- Slack / Email integration
- Role-based access control
- Web dashboard UI
- Rate limiting & caching

---

## 📌 Inspired By

- PagerDuty
- OpsGenie
- Jira Ops
- Real SRE incident tooling

---

## 👨‍💻 Author

**Saad Islam**  
Backend Developer | System Design Enthusiast | TypeScript
