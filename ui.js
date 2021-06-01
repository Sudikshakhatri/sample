class UI {

    showError(error) {
        const form = document.querySelector('.form');
        const userPage = document.querySelector('.user-page');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bg-red';
        errorDiv.appendChild(document.createTextNode(error));
        form.insertBefore(errorDiv, userPage);
        setTimeout(() => {
            document.querySelector('.bg-red').remove();
        }, 3000);
    }

    showData(user) {

        const main = document.querySelector('.main');
        main.innerHTML = `
        
        <section class="main-page box-edit">
                <div class="main-area">
                    <div class="intro">
                        <h3 class="location"><i class="fas fa-map-marker-alt"> ${user.name}, ${user.sys.country}</i></h3>
                        <div class="temp-img">
                            <img src="https://openweathermap.org/img/wn/${user.weather[0].icon}@2x.png">
                            <h2 class="temp"> ${user.main.temp} &deg;C</h2>
                        </div>
                        <p class="feels-like">Feels like ${user.main.feels_like} &deg;C , ${user.weather[0].main}</p>
                    </div>
                    <div class="grid">
                        <p class="pressure"> <span> Pressure :  </span> ${user.main.pressure} hPa</p>
                        <p class="humidity"> <span> Humidity :  </span> ${user.main.humidity} %</p>
                        <p class="temp-min"> <span> Minimun Temperature :  </span> ${user.main.temp_min} &deg;C</p>
                        <p class="temp-max"> <span> Maximun Temperature :  </span> ${user.main.temp_max} &deg;C</p>
                        <p class="wind-speen"> <span> Wind Speed :  </span> ${user.wind.speed} m/s , ${user.wind.deg} &deg;C</p>
                        <p class="visibility"> <span> Visibility :  </span> ${user.visibility / 1000} Km</p>
                    </div>
                </div>
        </section>

        `;
    }
}