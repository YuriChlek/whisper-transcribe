export type WhisperRegistrationData = {
    id: string
    model_file: string
}

export type WhisperModelData = WhisperRegistrationData & {
    inProcess: boolean
}


