class Product {
    constructor(name, price, images) {
        this.name = name;        // Имя продукта
        this.price = price;      // Цена продукта
        this.images = images;
    }

    createProductElement(addToCart) {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        
        const imgElement = document.createElement('img');
        imgElement.src = this.images[0];

        const titleElement = document.createElement('h2');
        titleElement.textContent = this.name;

        const priceElement = document.createElement('p');
        priceElement.textContent = `${this.price} р`;

        imgElement.addEventListener('mousemove', (event) => {
            const rect = imgElement.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const percentage = (offsetX / rect.width) * 100;

            this.changeImage(imgElement, percentage);
        })

        productElement.appendChild(imgElement);
        productElement.appendChild(titleElement);
        productElement.appendChild(priceElement);

        return productElement;
    }

    changeImage(imgElement, percentage){
        const imageIndex = Math.floor((percentage / 100) * this.images.length);
        imgElement.src = this.images[Math.min(imageIndex, this.images.length - 1)];
    }
}