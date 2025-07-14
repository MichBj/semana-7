// Arreglo inicial de productos
let products = [
    { name: "Epson Home Cinema", price: 500, description: "Disfruta películas en HD con colores vibrantes." },
    { name: "BenQ CinePro", price: 600, description: "Experiencia 4K para cine en casa." },
    { name: "Optoma Ultra", price: 700, description: "Ideal para gaming y presentaciones." }
];

// Función para renderizar los productos en la lista
function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Limpiar la lista
    products.forEach(product => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `
            <h5>${product.name}</h5>
            <p><strong>$${product.price}</strong></p>
            <p>${product.description}</p>
        `;
        productList.appendChild(li);
    });
}

// Función para agregar un nuevo producto
function addProduct() {
    const newProduct = {
        name: `Proyector Nuevo ${products.length + 1}`,
        price: 550 + products.length * 50, // Precio dinámico de ejemplo
        description: "Proyector de alta calidad para múltiples usos."
    };
    products.push(newProduct);
    renderProducts();
}

// Renderizar productos al cargar la página
document.addEventListener("DOMContentLoaded", renderProducts);

// Asociar el botón de agregar producto
document.getElementById("addProductBtn").addEventListener("click", addProduct);
//fin