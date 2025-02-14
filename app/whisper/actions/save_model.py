import torch
from load_model import load_whisper_model
import os

# Завантаження моделі Whisper
model = load_whisper_model()

# Шлях до файлу моделі
model_dir = "../model"
model_path = os.path.join(model_dir, "whisper_model.pth")

# Перевірка, чи модель успішно завантажена
if model:
    # Створення каталогу для збереження моделі, якщо він не існує
    os.makedirs(model_dir, exist_ok=True)

    # Збереження state_dict моделі
    torch.save(model.state_dict(), model_path)
    print(f"Модель успішно збережена за шляхом: {model_path}")

    # Завантаження state_dict моделі
    try:
        # Завантаження з параметром weights_only=True
        state_dict = torch.load(model_path, map_location="cpu")  # Безпечний варіант для завантаження
        model.load_state_dict(state_dict)
        print("Модель успішно завантажена без попереджень!")
    except FileNotFoundError:
        print(f"Файл моделі не знайдено за шляхом: {model_path}")
    except Exception as e:
        print(f"Сталася помилка під час завантаження моделі: {e}")
else:
    print("Не вдалося завантажити модель Whisper.")
