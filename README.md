# my-demo

A minimal Vite + React demo that fetches posts from JSONPlaceholder and shows them in a responsive grid. Use this repo to demonstrate frontend tooling, async data fetching, and a simple CI/CD deploy to Vercel.

## Tech

* Vite (React)
* React (hooks)
* JSONPlaceholder (fake REST API)

## Prerequisites

* Node 18+ and npm
* Git

## Quick start

```bash
# clone (or run scaffold steps earlier)
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

# install and run dev server
npm install
npm run dev    # open http://localhost:5173
```

## Build and preview (production check)

```bash
npm run build
npm run preview
```

## Git + deploy (Vercel)

```bash
git add .
git commit -m "init: scaffold vite react demo"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

1. Sign in to Vercel and import this GitHub repo. Vercel auto-detects Vite.
2. Confirm build command `npm run build` and output directory `dist`.
3. Deploy. Vercel gives a public URL. Push to main to trigger redeploys.

## API used

* `GET https://jsonplaceholder.typicode.com/posts?_limit=6`
* This is public test data. No auth required. Rate limits are low; do not rely on it for production.

## What to show in the demo

* Open the deployed URL. Show the responsive grid.
* Open DevTools network tab and show the GET request to jsonplaceholder.
* Show loading and error states by throttling or editing the fetch URL.
* Point to the small commit history and README on GitHub.

## Notes and small edits to personalize

* Replace the demo title with your name and a one-line description.
* Add a screenshot in `/assets` and link it in this README.
* Optionally replace inline styles with Tailwind or a small CSS file.

## License

MIT

---

If you want, I can also generate the exact commit messages and a 3-commit plan for this repo.
