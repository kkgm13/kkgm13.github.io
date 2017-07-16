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
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 7500);
}