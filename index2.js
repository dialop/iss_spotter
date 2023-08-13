
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');
fetchMyIP()
  .then(response => {
    const data = JSON.parse(response);
    console.log('Fetched IP address:', data.ip);
  })
  .catch(error => {
    console.log("Fetching IP address didn't work!", error);
  });
  

fetchMyIP()
  .then(response => {
    const data = JSON.parse(response);
    const ip = data.ip;
    return fetchCoordsByIP(ip);
  })
  .then(response => {
    const data = JSON.parse(response);
    console.log('Fetched Coordinates:', { latitude: data.latitude, longitude: data.longitude });
  })
  .catch(error => {
    console.log("Fetching coordinates didn't work!", error);
  });


fetchMyIP()
  .then(response => {
    const data = JSON.parse(response);
    const ip = data.ip;
    return fetchCoordsByIP(ip);
  })
  .then(response => {
    const data = JSON.parse(response);
    const coords = { latitude: data.latitude, longitude: data.longitude };
    return fetchISSFlyOverTimes(coords);
  })
  .then(response => {
    const data = JSON.parse(response);
    console.log('Fetched ISS Flyover Times:', data.response);
  })
  .catch(error => {
    console.log("Fetching ISS flyover times didn't work!", error);
  });

const { nextISSTimesForMyLocation } = require('./iss_promised');
  

nextISSTimesForMyLocation()
  .then(passTimes => {
    console.log('Fetched ISS Pass Times:', passTimes);
  })
  .catch(error => {
    console.log("It didn't work:", error.message);
  });