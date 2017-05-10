function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		draw(weather)
		//What can you do with this weather object?
	})

function draw(weather){
	var todaysWeather = document.getElementById("weather")
	var template = ''

    template += `<h1>Today's High: ${weather.main.temp_max} Today's Low: ${weather.main.temp_min}</h1>
    
    `
    todaysWeather.innerHTML = template
  }





}
