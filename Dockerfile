FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --force
# Install rollup manually because of bug with optional dependencies (https://github.com/npm/cli/issues/4828)
RUN npm install -D @rollup/rollup-linux-x64-musl --force
COPY . ./
RUN npm run build

FROM node:22-alpine

WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

# These dependencies are not bundled correctly so they are copied manually
COPY --from=builder /app/node_modules/reflect-metadata ./node_modules/reflect-metadata
COPY --from=builder /app/node_modules/inversify ./node_modules/inversify

EXPOSE 3000
CMD ["npm", "run", "start"]