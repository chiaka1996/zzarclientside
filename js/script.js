const aboutImage = document.querySelector(".aboutImage");
const aboutGrid = document.querySelector(".aboutGrid2");
const meeting = document.querySelector(".meetingListening");
const meetingNotes = document.querySelector(".meetingListeningNotes");
const workProcess = document.querySelector(".workProcess");
const meetingImage = document.querySelector(".meetingImage");
const planning = document.querySelector(".planning");
const plannigNotes = document.querySelector(".planningNotes");
const planningImage = document.querySelector(".planningImage");
const validation = document.querySelector(".validation");
const validationImage = document.querySelector(".validationImage");
const validationNotes = document.querySelector(".validationNotes");
const execution = document.querySelector(".execution");
const executionImage = document.querySelector(".executionImage");
const executionNotes = document.querySelector(".executionNotes");
const feedback = document.querySelector(".feedback");
const feedbackNotes = document.querySelector(".feedbackNotes");
const feedbackImage = document.querySelector(".feedbackImage");





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

	const workProcessScroller = (container, imageContainer, notesContainer, initialNotesClass, secondNotesClass, initialImageClass, secondImageClass) => {

	const halfOfMeting = container.offsetHeight/2;
	const meetingSlideInAt = (window.scrollY + window.innerHeight)- halfOfMeting;
	const meetingOffsetTop  = workProcess.offsetTop + container.offsetTop;
	const imageBottom = meetingOffsetTop + container.offsetHeight;
    const isHalfShownMeeting = meetingSlideInAt > meetingOffsetTop;
	const isNotScrolledPastMeeting = window.scrollY < imageBottom;

	if(isHalfShownMeeting && isNotScrolledPastMeeting) {
		notesContainer.classList.remove(initialNotesClass);
		notesContainer.classList.add(secondNotesClass);
		imageContainer.classList.remove(initialImageClass);
		imageContainer.classList.add(secondImageClass);

		
	}
	else{
		notesContainer.classList.remove(secondNotesClass);
		notesContainer.classList.add(initialNotesClass);
		imageContainer.classList.add(initialImageClass);
		imageContainer.classList.remove(secondImageClass);
	} 

	};

	const scroller = () => {
	const halfOfAboutImage = aboutImage.offsetHeight/2;
	const aboutImageSlideInAt = (window.scrollY + window.innerHeight)- halfOfAboutImage;
    const aboutImageBottom = aboutImage.offsetTop + aboutImage.offsetHeight;
    const isHalfShownAbout = aboutImageSlideInAt > aboutImage.offsetTop;
	const isNotScrolledPastAbout = window.scrollY < aboutImageBottom;

	if(isHalfShownAbout && isNotScrolledPastAbout) {
		aboutImage.classList.add('aboutImages');
		aboutGrid.classList.add('aboutGridTransform');
	}
	else{
		aboutImage.classList.remove('aboutImages');
		aboutGrid.classList.remove('aboutGridTransform');
	}

	workProcessScroller(meeting, meetingImage, meetingNotes, "meetingListeningNotes", "meetingListeningNotes2", "meetingImage", "meetingImage2");
	workProcessScroller(planning, planningImage, plannigNotes, "planningNotes", "planningNotes2", "planningImage", "planningImage2");
	workProcessScroller(validation, validationImage, validationNotes, "validationNotes", "validationNotes2", "validationImage", "validationImage2");
	workProcessScroller(execution, executionImage, executionNotes, "executionNotes", "executionNotes2", "executionImage", "executionImage2");
	workProcessScroller(feedback, feedbackImage, feedbackNotes, "feedbackNotes", "feedbackNotes2", "feedbackImage", "feedbackImage2");
		
};

 window.addEventListener('scroll', debounce(scroller));

 