function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		//console.log('What is the quote', quote)
		draw(quote)
	})

	function draw(quote) {
		quote = JSON.parse(quote)
		var todaysQuote = document.getElementById("quote")
		var template = ''

		template += `<div class = 'container'>
		<div class='row'>
		<div class="col-sm-8 col-sm-offset-2 well quoteWell">
		<h4 class='todaysQuote'>Today's Quote:<br> ${quote.quote}</h4>
		</div>
    </div>
		</div>
    `
		todaysQuote.innerHTML = template
	}


}
