const stopLookupKey = "6c0ea6a5673d479b99c6287e75f0c15e"
const stopLookupUrl = `http://api.sl.se/api2/typeahead.json?key=${stopLookupKey}&searchstring=åkersberga&stationsonly=true`;
const departureKey = "8ade30c6140f4c08b5ac38690f524819";
const departureUrl = `http://api.sl.se/api2/realtimedeparturesv4.json?key=${departureKey}&siteid=9662&timewindow=30`;
const proxyUrl = "https://cors-anywhere.herokuapp.com/"

/* 
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", departureUrl);
oReq.send();
*/

fetch(departureUrl)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})

