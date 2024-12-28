const fetchData = async (
    url: string,
    data?: Record<string, string | number>,
): Promise<any> => {
    try {
        const response = await fetch(`http://localhost:4000${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data
                ? JSON.stringify({
                      ...data,
                  })
                : null,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        return error;
    }
};

export default fetchData;
