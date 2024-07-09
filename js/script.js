class Producto {
    constructor(nombre, precio, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }

		mostrar_informacion(){
     return (`${this.nombre} tiene un costo de ${this.precio} y actualmente se tiene en existencia ${this.cantidad}`);
		}
		
		valor_total(){
			return this.precio * this.cantidad;
		}
}

class Inventario {
		constructor(){
			this.productos = this.cargar_producto();

		}
		
		agregar_producto(producto){
			this.productos.push(producto);
			this.guardar_producto();

		}
		
		eliminar_producto(index){
			this.productos.splice(index, 1);
			this.guardar_producto();
		}
		
		guardar_producto(){
			localStorage.setItem('inventario', JSON.stringify(this.productos));
		}
		
		
		mostrar_producto(){
			return this.productos;
		}
		
		cargar_producto(){
			const getProductos = localStorage.getItem('inventario');
			if(getProductos){
				const listaProductosJson = JSON.parse(getProductos);
				return listaProductosJson.map(prod => new Producto(prod.nombre, prod.precio, prod.cantidad));
			}
			return [];
			
		}
		
		valor_total_inventario(){
			return this.productos.map(valor => producto.valor_total());
		}

}

const inventario = new Inventario();

document.getElementById('send').addEventListener('click', (e) => {
	e.preventDefault();
	
	const nombre = document.getElementById('nombre').value;
	const precio = document.getElementById('precio').value;
	const cantidad = parseInt(document.getElementById('cnt').value);
		const close = document.getElementById('close');
	
	const producto = new Producto(nombre, precio, cantidad);
	
	inventario.agregar_producto(producto);
	
	close.click();
	mostrar_lista_productos();
	
});

function mostrar_lista_productos() {
	const tbody = document.querySelector('#lista_productos tbody');
	tbody.innerHTML = '';

	inventario.mostrar_producto().forEach((producto, index) => {

			const tr = document.createElement('tr');
			
			const th = document.createElement('th');
			th.innerText = index + 1;
			tr.appendChild(th);
			console.log('TR: ',producto);
			
			const tdName = document.createElement('td');
			tdName.innerText = producto.nombre;
			tr.appendChild(tdName);

			const tdPrecio = document.createElement('td');
			tdPrecio.innerText = producto.precio; 
			tr.appendChild(tdPrecio);

			const tdCantidad = document.createElement('td');
			tdCantidad.innerText = producto.cantidad;
			tr.appendChild(tdCantidad);

			const tdValTotal = document.createElement('td');
			tdValTotal.innerText = producto.valor_total(); 
			tr.appendChild(tdValTotal);

			const tdAcc = document.createElement('td');
			const btnEli = document.createElement('button');
			btnEli.innerText = 'Eliminar';
			btnEli.addEventListener('click', (e) => {
				inventario.eliminar_producto(index);
				mostrar_lista_productos();
			});
			tdAcc.appendChild(btnEli);
			tr.appendChild(tdAcc);
			
			tbody.appendChild(tr);

	});

}

mostrar_lista_productos();


