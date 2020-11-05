function makeAjaxCall(url, methodType){
  let promiseObj = new Promise(function(resolve, reject){
    console.log(url);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open(methodType,url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readySate == 4){
        if (xmlhttp.status == 200){
          console.log("xmlhttp done succesfully");
          let serverResponse = xmlhttp.responseText;
          console.log(serverResponse);
          resolve(serverResponse);
        } else {
          reject(xmlhttp.status);
          console.log("xmlhttp failed");
        }
      } else {
          console.log("xmlhttp processing going on");
      }
    }
    console.log("request sent succesfully");
  });
  return promiseObj;
}
function showWeather(weatherString){
  let weatherObject = JSON.parse(weatherString);
  let ditWeer =
      weatherObject.liveweer[0].plaats +
      "<br>Temperatuur " +
      weatherObject.liveweer[0].temp + "&#176;C" +
      "<br>Verwachting " +
      weatherObject.liveweer[0].verw +
      "<br>" +
      weatherObject.liveweer[0].samenv +
      "<br>"
}

function errorHandler(statusCode){
  console.log("failed with status", status);
}
