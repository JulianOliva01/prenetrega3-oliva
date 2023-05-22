let carrito = [];
let stock = [];

const selecProductos = document.getElementById('selecProductos');
const btnAgregar = document.getElementById('btnAgregar');
const btnVaciar = document.getElementById('btnVaciar');

stock.push(new Productos('Banana', 650));
stock.push(new Productos('Cebolla', 500));
stock.push(new Productos('Pimiento', 620));
stock.push(new Productos('Naranja', 680));
stock.push(new Productos('Mandarina', 700));
stock.push(new Productos('Durazno', 800));
stock.push(new Productos('Zapallo', 300));
stock.push(new Productos('Pomelo', 750));
stock.push(new Productos('Ajo', 150));
stock.push(new Productos('Manzana', 630));

localStorage.setItem('stock',JSON.stringify(stock));

allEventListeners();

function allEventListeners() {
    window.addEventListener('DOMContentLoaded', traerItems);
    btnVaciar.addEventListener('click', vaciarCarrito);

    btnAgregar.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

function traerItems() {
    stock = JSON.parse(localStorage.getItem('stock')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    seleccionDeProductos();
}

function seleccionDeProductos() {
    stock.forEach((productos, index) => {
        const opciones = document.createElement('option');
        opciones.textContent = `${productos.nombre}: ${productos.precio}`;
        opciones.value = index;
        selecProductos.appendChild(opciones);
    });
}