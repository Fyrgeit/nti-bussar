function getDepartures(dir) {
  initLoad();
  
  const resRobotKey = "b4ef13f2-27ef-4134-a6f4-9b322e9c8f77";
  const stationIDs = ["740046062", "740098559"];
  const departureURL = `https://api.resrobot.se/v2.1/departureBoard?id=${stationIDs[dir]}&duration=60&format=json&accessId=${resRobotKey}`;
  const stationName = "Tegnérgatan"
  const lookupURL = `https://api.resrobot.se/v2.1/location.name?input=${stationName}&format=json&accessId=${resRobotKey}`;
  
  let mainElement = document.getElementById("center");
  
  let departures = [];
  
  moment.locale('sv');
  
  fetch(departureURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let rawDeps = data.Departure;

    if (dir == 0) { 
      rawDeps.forEach(element => {
        if (element.directionFlag == "2") {
          departures.push(element);
        }
      });
    }
    else if (dir == 1) {
      rawDeps.forEach((element) => {
        if (
          (element.name == "Länstrafik - Buss 53" ||
            element.name == "Länstrafik - Buss 61") &&
          element.directionFlag == "1"
        ) {
          departures.push(element);
        }
      });
    }

    //console.log(departures);

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
      
      if (element.rtTime != undefined)
        newTimeElement.innerHTML += '*';
      
      newDepartureElement.append(newLineElement);
      newDepartureElement.append(newTimeElement);
      mainElement.append(newDepartureElement);
    }
  });
}

function initLoad() {
  let loadingIcon = document.createElement("img");
  loadingIcon.setAttribute("src", "loading.gif");
  loadingIcon.setAttribute("id", "loading");

  let center = document.getElementById("center");
  center.append(loadingIcon);
}