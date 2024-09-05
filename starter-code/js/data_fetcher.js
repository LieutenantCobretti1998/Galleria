// Init data fetcher here

export class DataFetcher {
    // #json_file = "../data.json";

    async fetchData() {
        try {
            const response = await fetch("/api/get_images");
            if (!response.ok) {
                throw new Error("Failed to fetch data. Please check you json file");
            }
            return await response.json();
        }
        catch (error) {
            console.error(error);
        }
    }
}

