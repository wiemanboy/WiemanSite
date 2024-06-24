FROM node:22-slim AS builder

ARG PUBLIC_API_BASE_URL
ENV PUBLIC_API_BASE_URL ${PUBLIC_API_BASE_URL}

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:22-slim

WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["npm", "run", "start"]