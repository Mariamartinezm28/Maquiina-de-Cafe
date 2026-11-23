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

// CONECTAR BOTONES DE SELECCIÓN

const botonesBebidas = document.querySelectorAll("[data-select]");

// EVENTO PARA SELECCIONAR UNA BEBIDA

botonesBebidas.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let bebidaSeleccionada = boton.getAttribute("data-select");

        alert("Seleccionaste la bebida número " + bebidaSeleccionada);

    });

});


//Funcion - Cobrar Bebida


function cobrarBebida(saldoActual, precioCafe) {
    let mensaje;

    alert("El precio de la bebida es: " + precioCafe + " pesos.");
    saldoActual = parseInt(prompt("Ingrese su dinero:"));

    if (saldoActual >= precioCafe) {

        let cambio = saldoActual - precioCafe;

        if (comprobarCambio(cambio) == true) {

            if (cambio > 0) {
                devolverCambio(cambio);
            }

            mensaje = "Su bebida ha sido pagada con éxito.";
            alert(mensaje);
            return true;

        } else {

            alert("No tenemos cambio exacto. Se cancela la compra.");

            if (comprobarCambio(saldoActual) == true) {
                devolverCambio(saldoActual);
                alert("Se devolvió todo su dinero.");
            } else {
                alert("No es posible devolver todo su dinero. Se requiere atención.");
            }

            return false;
        }

    } else {

        mensaje = "Saldo insuficiente. Le faltan " + (precioCafe - saldoActual) + " pesos.";
        alert(mensaje);

        saldoActual = saldoActual + parseInt(prompt("Ingrese el dinero que falta:"));
        alert("Su saldo actual es: " + saldoActual + " pesos.");

        if (saldoActual >= precioCafe) {

            let cambio = saldoActual - precioCafe;

            if (comprobarCambio(cambio) == true) {

                if (cambio > 0) {
                    devolverCambio(cambio);
                }

                mensaje = "Su bebida ha sido pagada con éxito.";
                alert(mensaje);
                return true;

            } else {

                alert("No tenemos cambio exacto. Se cancela la compra.");

                if (comprobarCambio(saldoActual) == true) {
                    devolverCambio(saldoActual);
                    alert("Se devolvió todo su dinero.");
                } else {
                    alert("No es posible devolver todo su dinero. Se requiere atención.");
                }

                return false;
            }

        } else {
            mensaje = "Aún falta dinero. No se puede pagar la bebida.";
            alert(mensaje);
            return false;
        }
    }
}



//Funcion - Agregar AZzucar

function agregarAzucar(precioBebida) {

   let azucarExtra = prompt("¿Desea agregar más azúcar?\n1. Sí (+200 pesos)\n2. No");

   if (azucarExtra == "1") {
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


let menu = prompt("Seleccione la bebida que desea:\n1. Tinto Clasico\n2. Tinto Dulce\n3. Pintadito\n4. Té Endulzado\n5. Leche Caliente");

switch (menu) {
    case "1":

    precioCafe = agregarAzucar(precioTintoClasico);

    if (cobrarBebida(saldoActual, precioCafe) == true) {
        cantAgua = cantAgua - aguaTinto;
        cantCafe = cantCafe - cafeTinto;
        cantVaso = cantVaso - 1;
        entregarCafe = true;

        alert("Su tinto clasico esta listo!");
    }


     break;
     
     case "2":
        precioCafe =agregarAzucar(precioTintoDulce);
        if (cobrarBebida(saldoActual, precioCafe) == true) {
            cantAgua = cantAgua - aguaTintoDulce;
            cantCafe = cantCafe - cafeTintoDulce;
            cantAzucar = cantAzucar - azucarTintoDulce;
            cantVaso = cantVaso - 1;
            entregarCafe = true;

         alert("Su tinto dulce esta listo!");

        }

        
     break;

     case "3":
        precioCafe = agregarAzucar(precioPintadito);
        if (cobrarBebida(saldoActual, precioCafe) == true) {
            cantAgua = cantAgua - aguaPintadito;
            cantLeche = cantLeche - lechePintadito;
            cantCafe = cantCafe - cafePintadito;
            cantVaso = cantVaso - 1;
            entregarCafe = true;
        
        alert("Su pintadito esta listo!");

        }

     break;

     case "4":
        precioCafe = agregarAzucar(precioTeDulce);
        if (cobrarBebida(saldoActual, precioCafe) == true) {
            cantAgua = cantAgua - aguaTeDulce;
            cantTe = cantTe - gramosTeDulce;
            cantAzucar = cantAzucar - azucarTeDulce;
            cantVaso = cantVaso - 1;
            entregarCafe = true;

         alert("Su té endulzado esta listo!");

        }

     break;

     case "5":
        precioCafe = agregarAzucar(precioLecheCaliente);
        if (cobrarBebida(saldoActual, precioCafe) == true) {
            cantLeche = cantLeche - lecheSola;
            cantAzucar = cantAzucar - azucarLeche;
            cantVaso = cantVaso - 1;
            entregarCafe = true;

          alert("Su leche caliente esta lista!");

        }

     break;

     default:
        alert("Opción no válida. Por favor, seleccione una bebida del menú.");
     break;
}
