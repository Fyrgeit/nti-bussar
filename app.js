const stopLookupKey = "6c0ea6a5673d479b99c6287e75f0c15e"
const stopLookupUrl = `http://api.sl.se/api2/typeahead.json?key=${stopLookupKey}&searchstring=alby&stationsonly=true`;
const proxyUrl = "https://cors-anywhere.herokuapp.com/"




/* 
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", stopLookupUrl);
oReq.send();
*/

/*
fetch(proxyUrl + stopLookupUrl)
.then((response) => {
  return response.json();
})
.then((data) => {
  let albyStationId = data.ResponseData[0].SiteId;
  
  const departureKey = "8ade30c6140f4c08b5ac38690f524819";
  const departureUrl = `http://api.sl.se/api2/realtimedeparturesv4.json?key=${departureKey}&siteid=${albyStationId}&timewindow=30`;
  
  fetch(proxyUrl + departureUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
})
*/