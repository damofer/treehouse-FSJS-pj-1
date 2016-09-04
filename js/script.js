// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var timeoutID;
var quoteList;
getRandomQuote(quoteList);
printQuote();


//this Functions sets the value of our quoteList variable as a slice of the original quotes array and then sort it randomly.
function initQuoteList(){
quoteList = quotes.slice();
quoteList = shuffleArray(quoteList);

}


// Knuth shuffle algorithm , This function shuffles an array  randomly
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/* This function gets the next item in the  quoteList Array and shift the first item.
	Then it renew the array once it has no more items on it- EXTRA CREDITS

*/
function getRandomQuote(quoteList){
	if(quoteList === undefined){
		initQuoteList();
		return 0;
	}
	if(quoteList.length === 1){
		initQuoteList();
	}
	return quoteList.shift();

}



// function that  sets body background-color randomly--EXTRA CREDITS
function randomRGB(){

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	document.body.style.backgroundColor = rgbColor;
}


function printQuote(){
// clear timeOut once it enter this function
 window.clearTimeout(timeoutID);
// get a quote object from  quotes array.
	var quote = getRandomQuote(quoteList);
	var citation='';
	var year ='';
	var tags ='';

// search for optional properties inside object. EXTRA CREDITS
	for( var key in quote){
		//filter the prototype property.
		if (quote.hasOwnProperty(key)) {

			if(key === 'citation'){
				citation ='<span class="citation">'+ quote[key]+ '</span>';

			}
			if(key === 'year'){
				year ='<span class="year">'+ quote[key]+ '</span>';
			}
			if(key === 'tags'){
				tags ='<span class="tags">['+ quote[key].join(', ')+ ']</span>';
			}
    	}
	}
// displays quote's property values in the html.
	var quoteBox = document.getElementById('quote-box');
	quoteBox.innerHTML = '<p class="quote">' + quote.quote + '</p>';
	quoteBox.innerHTML +='<p class="source">'+ quote.source + citation + year + tags  + '</p>';
	randomRGB();
//after executing all the code, it sets a timeout to call the function again - EXTRA CREDITS
	 timeoutID = window.setTimeout(printQuote, 30000);
}