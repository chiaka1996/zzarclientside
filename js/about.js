const communication = document.querySelector(".communication");
const catering = document.querySelector(".catering");
const relationship = document.querySelector(".relationship");
const convenience = document.querySelector(".convenience");

function debounce(func, wait=20, immediate=true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const scroller = (divName, className, oldClassName) => {
	const halfOfcommunication = divName.offsetHeight/2;
    const communicationSlideInAt = (window.scrollY + window.innerHeight)- halfOfcommunication;
    const communicationBottom = divName.offsetTop + divName.offsetHeight;
    const isHalfShownCommunication = communicationSlideInAt > divName.offsetTop;
	const isNotScrolledPastCommunication = window.scrollY < communicationBottom;

if(isHalfShownCommunication && isNotScrolledPastCommunication) {
	divName.classList.remove(oldClassName);
    divName.classList.add(className);
}
else{
	divName.classList.remove(className);
	divName.classList.add(oldClassName);
}
}

function scrolling(){
	scroller(communication, 'communicationTransform', "communication");
	scroller(catering, "cateringTransform", "catering");
	scroller(relationship, "relationshipTransform", "relationship");
	scroller(convenience, "convenienceTransform", "convenience");
}
window.addEventListener('scroll', debounce(scrolling));
