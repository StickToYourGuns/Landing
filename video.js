const video = document.querySelector(".video");
const videoButtonPlay = document.querySelector(".video_button_play");
const videoButtonPause = document.querySelector(".video_button_pause");
const control = [];
control.push(videoButtonPlay, videoButtonPause);
console.log(video);
console.log(videoButtonPlay);
console.log(control);

const bs = document.querySelector(".blackscreen");

control.forEach(function(element) {
    element.addEventListener("click", function(e) {
        video.classList.toggle("pause")
        videoButtonPlay.classList.toggle("pause");
        if (video.paused) {
            video.play();
            bs.classList.remove("hidden")
        } else {
            video.pause();
            bs.classList.add("hidden")
        }
    })
})

control.forEach(function(element) {
    element.addEventListener("mouseover", function(e) {
        videoButtonPause.classList.remove("pause")
        videoButtonPause.style.scale = 1.1;
        videoButtonPlay.style.scale = 1.1;
    })
})

control.forEach(function(element) {
    element.addEventListener("mouseout", function(e) {
        videoButtonPause.classList.add("pause")
        videoButtonPause.style.scale = 1;
        videoButtonPlay.style.scale = 1;
    })
})

