class Weather {

    constructor() {
        this.key = '85d7fd129846933a8b7e55927df772aa';
    }

    async getDetails(city) {

        const pageResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85d7fd129846933a8b7e55927df772aa&units=metric`);

        if (pageResponse.status !== 200) {
            return {
                type: 'error',
                data: pageResponse
            }
        } else {
            const resultData = await pageResponse.json();
            return {
                type: 'success',
                data: resultData
            }
            
        }
    }
}