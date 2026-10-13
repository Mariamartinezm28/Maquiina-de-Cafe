Inventario Físico (Variables let)
stockAgua (numero): Cantidad de agua en ml
stockCafe (numero): Cantidad de café en gramos
stockLeche (numero): Cantidad de leche en ml
stockTe (numero): Cantidad de té en gramos
stockVasos (numero): Unidades de vasos   

Dinero (Variables let)
cajaMonedas200, cajaMonedas500, cajaMonedas1000 (numero): Conteo de monedas para cambio.
cajaBilletes2k, cajaBilletes5k, cajaBilletes10k, cajaBilletes20k (numero): Conteo de billetes para cambio.

Interacción con el Cliente (Variables let)
saldoCliente (numero): Dinero actual que ha ingresado la persona $
bebidaActual (String): El nombre de la opción presionada
procesoTerminado (Boolean): Nos dice si ya se sirvió el producto
dineroSobrante (numero): El cambio que la máquina debe devolver

Reglas del Negocio (Variables const)
Restricción de billetes: La máquina tiene prohibido recibir billetes de $1.000, $50.000 y $100.000. 
Sistema de cambio: Si el saldoCliente supera el precio del producto, la máquina está obligada a dar cambio descontando de su caja.

Productos 
Cada vez que se prepare una bebida, se descontará esto del inventario:
Tinto Clásico: 120ml agua + 6g café + 1 vaso.
Tinto Dulce: 120ml agua + 6g café + 5g azúcar + 1 vaso.
Pintadito: 60ml agua + 60ml leche + 7g café + 1 vaso.
Té Endulzado: 150ml agua + 4g té + 5g azúcar + 1 vaso.
Leche Caliente: 150ml leche + 4g azúcar + 1 vaso.
