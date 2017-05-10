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

		template += `<h1>Today's Quote: ${quote.quote}</h1>
    
    `
		todaysQuote.innerHTML = template
	}


}
