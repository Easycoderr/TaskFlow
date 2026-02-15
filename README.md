![Alt](https://repobeats.axiom.co/api/embed/9334297acc16501b26aae1f7e6681292b7c16998.svg "Repobeats analytics image")

# TaskFlow

Modern Task & Project Management Web Application

## description

TaskFlow is a full-stack task and project management application built with React and Supabase.  
It allows users to create projects, manage tasks, track deadlines, and visualize progress using a dashboard and calendar view.  
The app focuses on clean architecture, modern UI, and real-world production patterns.

## Live Demo

soon...

## Features

- User Authentication (Supabase Auth)
- Protected Routes
- Task CRUD (Create, Read, Update, Delete)
- Project CRUD
- Task Filtering & Search
- Dashboard with real-time statistics
- Calendar view with date-based tasks
- Optimistic UI updates (React Query)
- Skeleton loading states
- Toast notifications
- Dark / Light mode
- Row Level Security (RLS) policies

## Tech Stack

### Frontend

- React
- React Router
- React Query
- Context API + useReducer
- Tailwind CSS
- Vite

### Backend

- Supabase
- PostgreSQL
- Row-Level Security (RLS)

## Architecture

- Remote server state is managed using React Query.
- Local UI state is handled using Context API and useReducer.
- Optimistic updates are used for better user experience.
- Protected layouts ensure authenticated route access.
- Database access is secured using Supabase RLS policies.

## Installation

1. Clone the repository

```bash
git clone https://github.com/Easycoderr/TaskFlow.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file and add your Supabase credentials

VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key

4. Run the development server

```bash
npm run dev
```

## Future Improvements

- Email notifications
- Activity logs
- Multi-user collaboration
- Mobile UI refinements
