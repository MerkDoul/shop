const button = document.getElementById('button');
const redBox = document.getElementById('redBox');

// Показываем красный квадрат при наведении на кнопку
button.addEventListener('mouseenter', () => {
    redBox.style.height = '50px'; // Устанавливаем высоту красного квадрата
    redBox.style.top = '0'; // Устанавливаем верхнюю позицию красного квадрата на 0
});

// Скрываем красный квадрат при уходе курсора
button.addEventListener('mouseleave', () => {
    redBox.style.height = '0'; // Возвращаем высоту к нулю
    redBox.style.top = '0'; // Возвращаем верхнюю позицию красного квадрата
});