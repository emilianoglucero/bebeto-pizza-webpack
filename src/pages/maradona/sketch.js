//ocultamos el boton de mostrar muchos videos en chromw porque es cheto y no funca
var is_chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

// $(document).ready(function () {
//   if (is_chrome) {
//     console.log("no uses chrome careta, abrí firefox");
//     //document.getElementById( 'videitos' ).style.display = 'none';
//     $("#videitos").hide();
//   } else {
//     console.log("otro navegador");
//     $("#videitos").show();
//     //document.getElementById( 'videitos' ).style.display = 'none';
//   }
// });
//imagenes a ser cargadas en el canvas de forma dinamica
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;

let song;

let clickSound;
let button;

//imagen del puntero del mouse
var mouseImg;

function triggerActions() {
  console.log("triggerActions");
  // trigger sound
  clickSound.play();
  // trigger song
  song.play();
  // triggerr popup
  popupWindow();
}

function touchStarted() {
  triggerActions();
}

function mousePressed() {
  triggerActions();
}

function preload() {
  //randomNumber = Math.floor((Math.random() * 4));
  //arrayOfImg = ["base_image.jpg", "1F9.jpg", "130805-mgmt-your-life-is-a-lie-video.jpg"];
  img2 = loadImage("./maradona/assets/img/diego-maradona-51-years.jpg");
  img1 = loadImage("./maradona/assets/img/maradonabilardo.jpg");
  img3 = loadImage("./maradona/assets/img/maradonablondie.jpg");
  img4 = loadImage("./maradona/assets/img/maradonacopola.jpg");
  img5 = loadImage("./maradona/assets/img/maradonadroga.jpg");
  img6 = loadImage("./maradona/assets/img/maradonagabi.jpg");
  img8 = loadImage("./maradona/assets/img/maradonahipster.jpg");
  img7 = loadImage("./maradona/assets/img/maradonaloco.jpg");
  img9 = loadImage("./maradona/assets/img/maradonapapanoel.jpg");
  img10 = loadImage("./maradona/assets/img/maradonarodrigo.jpg");
  img11 = loadImage("./maradona/assets/img/maradonaypele.jpg");
  mouseImg = loadImage("./maradona/assets/img/diego-argentinos.png");

  // //carga el sonido de fondo
  song = loadSound("./maradona/assets/music/para-siempre-diego.mp3");
  //carga el sonido al hacer click
  clickSound = loadSound("./maradona/assets/music/chupen.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  //setInterval ejecuta una funcion cada cierto intervalo de tiempo
  // var intervalID = window.setInterval(scrollDown, 150);
  // var intervalID2 = window.setInterval(popupWindow, 200);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  //sube las fotos de forma aleatoria,hay que buscar el tutorial e indexarlo
  imageMode(CENTER);
  image(img1, random(width), random(height), random(25, 900), random(25, 500));
  image(img2, random(width), random(height), random(25, 150), random(25, 150));
  image(img3, random(width), random(height), random(25, 150), random(25, 150));
  image(img4, random(width), random(height), random(25, 150), random(25, 150));
  image(img5, random(width), random(height), random(25, 150), random(25, 150));
  image(img6, random(width), random(height), random(25, 150), random(25, 150));
  image(img7, random(width), random(height), random(25, 150), random(25, 150));
  image(img8, random(width), random(height), random(25, 150), random(25, 150));
  image(img9, random(width), random(height), random(25, 150), random(25, 150));
  image(img10, random(width), random(height), random(25, 150), random(25, 150));
  image(img11, random(width), random(height), random(25, 150), random(25, 150));

  // boton que abre ventanitas con frases del diego
  // button = createButton(
  //   "hola, como andamos? hace clik o tocá donde quieras, recuerda sos una persona libre"
  // );
  // button.position(100, 100);
  // button2 = createButton("deshabilita el bloqueador de popups");
  // button2.position(100, 120);
  // button3 = createButton("y desmutea esta pagina");
  // button3.position(100, 137);
  // button.mousePressed(popupWindow);
  // button.mousePressed(song.play);

  // button2.mousePressed(popupWindow);
  // button2.mousePressed(song.play);

  // button3.mousePressed(popupWindow);
  // button3.mousePressed(song.play);

  // button.mousePressed(videos);

  //llena el cursor cuando apretas
  if (mouseIsPressed) {
    triggerActions();
  } else {
    fill(255);
  }

  //imagen en el puntero del mouse
  image(mouseImg, mouseX, mouseY, 80, 80);
}

function scrollDown() {
  var down = random(-10, 700);
  var up = random(-700, 10);
  window.scrollBy(0, down);
  window.scrollBy(0, up);
}

function popupWindow() {
  const diegoImages = [
    "https://pbs.twimg.com/media/GHQwEoTXIAALJWE?format=jpg&name=small",
    "https://pbs.twimg.com/media/GHQuzlYWUAASISf?format=jpg&name=large",
    "https://pbs.twimg.com/media/GHM0wuyXEAA8Be7?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/GHMzrAhWoAAXLDd?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GHMNcGXXwAAjH7N?format=jpg&name=large",
    "https://pbs.twimg.com/media/DuNaF9NW0AEAGyJ?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GF66K8TXcAErhVL?format=jpg&name=small",
    "https://pbs.twimg.com/media/GEiTU5UbgAA7wF5?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/GBFCkSsX0AE1CfT?format=jpg&name=medium",
    "https://pbs.twimg.com/media/F9yGnHCXMAAUOdT?format=jpg&name=large",
    "https://pbs.twimg.com/media/F8Pc8xnXcAAQmoi?format=jpg&name=small",
    "https://pbs.twimg.com/media/F7r2I4Oa0AAbGIl?format=jpg&name=medium",
    "https://pbs.twimg.com/media/F7DIu-XWUAAhK7H?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/F69DUSjW0AA5x1I?format=jpg&name=medium",
    "https://pbs.twimg.com/media/F6BMNAbWYAAJs-i?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/F6BB9rZXMAABMGW?format=jpg&name=small",
    "https://pbs.twimg.com/media/GQSormWWAAAP7JQ?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/GNFhKGMWkAAmjvo?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/GILvUwBX0AAMki6?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/GHWKc46WQAAr4iY?format=jpg&name=large",
    "https://pbs.twimg.com/media/GCT2X3oXAAA_4Xt?format=jpg&name=medium",
    "https://pbs.twimg.com/media/F7SVwRRXUAATbWT?format=jpg&name=large",
    "https://pbs.twimg.com/media/FpoSRrKWcAERO5j?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fo9B9jLWYB0fQ4P?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/FnHPbwwXEAADQyW?format=jpg&name=small",
    "https://pbs.twimg.com/media/Fgqpi7AXoAAbo-C?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/Fyg70OAWAAEc8Ly?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FyfAOA0XoAAo-4w?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/FyeXBTtX0AIh0Ce?format=jpg&name=large",
    "https://pbs.twimg.com/media/Fydt3lTWAAAuQOY?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FydgFqiWAAI8C4L?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FybJB4xWwAUAFxs?format=jpg&name=large",
    "https://pbs.twimg.com/media/FyaSGIAXwAAAZx2?format=jpg&name=medium",
    "https://pbs.twimg.com/media/FyX7CITXwAA4048?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/FyVj-KmWAAEaH-n?format=jpg&name=small",
    "https://pbs.twimg.com/media/FySjtdJXoAAfx1e?format=jpg&name=small",
    "https://pbs.twimg.com/media/FyPIBRpWYAA4UL4?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/FyORDWkWYAAv0Bl?format=jpg&name=small",
    "https://pbs.twimg.com/media/FyMjPcoWIAAX7rl?format=png&name=900x900",
    "https://pbs.twimg.com/media/FyLsQg2X0AAYT7O?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/FyJi7XsWAAAuPsg?format=png&name=900x900",
    "https://pbs.twimg.com/media/FyDUrJZWIAQJl6g?format=jpg&name=medium",
    "https://pbs.twimg.com/media/Fx8BwTGWAAU653R?format=jpg&name=900x900",
    "https://pbs.twimg.com/media/Fx3TrXOWwAAmbvp?format=jpg&name=medium",
  ];

  const randomDiegoImage =
    diegoImages[Math.floor(Math.random() * diegoImages.length)];
  window.open(randomDiegoImage, "_blank", "height=1080,width=1080");
}

//new tabs con videos del diego
function videos() {
  window.open("https://www.youtube.com/watch?v=ZLr13GElY9U"); //¡Tremendo recuerdo! El Insoportable con Diego Maradona - Videomatch 98
  window.open("https://www.youtube.com/watch?v=DZDrBaSGq_Y"); //Mi vida junto a Maradona - Peter Capusotto y sus videos - Temporada 11
  window.open("https://www.youtube.com/watch?v=ca6i6ViSVOM"); //Maradona - Volviendo
  window.open("https://www.youtube.com/watch?v=WSL_vjcRumY"); //Maradona, enojado y tirando bombas: "Que me limpien la AFA, hasta hay cuadros de Grondona"
  window.open("https://www.youtube.com/watch?v=auVgp3HcYaY"); //Diego Armando Maradona bailando Psy Trance "Vini Vici - The Tribe"
  window.open("https://www.youtube.com/watch?v=kAJYpJx9uu0"); //Diego Maradona indignado con la organización del mundial y el sorteo: "no vengo nunca mas"
  window.open("https://www.youtube.com/watch?v=KLylty7mZys"); //El saludo de Maradona por Navidad
  window.open("https://www.youtube.com/watch?v=y9qveBt1Q6E"); //MARADONA - CHARLY GARCIA, (entrevista 2004)
  window.open("https://www.youtube.com/watch?v=o_Iu_Gm7ylI"); //El saludo navideño de Maradona con "palito" incluído para Macri
  window.open("https://www.youtube.com/watch?v=JW2eWqtuGgc"); //Maradona a Ronaldo: "Vamos a sacarnos una foto con Putin, boludo"
  window.open("https://www.youtube.com/watch?v=D61bnCN7q48"); //El dia que Maradona destruyo al Bayern Munich (SemiFinal - 1989)
  window.open("https://www.youtube.com/watch?v=8NI5oTTW_is"); //Diego Maradona - La Mano de Dios (Maradona by Kusturica) Full HD
  window.open("https://www.youtube.com/watch?v=cS1YjB0FLiA"); //Imperdible cruce entre Maradona y Ruggeri en un Boca-San Lorenzo. Así lo revivió el "Cabezón"
  window.open("https://www.youtube.com/watch?v=XZMsqKOJ3Y8"); //Te mostramos los lujosos autos de Diego Maradona
  window.open("https://www.youtube.com/watch?v=kF8-CjbZCGI"); //Diego maradona bailando "El baile de la gambeta"
  window.open("https://www.youtube.com/watch?v=ZLr13GElY9U"); //¡Tremendo recuerdo! El Insoportable con Diego Maradona - Videomatch 98
  window.open("https://www.youtube.com/watch?v=JY-9zqRFpn8"); //Maradona acabó borracho en su cena de homenaje en Nápoles
  window.open("https://www.youtube.com/watch?v=f3Sp75Dphrs"); //Maradona le responde a Dani Alves es un Boludo.
  window.open("https://www.youtube.com/watch?v=QtMgJAunt9U"); //Maradona - Magia - Magic of Maradona
  window.open("https://www.youtube.com/watch?v=lf4bl68Wjm8"); //Live is Life - Diego Maradona - undiego.com
  window.open("https://www.youtube.com/watch?v=kF8-CjbZCGI"); //Diego maradona bailando "El baile de la gambeta"
  window.open("https://www.youtube.com/watch?v=fliPXGL9VXI"); //Cuando Maradona jugó en el barro para ayudar a un niño enfermo
  window.open("https://www.youtube.com/watch?v=nCbjK4259RM"); //NINIOLA - MARADONA (OFFICIAL VIDEO)
  window.open("https://www.youtube.com/watch?v=HvHCp30OGCA"); //Diego Maradona entrenando en la estancia El sosiego, en Arrecifes 1992
  window.open("https://www.youtube.com/watch?v=WAQJJBdcxXI"); //La Bronca de Maradona contra Verón Durante el Partido Unidos por la Paz 2016
  window.open("https://www.youtube.com/watch?v=gpgE_Hx15GE"); //Mar de fondo 2004 Tyc Sports Ortega,Maradona y el Turco Garcia.
  window.open("https://www.youtube.com/watch?v=ZLr13GElY9U"); //¡Tremendo recuerdo! El Insoportable con Diego Maradona - Videomatch 98
  window.open("https://www.youtube.com/watch?v=f3Sp75Dphrs"); //El mejor vídeo de Diego Maradona
  window.open("https://www.youtube.com/watch?v=AlCzdmYmpIY"); //La última vez que Diego Armando Maradona jugó por Barcelona - Final Copa del Rey 1984
  window.open("https://www.youtube.com/watch?v=0Q7mOemRO20"); //Minguito con Maradona - 1987
  window.open("https://www.youtube.com/watch?v=YX28tRbKdAs"); //Diego Maradona vs Juan Sebastian Veron partita della pace 2016
  window.open("https://www.youtube.com/watch?v=lf4bl68Wjm8"); //Live is Life - Diego Maradona - undiego.com
  window.open("https://www.youtube.com/watch?v=_QhnrkmTJlY"); //Cuando Ruggeri y Maradona conocieron a Nannis 01 07
  window.open("https://www.youtube.com/watch?v=jyekACZBMeU"); //USA 1994 - Gol de Maradona a Grecia relatado por Victor Hugo Morales
}
