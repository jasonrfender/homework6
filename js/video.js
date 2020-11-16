var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

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
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.toggle("oldTime");

});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.toggle("oldTime");

});

