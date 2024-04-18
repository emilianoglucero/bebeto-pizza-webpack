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
      "./dibuja//assetsimg/espert-min.png",
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
function saveMyCanvas() {
  if (!confirm("seguro que queres publicar tu dibujo??¿")) return !1;
  for (
    var e = prompt("firma la obra ! podes poner solamente hasta 3 caracteres");
    3 < e.length;

  ) {
    alert("acordate que tenes que poner 3 o menos caracteres/palabras/cosas");
    e = prompt("firma la obra ! podes poner hasta solamente 3 caracteres");
  }
  $.ajax({
    method: "POST",
    url: "upload.php",
    data: { photo: photo, author: e },
  }),
    alert("tu dibujo ya fue guardado y sera expuesto por un tiempito?"),
    setTimeout(function () {
      location.reload();
    }, 2e3);
}
$(window).ready(function () {
  $("#loadingDibuja").hide();
});
