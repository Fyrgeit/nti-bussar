function getDepartures() {
  const resRobotKey = "b4ef13f2-27ef-4134-a6f4-9b322e9c8f77";
  const stationID = "740098559";
  const departureURL = `https://api.resrobot.se/v2.1/departureBoard?id=${stationID}&duration=60&format=json&accessId=${resRobotKey}`;
  const stationName = "Odenplan";
  const lookupURL = `https://api.resrobot.se/v2.1/location.name?input=${stationName}&format=json&accessId=${resRobotKey}`;

  let mainElement = document.getElementById("main");

  let departures = [];

  moment.locale("sv");

  fetch(departureURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let rawDeps = data.Departure;

      rawDeps.forEach((element) => {
        if (
          (element.name == "Länstrafik - Buss 53" ||
            element.name == "Länstrafik - Buss 61") &&
          element.directionFlag == "1"
        ) {
          departures.push(element);
        }
      });

      mainElement.innerHTML = "";

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
        if (element.rtTime != undefined) time = element.rtTime;

        newLineElement.innerHTML = line;
        newTimeElement.innerHTML = moment(time, "hh:mm:ss").fromNow();

        newDepartureElement.append(newLineElement);
        newDepartureElement.append(newTimeElement);
        mainElement.append(newDepartureElement);
      }
    });
}
