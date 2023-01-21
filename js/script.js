var searchBtn = document.querySelector("#search-btn");
var resultsContainer = document.querySelector("#results-container");
var citySearchEl = document.querySelector("#city-search"); 
var infoContainerEl = document.querySelector("#info-container");
var forecastRowEl = document.querySelector("#forecast-row");
var alertEl = document.querySelector("#alert");
var historyContainer = document.querySelector("#city-history");
var cityHistoryBtn = document.querySelector("#city-history");

var currentDate = moment().format("MM/DD/YYYY");
var dayIndex = 1
var cityHistory = [];

var formSubmitHandler = function(event) {
    event.preventDefault();
  
    var userCity = citySearchEl.value.trim();
  
    if (userCity) {
      getLatLong(userCity);
      citySearchEl.value = "";
      alertEl.className = "alert"
      alertEl.classList.add("hide");
    }
    else {
      citySearchEl.value = "";
      alertEl.classList.remove("hide");
    }
};

var getLatLong = function(userInput) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=e6f1180431902688ee08af2326efb755`
    fetch(apiUrl)
        .then(function(response) {
          if (response.ok) {
            response.json().then(function(data) {
              var cityName = data.name;
              dayIndex = 1;
              getForecast(data, cityName);
              searchHistory(cityName);
            })
          }
          else {
            alertEl.classList.remove("hide");
            return formSubmitHandler();
          }
        })
}

var getForecast = function(data, cityName) {
    resultsContainer.classList.remove("hide");
    var latEl = data.coord.lat
    var longEl = data.coord.lon
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latEl}&lon=${longEl}&units=imperial&appid=e6f1180431902688ee08af2326efb755`
    fetch(apiUrl)
        .then(function(response) {
          if (response.ok) {
            response.json().then(function(data) {
              displayForecast(data, cityName)
            })
          }
        })
}   








getSearchHistory();
searchBtn.addEventListener("click", formSubmitHandler);
cityHistoryBtn.addEventListener("click", recallHistory);