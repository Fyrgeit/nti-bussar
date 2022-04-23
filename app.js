const departureKey = "8ade30c6140f4c08b5ac38690f524819";
const departureUrl = `http://api.sl.se/api2/realtimedeparturesv4.json?key=${departureKey}&siteid=9181&timewindow=30`;
const stopLookupKey = "6c0ea6a5673d479b99c6287e75f0c15e"
const stopLookupUrl = `http://api.sl.se/api2/typeahead.json?key=${stopLookupKey}&searchstring=alby&stationsonly=true`;

fetch(departureUrl, {
  mode: "no-cors",
})
.then((response) => {
return response.json();
})
.then((data) => {
console.log(data);
});


