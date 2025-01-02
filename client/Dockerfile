# Використовуємо офіційний Node.js образ як базовий
FROM node:22-alpine AS build

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json для інсталяції залежностей
COPY ./client/package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проєкту в контейнер
COPY ./client .

# Створюємо збірку застосунку для продакшн середовища
RUN npm run build

# Встановлюємо сервер для статики
FROM nginx:alpine

# Копіюємо збірку з попереднього етапу в директорію для статики в Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Відкриваємо порт 80 для доступу до застосунку
EXPOSE 80

# Запускаємо Nginx для віддачі статики
CMD ["nginx", "-g", "daemon off;"]
