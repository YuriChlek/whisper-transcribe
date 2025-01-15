FROM python:3.10-slim

RUN apt-get update && apt-get install -y \
    curl \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./app .

RUN npm install
RUN pip install -r whisper/requirements.txt
RUN python3  whisper/whisper_entry_point.py

EXPOSE 4000

CMD ["sh", "-c", "npm run dev"]