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