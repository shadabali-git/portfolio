# Step 1: Build the React app
FROM node:18 AS builder

WORKDIR /app
git
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve it with Nginx
FROM nginx:alpine

# Copy build output to Nginx HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace default nginx config (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
