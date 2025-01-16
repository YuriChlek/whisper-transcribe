import sys
import whisper
import os

try:
    # Завантаження моделі
    model = whisper.load_model("turbo")
except Exception as e:
    print(f'{{"text": "", "language": "", "error": "Error loading Whisper model: {e}"}}')
    sys.exit(1)

# Перевірка аргументів командного рядка
if len(sys.argv) >= 2:
    audio_file = sys.argv[1]
    audio_file = os.path.abspath(audio_file)

    try:
        #Спроба транскрибувати аудіофайл
        result = model.transcribe(audio_file)
        print(f'{{"text": "{result["text"]}", "language": "{result["language"]}", "error": ""}}')
    except FileNotFoundError:
        print(f'{{"text": "", "language": "", "error": "Error: Audio file {audio_file} not found. Current"}}')
    except Exception as e:
        print(f'{{"text": "", "language": "", "error": "Error during transcription: {e}"}}')
else:
    print(f'{{"text": "", "language": "", "error": "Error: No audio file path provided as a command-line argument."}}')
