const apiKey ="d74648f208994221ca90745997d97ebc";
const apiUrl="https://api.openweathermap.org/data/2.5/weather";


const Searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city){
 const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
 if (!response.ok) {
  // Handle error (e.g., city not found)
  alert("City not found. Please try again.");
  return;
}
   const data = await response.json();
 console.log(data);
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
 document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
 document.querySelector(".Wind").innerHTML= data.wind.speed+"km/h";
}

searchbtn.addEventListener("click",()=>{
   const city = Searchbox.value;
   if (city) { // this checks the city is not empty in js empty string shows error this make sure city is not empty
       checkWeather(city);
   } else {
       alert("Please enter a city name.");
   }
})





