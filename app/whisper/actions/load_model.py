import whisper
import torch
import os

def load_whisper_model():
    model_path = os.path.abspath("../model/whisper_model.pth")
    model_dir = os.path.dirname(model_path)

    print(f"Шлях до локальної моделі: {model_dir}")

    # Якщо файл моделі існує, завантажуємо її
    print(f"Перевірка наявності файлу: {model_path}")
    if os.path.exists(model_path):
        print("Завантаження моделі збереженої локально...")
        try:
            state_dict = torch.load(model_path, map_location="cpu")  # Завантаження вагів
            model = whisper.load_model("turbo")  # Завантаження структури моделі (розмір "turbo" сумісний із "turbo")
            model.load_state_dict(state_dict)
            print("Модель успішно завантажена з файлу.")
            return model
        except Exception as e:
            print(f"Помилка під час завантаження збереженої моделі: {e}")

    # Якщо файл не знайдено, завантажуємо нову модель
    print("Збережена модель не знайдена. Завантаження нової моделі...")
    try:
        model = whisper.load_model("turbo")
        os.makedirs(model_dir, exist_ok=True)  # Створення папки, якщо вона не існує
        torch.save(model.state_dict(), model_path)  # Збереження state_dict
        print(f"Модель успішно завантажена та збережена за шляхом: {model_path}")
        return model
    except Exception as e:
        print(f"Помилка під час завантаження нової моделі: {e}")
        return None
