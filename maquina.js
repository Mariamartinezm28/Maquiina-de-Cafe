MAQUINA DE CAFE
UNIDADES: $, Gramos, Mililitros

ENTRADAS: INVENTARIO DE INGREDIENTES

let saldoActual = 0;  $

let cantCafe = 1000;  Gramos
let cantLeche = 3000;  Mililitros
let cantAgua = 5000;  Mililitros
let cantVaso = 100;  Unidades
let cantAzucar = 1000;  Gramos
let cantTe = 500;  Gramos


INVENTARIO MONEDAS Y BILLETES


let moneda200 = 20;
let moneda500 = 20;
let moneda1000 = 10;

let billete2000 = 15;
let billete5000 = 10;
let billete10000 = 5;
let billete20000 = 2;



SALIDAS


let entregarCafe = false;
let entregarTe = false;

Reglas de billetes no aceptados
const noAcepta1000 = 1000;
const noAcepta50000 = 50000;
const noAcepta100000 = 100000;




RECETAS DE LOS PRODUCTOS


Tinto Clásico
const aguaTinto = 120;
const cafeTinto = 6;

Tinto Dulce
const aguaTintoDulce = 120;
const cafeTintoDulce = 6;
const azucarTintoDulce = 5;

Pintadito
const aguaPintadito = 60;
const lechePintadito = 60;
const cafePintadito = 7;

Té Endulzado
const aguaTeDulce = 150;
const gramosTeDulce = 4;
const azucarTeDulce = 5;

Leche Caliente
const lecheSola = 150;
const azucarLeche = 4;


RECETAS

/* TINTO CLASICO */

cantAgua = cantAgua - aguaTinto;
cantCafe = cantCafe - cafeTinto;
cantVaso = cantVaso - 1;


/* TINTO DULCE */

cantAgua = cantAgua - aguaTintoDulce;
cantCafe = cantCafe - cafeTintoDulce;
cantAzucar = cantAzucar - azucarTintoDulce;
cantVaso = cantVaso - 1;


/* PINTADITO */

cantAgua = cantAgua - aguaPintadito;
cantLeche = cantLeche - lechePintadito;
cantCafe = cantCafe - cafePintadito;
cantVaso = cantVaso - 1;


/* TE ENDULZADO */

cantAgua = cantAgua - aguaTeDulce;
cantTe = cantTe - gramosTeDulce;
cantAzucar = cantAzucar - azucarTeDulce;
cantVaso = cantVaso - 1;



