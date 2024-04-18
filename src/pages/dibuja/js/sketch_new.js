import { sketch } from "p5js-wrapper";

//preloading gif https://stackoverflow.com/questions/22131821/how-can-i-display-a-loading-gif-until-an-entire-html-page-has-been-loaded -->
$(window).ready(function () {
  $("#loadingDibuja").hide();
});

//variable para guardar el canvas
let c;

//variable para convertir el canvas a base64
let photo;

//array para las imagenes que se van a cargar
let images;

let randomNumber;

let brushColor;
let size;

import delCaño from "../img/delcano-min.png";
import mmmm from "../img/menembw-min.png";
import macri from "../img/macribw-min.png";
import lilita from "../img/lilitabw-min.png";
import larreta from "../img/larretabw-min.png";
import vidal from "../img/vidalbw-min.png";
import lavagna from "../img/lavagna-min.png";
import cristina from "../img/cristinabw-min.png";
import alberto from "../img/alberto-min.png";

sketch.setup = function () {
  //almacenamos todas las imagenes que vamos a mostrar
  images = [
    delCaño,
    mmmm,
    macri,
    lilita,
    larreta,
    vidal,
    lavagna,
    cristina,
    alberto,
  ];

  //le damos a la variable 1 un numero random entre 0 y 16
  randomNumber = Math.floor(Math.random() * 10);

  //cargamos la imagen de fondo
  loadImage(images[randomNumber], function (bg) {
    image(bg, 0, 0);
  });

  //el canvas tiene el mismo size que la imagen
  c = createCanvas(600, 400);

  //posiciona el canvas en el medio
  c.position(350, 100);

  //le asigno un ID al canvas
  c.id("myCanvas");

  //color negro por default
  brushColor = color("black");

  //tamaño de la linea por defecto
  size = strokeWeight(10);
};

sketch.draw = function () {
  //dibuja una linea
  /*if (mouseIsPressed) {
			line(pmouseX, pmouseY, mouseX, mouseY);
		}*/

  //	convierto lo que hay en el canvas en data para poder pasarlo al servidor
  var canvas = document.getElementById("myCanvas");
  photo = canvas.toDataURL("image/jpeg");
};

sketch.mouseDragged = function () {
  stroke(brushColor);
  line(mouseX, mouseY, pmouseX, pmouseY);
};

sketch.keyPressed = function () {
  //color rojo
  if (key == "r" || key == "R") {
    brushColor = color(255, 0, 0);
  }

  //color azul
  if (key == "a" || key == "A") {
    brushColor = color(0, 19, 255);
  }

  //color verde
  if (key == "v" || key == "V") {
    brushColor = color(31, 255, 0);
  }

  //color morado
  if (key == "m" || key == "M") {
    brushColor = color(133, 0, 242);
  }

  //color negro
  if (key == "n" || key == "N") {
    brushColor = color(0, 0, 0);
  }

  //tamaños de grosor de linea
  if (key == "1") {
    size = strokeWeight(1);
  }

  if (key == "2") {
    size = strokeWeight(5);
  }

  if (key == "3") {
    size = strokeWeight(10);
  }

  if (key == "4") {
    size = strokeWeight(20);
  }

  if (key == "5") {
    size = strokeWeight(30);
  }

  if (key == "6") {
    size = strokeWeight(40);
  }
};

//sube la foto
function saveMyCanvas() {
  if (confirm("seguro que queres publicar tu dibujo??¿")) {
    var author = prompt(
      "firma la obra ! podes poner solamente hasta 3 caracteres"
    );
    while (author.length > 3) {
      alert("acordate que tenes que poner 3 o menos caracteres/palabras/cosas");
      var author = prompt(
        "firma la obra ! podes poner hasta solamente 3 caracteres"
      );
    }

    // Save it!
    $.ajax({
      method: "POST",
      url: "upload.php",
      data: {
        photo: photo,
        author: author,
      },
    });

    alert("tu dibujo ya fue guardado y sera expuesto por un tiempito?");
    setTimeout(function () {
      location.reload();
    }, 2000);
  } else {
    return false;
  }
}

//I'll try to save the canvas in my server
//http://stackoverflow.com/questions/13198131/how-to-save-a-html5-canvas-as-image-on-a-server
//2) Convert canvas image to URL format (base64)
