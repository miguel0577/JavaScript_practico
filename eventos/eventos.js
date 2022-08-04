const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function botonClick(){
    // Imprimir el valor concatenado
    const concatenacion = input1.value+input2.value; 
    console.log(concatenacion);

    // Sumar los valores numericos de los inputs
    const suma = parseInt(input1.value)+parseInt(input2.value);
    console.log(suma);

    pResult.innerText = "Resultado: " + suma;
}