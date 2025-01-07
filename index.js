// Получаем ссылку на элемент, отображающий общее количество "сердец"
let heart = document.querySelector('.heart-cost');
let parsedHeart = parseFloat(heart.innerHTML); // Преобразуем содержимое в число

// Получаем элементы, связанные с улучшением "Clicker"
let clickerCost = document.querySelector('.clicker-cost'); // Стоимость улучшения
let parsedClickerCost = parseFloat(clickerCost.innerHTML); // Преобразуем стоимость в число
let clickerLevel = document.querySelector('.clicker-level'); // Уровень улучшения
let parsedClickerLevel = parseFloat(clickerLevel.innerHTML); // Преобразуем уровень в число
let clickerIncrease = document.querySelector('.clicker-increase'); // Увеличение от улучшения
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML); // Преобразуем увеличение в число

// Получаем элементы, связанные с улучшением "Candy"
let candyCost = document.querySelector('.candy-cost'); // Стоимость улучшения
let parsedCandyCost = parseFloat(candyCost.innerHTML); // Преобразуем стоимость в число
let candyLevel = document.querySelector('.candy-level'); // Уровень улучшения
let parsedCandyLevel = parseFloat(candyLevel.innerHTML); // Преобразуем уровень в число
let candyIncrease = document.querySelector('.candy-increase'); // Увеличение от улучшения
let parsedCandyIncrease = parseFloat(candyIncrease.innerHTML); // Преобразуем увеличение в число

// Получаем элементы, связанные с улучшением "Cake"
let cakeCost = document.querySelector('.cake-cost'); // Стоимость улучшения
let parsedCakeCost = parseFloat(cakeCost.innerHTML); // Преобразуем стоимость в число
let cakeLevel = document.querySelector('.cake-level'); // Уровень улучшения
let parsedCakeLevel = parseFloat(cakeLevel.innerHTML); // Преобразуем уровень в число
let cakeIncrease = document.querySelector('.cake-increase'); // Увеличение от улучшения
let parsedCakeIncrease = parseFloat(cakeIncrease.innerHTML); // Преобразуем увеличение в число

// Получаем текстовые элементы для отображения текущих значений HPC (Hearts per Click) и HPS (Hearts per Second)
let hpcText = document.getElementById('hpc-text');
let hpsText = document.getElementById('hps-text');

// Инициализируем начальные значения HPC и HPS
let hpc = 1; // Количество "сердец" за клик
let hps = 0; // Количество "сердец" в секунду

// Функция для обновления значения "сердец" на экране
function updateHeartDisplay() {
    heart.textContent = Math.round(parsedHeart); // Отображаем округлённое значение
}

// Функция, которая срабатывает при клике и увеличивает количество "сердец" на текущий HPC
function incrementHeart() {
    parsedHeart += hpc; // Добавляем значение HPC
    updateHeartDisplay(); // Обновляем экран
}

// Функция для покупки улучшения "Clicker"
function buyClick() {
    if (parsedHeart >= parsedClickerCost) { // Проверяем, хватает ли "сердец" для покупки
        parsedHeart -= parsedClickerCost; // Вычитаем стоимость
        updateHeartDisplay();

        parsedClickerLevel += 1; // Увеличиваем уровень улучшения
        clickerLevel.innerHTML = parsedClickerLevel;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2)); // Увеличиваем эффект улучшения
        clickerIncrease.innerHTML = parsedClickerIncrease;

        hpc += parsedClickerIncrease; // Увеличиваем HPC
        parsedClickerCost *= 1.18; // Увеличиваем стоимость следующей покупки
        clickerCost.innerHTML = Math.round(parsedClickerCost);
    }
}

// Функция для покупки улучшения "Candy"
function buyCandy() {
    if (parsedHeart >= parsedCandyCost) { // Проверяем, хватает ли "сердец" для покупки
        parsedHeart -= parsedCandyCost; // Вычитаем стоимость
        updateHeartDisplay();

        candyLevel.innerHTML = ++parsedCandyLevel; // Увеличиваем уровень улучшения

        parsedCandyIncrease = parseFloat((parsedCandyIncrease * 1.03).toFixed(2)); // Увеличиваем эффект улучшения
        candyIncrease.innerHTML = parsedCandyIncrease;

        hps += parsedCandyIncrease; // Увеличиваем HPS
        parsedCandyCost *= 1.18; // Увеличиваем стоимость следующей покупки
        candyCost.innerHTML = Math.round(parsedCandyCost);
    }
}

// Функция для покупки улучшения "Cake"
function buyCake() {
    if (parsedHeart >= parsedCakeCost) { // Проверяем, хватает ли "сердец" для покупки
        parsedHeart -= parsedCakeCost; // Вычитаем стоимость
        updateHeartDisplay();

        cakeLevel.innerHTML = ++parsedCakeLevel; // Увеличиваем уровень улучшения

        parsedCakeIncrease = parseFloat((parsedCakeIncrease * 1.03).toFixed(2)); // Увеличиваем эффект улучшения
        cakeIncrease.innerHTML = parsedCakeIncrease;

        hps += parsedCakeIncrease; // Увеличиваем HPS
        parsedCakeCost *= 1.18; // Увеличиваем стоимость следующей покупки
        cakeCost.innerHTML = Math.round(parsedCakeCost);
    }
}

// Функция, которая выполняется каждую 1/10 секунды
setInterval(() => {
    parsedHeart += hps / 10; // Добавляем "сердца" в зависимости от HPS
    updateHeartDisplay(); // Обновляем отображение
    hpcText.textContent = hpc.toFixed(2); // Отображаем точное значение HPC
    hpsText.textContent = hps.toFixed(2); // Отображаем точное значение HPS
}, 100);
