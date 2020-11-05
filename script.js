
let activate1 = document.getElementById("activate1");
let activate2 = document.getElementById("activate2");
let activate3 = document.getElementById("activate3");
let debug = true;
activate1.addEventListener("click", getWeather1);
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);


let result = document.getElementById('result');


let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key="
let key = "demo";
let locatie = "&locatie="
let geolocation = "Amsterdam";
let url = apiAddress + key + locatie + geolocation;


function getWeather1(){
  console.log(url);
  makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}
function showWeather1(JSONresponseFromAjax){
  result.innerHTML = JSONresponseFromAjax;
}

function getWeather2(){
  result.innerHTML = "";
  makeAjaxCall(url,"GET").then (showWeather2, errorHandler);
}

function getWeather3(){
  result.innerHTML = "";
  makeAjaxCall(url,"GET").then (showWeather, errorHandler);
}

function  showWeather2(weatherString){
  let weatherObject = JSON.parse(weatherString);
  let completeData = "";
  for (const [key, value] of Object.entries(weatherObject.liveweer[0])){
    debug ? console.log(`${key}: ${value}`) : "";
    completeData += key + " : " + value + "<br>";
    result.innerHTML = completeData;
  }
}
