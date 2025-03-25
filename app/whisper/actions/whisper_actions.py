import requests
import threading
import whisper
import sys
from pydub import AudioSegment

MAX_RETRIES = 5

def model_is_loaded(id, file_name, retries=0):
    url = 'http://localhost:4000/whisper_registration'
    data = {
        "id": id,
        "model_file": file_name
    }

    try:
        response = requests.post(url, json=data)
        response.raise_for_status()
    except Exception as e:
        print(f"Error in POST request: {e}")
        if retries < MAX_RETRIES:
            print(f"Retrying... ({retries + 1}/{MAX_RETRIES})")
            # Calling a re-request after 5 seconds
            threading.Timer(6, model_is_loaded, args=(id, file_name, retries + 1)).start()
        else:
            print(f"Failed to load model {id} after {MAX_RETRIES} attempts.")


def is_audio_empty(audio_file):
    try:
        # Load audiofile
        audio = AudioSegment.from_file(audio_file)
        # Checking the average volume
        # The -30 dB parameter can be adjusted depending on your needs.
        if audio.dBFS < -40:
            return True
        return False
    except Exception as e:
        print(f'{{"text": "", "language": "", "error": "Error checking audio file: {e}"}}')
        return True

def load_model(id, file_name):
    try:
        # Load model
        model = whisper.load_model("turbo")
        model_is_loaded(id, file_name,)

        return model
    except Exception as e:
        print(f'{{"text": "", "language": "", "error": "Error loading Whisper model: {e}"}}')
        sys.exit(1)