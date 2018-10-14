FROM node:8 as web
RUN mkdir /tokenFront
WORKDIR /tokenFront
COPY . .

RUN npm install --quiet

CMD ["npm", "start"]

EXPOSE 3001