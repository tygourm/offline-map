# offline-map

Yet another offline map.

!!! tip "Design principles"

    - **DRY** Don't Repeat Yourself
    - **KISS** Keep It Simple, Stupid
    - **YAGNI** You Ain't Gonna Need It
    - **SOLID** Single responsibility, Open/closed, Liskov substitution, Interface
    segregation, Dependency inversion

## Assets

Download world `pmtiles` from
[Protomaps Builds](https://maps.protomaps.com/builds) in the `docker/tileserver`
directory.

```bash
cd docker/tileserver
curl -O https://build.protomaps.com/20250818.pmtiles
```

Download basemaps assets from
[Protomaps GitHub](https://github.com/protomaps/basemaps-assets) in the
`docker/tileserver/assets` directory.

## Setup

!!! tip "VS Code extensions"

    Start by installing the mandatory (and eventually optional) VS Code extensions.

This project uses [uv](https://docs.astral.sh/uv) as a Python package and
project manager and [pnpm](https://pnpm.io) as a Node package manager.

Install the Python dependencies.

```bash
uv sync --all-groups --all-packages --frozen
```

Install the Node dependencies.

```bash
pnpm i --frozen-lockfile
```

## Development

Deploy the tileserver.

```bash
cd docker
docker-compose up tileserver
```

The tileserver is available at [http://localhost:8080](http://localhost:8080).

Run the backend in development mode.

```bash
# cd backend
RELOAD=True backend
```

The API docs are accessible at
[http://localhost:8000/api-docs](http://localhost:8000/api-docs) and the app
docs at [http://localhost:8000/app-docs](http://localhost:8000/app-docs), once
you have [built and embedded](#documentation) them.

Run the frontend in development mode.

```bash
cd frontend
pnpm dev
```

The frontend is available at [http://localhost:5173](http://localhost:5173).

## Deployment

### Docker

Build the backend image.

```bash
docker build -f docker/backend/Dockerfile -t om-backend:1.0.0 .
```

Build the frontend image.

```bash
docker build -f docker/frontend/Dockerfile -t om-frontend:1.0.0 .
```

Deploy the services.

```bash
cd docker
docker-compose up
```

The app is available at [http://localhost:3000](http://localhost:3000).

### Distribution

Build the backend.

```bash
uv build backend -o backend/dist
```

The backend distribution is available in the `backend/dist` directory.

Build the frontend.

```bash
cd frontend
pnpm build
```

The frontend distribution is available in the `frontend/dist` directory.

## Miscellaneous

### Code style

This project uses [Ruff](https://docs.astral.sh/ruff) as a Python linter and
code formatter, [Prettier](https://prettier.io) as a generic formatter and
[ESLint](https://eslint.org) as a JavaScript and JSX linter.

Lint the codebase.

```bash
pnpm lint
```

Format the codebase.

```bash
pnpm format
```

### Documentation

This project uses
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material) as a
documentation framework.

Run the docs in development mode.

```bash
mkdocs serve
```

The docs are accessible at [http://localhost:8000](http://localhost:8000).

Build and embed the docs.

```bash
mkdocs build -d backend/static/site
```

The docs distribution is available in the `backend/static/site` directory.

!!! warning "Static documentation"

    Some features might not work properly in the static documentation. They will
    work properly in the embedded documentation.
