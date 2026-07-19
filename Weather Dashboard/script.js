const apiKey = "YOUR_API_KEY";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("condition").textContent = data.weather[0].main;

    } catch (error) {

        alert(error.message);

        document.getElementById("cityName").textContent = "No Data";
        document.getElementById("temp").textContent = "--";
        document.getElementById("humidity").textContent = "--";
        document.getElementById("wind").textContent = "--";
        document.getElementById("condition").textContent = "--";
    }
}