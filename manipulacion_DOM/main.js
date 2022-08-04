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
//h1.setAttribute("class", "rojo");

// .classList.add agrega clases a elementos de HTML
h1.classList.add("rojo");

// .classList.remove quita clases a elementos de HTML
h1.classList.remove("rojo");

// h1.classList.toggle("verde");
// h1.classList.contains("verde");

// modificar atributos de HTML desde javascript
input.value = "456";

// crear elemeto desde cero en HTML
const img = document.createElement("img");
img.setAttribute("src", "https://i.pinimg.com/736x/fb/20/0a/fb200abb57c1fb9ddbd68229ae918e7d.jpg");

// se borra lo que tiene parrafo pid con cadena de texto vacia ""
pid.innerHTML = "";

// .append y .appendChild agregan el elemento luego de lo que ya hay 
pid.append(img);

console.log(img);