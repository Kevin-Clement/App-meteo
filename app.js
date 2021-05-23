const apiKey = "55c53c68b664cbe746595834430fe093"

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector("#city").innerHTML = data.name;
                document.querySelector("#temp").innerHTML = "<i class='fas fa-thermometer-half'></i>" + Math.floor(data.main.temp) + "°";
                document.querySelector("#humidity").innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + "%";
                document.querySelector("#description").innerHTML = data.weather[0].description;
            })
        )
        .catch((err) => console.log(err))
};

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;

    apiCall(ville)
})

apiCall("Rouen")