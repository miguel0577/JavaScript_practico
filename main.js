// Si se quiere seleccionar elemento por tipo, se utiliza querySelector("tipo")

const h1 = document.querySelector("h1");

// Si se quiere seleccionar elemento por tipo, se utiliza querySelector("tipo")

const p = document.querySelector("p");

// Si se quiere seleccionar elemento por clase, se utiliza querySelector(".clase")

const parrafito = document.querySelector(".parrafito");

// Si se quiere seleccionar elemento por id, se utiliza querySelector("#id")

const pid = document.querySelector("#pid");

// Si se quiere seleccionar elemento por tipo, se utiliza querySelector("tipo")

const input = document.querySelector("input");

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// Propiedad .innerHTML permite modificar HTML desde javascript con riesgos de encriptacion
h1.innerHTML = "Nuevo titulo editado desde javascript <br> Mejorado"

// Propiedad .innerText permite modificar texto de HTML desde javascript sin riesgos de encriptacion
h1.innerText = "Nuevo titulo editado desde javascript <br> Mejorado"

// .getAttribute lee los atributos del elemento
h1.getAttribute("pantalla");
h1.getAttribute("class");

console.log(h1.getAttribute("pantalla"));
console.log(h1.getAttribute("class"));

// .setAttribute modifica los atributos del elemento
h1.setAttribute("class", "rojo");

// Continuar clase "Escribiendo HTML desde JavaScript" minuto 7:00