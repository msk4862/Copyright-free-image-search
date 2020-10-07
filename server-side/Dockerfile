FROM node:13.12.0-alpine

USER node
RUN mkdir /home/node/backend
WORKDIR /home/node/backend

COPY --chown=node:node package-lock.json package.json ./
RUN npm ci

COPY --chown=node:node . .

CMD ["npm", "start"]