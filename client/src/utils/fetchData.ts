const location = window.location;
const urlApi = `${location.protocol}//${location.hostname}:4000`;

const fetchData = async <T>(
    url: string,
    data?: Record<string, string | number>,
): Promise<T> => {
    try {
        const response = await fetch(`${urlApi}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: data
                ? JSON.stringify({
                      ...data,
                  })
                : null,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return (await response.json()) as T;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Unexpected error");
    }
};

export default fetchData;
