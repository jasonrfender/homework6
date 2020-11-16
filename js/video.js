var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate *0.9;
	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate *1.1;
	
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime = video.currentTime+5;

});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.muted = !video.muted;

});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Volume");
	video.volume = volumeSlider.value / 100;

});

document.querySelector("#oldTime").addEventListener("click", function() {
	console.log("Old School");
	video.style.filter = "grayscale(100%)";

});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.style.filter = "grayscale(0%)";

});

