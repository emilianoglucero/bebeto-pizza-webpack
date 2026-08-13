import "./static/css/main.06d46a1d.css";
import "./photo-bg.css";

// Fullscreen flipbook background: downscaled copies of the page's 56
// screenshots flash one by one in a loop (speed lives in --bg-loop-duration
// in photo-bg.css). The animation stays paused until every image is decoded
// so the loop never shows blank frames; until then the first image is shown.
const TOTAL_SCREENSHOTS = 56;

const bg = document.createElement("div");
bg.id = "photo-bg";
bg.setAttribute("aria-hidden", "true");

const images = [];
for (let i = 1; i <= TOTAL_SCREENSHOTS; i++) {
  const img = document.createElement("img");
  img.src = `/assets/screenshots-bg/Screenshot${i}.webp`;
  img.alt = "";
  img.style.animationDelay = `calc(var(--bg-loop-duration) / ${TOTAL_SCREENSHOTS} * ${
    i - 1
  })`;
  bg.appendChild(img);
  images.push(img);
}

document.body.prepend(bg);

Promise.allSettled(images.map((img) => img.decode())).then(() => {
  bg.classList.add("ready");
});
