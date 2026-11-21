# Yummy Dish Depot 🍲

A full-stack app for managing dishes: browse meals, add new ones, and edit or delete them. It has user accounts and protected routes.

## Structure

```
frontend/   React + Vite + TypeScript, Tailwind, shadcn/ui, TanStack Query
backend/    Express + TypeScript REST API, MongoDB (Mongoose), JWT auth
```

## API overview

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/user/signup` | | Create an account |
| `POST` | `/user/login` | | Log in |
| `GET` | `/user/me` | ✅ | Current user |
| `GET` | `/meal` | ✅ | List meals |
| `POST` | `/meal` | ✅ | Add a meal |
| `PATCH` | `/meal` | | Update meals |
| `DELETE` | `/meal` | | Delete meals |

## Getting started

**Backend**

```bash
cd backend
npm install
npm run dev
```

Needs `MONGO_URI`, `PORT` and a JWT secret in `backend/.env`.

**Frontend**

```bash
cd frontend
npm install
npm run dev
```
