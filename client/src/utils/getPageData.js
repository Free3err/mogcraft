export default async function getPageData(path) {
    try {
        const response = await fetch("http://localhost:5000/api/pages/get_data", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ path }),
        })
                if (response.ok) {
                    const data = await response.json()

                    return data.text
            }
    } catch (error) {
        console.log("Ошибка");
    }
}
