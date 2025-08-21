# offline-map

Yet another offline map.

## Setup

This project uses [pnpm](https://pnpm.io) as a Node package manager.

Install the dependencies.

```bash
pnpm i --frozen-lockfile
```

## Development

Run the frontend in development mode.

```bash
cd frontend
pnpm dev
```

The frontend is available at [http://localhost:5173](http://localhost:5173).

## Deployment

### Docker

### Distribution

Build the frontend.

```bash
cd frontend
pnpm build
```

The frontend distribution is available in the `frontend/dist` directory.

## Miscellaneous

### Linting & Formatting

This project uses [Prettier](https://prettier.io) as a generic formatter and
[ESLint](https://eslint.org) as a JavaScript and JSX linter.

Lint the codebase.

```bash
pnpm lint
```

Format the codebase.

```bash
pnpm format
```
