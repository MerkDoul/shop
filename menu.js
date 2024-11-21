class AnimatedButton {
    constructor(text, slideHeight, width, link, containerId) {
        this.text = text;
        this.slideHeight = slideHeight;
        this.width = width;
        this.link = link; // Новый параметр для ссылки
        this.container = document.getElementById(containerId);

    const buttonContainer = this.createButtonContainer();
    this.buttonElement = this.createButton(buttonContainer);
    this.redBoxElement = this.createRedBox();
    buttonContainer.appendChild(this.redBoxElement);
    this.setupEventListeners();
    }

    createButtonContainer() {
        const container = document.createElement('div');
        container.className = 'button-container';
        container.style.width = this.width; // Устанавливаем ширину контейнера
        this.container.appendChild(container);
        return container;
    }

    createButton(buttonContainer) {
        const link = document.createElement('a'); // Создаем элемент ссылки
        link.href = this.link; // Устанавливаем URL-адрес
        link.style.textDecoration = 'none'; // Убираем подчеркивание
        const button = document.createElement('button');
        button.className = 'animated-button';
        button.textContent = this.text;
        link.appendChild(button); // Помещаем кнопку внутрь ссылки
        buttonContainer.appendChild(link); // Добавляем ссылку в контейнер кнопки
        return button;
    }

    createRedBox() {
        const redBox = document.createElement('div');
        redBox.className = 'red-box';
        const border = document.createElement('div');
        border.className = 'border';
        redBox.appendChild(border);

        return redBox;
    }

    setupEventListeners() {
        this.buttonElement.addEventListener('mouseenter', () => {
            this.redBoxElement.style.height = this.slideHeight;
        });

        this.buttonElement.addEventListener('mouseleave', () => {
            this.redBoxElement.style.height = '0';
        });
    }
}