import sys
import whisper

# Завантаження моделі
model = whisper.load_model("turbo")

# Аудіофайл передається як параметр
if len(sys.argv) >= 2:
    audio_file = sys.argv[1]
# Транскрибування
    result = model.transcribe(audio_file)
# Виведення лише тексту та мови
    print(f'{{"text": "{result["text"]}", "language": "{result["language"]}"}}')

else:
    print('file path not found')
