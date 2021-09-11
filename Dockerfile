# Base image
FROM node:16-alpine as base
WORKDIR /app
COPY package*.json ./

# Install deps
FROM base as deps
RUN npm ci --only=production
RUN cp -r node_modules prod_node_modules
RUN npm ci
COPY . ./
RUN npm run build

# Unit test
FROM deps as unit-test
RUN npm run lint
CMD ["npm", "t"]

# App
FROM base as app
COPY --from=deps /app/prod_node_modules ./node_modules
COPY --from=deps /app/dist ./dist
CMD ["npm", "start"]