const video = document.querySelector(".video");
const videoButton = document.querySelector(".video_button");
const control = [];
control.push(video, videoButton);
console.log(video);
console.log(videoButton);
console.log(control);

// function playVideo(media) {
//     media.play();
// }

// function pauseVideo(media) {
//     media.pause();
// }

control.forEach(function(element) {
    element.addEventListener("click", function(e) {
        video.classList.toggle("pause")
        videoButton.classList.toggle("pause");
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    })
    element.addEventListener("mouseover", function(e) {
        videoButton.classList.add("onmouse");
    })
    element.addEventListener("mouseout", function(e) {
        videoButton.classList.remove("onmouse");
    })
})

