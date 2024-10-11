const tempC = document.getElementById(`tempC`);
const tempF = document.getElementById(`tempF`);
const humidity = document.querySelector(`.humidity`);
const wind = document.querySelector( `.wind`);
const locate = document.getElementById(`locate`);
const city = document.getElementById(`city`);
const displaycloudCover = document.getElementById(`cloudCover`)
const weatherImage= document.getElementById(`weatherImage`);
async function weatherApp() {
  const cityName = document.getElementById(`cityName`).value;
  const apiResponse = await fetch(`https://wttr.in/${cityName}?format=j1`);
  const data = await apiResponse.json();
  const currentData = (data.current_condition[0]);
  const nearest_area = data.nearest_area[0];
  locate.textContent =  `${nearest_area.areaName[0].value}  ${nearest_area.region[0].value}, ${nearest_area.country[0].value}`
  
  tempC.textContent = `${currentData.temp_C}`;
  tempF.textContent = `${currentData.temp_F}`;
  humidity.textContent =`${currentData.humidity}%`;
  wind.textContent = `${currentData.windspeedKmph}Kmph`;
  city.textContent = `${nearest_area.region[0].value}`





  const cloudCover = Number(currentData.cloudcover);
  displaycloudCover.textContent=`Cloud Cover ${cloudCover}%`
  let cloudCode = null;
  switch(true){
    case (cloudCover<=7):
      cloudCode=1;
      break;
    case (cloudCover>7 && cloudCover<=32):
      cloudCode=2;
      break;
    case (cloudCover>32 && cloudCover<=70):
      cloudCode=3;
      break;
    case (cloudCover>70 && cloudCover<=95):
      cloudCode=4;
      break;
    case (cloudCover>95 && cloudCover<=100):
      cloudCode=5;
      break;
    default:
      cloudCode=1;
      break;
  }

weatherImage.src = `images/weatherIcons/${cloudCode}.svg`;
}
