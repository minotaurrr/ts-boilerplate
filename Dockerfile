# Base image
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Unit test
FROM build as unit-test
RUN npm run lint
CMD ["npm", "t"]

# App
FROM build as app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
CMD ["npm", "start"]