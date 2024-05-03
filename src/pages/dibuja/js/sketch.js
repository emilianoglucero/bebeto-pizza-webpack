var c, photo, images;
function preload() {
  song = loadSound("./dibuja/assets/music/colorea.mp3");
}
function setup() {
  song.loop(),
    (images = [
      "./dibuja/assets/img/delcano-min.png",
      "./dibuja/assets/img/menembw-min.png",
      "./dibuja/assets/img/macribw-min.png",
      "./dibuja/assets/img/lilitabw-min.png",
      "./dibuja/assets/img/larretabw-min.png",
      "./dibuja/assets/img/vidalbw-min.png",
      "./dibuja/assets/img/lavagna-min.png",
      "./dibuja/assets/img/cristinabw-min.png",
      "./dibuja/assets/img/alberto-min.png",
      "./dibuja/assetsimg/espert-min.png",
      "./dibuja/assets/img/centurion-min.png",
    ]),
    (i = Math.floor(11 * Math.random())),
    loadImage(images[i], function (e) {
      image(e, 0, 0);
    }),
    (c = createCanvas(600, 400)).position(350, 100),
    c.id("myCanvas"),
    (col = color(0)),
    (size = strokeWeight(10));

  // Select the divs and set the mouseClicked function
  select("#circle-black").mouseClicked(() => {
    col = color(0, 0, 0);
  });
  select("#circle-blue").mouseClicked(() => {
    col = color(0, 19, 255);
  });
  select("#circle-green").mouseClicked(() => {
    col = color(31, 255, 0);
  });
  select("#circle-purple").mouseClicked(() => {
    col = color(133, 0, 242);
  });
  select("#circle-red").mouseClicked(() => {
    col = color(255, 0, 0);
  });
  // Get the select element and set the changed function
  select("#stroke-width").changed(function () {
    let strokeWidth = this.value();
    size = strokeWeight(strokeWidth);
  });
}
function draw() {
  var e = document.getElementById("myCanvas");
  photo = e.toDataURL("image/jpeg");
}
function mouseDragged() {
  stroke(col), line(mouseX, mouseY, pmouseX, pmouseY);
}
function keyPressed() {
  ("r" != key && "R" != key) || (col = color(255, 0, 0)),
    ("a" != key && "A" != key) || (col = color(0, 19, 255)),
    ("v" != key && "V" != key) || (col = color(31, 255, 0)),
    ("m" != key && "M" != key) || (col = color(133, 0, 242)),
    ("n" != key && "N" != key) || (col = color(0, 0, 0)),
    "1" == key && (size = strokeWeight(1)),
    "2" == key && (size = strokeWeight(5)),
    "3" == key && (size = strokeWeight(10)),
    "4" == key && (size = strokeWeight(20)),
    "5" == key && (size = strokeWeight(30)),
    "6" == key && (size = strokeWeight(40));
}

function savePaintingDetails(author, filename, cloudImagePath) {
  $.ajax({
    method: "POST",
    url: "https://bebeto-pizza-backend.vercel.app/api/userPainting",
    data: {
      paintName: filename,
      artistName: author,
      paintDataUrl: cloudImagePath,
    },
  })
    .done(function (msg) {
      alert("tu dibujo ya fue guardado y sera expuesto por un tiempito?");
      setTimeout(function () {
        location.reload();
      }, 2e3);
    })
    .fail(function (msg) {
      console.log(msg);
      alert("hubo un error al guardar tu dibujo, intenta de nuevo");
    });
}

function saveMyCanvas() {
  if (!confirm("seguro que queres publicar tu dibujo??¿")) return !1;
  for (
    var author = prompt(
      "firma la obra ! podes poner solamente hasta 3 caracteres"
    );
    3 < author.length;

  ) {
    alert("acordate que tenes que poner 3 o menos caracteres/palabras/cosas");
    author = prompt("firma la obra ! podes poner hasta solamente 3 caracteres");
  }
  let canvas = document.getElementById("myCanvas");

  canvas.toBlob(function (blob) {
    var formData = new FormData();
    let date = new Date().toISOString();
    let uniqueId = Math.random().toString(36).substr(2, 9);
    let filename = `${author}_${date}_${uniqueId}.png`;
    const cloudImagePath = `https://storage.googleapis.com/bebeto-pizza-dibuja/dibuja-paintings/${filename}`;
    formData.append("image", blob, filename);
    $.ajax({
      method: "POST",
      url: "https://bebeto-pizza-backend.vercel.app/upload",
      // url: "http://localhost:3000/upload",
      data: formData,
      processData: false,
      contentType: false,
    })
      .done(function (msg) {
        return savePaintingDetails(author, filename, cloudImagePath);
      })
      .fail(function (msg) {
        console.log(msg);
        alert("hubo un error al guardar tu dibujo, intenta de nuevo");
      });
  });
}
$(window).ready(function () {
  $("#loadingDibuja").hide();
});
