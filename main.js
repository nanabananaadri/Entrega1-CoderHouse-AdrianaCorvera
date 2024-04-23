// Declaración de variables y arrays
let carrito = [];
const productos = ['tomate', 'chile', 'cebolla', 'fresas', 'manzanas', 'bananos'];

// Función para agregar productos al carrito
function agregarAlCarrito() {
    let producto = document.getElementById('producto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);

    if (productos.includes(producto)) {
        carrito.push({ producto: producto, cantidad: cantidad });
        mostrarCarrito();
    } else {
        alert(`Lo sentimos, ${producto} no está disponible en nuestra tienda.`);
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    let contenido = "Contenido del carrito:<br>";
    carrito.forEach(item => {
        contenido += `${item.cantidad} ${item.producto}<br>`;
    });
    document.getElementById('contenido-carrito').innerHTML = contenido;
}

// Prevenir el envío del formulario
window.onload = function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
        agregarAlCarrito();
    });
};
