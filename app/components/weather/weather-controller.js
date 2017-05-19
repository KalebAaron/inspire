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

    template += `
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-2 col-sm-offset-10 well weatherWell">
		<div class="temperatures">
	<button type="button" value="Fahrenheit" onclick=app.controllers.weatherController.drawF(weather)>Fahrenheit</button>
	<button type="button" value="Celcius" onclick=app.controllers.weatherController.drawC(weather)>Celcius</button>
	<h4>Today's High: ${weather.main.temp_max}<br> 
		Today's Low: ${weather.main.temp_min}</h4>
		</div>
		</div>
		</div>
		</div>
    
    `
    todaysWeather.innerHTML = template
  }

this.drawF = function (weather){
	weatherService.getWeather(function(weather){ this.drawF(weather)})
	var todaysWeather = document.getElementById("weather")
	var high = parseFloat(myWeather.weather.main.temp_max)
	var fHigh = ((high-273.15)*1.8)+32
	var low = parseFloat(myWeather.weather.main.temp_min)
	var fLow = ((low-273.15)*1.8)+32
	var template = ''

    template += `<h4 class='temperatures'>Today's High: ${fHigh}<br> 
		Today's Low: ${fLow}</h4>
    
    `
		todaysWeather.innerHTML = template
}

this.drawC = function(weather){
	var todaysWeather = document.getElementById("weather")
	var high = parseFloat(weather.main.temp_max)
	var cHigh = (high-273.15)
	var low = parseFloat(weather.main.temp_min)
	var cLow = (low-273.15)
	var template = ''

    template += `<h4 class='temperatures'>Today's High: ${cHigh}<br> 
		Today's Low: ${cLow}</h4>
    
    `
		todaysWeather.innerHTML = template
}


}
