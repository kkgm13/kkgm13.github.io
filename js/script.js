//Slide Show JavaScript
var slideIndex = 0;
showSlides();

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	
	for (i = 0; i < slides.length; i = i + 1){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length){
		slideIndex = 1;
	}
	slides[ slideIndex - 1 ].style.display = "block";
	setTimeout(showSlides, 7500);
}

//Top Button 
window.onScroll = function(){
	scrollFunction()
};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}


function topFucntion(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}