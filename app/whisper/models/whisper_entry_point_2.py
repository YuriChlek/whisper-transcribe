import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../actions')))
from whisper_actions import load_model, is_audio_empty

sys.stdout.reconfigure(encoding='utf-8')

model = load_model("0002", "whisper_entry_point_2.py")

# Checking command line arguments
if len(sys.argv) >= 2:
    audio_file = sys.argv[1]

    # Checking if an audio file has sound
    if is_audio_empty(audio_file):
        print(f'{{"id": "0002","text": "Голос не знайдено.", "language": ""}}')
    else:
        try:
            # Trying to transcribe an audio file
            result = model.transcribe(audio_file)
            print(f'{{"id": "0002", "text": "{result["text"]}", "language": "{result["language"]}"}}')
        except FileNotFoundError:
            print(f'{{"id": "0002", "text": "", "language": "", "error": "Error: Audio file not found."}}')
        except Exception as e:
            print(f'{{"id": "0002", "text": "", "language": "", "error": "Error during transcription: {e}"}}')
else:
    print(f'{{"id": "0002", "text": "", "language": "", "error": "Error: No audio file path provided as a command-line argument."}}')
