FROM node:8 as server
RUN mkdir /tokenBackend
WORKDIR /tokenBackend
COPY . .

RUN npm install --quiet

CMD ["npm", "start"]

EXPOSE 3333
