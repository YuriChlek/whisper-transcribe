FROM python:3.10-slim

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app ./

WORKDIR /app/whisper

RUN pip install -r requirements.txt
RUN python whisper_entry_point.py

EXPOSE 4000

CMD ["sh", "-c", "npm run build && npm run start"]
