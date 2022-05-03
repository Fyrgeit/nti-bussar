/*
const stopLookupKey = "6c0ea6a5673d479b99c6287e75f0c15e";
const stopLookupUrl = `https://api.sl.se/api2/typeahead.json?key=${stopLookupKey}&searchstring=åkersberga&stationsonly=true`;
const departureKey = "8ade30c6140f4c08b5ac38690f524819";
const departureUrl = `https://api.sl.se/api2/realtimedeparturesv4.json?key=${departureKey}&siteid=9662&timewindow=30`;
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
*/
function getDepartures() {

  const resRobotKey = "b4ef13f2-27ef-4134-a6f4-9b322e9c8f77";
  const stationID = "740046062"
  const departureURL = `https://api.resrobot.se/v2.1/departureBoard?id=${stationID}&duration=60&format=json&accessId=${resRobotKey}`;
  const stationName = "Tegnérgatan"
  const lookupURL = `https://api.resrobot.se/v2.1/location.name?input=${stationName}&format=json&accessId=${resRobotKey}`;
  
  let mainElement = document.getElementById("main");
  
  let departures = [];
  
  moment.locale('sv');
  
  fetch(departureURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let rawDeps = data.Departure;
    
    rawDeps.forEach(element => {
      if (element.directionFlag == "2") {
        departures.push(element);
      }
    });

    mainElement.innerHTML = '';
    
    for (let index = 0; index < Math.min(departures.length, 5); index++) {
      const element = departures[index];
      
      let newDepartureElement = document.createElement("div");
      newDepartureElement.classList.add("departure");
      let newLineElement = document.createElement("p");
      newLineElement.classList.add("line");
      let newTimeElement = document.createElement("p");
      newTimeElement.classList.add("time");
      
      let line = element.Product[0].line;
      let time = element.time;
      if (element.rtTime != undefined)
      time = element.rtTime; 
      
      newLineElement.innerHTML = line;
      newTimeElement.innerHTML = moment(time, "hh:mm:ss").fromNow();
      
      newDepartureElement.append(newLineElement);
      newDepartureElement.append(newTimeElement);
      mainElement.append(newDepartureElement);
    }
  });
}

/*
fetch(lookupURL)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(`Lookup, (${stationName}):`);
  console.log(data.stopLocationOrCoordLocation[1].StopLocation.extId);
})
*/