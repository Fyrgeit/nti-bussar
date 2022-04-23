const apikey = "8ade30c6140f4c08b5ac38690f524819";
const apiUrl = `http://api.sl.se/api2/realtimedeparturesv4.json?key=${apikey}&siteid=9181&timewindow=30`;

fetch(apiUrl, {
  mode: "no-cors",
})
  .then((response) => {
    console.log("response.type=" + response.type);
    var clonedResponse = response.clone();
    // console.log(clonedResponse.text());
    return clonedResponse.text();
  })
  .then((data) => {
    console.log(data ? JSON.parse(data) : {});
  });

//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
