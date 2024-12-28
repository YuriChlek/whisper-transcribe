export type DBConnectionData = {
    host: string;
    port: number;
    user: string;
    password?: string;
    database?: string;
    connectionLimit?: number;
};
