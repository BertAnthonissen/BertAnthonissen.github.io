function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

window.onload = function() {
	var quote = document.getElementById("quote");
	//img.setAttribute("style", "position:absolute;");
	//img.setAttribute("src", "/Media/Pictures/placeholder.png");
    //img.setAttribute("alt", "picture");
	//document.body.appendChild(quote);
	var xy = getRandomPosition(quote);
	quote.style.top = xy[0] + 'px';
	quote.style.left = xy[1] + 'px';
}