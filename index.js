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

// Получаем элементы, связанные с улучшением "Pizza"
let pizzaCost = document.querySelector('.pizza-cost'); // Стоимость улучшения
let parsedPizzaCost = parseFloat(pizzaCost.innerHTML); // Преобразуем стоимость в число
let pizzaLevel = document.querySelector('.pizza-level'); // Уровень улучшения
let parsedPizzaLevel = parseFloat(pizzaLevel.innerHTML); // Преобразуем уровень в число
let pizzaIncrease = document.querySelector('.pizza-increase'); // Увеличение от улучшения
let parsedPizzaIncrease = parseFloat(pizzaIncrease.innerHTML); // Преобразуем увеличение в число

// Получаем текстовые элементы для отображения текущих значений HPC (Hearts per Click) и HPS (Hearts per Second)
let hpcText = document.getElementById('hpc-text');
let hpsText = document.getElementById('hps-text');

// Инициализируем начальные значения HPC и HPS
let hpc = 1; // Количество "сердец" за клик
let hps = 0; // Количество "сердец" в секунду

let heartImgContent = document.querySelector('.heart-img-container');

// Функция для обновления значения "сердец" на экране
function updateHeartDisplay() {
    heart.textContent = Math.round(parsedHeart); // Отображаем округлённое значение
}

// Функция, которая срабатывает при клике и увеличивает количество "сердец" на текущий HPC
function incrementHeart(event) {
    parsedHeart += hpc; // Добавляем значение HPC
    updateHeartDisplay(); // Обновляем экран
    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = "+" + Math.round(hpc)
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    heartImgContent.appendChild(div)

    div.classList.add('fade-up')
    timeout(div)
}

const timeout = (div) => {
    setTimeout(() => {
div.remove()
    },800)
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

// Функция для покупки улучшения "Pizza"
function buyPizza() {
    if (parsedHeart >= parsedPizzaCost) { // Проверяем, хватает ли "сердец" для покупки
        parsedHeart -= parsedPizzaCost; // Вычитаем стоимость
        updateHeartDisplay();

        pizzaLevel.innerHTML = ++parsedPizzaLevel; // Увеличиваем уровень улучшения

        parsedPizzaIncrease = parseFloat((parsedPizzaIncrease * 1.03).toFixed(2)); // Увеличиваем эффект улучшения
        pizzaIncrease.innerHTML = parsedPizzaIncrease;

        hps += parsedPizzaIncrease; // Увеличиваем HPS
        parsedPizzaCost *= 1.18; // Увеличиваем стоимость следующей покупки
        pizzaCost.innerHTML = Math.round(parsedPizzaCost);
    }
}

// Функция, которая выполняется каждую 1/10 секунды
setInterval(() => {
    parsedHeart += hps / 10; // Добавляем "сердца" в зависимости от HPS
    updateHeartDisplay(); // Обновляем отображение
    hpcText.textContent = hpc.toFixed(2); // Отображаем точное значение HPC
    hpsText.textContent = hps.toFixed(2); // Отображаем точное значение HPS
}, 100);


function addHPC(){
    hpc += 10000
    updateHeartDisplay();
}

function addHPS(){
    hps += 10000
    updateHeartDisplay();
}

    document.addEventListener('keydown', (event) => {
        if (event.key === '5') {
            const myDiv = document.getElementById('cheat');
            myDiv.style.display = 'block';
        }
    });
    document.addEventListener('keyup', (event) => {
        if (event.key === '5') {
            const myDiv = document.getElementById('cheat');
            myDiv.style.display = 'none';
        }
    });
