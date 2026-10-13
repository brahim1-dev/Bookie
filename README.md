# Bookie

A full-stack personal library manager for organizing books, tracking prices, and opening optional book download links. Bookie includes a responsive React interface and a REST API backed by MongoDB.

![Bookie book library](frontend/src/assets/hero.png)

## Features

- Browse books in a responsive card layout.
- View book details, including the title, author, price, cover, description, and date added.
- Add books with required details and optional cover-image and download URLs.
- Edit existing book records.
- Delete books with a confirmation dialog.
- Open optional download links hosted by external providers.
- See loading, empty-library, and API-error states with a retry action.
- Persist book records in MongoDB through the Express API.

## Built with

| Part | Technologies |
| --- | --- |
| Frontend | React 19, Vite 8, React Router 7, Redux Toolkit, Tailwind CSS 4, Lucide, React Hot Toast |
| Backend | Node.js, Express 5, Mongoose 9 |
| Database | MongoDB |

## Requirements

- Node.js compatible with Vite 8 and npm.
- MongoDB, running locally or available through MongoDB Atlas.

## Run locally

### 1. Configure the backend

Create a `.env` file in the repository root:

```env
MONGO_URI=mongodb://127.0.0.1:27017/bookie
PORT=5000
```

Use your MongoDB Atlas connection string for `MONGO_URI` if you are using a hosted database. Keep `.env` private; do not commit database credentials.

### 2. Install dependencies

From the repository root:

```sh
npm install
npm --prefix frontend install
```

### 3. Start the backend

In one terminal at the repository root:

```sh
npm run dev
```

The API starts at `http://localhost:5000` by default. Set `PORT` in the root `.env` file to use a different port.

### 4. Start the frontend

In a second terminal at the repository root:

```sh
npm --prefix frontend run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Configuration

### Backend environment

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `MONGO_URI` | Yes | — | MongoDB connection string. The backend exits with an error if it cannot connect. |
| `PORT` | No | `5000` | Port used by the Express server. |

### Frontend environment

The frontend defaults to `http://localhost:5000/api/books`. To use a different API base URL, create `frontend/.env`:

```env
VITE_API_URL=https://your-api-host.example/api/books
```

Restart Vite after changing environment variables. The URL should point to the books resource, not just the server root.

## API

Base URL: `http://localhost:5000/api/books`

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | List all books. |
| `GET` | `/:id` | Get one book by MongoDB ID. |
| `POST` | `/` | Create a book. |
| `PUT` | `/:id` | Update a book. |
| `DELETE` | `/:id` | Delete a book. |

### Book fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | String | Yes | Book title. |
| `author` | String | Yes | Author name. |
| `price` | String | Yes | Price shown in the interface. |
| `description` | String | Yes | Book description. |
| `coverImage` | String | No | URL of the book cover image. |
| `downloadLink` | String | No | External URL for a download. |
| `createdAt`, `updatedAt` | Date | Automatic | Mongoose timestamps. |

Example `POST /api/books` request:

```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt and David Thomas",
  "price": 39.99,
  "description": "A practical guide to software craftsmanship.",
  "coverImage": "https://example.com/cover.jpg",
  "downloadLink": "https://example.com/book"
}
```

The backend requires a non-empty title, author, and description, plus a price. Cover and download URLs are optional. Bookie stores the download URL; it does not host or serve book files.

## Project structure

```text
Bookie/
├── backend/
│   ├── config/             # MongoDB connection
│   ├── controllers/        # Book CRUD handlers
│   ├── models/             # Mongoose book schema
│   ├── routes/             # REST API routes
│   └── server.js           # Express startup
├── frontend/
│   ├── src/
│   │   ├── components/     # Shared UI, book form, cards, and dialog
│   │   ├── pages/          # Library, details, add, and edit screens
│   │   └── redux/          # Store and book API state
│   └── package.json
├── .env                    # Local backend configuration (not committed)
└── package.json            # Backend scripts and dependencies
```

## Useful commands

Run backend commands from the repository root and frontend commands using `npm --prefix frontend`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the backend with Node watch mode. |
| `npm start` | Start the backend normally. |
| `npm --prefix frontend run dev` | Start the Vite development server. |
| `npm --prefix frontend run build` | Build the frontend for production. |
| `npm --prefix frontend run preview` | Preview the production build locally. |
| `npm --prefix frontend run lint` | Run ESLint across the frontend. |

## Troubleshooting

- **The API cannot connect to MongoDB:** Confirm MongoDB is running and `MONGO_URI` is correct in the repository-root `.env` file.
- **The frontend cannot reach the API:** Start the backend and confirm `VITE_API_URL` (if configured) points to the correct `/api/books` URL.
- **A book cannot be saved:** Check that title, author, price, and description are provided. The cover and download URLs can be left blank.
- **A download link does not open or download:** The link is served by an external host, so its availability and download behavior depend on that provider.

## Repository

[brahim1-dev/Bookie on GitHub](https://github.com/brahim1-dev/Bookie)
