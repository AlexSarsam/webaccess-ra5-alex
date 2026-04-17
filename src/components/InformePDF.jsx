import { jsPDF } from "jspdf";
import src1  from "../assets/capturas/Github_commits.png";
import src2  from "../assets/capturas/archivos.png";
import src3  from "../assets/capturas/archivos2.png";
import src4  from "../assets/capturas/lightantes.png";
import src5  from "../assets/capturas/waveantes.png";
import src6  from "../assets/capturas/axeantes.png";
import src7  from "../assets/capturas/lighthouseantes.png";
import src8  from "../assets/capturas/waveantes2.png";
import src9  from "../assets/capturas/axeantes2.png";
import src10 from "../assets/capturas/dom.png";
import src11 from "../assets/capturas/waveantes_2.png";
import src12 from "../assets/capturas/Contraste insuficiente.png";
import src13 from "../assets/capturas/domantes.png";
import src14 from "../assets/capturas/domdespues.png";
import src15 from "../assets/capturas/formularioantes.png";
import src16 from "../assets/capturas/formulariodespues.png";
import src17 from "../assets/capturas/skip.png";
import src18 from "../assets/capturas/Implementación de prefers-reduced-motion.png";
import src19 from "../assets/capturas/waveantes3.png";
import src20 from "../assets/capturas/mejoradecontraste.png";
import src21 from "../assets/capturas/lighthousedespues.png";
import src22 from "../assets/capturas/wavedespues.png";
import src23 from "../assets/capturas/axedespues.png";
import src24 from "../assets/capturas/descargarbotonpdf.png";
import src25 from "../assets/capturas/descargarpdf.png";

const GITHUB_REPO = "https://github.com/AlexSarsam/webaccess-ra5-alex";
const COMMIT_BASE = "6f23716";
const COMMIT_FINAL = "5c68845";
const URL_PROD = "https://webaccess-ra5-alex.vercel.app";

const loadImg = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

const InformePDF = () => {
  const generarPDF = async () => {
    const imgs = await Promise.all(
      [src1,src2,src3,src4,src5,src6,src7,src8,src9,src10,
       src11,src12,src13,src14,src15,src16,src17,src18,src19,src20,
       src21,src22,src23,src24,src25].map(loadImg)
    );

    const doc = new jsPDF();
    const margen = 20;
    const ancho = 170;
    let y = 20;

    const check = (esp = 20) => {
      if (y + esp > 282) { doc.addPage(); y = 20; }
    };
    const salto = (n = 5) => { y += n; };

    const tituloH1 = (texto) => {
      check(16);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(texto, margen, y);
      y += 9;
    };

    const tituloH2 = (texto) => {
      check(13);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(texto, margen, y);
      y += 7;
    };

    const tituloItalic = (texto) => {
      check(10);
      doc.setFont("helvetica", "bolditalic");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(texto, margen, y);
      y += 6;
    };

    const p = (texto) => {
      check(10);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const lines = doc.splitTextToSize(texto, ancho);
      lines.forEach(l => { check(6); doc.text(l, margen, y); y += 5.5; });
      y += 2;
    };

    const bala = (texto) => {
      check(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const lines = doc.splitTextToSize(texto, ancho - 6);
      lines.forEach((l, i) => {
        check(6);
        doc.text(i === 0 ? "\u2022 " + l : "   " + l, margen + 3, y);
        y += 5.5;
      });
    };

    const link = (texto) => {
      check(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(0, 100, 180);
      doc.splitTextToSize(texto, ancho).forEach(l => { check(6); doc.text(l, margen, y); y += 5; });
      doc.setTextColor(0, 0, 0);
      y += 1;
    };

    const etiq = (texto) => {
      check(7);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(texto, margen, y);
      y += 5.5;
    };

    const imagen = (imgEl, etiqueta, maxAlto = 250) => {
      if (!imgEl) return;
      const ratio = imgEl.naturalWidth / imgEl.naturalHeight;
      const alto = Math.min(ancho / ratio, maxAlto);
      check(alto + 15);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(etiqueta, margen, y);
      y += 5;
      doc.addImage(imgEl, "PNG", margen, y, ancho, alto);
      doc.setTextColor(0, 0, 0);
      y += alto + 7;
    };

    // ── PORTADA ──────────────────────────────────────────
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("INFORME DE AUDITOR\u00cdA DE ACCESIBILIDAD", margen, y); y += 10;
    doc.setFontSize(13);
    doc.text("Proyecto React \u2013 Evaluaci\u00f3n T\u00e9cnica Completa Nivel AA", margen, y); y += 11;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Autor: Alex Sarsam", margen, y); y += 6;
    doc.text("Fecha: 16/04/2026", margen, y);
    salto(16);

    // ── 1. IDENTIFICACIÓN ────────────────────────────────
    tituloH1("IDENTIFICACI\u00d3N Y ENLACES OFICIALES DEL PROYECTO");
    etiq("URL p\u00fablica (entorno producci\u00f3n):");
    link(URL_PROD);
    etiq("Repositorio GitHub principal:");
    link(GITHUB_REPO);
    etiq("Branch analizada: main");
    salto(2);
    etiq("Commit base sin accesibilidad:");
    link(GITHUB_REPO + "/tree/" + COMMIT_BASE);
    etiq("Commit tras implementaci\u00f3n accesibilidad:");
    link(GITHUB_REPO + "/tree/" + COMMIT_FINAL);
    etiq("Comparaci\u00f3n directa de cambios (diff):");
    link(GITHUB_REPO + "/compare/" + COMMIT_BASE + "..." + COMMIT_FINAL);
    salto(4);

    imagen(imgs[0], "Captura 1 \u2013 img1");

    p("Para este proyecto he ido haciendo commits en GitHub para dejar registrado c\u00f3mo fue evolucionando el trabajo. Un commit es b\u00e1sicamente una foto del estado del c\u00f3digo en un momento concreto, con un mensaje que explica qu\u00e9 se hizo. Esto se llama trazabilidad y es muy importante en entornos profesionales porque cualquier persona del equipo puede ver qu\u00e9 se cambi\u00f3, cu\u00e1ndo y por qu\u00e9.");
    p("El primer commit tiene el proyecto sin ning\u00fan criterio de accesibilidad aplicado, tal como estaba al principio. El segundo recoge todas las mejoras que fui haciendo: la estructura HTML sem\u00e1ntica, la p\u00e1gina de contacto con formulario accesible, el skip link, los cambios de contraste, la media query prefers-reduced-motion y la generaci\u00f3n autom\u00e1tica de este informe.");
    p("En el diff entre los dos commits se puede ver exactamente qu\u00e9 l\u00edneas cambiaron en cada archivo. Esto demuestra que el trabajo fue real y progresivo, no una modificaci\u00f3n de \u00faltima hora. Trazabilidad significa poder seguir el historial de cambios y entender qu\u00e9 se modific\u00f3, cu\u00e1ndo y por qu\u00e9.");

    // ── 2. RESUMEN EJECUTIVO ─────────────────────────────
    tituloH1("RESUMEN EJECUTIVO");
    p("Este documento recoge la auditor\u00eda t\u00e9cnica completa que hice sobre mi aplicaci\u00f3n web desarrollada con React 19 y publicada en Vercel. El objetivo era que la web cumpliera los criterios de accesibilidad WCAG 2.2 nivel AA.");
    p("Las WCAG son las pautas internacionales que marcan c\u00f3mo tiene que construirse una web para que la pueda usar cualquier persona. El nivel AA es el est\u00e1ndar exigido en la mayor\u00eda de plataformas institucionales y servicios p\u00fablicos. Para llegar a cumplirlo us\u00e9 varias herramientas y tambi\u00e9n hice pruebas manuales.");
    p("La auditor\u00eda combina:");
    bala("Evaluaci\u00f3n autom\u00e1tica con Lighthouse, WAVE y Axe.");
    bala("Navegaci\u00f3n manual usando solo el teclado.");
    bala("Revisi\u00f3n de la estructura del DOM.");
    salto(2);
    p("DOM (Document Object Model) es la representaci\u00f3n estructural del HTML que el navegador interpreta y que utilizan las tecnolog\u00edas de asistencia como los lectores de pantalla.");
    p("Lo importante de este informe no es solo la puntuaci\u00f3n final, sino entender por qu\u00e9 algo no era accesible y c\u00f3mo se solucion\u00f3.");
    salto(2);
    tituloH2("Marco conceptual aplicado");
    p("La accesibilidad web se basa en cuatro principios fundamentales que se conocen como POUR.");
    tituloItalic("Perceptible");
    p("El contenido tiene que poder percibirse por todos los usuarios. Esto significa que las im\u00e1genes deben tener texto alternativo, que es una descripci\u00f3n escrita que los lectores de pantalla pueden leer en voz alta. Tambi\u00e9n significa que el contraste entre el texto y el fondo tiene que ser suficiente. Si el contraste es bajo, el texto puede resultar ilegible para personas con baja visi\u00f3n.");
    tituloItalic("Operable");
    p("La interfaz tiene que poder usarse. Esto quiere decir que toda la web debe poder navegarse con el teclado. Usando la tecla Tab se tiene que poder llegar a todos los botones, enlaces y campos. Cuando se navega con teclado, el elemento activo recibe foco, que es un indicador visual que muestra d\u00f3nde est\u00e1s.");
    tituloItalic("Comprensible");
    p("El contenido tiene que ser claro y f\u00e1cil de entender. Por ejemplo, si hay un error en un formulario, no puede indicarse solo con un color rojo. Tiene que aparecer un texto que explique qu\u00e9 ha pasado y c\u00f3mo solucionarlo.");
    tituloItalic("Robusto");
    p("El c\u00f3digo tiene que estar bien estructurado para que funcione correctamente con las tecnolog\u00edas de asistencia. Aqu\u00ed es clave el HTML sem\u00e1ntico, que significa usar etiquetas como header, main, nav o section en lugar de div para todo. Div es una etiqueta gen\u00e9rica que no aporta ning\u00fan significado estructural.");

    // ── 3. CONTEXTO TÉCNICO ──────────────────────────────
    tituloH1("CONTEXTO T\u00c9CNICO DEL PROYECTO");
    p("La aplicaci\u00f3n est\u00e1 hecha con React 19, que es una librer\u00eda de JavaScript basada en componentes. Un componente es una parte independiente y reutilizable de la interfaz. Como React actualiza partes de la p\u00e1gina sin recargarla (renderizado din\u00e1mico), hay que tener cuidado con la accesibilidad porque los lectores de pantalla no detectan esos cambios autom\u00e1ticamente. Para solucionarlo us\u00e9 aria-live, que es un atributo que avisa a los lectores de pantalla cuando cambia algo en la pantalla.");
    imagen(imgs[1], "Captura 2 \u2013 img2");
    imagen(imgs[2], "Captura 2b \u2013 Estructura del proyecto (parte 2)");
    p("El proyecto tiene una estructura clara. En la ra\u00edz est\u00e1n los archivos de configuraci\u00f3n como vite.config.js, eslint.config.js y vercel.json. Dentro de src/components est\u00e1n todos los componentes organizados por funci\u00f3n: Navbar.jsx para la navegaci\u00f3n, Footer.jsx para el pie de p\u00e1gina, SkipLink.jsx para el enlace de salto, ThemeToggle.jsx para el modo oscuro e InformePDF.jsx para generar este documento.");
    p("Las p\u00e1ginas principales son Home.jsx, Contenido.jsx y Contacto.jsx. Los cinco ejercicios interactivos (Ejercicio1 a Ejercicio5) completan la estructura. Las rutas se cargan de forma diferida con React.lazy y Suspense, lo que mejora el rendimiento. vercel.json configura los rewrites para que React Router funcione bien en producci\u00f3n y no de error 404 al acceder directamente a una ruta.");
    p("Las mejoras de accesibilidad se integraron de forma transversal: el componente SkipLink va antes del Navbar en App.jsx, el main tiene id='contenido-principal' para que el skip link funcione, y cada secci\u00f3n usa etiquetas sem\u00e1nticas con sus atributos ARIA correspondientes.");

    // ── 4. AUDITORÍA INICIAL ─────────────────────────────
    tituloH1("AUDITOR\u00cdA INICIAL");
    p("Antes de hacer ning\u00fan cambio pas\u00e9 las herramientas de auditor\u00eda para tener un punto de partida claro y saber exactamente qu\u00e9 hab\u00eda que mejorar.");
    salto(2);
    tituloItalic("Lighthouse");
    p("Lighthouse es una herramienta que viene integrada en Chrome y analiza accesibilidad, rendimiento y buenas pr\u00e1cticas. Da una puntuaci\u00f3n del 0 al 100 y explica qu\u00e9 problemas ha encontrado.");
    p("Resultado inicial: 71/100.");
    imagen(imgs[3], "Captura 3 \u2013 Resultado Lighthouse antes de mejoras");
    p("Lighthouse detect\u00f3 autom\u00e1ticamente problemas como:");
    bala("Im\u00e1genes sin texto alternativo.");
    bala("Contraste insuficiente en algunos elementos.");
    bala("Campos de formulario sin label asociado.");
    bala("Falta del enlace para saltar al contenido.");
    salto(3);
    tituloItalic("WAVE");
    p("WAVE es una extensi\u00f3n del navegador que muestra los errores directamente sobre la interfaz con iconos de colores. Es muy \u00fatil porque puedes ver de un vistazo d\u00f3nde est\u00e1 cada problema sin tener que leer el c\u00f3digo.");
    imagen(imgs[4], "Captura 4 \u2013 WAVE inicial");
    tituloItalic("Axe DevTools");
    p("Axe DevTools es la herramienta m\u00e1s t\u00e9cnica de las tres. Analiza el DOM y detecta incumplimientos espec\u00edficos de WCAG que las otras herramientas a veces no marcan.");
    imagen(imgs[5], "Captura 5 \u2013 Resultado Axe DevTools inicial");
    p("Puntuaci\u00f3n de accesibilidad Lighthouse: 71/100");
    p("Principales problemas detectados:");
    bala("Im\u00e1genes sin atributo alt.");
    bala("Contraste insuficiente en botones secundarios.");
    bala("Inputs de formulario sin label asociado.");
    bala("Falta de enlace \u201cSaltar al contenido\u201d.");
    bala("Foco no visible en navegaci\u00f3n por teclado.");
    salto(2);
    p("Las tres herramientas se complementan entre s\u00ed. Lighthouse da una visi\u00f3n general con puntuaci\u00f3n, WAVE ayuda a localizar visualmente los errores en la p\u00e1gina y Axe da detalles m\u00e1s t\u00e9cnicos. Adem\u00e1s de los an\u00e1lisis autom\u00e1ticos, hice pruebas manuales navegando solo con Tab para comprobar que el foco fuera visible y que se pudiera llegar a todos los elementos interactivos.");

    // ── 5. DESARROLLO TÉCNICO AUDITORÍA INICIAL ──────────
    tituloH1("DESARROLLO T\u00c9CNICO DE LA AUDITOR\u00cdA INICIAL");
    p("El objetivo de esta fase fue ver qu\u00e9 problemas hab\u00eda antes de tocar nada. Us\u00e9 herramientas autom\u00e1ticas y tambi\u00e9n navegu\u00e9 yo mismo por la web para pillar cosas que las herramientas no detectan.");
    p("Lo primero que hice fue abrir Lighthouse desde Chrome DevTools. B\u00e1sicamente le das a analizar y te saca una puntuaci\u00f3n con los problemas que encuentra. Me dio un 71/100 en accesibilidad. No estaba fatal, pero hab\u00eda cosas importantes sin hacer: im\u00e1genes sin alt, campos sin label, contraste bajo... cosas que para alguien que usa lector de pantalla son un problema gordo.");
    p("Con todo esto me hice una lista de lo que hab\u00eda que arreglar antes de ponerme a cambiar c\u00f3digo.");
    p("El resultado inicial fue 71/100 en accesibilidad.");
    imagen(imgs[6], "Captura 3 \u2013 img3");
    p("Este resultado indicaba que hab\u00eda varios problemas estructurales que deb\u00edan corregirse.");
    p("Despu\u00e9s prob\u00e9 WAVE, que es una extensi\u00f3n que te pone iconos de colores encima de la p\u00e1gina donde hay errores. Me gust\u00f3 porque no tienes que ir mirando el c\u00f3digo l\u00ednea por l\u00ednea, directamente ves d\u00f3nde est\u00e1 el fallo. Me salieron varios avisos de contraste y campos de formulario que no ten\u00edan su etiqueta conectada.");
    imagen(imgs[7], "Captura 4 \u2013 img4 WAVE");
    p("La tercera herramienta fue Axe DevTools. Esta es m\u00e1s t\u00e9cnica, te dice exactamente qu\u00e9 criterio de WCAG est\u00e1s incumpliendo y si es grave o no. Me ayud\u00f3 a priorizar qu\u00e9 arreglar primero porque no todos los errores tienen la misma importancia.");
    imagen(imgs[8], "Captura 5 \u2013 img5");
    p("Adem\u00e1s del an\u00e1lisis autom\u00e1tico, prob\u00e9 a navegar por la web usando solo el teclado. Esto me permiti\u00f3 comprobar que algunos elementos no se pod\u00edan alcanzar con Tab y que el foco no se ve\u00eda en absoluto. El foco es el indicador visual que muestra en qu\u00e9 elemento est\u00e1s cuando navegas con el teclado. Sin \u00e9l, una persona que no pueda usar el rat\u00f3n no sabe d\u00f3nde est\u00e1.");
    p("La auditor\u00eda inicial no se limit\u00f3 solo a ver las puntuaciones, sino que analiz\u00e9 las causas t\u00e9cnicas de cada problema para poder solucionarlos correctamente. Tambi\u00e9n prob\u00e9 a enviar el formulario con Enter y a pulsar los enlaces, para ver que todo respond\u00eda bien sin rat\u00f3n. Cada herramienta me aport\u00f3 algo distinto: Lighthouse la visi\u00f3n general, WAVE la localizaci\u00f3n visual y Axe los detalles t\u00e9cnicos. Entre las tres me hice una idea completa de todo lo que hab\u00eda que arreglar.");

    // ── 6. PROBLEMAS DETECTADOS ──────────────────────────
    tituloH1("PROBLEMAS DETECTADOS");
    p("Despu\u00e9s del an\u00e1lisis identifiqu\u00e9 estos problemas principales:");
    salto(2);
    tituloH2("Estructura sem\u00e1ntica insuficiente");
    p("El proyecto usaba demasiadas etiquetas div para estructurar la p\u00e1gina. El div es una etiqueta gen\u00e9rica que no aporta ning\u00fan significado estructural, lo que hace que los lectores de pantalla no puedan entender bien el documento. HTML sem\u00e1ntico significa usar etiquetas como header, nav, main y footer, que s\u00ed describen el prop\u00f3sito de cada parte del contenido. Sin esa estructura, un lector de pantalla no sabe d\u00f3nde empieza el men\u00fa, d\u00f3nde est\u00e1 el contenido principal o d\u00f3nde acaba la p\u00e1gina.");
    imagen(imgs[9], "Captura 6 \u2013 img6 \u2013 Estructura DOM antes de refactorizaci\u00f3n");
    tituloH2("Im\u00e1genes sin atributo alt");
    p("Varias im\u00e1genes no ten\u00edan el atributo alt. El alt es un texto alternativo que describe lo que muestra la imagen y que los lectores de pantalla leen en voz alta. Sin \u00e9l, el contenido visual es totalmente inaccesible para personas con discapacidad visual. Una imagen sin alt no existe para quien usa lector de pantalla.");
    tituloH2("Contraste insuficiente");
    p("Algunos textos ten\u00edan un ratio de contraste de 3:1, cuando el m\u00ednimo que exige WCAG nivel AA es 4.5:1. El ratio es la diferencia de luminosidad entre el color del texto y el del fondo. Si es bajo, el texto es dif\u00edcil de leer para personas con baja visi\u00f3n, aunque para alguien con visi\u00f3n normal pueda parecer perfectamente legible.");
    imagen(imgs[11], "Captura 7 \u2013 img7 \u2013 Contraste insuficiente");
    tituloH2("Formulario sin etiquetas asociadas");
    p("En la p\u00e1gina de contacto algunos campos no ten\u00edan el label correctamente vinculado. El label es el texto que describe para qu\u00e9 sirve cada campo. Sin esa vinculaci\u00f3n, el lector de pantalla no puede anunciar correctamente qu\u00e9 se pide en ese campo. El usuario escucha \u201ccampo de texto\u201d en vez de \u201cnombre\u201d o \u201cemail\u201d, lo que hace imposible rellenarlo correctamente.");
    tituloH2("Foco no visible");
    p("Al navegar con el teclado el foco era pr\u00e1cticamente invisible. Esto hace imposible saber en qu\u00e9 elemento est\u00e1s, lo que impide usar la web a cualquier persona que no pueda usar el rat\u00f3n. Es como navegar por una p\u00e1gina sin cursor.");

    // ── 7. MEJORAS IMPLEMENTADAS ─────────────────────────
    tituloH1("MEJORAS IMPLEMENTADAS");
    tituloH2("Refactorizaci\u00f3n estructural");
    p("Despu\u00e9s de detectar todos los problemas, fui arregl\u00e1ndolos uno por uno. Estas son las mejoras que hice:");
    p("Texto alternativo en todas las im\u00e1genes. A\u00f1ad\u00ed el atributo alt a cada imagen con una descripci\u00f3n que explica lo que se ve. Por ejemplo, en vez de dejar alt=\"\" o no poner nada, puse descripciones como \u201cDiagrama que muestra los cuatro principios de la accesibilidad web\u201d. As\u00ed los lectores de pantalla pueden explicarle la imagen a la persona.");
    p("Formulario accesible. Redise\u00f1\u00e9 el formulario de contacto para que cada campo tuviera su etiqueta label correctamente conectada usando el atributo for y el id del campo. Tambi\u00e9n a\u00f1ad\u00ed aria-required=\"true\" en los campos obligatorios para que el lector de pantalla avise de que ese campo hay que rellenarlo. Si el usuario env\u00eda el formulario con alg\u00fan campo vac\u00edo o mal rellenado, aparece un mensaje de error claro justo debajo del campo con aria-live=\"polite\", que hace que el lector de pantalla lo lea autom\u00e1ticamente sin que el usuario tenga que buscarlo.");
    p("Contraste mejorado. Cambi\u00e9 los colores de los textos que no cumpl\u00edan el m\u00ednimo. Us\u00e9 la herramienta de contraste de WAVE para comprobar que todos los textos tengan una relaci\u00f3n de contraste de al menos 4.5 a 1 con el fondo. Ahora todo el texto es legible incluso para personas con poca visi\u00f3n.");
    p("HTML sem\u00e1ntico. Cambi\u00e9 los div gen\u00e9ricos por etiquetas con significado: header para la cabecera, nav para el men\u00fa de navegaci\u00f3n, main para el contenido principal y footer para el pie de p\u00e1gina. Dentro del contenido tambi\u00e9n us\u00e9 section, article y los t\u00edtulos en orden correcto (h1, h2, h3) sin saltarse niveles. Esto ayuda tanto a los lectores de pantalla como a los motores de b\u00fasqueda a entender la estructura de la p\u00e1gina.");
    p("Skip link. A\u00f1ad\u00ed un enlace al principio de la p\u00e1gina que est\u00e1 oculto hasta que el usuario pulsa Tab. Cuando aparece, dice \u201cSaltar al contenido principal\u201d y lleva directamente al main de la p\u00e1gina. As\u00ed las personas que navegan con teclado no tienen que pulsar Tab veinte veces para llegar al contenido.");
    p("Foco visible. A\u00f1ad\u00ed estilos CSS para que cuando un elemento est\u00e9 seleccionado con el teclado se vea claramente un borde de color alrededor. Us\u00e9 focus:ring de Tailwind, que dibuja un anillo de color visible que no se puede confundir con el resto del dise\u00f1o.");
    p("Reducci\u00f3n de movimiento. A\u00f1ad\u00ed la media query prefers-reduced-motion en el CSS. Si el usuario tiene configurado en su sistema operativo que prefiere poca animaci\u00f3n, todas las animaciones y transiciones de la web se desactivan autom\u00e1ticamente. Esto beneficia a personas con v\u00e9rtigo, epilepsia fotosensible u otras condiciones similares.");
    imagen(imgs[12], "Captura 8 \u2013 img8 \u2013 DOM antes");
    imagen(imgs[13], "Captura 9 \u2013 DOM despu\u00e9s");
    tituloH2("Formulario accesible completo");
    p("Cre\u00e9 la p\u00e1gina de contacto con tres campos: nombre, email y mensaje. Cada campo tiene su label vinculado correctamente con htmlFor en React. Impl\u00e9ment\u00e9 validaci\u00f3n con mensajes de error claros en texto, no solo con color. A\u00f1ad\u00ed aria-live para que los lectores de pantalla detecten cuando aparece un mensaje de error o de \u00e9xito sin que se recargue la p\u00e1gina. Todo el formulario se puede rellenar y enviar solo con el teclado.");
    imagen(imgs[14], "Captura 10 \u2013 Formulario antes");
    imagen(imgs[15], "Captura 11 \u2013 Formulario despu\u00e9s");
    tituloH2("Implementaci\u00f3n del skip link");
    p("A\u00f1ad\u00ed el componente SkipLink al principio del DOM, antes del men\u00fa. Es un enlace que normalmente est\u00e1 oculto pero aparece al pulsar Tab. Permite ir directamente al contenido principal sin tener que pasar por todos los links del men\u00fa cada vez que se carga una p\u00e1gina nueva.");
    imagen(imgs[16], "Captura 12 \u2013 img12 \u2013 Skip link visible");
    tituloH2("Implementaci\u00f3n de prefers-reduced-motion");
    p("A\u00f1ad\u00ed una media query CSS que desactiva todas las animaciones si el usuario tiene activada la opci\u00f3n de reducir movimiento en su sistema operativo. Muchas personas con sensibilidad al movimiento, trastornos vestibulares o migranas necesitan esta opci\u00f3n para poder usar la web sin molestias.");
    p("Prefers-reduced-motion es una media query de CSS. Una media query es una condici\u00f3n que aplica estilos seg\u00fan las caracter\u00edsticas del dispositivo o las preferencias del usuario. Se escribe as\u00ed:");
    check(22);
    doc.setFont("courier", "normal");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    doc.text("@media (prefers-reduced-motion: reduce) {", margen + 5, y); y += 5;
    doc.text("  * { animation: none !important; transition: none !important; }", margen + 5, y); y += 5;
    doc.text("}", margen + 5, y); y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    p("No se trata de eliminar el dise\u00f1o, sino de adaptarlo. Respetar esta preferencia del usuario es accesibilidad porque cada persona percibe las animaciones de forma diferente y la web tiene que adaptarse a eso.");
    imagen(imgs[17], "Captura 13 \u2013 img13 \u2013 Prueba prefers-reduced-motion");
    tituloH2("Botones con texto descriptivo y no solo iconos");
    p("Correg\u00ed los botones que solo ten\u00edan un icono sin texto. Los lectores de pantalla no pueden interpretar iconos SVG sin descripci\u00f3n y los anuncian simplemente como 'bot\u00f3n', lo que no dice nada al usuario. A cada bot\u00f3n le a\u00f1ad\u00ed texto visible o el atributo aria-label con una descripci\u00f3n clara de la acci\u00f3n que hace.");
    tituloH2("Mejora de contraste");
    p("Ajust\u00e9 los colores de la paleta principal para que cumplieran el m\u00ednimo de 4.5:1 entre el texto y el fondo. La paleta de colores es el conjunto de colores que define el dise\u00f1o de la interfaz.");
    imagen(imgs[19], "Captura 14 \u2013 img14 \u2013 Mejora de contraste");

    // ── 8. VALIDACIÓN FINAL ──────────────────────────────
    tituloH1("VALIDACI\u00d3N FINAL");
    p("Una vez hechas todas las mejoras, volv\u00ed a pasar las mismas herramientas de an\u00e1lisis que us\u00e9 al principio para comprobar que los problemas se hab\u00edan resuelto.");
    p("Con Lighthouse la puntuaci\u00f3n de accesibilidad subi\u00f3 de 71 a 97 sobre 100. Esto quiere decir que la mayor\u00eda de los criterios de accesibilidad que Lighthouse comprueba est\u00e1n ahora bien implementados.");
    p("Con WAVE desaparecieron los errores que hab\u00eda antes. Ya no aparecen textos alternativos vac\u00edos, ni etiquetas de formulario sin conectar, ni problemas de contraste. Lo que antes marcaba en rojo ahora est\u00e1 en verde.");
    p("Con Axe DevTools tambi\u00e9n se eliminaron todas las violaciones cr\u00edticas. La extensi\u00f3n ya no detecta ning\u00fan error que impida a una persona con discapacidad usar la p\u00e1gina.");
    p("Adem\u00e1s de las herramientas autom\u00e1ticas, hice pruebas manuales navegando solo con el teclado, usando la tecla Tab para moverme por todos los elementos interactivos. El skip link aparece correctamente al principio, los formularios tienen mensajes de error claros cuando se rellena algo mal, y el orden de navegaci\u00f3n tiene sentido l\u00f3gico de arriba abajo.");
    p("El resultado final es una p\u00e1gina que cumple con el nivel AA de las normas WCAG 2.2, que es el nivel que se pide para la mayor\u00eda de webs p\u00fablicas.");
    salto(2);
    p("Despu\u00e9s de aplicar todas las mejoras volv\u00ed a pasar las herramientas de auditor\u00eda. Resultado final con Lighthouse: 97/100.");
    imagen(imgs[20], "Captura 15 \u2013 img15 \u2013 Lighthouse final");
    p("Tambi\u00e9n repet\u00ed las pruebas con WAVE y Axe.");
    imagen(imgs[21], "Captura 16 \u2013 img16 \u2013 WAVE final");
    imagen(imgs[22], "Captura 17 \u2013 Axe final");
    p("Despu\u00e9s de los cambios, navegu\u00e9 por toda la web solo con Tab para comprobar que todo funcionaba sin rat\u00f3n. Revis\u00e9 que:");
    bala("Se pudiera ir de un elemento a otro en orden l\u00f3gico.");
    bala("Siempre se viera d\u00f3nde est\u00e1s (el foco).");
    bala("El formulario de contacto se pudiera rellenar y enviar entero sin tocar el rat\u00f3n.");
    bala("El bot\u00f3n de descargar PDF tambi\u00e9n funcionara con teclado.");
    salto(2);
    p("B\u00e1sicamente pas\u00e9 de un 71 a un 97 en Lighthouse. No es solo el n\u00famero, es que ahora la web se puede usar de verdad sin rat\u00f3n y con lector de pantalla.");
    p("Lo que cambi\u00e9 se resume en:");
    p("Estructura \u2014 Cambi\u00e9 los div por etiquetas como header, nav y main para que un lector de pantalla entienda qu\u00e9 es cada cosa.");
    p("Formulario \u2014 Cada campo tiene su label bien puesto y si metes algo mal te sale un mensaje en texto, no solo en rojo.");
    p("Contraste \u2014 Sub\u00ed los colores para que se lea bien, m\u00ednimo 4.5:1 como pide WCAG.");
    p("Teclado \u2014 Todo se puede usar con Tab, y siempre se ve d\u00f3nde est\u00e1s.");

    // ── 9. GENERACIÓN AUTOMÁTICA DEL INFORME PDF ─────────
    tituloH1("GENERACI\u00d3N AUTOM\u00c1TICA DEL INFORME PDF");
    p("Este informe se genera autom\u00e1ticamente desde la propia web usando jsPDF, una librer\u00eda de JavaScript que permite crear documentos PDF directamente en el navegador sin necesitar ning\u00fan servidor externo.");
    p("Cre\u00e9 el componente InformePDF.jsx que contiene toda la l\u00f3gica de generaci\u00f3n. Al pulsar el bot\u00f3n 'Descargar informe PDF' se genera y descarga este documento autom\u00e1ticamente con los datos reales del proyecto.");
    p("Para que el informe de accesibilidad estuviera disponible directamente desde la web, implement\u00e9 un bot\u00f3n de descarga en la p\u00e1gina principal de la aplicaci\u00f3n. Al hacer clic en \u00e9l, el usuario puede descargar el informe completo en formato PDF sin salir de la web.");
    p("El bot\u00f3n tambi\u00e9n cumple con las normas de accesibilidad: tiene un texto claro que dice \u201cDescargar informe PDF\u201d, tiene colores con suficiente contraste entre el texto y el fondo, y cuando se navega con el teclado aparece un borde visible alrededor del bot\u00f3n para que el usuario sepa d\u00f3nde est\u00e1. Esto es importante porque las personas que no pueden usar el rat\u00f3n tambi\u00e9n tienen que poder descargarlo.");
    imagen(imgs[23], "Captura 18 \u2013 img18 \u2013 Bot\u00f3n descargar informe");
    imagen(imgs[24], "Captura 19 \u2013 PDF generado");
    p("El bot\u00f3n tiene foco visible con teclado, texto descriptivo claro y contraste suficiente. Esto demuestra integraci\u00f3n de librer\u00edas externas y automatizaci\u00f3n documental en React.");
    p("Usar jsPDF en lugar de hacer el informe en Word demuestra dominio de React, manipulaci\u00f3n de contenido din\u00e1mico y capacidad de integraci\u00f3n de librer\u00edas. El documento se genera en tiempo real desde la web con los datos reales del proyecto.");

    // ── 10. CONCLUSIÓN ───────────────────────────────────
    tituloH1("CONCLUSI\u00d3N");
    p("El proyecto ha pasado de ser una aplicaci\u00f3n funcional b\u00e1sica a cumplir los criterios WCAG 2.2 nivel AA. Se ha mejorado la accesibilidad estructural, funcional y visual.");
    p("Lo que m\u00e1s me ha aportado esta pr\u00e1ctica es entender que la accesibilidad no es algo que se a\u00f1ade al final. Es algo que hay que tener en cuenta desde el principio, porque arreglarlo despu\u00e9s cuesta m\u00e1s y se nota que fue un parche. Cosas que parecen peque\u00f1as, como poner un atributo alt o conectar bien un label, marcan una diferencia real para alguien que depende de un lector de pantalla para usar internet.");
    p("El proceso de auditar con Lighthouse, WAVE y Axe me ha ense\u00f1ado a ver la web de otra forma. Antes miraba solo si algo se ve\u00eda bien o funcionaba bien visualmente. Ahora pienso tambi\u00e9n en si se puede usar con teclado, si los errores del formulario se explican bien, si el contraste es suficiente para alguien con poca visi\u00f3n.");
    p("Pasar de 71 a 97 en Lighthouse no es solo una mejora de n\u00famero. Significa que la web ahora tiene estructura sem\u00e1ntica real, que el formulario funciona para todo el mundo, que el foco se ve y que las animaciones no molestan a quien las tiene desactivadas en su sistema.");
    p("En muchos pa\u00edses de la Uni\u00f3n Europea las webs p\u00fablicas est\u00e1n obligadas por ley a cumplir el nivel AA. Cualquier desarrollador frontend que quiera trabajar en proyectos reales tiene que saber esto. Esta pr\u00e1ctica me ha servido para entenderlo de verdad, no solo para saberlo de teor\u00eda.");

    doc.save("informe-accesibilidad-webaccess.pdf");
  };

  return (
    <button
      onClick={generarPDF}
      className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      Descargar informe PDF
    </button>
  );
};

export default InformePDF;
