import sys
import whisper
import os
from pydub import AudioSegment
import numpy as np

sys.stdout.reconfigure(encoding='utf-8')

def is_audio_empty(audio_file):
    try:
        # Завантаження аудіофайлу
        audio = AudioSegment.from_file(audio_file)
        # Перевірка середньої гучності
        if audio.dBFS < -30:  # Параметр -50 дБFS можна налаштувати в залежності від потреб
            return True
        return False
    except Exception as e:
        print(f'{{"text": "", "language": "", "error": "Error checking audio file: {e}"}}')
        return True

try:
    # Завантаження моделі
    model = whisper.load_model("turbo")
except Exception as e:
    print(f'{{"text": "", "language": "", "error": "Error loading Whisper model: {e}"}}')
    sys.exit(1)

# Перевірка аргументів командного рядка
if len(sys.argv) >= 2:
    audio_file = sys.argv[1]

    # Перевірка, чи є в аудіофайлі звук
    if is_audio_empty(audio_file):
        print(f'{{"text": "Голос не знайдено.", "language": "", "error": ""}}')
    else:
        try:
            # Спроба транскрибувати аудіофайл
            result = model.transcribe(audio_file)
            print(f'{{"text": "{result["text"]}", "language": "{result["language"]}", "error": ""}}')
        except FileNotFoundError:
            print(f'{{"text": "", "language": "", "error": "Error: Audio file not found."}}')
        except Exception as e:
            print(f'{{"text": "", "language": "", "error": "Error during transcription: {e}"}}')
else:
    print(f'{{"text": "", "language": "", "error": "Error: No audio file path provided as a command-line argument."}}')
