import { WhisperModelData, WhisperRegistrationData } from "@/module_registration/types/registration_types";

const registration_storage: Array<WhisperModelData> = [{id: '0001', model_file: 'whisper_entry_point.py', inProcess: false}];

export const set_pending_model_data = (id: string, inProcess: boolean) => {
    const model = registration_storage.find(model => model.id === id);
    if (model) {
        model.inProcess = inProcess;
        return true;
    }

    return false;
}

export const set_storage_registration_data = (data: WhisperRegistrationData) => {
    const model_data: WhisperModelData = {
        id: data.id || "",
        model_file: data.model_file || "",
        inProcess: false
    }

    const isExist = registration_storage.some(item => item.id === model_data.id);

    if (!isExist) {
        registration_storage.push(model_data);
    }

    return registration_storage;
}

export const get_storage_data = () => {
    return registration_storage;
}

export const get_free_model_data = () => {
    return registration_storage.find((model: WhisperModelData) => !model.inProcess);
}
