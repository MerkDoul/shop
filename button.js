class AnimatedButton {
    constructor(text, slideHeight, width, containerId) {
        this.text = text;
        this.slideHeight = slideHeight;
        this.width = width; 
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
        const button = document.createElement('button');
        button.className = 'animated-button';
        button.textContent = this.text;
        buttonContainer.appendChild(button); // Добавляем кнопку в контейнер
        return button;
    }

    createRedBox() {
        const redBox = document.createElement('div');
        redBox.className = 'red-box';
        redBox.style.height = '0'; // Начальное состояние 
        
        // Создание каемки и добавление в redBox
        const border = document.createElement('div');
        border.className = 'border'; // Класс для каемки
        redBox.appendChild(border);

        return redBox; // Возвращаем redBox без добавления
    }

    setupEventListeners() {
        this.buttonElement.addEventListener('mouseenter', () => {
            this.redBoxElement.style.height = this.slideHeight; // Устанавливаем высоту шторки
        });

        this.buttonElement.addEventListener('mouseleave', () => {
            this.redBoxElement.style.height = '0'; // Возвращаем высоту к нулю
        });
    }
}