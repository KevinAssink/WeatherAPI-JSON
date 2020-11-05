function makeAjaxCall(url, methodType){
  let promiseObj = new Promise(function(resolve, reject){
       console.log(url); // debug
         let xmlhttp = new XMLHttpRequest();
        xmlhttp.open(methodType, url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function(){
          if (xmlhttp.readyState === 4){
             if (xmlhttp.status === 200){
                console.log("xmlhttp done successfully");
                let serverResponse = xmlhttp.responseText; //server antwoord met string
                console.log(serverResponse); // debug
                resolve(serverResponse); // wordt via return promiseObj teruggegeven
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
  let completeData =
      weatherObject.liveweer[0].plaats +
      "<br>Temperatuur " +
      weatherObject.liveweer[0].temp + "&#176;C" +
      "<br>Verwachting " +
      weatherObject.liveweer[0].verw +
      "<br>" +
      weatherObject.liveweer[0].samenv +
      "<br>";

      result.innerHTML = completeData;
}

function errorHandler(statusCode){
  console.log("failed with status", status);
}
