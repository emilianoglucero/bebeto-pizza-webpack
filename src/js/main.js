//preloading gif https://stackoverflow.com/questions/22131821/how-can-i-display-a-loading-gif-until-an-entire-html-page-has-been-loaded -->
$(window).ready(function () {
  $("#loading").hide();
});

//https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
//

setInterval(function () {
  $("#ismobile")
    .animate({ backgroundColor: "cyan" }, 90)
    .animate({ backgroundColor: "fuchsia" }, 90)
    .animate({ backgroundColor: "yellow" }, 90)
    .animate({ backgroundColor: "lime" }, 90);
}, 200);

setInterval(function () {
  $("#mobile-title")
    .animate({ color: "green" }, 90)
    .animate({ color: "orange" }, 100)
    .animate({ color: "blue" }, 100)
    .animate({ color: "yellow" }, 100);
}, 300);

setInterval(function () {
  $("#mobile-title2")
    .animate({ color: "yellow" }, 90)
    .animate({ color: "blue" }, 100)
    .animate({ color: "green" }, 100)
    .animate({ color: "orange" }, 100);
}, 100);

setInterval(function () {
  $("#mobile-title3")
    .animate({ color: "#ee00ff" }, 90)
    .animate({ color: "blue" }, 100)
    .animate({ color: "green" }, 100)
    .animate({ color: "orange" }, 100);
}, 400);

setInterval(function () {
  $("#mobile-title4")
    .animate({ color: "yellow" }, 90)
    .animate({ color: "#ee00ff" }, 100)
    .animate({ color: "green" }, 100)
    .animate({ color: "orange" }, 100);
}, 700);

var vid = document.getElementById("bgvid");
//var pauseButton = document.querySelector("#polina button");

if (window.matchMedia("(prefers-reduced-motion)").matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener("ended", function () {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
});
