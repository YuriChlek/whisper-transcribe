export type SettingsData = {
    host: string;
    port: number;
    user: string;
    password?: string;
    database?: string;
    connectionLimit?: number;
    isLocalFiles?: boolean
    localFilesUrl?: string
};

export type CheckConnectionResponse = {
    success: boolean;
    message: string;
};

export type DbConnectionResponse = {
    data: SettingsData;
    success: boolean;
    start?: boolean;
};

export type TranscribationStartResponse = {
    start: boolean;
    success?: boolean;
    message: string;
    error?: string;
};
