import fetchData from "./fetchData";
const getDbConnectionData = async () => {
    try {
        const a = await fetchData("/get_db_connection_data");
        console.log(a);
        return a;
    } catch (error) {
        // Перевіряємо, чи це помилка
        if (error instanceof Error) {
            throw error; // Кидаємо далі, щоб функція не повертала невідповідний тип
        }
        throw new Error("Unexpected error");
    }
};
export default getDbConnectionData;
