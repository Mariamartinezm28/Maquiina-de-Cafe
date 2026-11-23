//MAQUINA DE CAFE

// UNIDADES: $, Gramos, Mililitros

//ENTRADAS: INVENTARIO DE INGREDIENTES

let saldoActual = 0;  //$

let cantCafe = 1000;  // Gramos
let cantLeche = 3000;  // Mililitros
let cantAgua = 5000;  // Mililitros
let cantVaso = 100;  //Unidades
let cantAzucar = 1000;  //Gramos
let cantTe = 500;  //Gramos

if (cantCafe < 100 || cantLeche < 200 || cantAgua < 100 || cantVaso < 10 || cantAzucar < 100 || cantTe < 10) {
     console.log("La máquina necesita recargar ingredientes.") 

     } else {
     console.log("La máquina tiene inventario suficiente para preparar bebidas.")
     }


// Precio de las bebidas

let precioTintoClasico = 2000;
let precioTintoDulce = 2500;
let precioPintadito = 3000;
let precioTeEndulzado = 3500;
let precioLecheCaliente = 2500;


     
// INVENTARIO MONEDAS Y BILLETES

let moneda200 = 20;
let moneda500 = 20;
let moneda1000 = 10;

let billete2000 = 20;
let billete5000 = 10;
let billete10000 = 20;
let billete20000 = 2;


if (moneda200 < 5 || moneda500 < 5 || moneda1000 < 3 || billete2000 < 2 || billete5000 < 3 || billete10000 < 2 || billete20000 < 2) {
    console.log(" La máquina tiene poco dinero para devolver cambio.");

} else {
    console.log("La máquina tiene dinero suficiente para devolver cambio.");
}

// SALIDAS

let entregarCafe = false;
let entregarTe = false;
let precioCafe = 0;

// Reglas de billetes no aceptados
const noAcepta1000 = 1000;
const noAcepta50000 = 50000;
const noAcepta100000 = 100000;




//RECETAS DE LOS PRODUCTOS


// Tinto Clásico

const aguaTinto = 120;
const cafeTinto = 6;

// Tinto Dulce

const aguaTintoDulce = 120;
const cafeTintoDulce = 6;
const azucarTintoDulce = 5;

// Pintadito
const aguaPintadito = 60;
const lechePintadito = 60;
const cafePintadito = 7;

// Té Endulzado
const aguaTeDulce = 150;
const gramosTeDulce = 4;
const azucarTeDulce = 5;

// Leche Caliente
const lecheSola = 150;
const azucarLeche = 4;



// CONEXIÓN CON HTML

const pantallaSaldo = document.getElementById("credit");
const formularioSaldo = document.getElementById("balance-form");
const entradaSaldo = document.getElementById("balance-input");
const dispensador = document.getElementById("dispenser");
const salidaBilletes = document.getElementById("bill-output");
const salidaMonedas = document.getElementById("coin-output");
const mensajeMaquina = document.getElementById("mensaje");
const opcionAzucar = document.getElementById("azucar-extra");
const precioVisible = document.getElementById("precio-visible");


// EVENTO PARA INGRESAR DINERO

formularioSaldo.addEventListener("submit", function(event) {
    event.preventDefault();

    let dineroIngresado = Number(entradaSaldo.value);

    if (dineroIngresado > 0) {
        saldoActual = saldoActual + dineroIngresado;

        pantallaSaldo.textContent = "$" + saldoActual;

        entradaSaldo.value = "";
    } else {
        alert("Ingrese una cantidad válida.");
    }
});


// ACTUALIZAR PRECIO SEGUN EL AZUCAR

let precioBase = 0;

opcionAzucar.addEventListener("change", function() {

    let precioFinal = precioBase;

    if (opcionAzucar.checked == true) {
        precioFinal = precioFinal + 200;
    }

    if (precioBase > 0) {
        precioVisible.textContent = "Precio de la bebida: $" + precioFinal;
    }

});


//Funcion - Cobrar Bebida


// FUNCION - COBRAR BEBIDA

function cobrarBebida(saldoActual, precioCafe) {

    if (saldoActual >= precioCafe) {

        let cambio = saldoActual - precioCafe;

        if (comprobarCambio(cambio) == true) {

            if (cambio > 0) {
                devolverCambio(cambio);
            }

            mensajeMaquina.textContent = "¡Su bebida ha sido pagada con éxito!";
            return true;

        } else {

            mensajeMaquina.textContent = "No tenemos cambio exacto. Compra cancelada.";

            if (comprobarCambio(saldoActual) == true) {
                devolverCambio(saldoActual);
                mensajeMaquina.textContent = "Se devolvió todo su dinero.";
            } else {
                mensajeMaquina.textContent = "No es posible devolver todo su dinero. Se requiere atención.";
            }

            return false;
        }

    } else {

        mensajeMaquina.textContent = "Saldo insuficiente. Le faltan $" + (precioCafe - saldoActual);
        return false;
    }
}


//Funcion - Agregar AZzucar

// FUNCION - AGREGAR AZUCAR
function agregarAzucar(precioBebida) {

    if (opcionAzucar.checked == true) {
        precioBebida = precioBebida + 200;
    }

    return precioBebida;
}


// COMPROBAR SI HAY CAMBIO 

function comprobarCambio(cambio) {
    let monedas200 = moneda200;
    let monedas500 = moneda500;
    let monedas1000 = moneda1000;
    let billetes2000 = billete2000;
    let billetes5000 = billete5000;
    let billetes10000 = billete10000;
    let billetes20000 = billete20000;

    
    while (cambio >= 1000 && monedas1000 > 0) {
        cambio = cambio - 1000;
        monedas1000 = monedas1000 - 1;
    }
    while (cambio >= 500 && monedas500 > 0) {
        cambio = cambio - 500;
        monedas500 = monedas500 - 1;
    }
    while (cambio >= 200 && monedas200 > 0) {
        cambio = cambio - 200;
        monedas200 = monedas200 - 1;
    }

    while (cambio >= 20000 && billetes20000 > 0) {
        cambio = cambio - 20000;
        billetes20000 = billetes20000 - 1;
    }
    while (cambio >= 10000 && billetes10000 > 0) {
        cambio = cambio - 10000;
        billetes10000 = billetes10000 - 1;
    }
    while (cambio >= 5000 && billetes5000 > 0) {
        cambio = cambio - 5000;
        billetes5000 = billetes5000 - 1;
    }
    while (cambio >= 2000 && billetes2000 > 0) {
        cambio = cambio - 2000;
        billetes2000 = billetes2000 - 1;
    }

    return cambio == 0;
}



//DEVOLVER CAMBIO

function devolverCambio(cambio) {

    // Billetes de 20.000
    while (cambio >= 20000 && billete20000 > 0) {
        cambio = cambio - 20000;
        billete20000 = billete20000 - 1;
        alert("Se entregó un billete de $20.000");
    }

    // Billetes de 10.000
    while (cambio >= 10000 && billete10000 > 0) {
        cambio = cambio - 10000;
        billete10000 = billete10000 - 1;
        alert("Se entregó un billete de $10.000");
    }

    // Billetes de 5.000
    while (cambio >= 5000 && billete5000 > 0) {
        cambio = cambio - 5000;
        billete5000 = billete5000 - 1;
        alert("Se entregó un billete de $5.000");
    }

    // Billetes de 2.000
    while (cambio >= 2000 && billete2000 > 0) {
        cambio = cambio - 2000;
        billete2000 = billete2000 - 1;
        alert("Se entregó un billete de $2.000");
    }

    // Monedas de 1.000
    while (cambio >= 1000 && moneda1000 > 0) {
        cambio = cambio - 1000;
        moneda1000 = moneda1000 - 1;
        alert("Se entregó una moneda de $1.000");
    }

    // Monedas de 500
    while (cambio >= 500 && moneda500 > 0) {
        cambio = cambio - 500;
        moneda500 = moneda500 - 1;
        alert("Se entregó una moneda de $500");
    }

    // Monedas de 200
    while (cambio >= 200 && moneda200 > 0) {
        cambio = cambio - 200;
        moneda200 = moneda200 - 1;
        alert("Se entregó una moneda de $200");
    }

    if (cambio == 0) {
        alert("¡Cambio entregado correctamente!");
    } else {
        alert("No hay dinero suficiente para devolver todo el cambio.");
        alert("Dinero pendiente: $" + cambio);
    }

    return cambio;
}


// MENU



 // MENU

let menu = "";

const botonesBebidas = document.querySelectorAll("[data-select]");

botonesBebidas.forEach(function(boton) {

    boton.addEventListener("click", function() {

        menu = boton.getAttribute("data-select");

        switch (menu) {
         
         case "1":
            precioBase = precioTintoClasico;
            precioCafe = agregarAzucar(precioBase);
            precioVisible.textContent = "Precio de la bebida: $" + precioCafe;

            if (cobrarBebida(saldoActual, precioCafe) == true) {

               cantAgua = cantAgua - aguaTinto;
               cantCafe = cantCafe - cafeTinto;
               cantVaso = cantVaso - 1;
               entregarCafe = true;

               mensajeMaquina.textContent = "¡Su tinto clásico está listo!";
            
            }
            
            break;


         case "2":

            precioBase = precioTintoDulce;
            precioCafe = agregarAzucar(precioBase);
            precioVisible.textContent = "Precio de la bebida: $" + precioCafe;

            if (cobrarBebida(saldoActual, precioCafe) == true) {

               cantAgua = cantAgua - aguaTintoDulce;
               cantCafe = cantCafe - cafeTintoDulce;
               cantAzucar = cantAzucar - azucarTintoDulce;
               cantVaso = cantVaso - 1;
               entregarCafe = true;

                mensajeMaquina.textContent = "¡Su tinto dulce está listo!";
            }

            break;


         case "3":

            precioBase = precioPintadito;
            precioCafe = agregarAzucar(precioBase);
            precioVisible.textContent = "Precio de la bebida: $" + precioCafe;

            if (cobrarBebida(saldoActual, precioCafe) == true) {

               cantAgua = cantAgua - aguaPintadito;
               cantLeche = cantLeche - lechePintadito;
               cantCafe = cantCafe - cafePintadito;
               cantVaso = cantVaso - 1;
               entregarCafe = true;

               mensajeMaquina.textContent = "¡Su pintadito está listo!";
            }

            break;


         case "4":

            precioBase = precioTeEndulzado;
            precioCafe = agregarAzucar(precioBase);
            precioVisible.textContent = "Precio de la bebida: $" + precioCafe;

            if (cobrarBebida(saldoActual, precioCafe) == true) {

               cantAgua = cantAgua - aguaTeDulce;
               cantTe = cantTe - gramosTeDulce;
               cantAzucar = cantAzucar - azucarTeDulce;
               cantVaso = cantVaso - 1;
               entregarCafe = true;

               mensajeMaquina.textContent = "¡Su té endulzado está listo!";
          }

            break;


            case "5":

                precioBase = precioLecheCaliente;
                precioCafe = agregarAzucar(precioBase);
                precioVisible.textContent = "Precio de la bebida: $" + precioCafe;

                if (cobrarBebida(saldoActual, precioCafe) == true) {

                  cantLeche = cantLeche - lecheSola;
                  cantAzucar = cantAzucar - azucarLeche;
                  cantVaso = cantVaso - 1;
                  entregarCafe = true;

                  mensajeMaquina.textContent = "¡Su leche caliente está lista!";
            }

               break;
               
            default:

                mensajeMaquina.textContent = "Opción no válida.";
                break;
        }
    });
});

