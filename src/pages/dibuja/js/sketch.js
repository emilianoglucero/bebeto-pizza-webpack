var c, photo, images;
let loadingDivPaint = document.getElementById("loading-paint");

function preload() {
  song = loadSound("./dibuja/assets/music/colorea.mp3");
}
function setup() {
  document.body.style.cursor =
    "url('./dibuja/assets/img/cursor/brush-black.png'), auto";
  song.loop(),
    (images = [
      {
        src: "./dibuja/assets/img/subject/alberto-roemmers.png",
        name: "Alberto Roemmers",
        description: `
    <b>Alberto Roemmers</b> (Buenos Aires, 9 de enero de 1929) fue un destacado empresario del sector farmacéutico.<br>
    Es conocido principalmente por su rol como presidente de Laboratorios Roemmers, una empresa fundada por su padre en 1921 y que él heredó, convirtiéndola en uno de los laboratorios farmacéuticos más grandes e influyentes de Argentina y América Latina.<br>
    Durante la pandemia de 2020, Roemmers aumentó considerablemente sus ganancias, lo que se reflejó en su posición en el ranking de multimillonarios de Forbes.<br>
    En 2021, ocupó el puesto 1.444, y en 2022 escaló al lugar 1292 según la misma publicación.<br>
    En octubre de 2021, el nombre de Roemmers apareció en los Pandora Papers, documentos que lo vinculaban a actividades financieras en paraísos fiscales.<br>
    Más recientemente, en agosto de 2024, su hijo Alejandro Roemmers ha sido objeto de una acusación pública.<br>
    Durante la jornada ‘Trata Infantil: ¿Qué hay detrás de la desaparición de niños?’, realizada en el Senado de la Nación, Roberto Mazzoni acusó a Alejandro Roemmers de presunta participación en una red de trata infantil para explotación sexual.
  `,
      },
      {
        src: "./dibuja/assets/img/subject/alejandro-bulgheroni.png",
        name: "Alejandro Bulgheroni",
        description: `<b>Alejandro Pedro Bulgheroni</b> (Buenos Aires, 24 de octubre de 1944) es un empresario argentino del sector energético, cofundador y presidente de Pan American Energy, la mayor empresa privada de energía en Argentina.<br>
        Bulgheroni ha diversificado sus inversiones en el sector vitivinícola.<br>
        Su fortuna es estimada en 5.200 millones de dólares (2024), con un crecimiento notable debido a las operaciones en Vaca Muerta, una de las mayores reservas de shale gas del mundo.
      `,
      },
      {
        src: "./dibuja/assets/img/subject/marcos-galperin.png",
        name: "Marcos Galperin",
        description: `
        <b>Marcos Eduardo Galperín Lebach</b> (Buenos Aires, 31 de octubre de 1971) es un empresario argentino conocido por ser fundador, presidente y director ejecutivo de Mercado Libre, además de heredero de la curtiembre SADESA.<br>
        Galperín aumentó su fortuna en 1400 millones de dólares el último año (2023) según Forbes y se ubica en el puesto número 764 con un total de 3.900 millones de dólares (2024).
      `,
      },
      {
        src: "./dibuja/assets/img/subject/paolo-rocca.png",
        name: "Paolo Rocca",
        description:
          "Paolo Rocca (Milán, 14 de octubre de 1952) es un empresario ítalo-argentino, presidente y CEO del Grupo Techint, uno de los conglomerados industriales más grandes de Argentina y América Latina. Techint está presente en sectores como la siderurgia, la ingeniería y la construcción. Rocca ha enfrentado investigaciones por presunta corrupción en Brasil y Argentina en el marco del escándalo de los cuadernos de las coimas.<br>Paolo Rocca aumentó su fortuna en 2700 millones de dólares el último año (2023) y se ubica en el puesto 1.104 según Forbes.",
      },
      {
        src: "./dibuja/assets/img/subject/gregorio-perez-companc.png",
        name: "Gregorio Pérez Companc",
        description:
          "Gregorio Pérez Companc (Buenos Aires, 23 de agosto de 1934) fue un empresario argentino conocido por su participación en la industria alimentaria y energética a través del Grupo Pérez Companc y Molinos Río de la Plata. En los años 90, vendió la mayor parte de su conglomerado energético a Petrobras. Según Forbes era la 4.ª persona más rica de Argentina.",
      },
      {
        src: "./dibuja/assets/img/subject/eduardo-eurnekian.png",
        name: "Eduardo Eurnekian",
        description:
          "Eduardo Eurnekian (Buenos Aires, 4 de diciembre de 1932) es un empresario argentino de ascendencia armenia, conocido por su empresa Corporación América, que opera aeropuertos y se ha expandido a otros sectores como la agroindustria y las telecomunicaciones. Eurnekian ha incrementado su fortuna a 2.600 millones de dólares (2024) y es un activo inversor en diversos proyectos de infraestructura en América Latina y Europa.",
      },
      {
        src: "./dibuja/assets/img/subject/eduardo-costantini.png",
        name: "Eduardo Costantini",
        description:
          "Eduardo Costantini (Buenos Aires, 17 de septiembre de 1946) es un empresario y desarrollador inmobiliario argentino, fundador de Consultatio y creador del Museo de Arte Latinoamericano de Buenos Aires (MALBA). Su empresa es conocida por proyectos de alta gama como Nordelta y Puertos. Costantini posee una fortuna de aproximadamente 1.500 millones de dólares (2024), destacándose por su influencia en el mercado inmobiliario de lujo.",
      },
      {
        src: "./dibuja/assets/img/subject/claudio-belocopitt.png",
        name: "Claudio Belocopitt",
        description:
          "Claudio Belocopitt (Buenos Aires, 3 de octubre de 1963) es un empresario argentino conocido por ser el propietario del Grupo Swiss Medical, una de las principales empresas de salud en Argentina. Su fortuna está valuada en 1.200 millones de dólares (2024), impulsada por la expansión de su empresa en el sector de servicios de salud y seguros médicos.",
      },
      {
        src: "./dibuja/assets/img/subject/mauricio-macri.png",
        name: "Mauricio Macri",
        description:
          "Mauricio Macri (Tandil, 8 de febrero de 1959) es un empresario y político argentino, conocido por haber sido presidente de Argentina (2015-2019) y jefe de gobierno de la Ciudad de Buenos Aires (2007-2015). Antes de su carrera política, fue presidente de Boca Juniors y líder del grupo empresarial SOCMA. Su fortuna se ha visto afectada por su incursión en la política, aunque se estima en 500 millones de dólares (2024). Macri ha enfrentado múltiples acusaciones de corrupción, tanto en el ámbito empresarial como político.",
      },
      {
        src: "./dibuja/assets/img/subject/eduardo-elsztain.png",
        name: "Eduardo Elsztain",
        description: `
<p><strong>Eduardo Sergio Elsztain</strong> (Buenos Aires, 26 de enero de 1960) es un empresario argentino, presidente de <strong>IRSA</strong>, la mayor empresa de bienes raíces del país, y de <strong>Cresud</strong>, una compañía agrícola. Su fortuna asciende a 1.800 millones de dólares (2024), con un crecimiento sostenido gracias a sus inversiones en los sectores inmobiliario y agropecuario.</p>

<p>En 2017, Elsztain figuró en los <strong>Paradise Papers</strong>, una investigación periodística que reveló su presunta implicación en casos de evasión fiscal, lavado de activos y corrupción. La investigación indaga sobre mecanismos complejos utilizados por empresarios y multinacionales para ocultar patrimonio y evitar el pago de impuestos mediante fondos de inversión y fideicomisos en jurisdicciones offshore. Estas prácticas permitieron evadir las obligaciones tributarias correspondientes en diversas administraciones fiscales.</p>
`,
      },
      {
        src: "./dibuja/assets/img/subject/marcelo-mindlin.png",
        name: "Marcelo Mindlin",
        description: `
<p><strong>Marcelo Mindlin</strong> (Buenos Aires, 15 de enero de 1964) es un empresario argentino, presidente y CEO de <strong>Pampa Energía</strong>, una de las principales empresas de energía del país. Mindlin también es conocido por sus inversiones en infraestructura a través de su firma <strong>Inversora Dolphin</strong>. Su fortuna es de aproximadamente 1.700 millones de dólares (2024), con un crecimiento notable debido a sus inversiones en el sector energético.</p>

<p>Mindlin figura en los <strong>Paradise Papers</strong> al frente de una offshore en las Islas Caimán, utilizada para adquirir activos en Argentina por 302 millones de dólares. En 2017, fue el empresario energético que más creció en el país, destacándose por la compra de la constructora <strong>Iecsa</strong>, de Ángelo Calcaterra, primo del expresidente Mauricio Macri, con quien mantiene una buena relación. Esta empresa es responsable del soterramiento del tren Sarmiento y está bajo sospecha de haber participado en casos de coimas.</p>

<p>Mindlin aparece en los documentos en representación de la empresa <strong>Emerging Dolphin Limited</strong>, una sociedad establecida bajo las leyes de la Isla de Man. También fue identificado en los **Argenpapers**, junto con su socio, el magnate británico y terrateniente patagónico <strong>Joseph Lewis</strong>, quien posee dos offshore en Bahamas llamadas <strong>Lago Escondido Inc</strong> y <strong>Lago Escondido Corp</strong>. Mindlin y Eduardo Elsztain están vinculados al <strong>Dolphin Global Fund</strong>, registrado en la Isla de Man, con activos por 400 millones de dólares.</p>
`,
      },
      {
        src: "./dibuja/assets/img/subject/luis-pagani.png",
        name: "Luis Pagani",
        description:
          "Luis Pagani (Buenos Aires, 1955) es un empresario argentino, ex-presidente de Arcor, empresa que fundó su abuelo y es uno de los mayores productores de alimentos y golosinas de América Latina. Bajo su liderazgo, Arcor se ha expandido internacionalmente. Su fortuna está estimada en 1.900 millones de dólares (2024), con un crecimiento sostenido gracias a la expansión y diversificación de sus negocios.",
      },
      {
        src: "./dibuja/assets/img/subject/francisco-de-narvaez.png",
        name: "Francisco de Narváez",
        description:
          "Francisco de Narváez (Bogotá, 1953) es un empresario y político argentino de origen colombiano. Destacado por su carrera en el Grupo de Narváez y como diputado nacional, su fortuna se estima en 900 millones de dólares (2024). Ha enfrentado denuncias por ocultamiento patrimonial, tráfico de efedrina, evasión fiscal y controversias vinculadas a los Panama Papers, pero ninguna ha resultado en condenas judiciales.",
      },
      {
        src: "./dibuja/assets/img/subject/carlos-blaquier.png",
        name: "Carlos Pedro Blaquier",
        description:
          "Carlos Pedro Blaquier (Buenos Aires, 28 de agosto de 1927 - ibídem, 13 de marzo de 2023) fue un empresario argentino. Uno de los hombres más ricos del país, fue conocido por ser el dueño de la empresa agroindustrial Ledesma, y su complicidad en los crímenes de lesa humanidad ocurridos en Jujuy durante la denominada 'Noche del Apagón', la cual fue parte de las acciones de terrorismo de Estado llevadas a cabo por la última dictadura cívico-militar argentina (1976-1983)3 y originó una investigación y un proceso judicial en su contra.",
      },
      {
        src: "./dibuja/assets/img/subject/hugo-sigman.png",
        name: "Hugo Sigman",
        description:
          "Hugo Sigman (Buenos Aires, 1 de enero de 1944) es un empresario y médico psiquiatra argentino, cofundador del Grupo Insud, con negocios en sectores como la salud, la biotecnología, y la industria cultural. Sigman ha incrementado su fortuna a 2.000 millones de dólares (2024), siendo uno de los empresarios más destacados en el ámbito farmacéutico y biotecnológico de Argentina.",
      },
    ]);
  i = Math.floor(images.length * Math.random());
  loadImage(images[i].src, function (img) {
    // Hide the loading div
    loadingDivPaint.style.display = "none";
    if (windowWidth <= 550) {
      image(img, 0, 0, 270, 200);
    } else {
      image(img, 0, 0, 600, 400);
    }
    // Update the description div
    let descriptionDiv = select(".description");
    descriptionDiv.html(
      `<h3>te tocó: ${images[i].name}</h3><p>${images[i].description}</p>`
    );
  });
  // Create the canvas with different dimensions based on the window width
  if (windowWidth <= 550) {
    c = createCanvas(270, 200);
  } else {
    c = createCanvas(600, 400);
  }
  // (c = createCanvas(600, 400)).position(350, 300),
  c.id("myCanvas"), c.parent("canvas-container");
  (col = color(0)), (size = strokeWeight(10));

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
  select("#circle-yellow").mouseClicked(() => {
    col = color(255, 255, 0);
  });
  select("#circle-red").mouseClicked(() => {
    col = color(255, 0, 0);
  });
  // Get the select element and set the changed function
  select("#stroke-width").changed(function () {
    let strokeWidth = this.value();
    size = strokeWeight(strokeWidth);
  });

  document.querySelectorAll(".circle").forEach(function (div) {
    div.addEventListener("click", function () {
      const cursorImage = this.getAttribute("data-cursor");
      document.body.style.cursor = `url('${cursorImage}'), auto`;
    });
  });

  // prevent scrolling while drawing
  // Get the canvas element
  let canvasElement = document.getElementById("myCanvas");

  // Add the event listener to prevent scrolling while drawing
  canvasElement.addEventListener(
    "touchmove",
    function (e) {
      if (e.target == canvasElement) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
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

    // Get the loading div and show it
    let loadingDivPostPaint = document.getElementById("loading-post-paint");
    loadingDivPostPaint.style.display = "block";

    $.ajax({
      method: "POST",
      url: "https://bebeto-pizza-backend.vercel.app/upload",
      // url: "http://localhost:3000/upload",
      data: formData,
      processData: false,
      contentType: false,
    })
      .done(function (msg) {
        // Hide the loading div
        loadingDivPostPaint.style.display = "none";
        return savePaintingDetails(author, filename, cloudImagePath);
      })
      .fail(function (msg) {
        // Hide the loading div
        loadingDivPostPaint.style.display = "none";
        console.log(msg);
        alert("hubo un error al guardar tu dibujo, intenta de nuevo");
      });
  });
}
