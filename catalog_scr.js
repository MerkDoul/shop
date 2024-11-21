function addToCart(product) {
    alert(`${product.name} добавлен в корзину!`);
}

function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = product.createProductElement(addToCart);
        productList.appendChild(productElement);
    });
}

// Вызов функции для отображения продуктов после загрузки DOM
document.addEventListener('DOMContentLoaded', displayProducts);