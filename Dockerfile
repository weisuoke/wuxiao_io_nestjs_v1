FROM node:18.12.1
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000
CMD ["pnpm", "run", "start:dev"]