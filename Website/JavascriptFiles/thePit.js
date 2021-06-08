addEventListener('click', zoomin);

function zoomin() {
	var element_by_ID = document.getElementById("pit");
	var initial_width = element_by_ID.clientWidth;
	var initial_height = element_by_ID.clientHeight;
	element_by_ID.style.width = (initial_width + 500) + "px";
	element_by_ID.style.height = (initial_height + 500) + "px";
	element_by_ID.style.transition = "width 0.25s ease";
	element_by_ID.style.transition = "height 0.25s ease";
}

addEventListener('click', zoomout);

function zoomout() {

	var element_by_ID = document.getElementById("");
	var current_width = element_by_ID.clientWidth;
	var current_height = element_by_ID.clientHeight;
	element_by_ID.style.width = (initial_width - 30) + "px";
	element_by_ID.style.height = (initial_height - 30) + "px";
	return;
}