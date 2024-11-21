const products = [
    new Product("Шапка (без ушек)", 1000, 
        [
        "img/cat/shapka_0001.jpg",        
        "img/cat/shapka_0002.jpg",        
        "img/cat/shapka_0003.jpg",        
        "img/cat/shapka_0004.jpg",        
        "img/cat/shapka_0005.jpg",        
        "img/cat/shapka_0006.jpg", 
        ]       
    ),
    new Product("Шапка (с ушками)", 2000, 
        [
        "img/cat/shapka2_0001.jpg",        
        "img/cat/shapka2_0002.jpg",        
        "img/cat/shapka2_0003.jpg",        
        "img/cat/shapka2_0004.jpg",        
        "img/cat/shapka2_0005.jpg",        
        "img/cat/shapka2_0006.jpg", 
        ]       
    ),
    new Product("Шапка (отвал башки)", 3000, 
        [
        "img/cat/shapka3_0001.jpg",        
        "img/cat/shapka3_0002.jpg",        
        "img/cat/shapka3_0003.jpg",        
        "img/cat/shapka3_0004.jpg",        
        "img/cat/shapka3_0005.jpg",        
        "img/cat/shapka3_0006.jpg", 
        ]       
    ),
];

const products_x = [
    new Product("Шапка (без ушек)", 1000, "img/cat/shapka_0001.jpg"),
    new Product("Шапка (с ушками)", 2000, "img/cat/shapka2_0001.jpg"),
    new Product("Шапка (отвал башки)", 3000, "img/cat/shapka3_0001.jpg"),
];

function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = product.createProductElement(addToCart);
        productList.appendChild(productElement);
    });
}

function addToCart(productName) {
    alert(`${productName} добавлен в корзину!`);
}

// Вызов функции для загрузки продуктов после загрузки DOM
document.addEventListener('DOMContentLoaded', displayProducts);