export type TranscriptionResult = {
    id: string
    row_id?: number
    text: string;
    language: string;
    error?: string;
};
