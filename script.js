let currentIndex = 0; // Индекс текущей секции

function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    
    // Ограничиваем индекс по границам секций
    if (index < 0 || index >= sections.length) return;

    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentIndex = index; // Обновляем текущий индекс
    updateIndicators(); // Обновляем состояние индикаторов
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');

    indicators.forEach(indicator => {
        const index = parseInt(indicator.getAttribute('data-index'));

        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function detectCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight; // Высота окна
    const centerWindow = windowHeight / 2; // Центр окна

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2; // Центр секции

        // Проверяем, находится ли центр секции в пределах видимости центра окна
        if (sectionCenter >= 0 && sectionCenter <= windowHeight) {
            currentIndex = index; // Обновляем текущий индекс
        }
    });
    updateIndicators(); // Обновляем индикаторы после определения текущей секции
}

window.addEventListener('scroll', detectCurrentSection); // Отслеживаем событие прокрутки

// Инициализация индикаторов
updateIndicators();