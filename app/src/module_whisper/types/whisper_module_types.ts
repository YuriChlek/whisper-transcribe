export type TranscriptionResult = {
    text: string;
    language: string;
    error?: string;
    model_is_load: boolean;
};
