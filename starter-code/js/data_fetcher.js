// Init data fetcher here

export class DataFetcher {
    // #json_file = "../data.json";

    async fetchData() {
        try {
            const response = await fetch("http://galleriawebsite-env.eba-wpfg4hzg.eu-north-1.elasticbeanstalk.com//get_images");
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

