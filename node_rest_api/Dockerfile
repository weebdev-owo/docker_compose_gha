FROM node:17.8.0-alpine

WORKDIR /usr/app/

#copy code
RUN npm install -g npm@8.6.0
COPY package*.json ./
RUN npm install
COPY src ./src/

#setup
ENV PORT=8080
USER node
EXPOSE 8080

CMD ["npm", "run", "start:watch"]
