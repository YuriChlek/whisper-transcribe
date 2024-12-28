import sys
import whisper

# Перевірка наявності аргументу
if len(sys.argv) < 2:
    sys.exit(0)

# Завантаження моделі
model = whisper.load_model("turbo")

# Аудіофайл передається як параметр
audio_file = sys.argv[1]

# Транскрибування
result = model.transcribe(audio_file)

# Виведення лише тексту та мови
print(f'{{"text": "{result["text"]}", "language": "{result["language"]}"}}')
