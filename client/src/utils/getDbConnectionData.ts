import fetchData from "./fetchData";

const getDbConnectionData: () => void = async (): Promise<any> => {
    try {
        return await fetchData("/get_db_connection_data");
    } catch (error) {
        return error;
    }
};

export default getDbConnectionData;
