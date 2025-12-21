function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value.trim();
  
    if (!city) {
      showMessage('Please enter a city name');
      return;
    }
  
    const apiKey = 'dd30f5bde88503e53a9210f21692b57d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('weatherInfo').innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        if (error.cod === "404") {
          showMessage('City not found. Please check the name.');
        } else {
          showMessage('Something went wrong. Please try again.');
        }
      });
  }
  
  function showMessage(msg) {
    document.getElementById('weatherInfo').innerHTML = `<p>${msg}</p>`;
  }
  
  document
    .getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);
  