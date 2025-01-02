const fetchData = async (url, data) => {
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
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Unexpected error");
    }
};
export default fetchData;
