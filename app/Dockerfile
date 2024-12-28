FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    software-properties-common \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

RUN add-apt-repository ppa:deadsnakes/ppa -y \
    && apt-get update && apt-get install -y python3.10 python3.10-distutils \
    && curl -sS https://bootstrap.pypa.io/get-pip.py | python3.10

WORKDIR /app

COPY package.json ./

RUN npm install

COPY .. .

EXPOSE 4000

CMD ["npm", "start"]

