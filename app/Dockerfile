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

COPY ./app/package*.json /app/

RUN npm install

COPY ./app /app

RUN cd whisper &&  \
    pip install -r requirements.txt &&  \
    python3 whisper_entry_point.py

EXPOSE 4000

CMD ["npm", "run", "dev"]
