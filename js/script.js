class Producto {
    constructor(nombre, precio, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }

    getInfo(){
     return (`${this.nombre} tiene un costo de ${this.precio} y actualmente se tiene en existencia ${this.cantidad}`)
    }

		mostrar_informacion(){
     return (`${this.nombre} tiene un costo de ${this.precio} y actualmente se tiene en existencia ${this.cantidad}`)
		}
		
		valor_total(){
			return (`${this.precio} * ${this.cantidad}`)
		}
}

class Inventario extends Producto {
		constructor(nombre, precio, cantidad, productos){
			super(nombre, precio, cantidad);
			this.productos = productos;

		}
		
		agregar_producto(){


		}
		
		mostrar_producto(){
		
		}
		
		valor_total_inventario(){
		
		}

}

function agregar() {

   	  const producOne = new Producto(name,precio,cnt);
			var name = document.getElementById('nombre').value;
			var precio = document.getElementById('precio').value;
			var cnt = document.getElementById('cnt').value;
		  console.log('producOne',producOne);
		  console.log('producOne',producOne.mostrar_informacion());

}


//localStorage.setItem("titulo", "Curso de Angular avanzado - Víctor Robles");

//localStorage.getItem("titulo");
		/*var name = document.getElementById('nombre').value;
		var precio = document.getElementById('precio').value;
		var cnt = document.getElementById('cnt').value;
		
    const producOne = new Producto(name,precio,cnt);
    console.log('producOne',producOne);
    console.log('producOne',producOne.getInfo());*/

/*    const producTwo = new Producto('sillas',200,10);
    console.log('producTwo',producTwo);
    console.log('producTwo',producTwo.getInfo());*/
