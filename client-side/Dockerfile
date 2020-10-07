# stage build
FROM node:13.12.0-alpine AS builder
WORKDIR /app
COPY  . .
RUN npm ci && npm run build
# stage build end


# from builder stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html