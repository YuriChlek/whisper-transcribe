export interface Error {
    name: string;
    message: string;
    stack?: string;
}

export type ResponseType = {
    message?: string;
    error?: Error | any;
};

export type DBConnectionData = {
    host: string;
    port: number;
    user: string;
    password: string;
    database?: string;
    connectionLimit?: number;
};

export type TableRow = {
    ID?: number;
    Name?: string;
    Path?: string;
    DT?: Date;
    Seat?: string;
    SeatID?: number;
    RecID?: number;
    FreqID?: number;
    PosID?: number;
    DataTypeID?: number;
    Size?: number;
    Loaded?: number;
    Listened?: number;
    Deleted?: number;
    Saved?: number;
    Badfile?: number;
    Transcript?: string | null;
    Descr?: string | null;
};
