var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower Video");
	video.playbackRate *= 0.95;
	console.log("The speed of the video is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video");
	video.playbackRate /= 0.95;
	console.log("The speed of the video is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location ", video.currentTime);
	console.log("Skip 15 seconds");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("The current location of the video is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted === true) {
		video.muted = false;
		console.log("Unmuted the Video");
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		console.log("Muted the Video");
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current volume is", this.value);
	video.volume = this.value / 100;
	// document.querySelector("#volume").innerHTML = this.value + "%"
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	// document.getElementById("player1").classList.add("oldSchool");
	// console.log("Add filter");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	// document.getElementById("player1").classList.remove("oldSchool");
	// console.log("Remove filter");
	video.classList.remove("oldSchool");
});