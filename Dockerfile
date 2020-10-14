FROM node:12

RUN npm install -g vsce

RUN adduser --disabled-password --gecos '' vsce
USER vsce
