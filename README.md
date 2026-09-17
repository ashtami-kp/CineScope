# CineScope

A movie discovery web application built with Next.js, TypeScript, Tailwind CSS, TMDB API, Axios, and Clerk authentication.

## Features

- Browse popular movies
- Search for movies
- View detailed movie information
- Add movies to Favorites
- Remove movies from Favorites
- Clerk authentication
- Protected Favorites page
- Responsive design for desktop and mobile
- Loading and error states

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Axios
- TMDB API
- Clerk Authentication

## Project Structure

```
app/
├── components/
├── favorites/
├── movies/
├── search/
├── sign-in/
├── sign-up/
└── layout.tsx

hooks/
lib/
types/
public/
```

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/ashtami-kp/CineScope.git
```

### 2. Install dependencies

```
npm install
```

### 3. Create environment variables

Create a `.env.local` file in the root of the project. Add your TMDB and Clerk environment variables:
```
TMDB_ACCESS_TOKEN=your_tmdb_access_token

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```
Do not commit `.env.local` to GitHub.

### 4. Run the development server
```
npm run dev
```
Open: `http://localhost:3000`

## API

Movie data is provided by the TMDB API. TMDB is not affiliated with or endorsed by this project.

## Authentication

Clerk is used for:
- Sign in
- Sign up
- User profile
- Sign out
- Protecting the Favorites page

## Future Improvements

- Store Favorites per user in a database
- Improve movie recommendations
- Add more movie categories
- Add additional UI improvements

## Author

Built as a frontend development project to practice Next.js, TypeScript, API integration, authentication, and responsive UI development.