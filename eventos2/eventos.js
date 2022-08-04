const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

// // En .addEventListener se llama la funcion sin agregar parentesis ()
// // Dentro de un formulario, el ultimo boton actua como boton submit
// form.addEventListener("submit", sumarInputs);

// function sumarInputs(){
//     // Imprimir el valor concatenado
//     const concatenacion = input1.value+input2.value; 
//     console.log(concatenacion);

//     // Sumar los valores numericos de los inputs
//     const suma = parseInt(input1.value)+parseInt(input2.value);
//     console.log(suma);

//     pResult.innerText = "Resultado: " + suma;
// }

btn.addEventListener("click", sumarInputs);

function sumarInputs(){
    // Imprimir el valor concatenado
    const concatenacion = input1.value+input2.value; 
    console.log(concatenacion);

    // Sumar los valores numericos de los inputs
    const suma = parseInt(input1.value)+parseInt(input2.value);
    console.log(suma);

    pResult.innerText = "Resultado: " + suma;
} 

// continuar clase Conectando GitHub a proyectos de JavaScript desde 9:00