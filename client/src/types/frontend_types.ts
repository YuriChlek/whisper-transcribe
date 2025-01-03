export type DBConnectionData = {
    host: string;
    port: number;
    user: string;
    password?: string;
    database?: string;
    connectionLimit?: number;
};

export type CheckConnectionResponse = {
    success: boolean;
    message: string;
};

export type DbConnectionResponse = {
    data: DBConnectionData;
    success: boolean;
};
