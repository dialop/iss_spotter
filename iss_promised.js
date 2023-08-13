const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};
  
const fetchCoordsByIP = function(ip) {
  const url = `https://ipwhois.app/json/${ip}`;
  
  return request(url);
};

const fetchISSFlyOverTimes = function(coords) {
  const { latitude, longitude } = coords;
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  
  return request(url);
};
  
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
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
      return data.response;
    });
};
   

  
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };

  