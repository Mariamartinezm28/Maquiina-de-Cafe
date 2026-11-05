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



// MENU


let menu = prompt("Seleccione la bebida que desea: Tinto Clasico, Tinto Dulce, Pintadito, Té Endulzado, Leche Caliente");

switch (menu) {
    case "Tinto Clasico":

        cantAgua = cantAgua - aguaTinto;
        cantCafe = cantCafe - cafeTinto;
        cantVaso = cantVaso - 1;
        entregarCafe = true;
     break;
     
     case "Tinto Dulce":
        cantAgua = cantAgua - aguaTintoDulce;
        cantCafe = cantCafe - cafeTintoDulce;
        cantAzucar = cantAzucar - azucarTintoDulce;
        cantVaso = cantVaso - 1;
        entregarCafe = true;
     break;

     case "Pintadito":
        cantAgua = cantAgua - aguaPintadito;
        cantLeche = cantLeche - lechePintadito;
        cantCafe = cantCafe - cafePintadito;
        cantVaso = cantVaso - 1;
        entregarCafe = true;
     break;

     case "Té Endulzado":
        cantAgua = cantAgua - aguaTeDulce;
        cantTe = cantTe - gramosTeDulce;
        cantAzucar = cantAzucar - azucarTeDulce;
        cantVaso = cantVaso - 1;
        entregarCafe = true;
     break;

     case "Leche Caliente":
        cantLeche = cantLeche - lecheSola;
        cantAzucar = cantAzucar - azucarLeche;
        cantVaso = cantVaso - 1;
        entregarCafe = true;
     break;

     default:
        console.log("Opción no válida. Por favor, seleccione una bebida del menú.");
     break;
}

// OPCIONES SALDO DEL USUARIO


let precioCafe = 2000;

saldoActual == precioCafe;
saldoActual === precioCafe;
saldoActual != precioCafe;
saldoActual > precioCafe;
saldoActual < precioCafe;
saldoActual >= precioCafe;
saldoActual <= precioCafe


