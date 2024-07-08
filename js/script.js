class Producto {
    contructor(nombre, precio, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }

    getInfo(){
     retunr ´${nombre} tiene un costo de ${precio} y actualmente se tiene en existencia ${cantidad}´
    }
}
