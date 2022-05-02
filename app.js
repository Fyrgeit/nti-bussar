/*
const stopLookupKey = "6c0ea6a5673d479b99c6287e75f0c15e";
const stopLookupUrl = `https://api.sl.se/api2/typeahead.json?key=${stopLookupKey}&searchstring=åkersberga&stationsonly=true`;
const departureKey = "8ade30c6140f4c08b5ac38690f524819";
const departureUrl = `https://api.sl.se/api2/realtimedeparturesv4.json?key=${departureKey}&siteid=9662&timewindow=30`;
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
 */

const resRobotKey = "b4ef13f2-27ef-4134-a6f4-9b322e9c8f77";
var stationID = "740021712"
const departureURL = `https://api.resrobot.se/v2.1/departureBoard?id=${stationID}&format=json&accessId=${resRobotKey}`;
var stationName = "Sabbatsberg"
const lookupURL = `https://api.resrobot.se/v2.1/location.name?input=${stationName}&format=json&accessId=${resRobotKey}`;

const bodyElement = document.getElementById("body");
let departures;

fetch(departureURL)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log("Departures:");
  console.log(data.Departure);
  departures = data.Departure;
})

fetch(lookupURL)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(`Lookup, (${stationName}):`);
  console.log(data.stopLocationOrCoordLocation[0].StopLocation.extId);
})

let departureElement = document.createElement("p");
if (departures != null) { 
  departureElement.innerHTML = departures[0].direction;
}
bodyElement.append(departureElement);