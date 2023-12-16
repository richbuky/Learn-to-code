let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
console.log(weather);
weather["paris"].temp = Math.round(weather["paris"].temp);
console.log(weather);
weather["tokyo"].temp = Math.round(weather["tokyo"].temp);
console.log(weather);
weather["lisbon"].temp = Math.round(weather["lisbon"].temp);
console.log(weather);
weather["san francisco"].temp = Math.round(weather["san francisco"].temp);
console.log(weather);

let city = prompt("Enter a city..!");
city = city.toLowerCase();
city = city.trim();
if (weather[city] !== undefined) {
  let Temperature = weather[city].temp;
  let Humidity = weather[city].humidity;
  let CTemperature = Math.round(Temperature);
  let FTemperature = Math.round((Temperature * 9) / 5 + 32);
  alert(
    `It is currently ${CTemperature}°C (${FTemperature}°F) in ${city} with a humidity of ${Humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.timeanddate.com/weather/search.html+${city}`
  );
}
