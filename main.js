const slider = document.getElementById("range");
const lengthIndicator = document.querySelector(".length-indicator");

lengthIndicator.innerHTML = slider.value;

slider.addEventListener("input",()=>{
	const indicatorValue = slider.value;
	lengthIndicator.innerHTML = indicatorValue;
})