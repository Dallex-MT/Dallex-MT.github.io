const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
  }
  
  const card = document.getElementById('card')
  
  const tempImg = document.getElementById('temp-img');
  const temp = document.getElementById('temp');
  const weather = document.getElementById('weather');
  const range = document.getElementById('range');
  
  search("Baños");
  
  function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = './img/temp-mid.png';
    if (temp > 26) {
      src = './img/temp-high.png';
    } else if (temp < 20) {
      src = './img/temp-low.png';
    }
    tempImg.src = src;
  }
  
  async function search(query) {
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
      const data = await response.json();
      temp.innerHTML = `${toCelsius(data.main.temp)} °C`;
      weather.innerHTML = data.weather[0].description;
      range.innerHTML = `${toCelsius(data.main.temp_min)} °C / ${toCelsius(data.main.temp_max)} °C`;
      updateImages(data);
    } catch (err) {
      console.log(err);
      alert('Cargando Clima de la Ciudad');
    }
  }
  
  function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }
  