ARG MAINTAINER
FROM node:18

WORKDIR /root/app

COPY . /root/app/

RUN npm install --registry=https://registry.npmmirror.com
RUN npm run build


ENV PORT=7050

EXPOSE 7050

CMD [ "npm", "start" ]