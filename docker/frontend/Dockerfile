### Base stage ###
FROM node:22-bookworm-slim AS base
RUN corepack enable && \
    corepack prepare pnpm@10.15.0
WORKDIR /app


### Install stage ###
FROM base AS installer

COPY frontend/package.json .
COPY frontend/pnpm-lock.yaml .

RUN pnpm i --frozen-lockfile


## Build stage ###
FROM base AS builder

COPY --from=installer /app/node_modules node_modules
COPY frontend .

RUN pnpm build


### Run stage ###
FROM nginx:1.29-bookworm
WORKDIR /usr/share/nginx/html

COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist .
