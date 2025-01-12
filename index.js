// Получаем ссылку на элемент, отображающий общее количество "сердец"
let heart = document.querySelector('.heart-cost');
let parsedHeart = parseFloat(heart.innerHTML); // Преобразуем содержимое в число

// Получаем текстовые элементы для отображения текущих значений HPC (Hearts per Click) и HPS (Hearts per Second)
let hpcText = document.getElementById('hpc-text');
let hpsText = document.getElementById('hps-text');

// Инициализируем начальные значения HPC и HPS
let hpc = 1; // Количество "сердец" за клик
let hps = 0; // Количество "сердец" в секунду

let heartImgContent = document.querySelector('.heart-img-container');

let hasWon = false;

const upgrades = [
    {
        name: `clicker`,
        cost: document.querySelector('.clicker-cost'),
        parsedCost: parseFloat(document.querySelector('.clicker-cost').innerHTML),
        increase: document.querySelector('.clicker-increase'),
        parsedIncrease: parseFloat(document.querySelector('.clicker-increase').innerHTML),
        level: document.querySelector('.clicker-level'),
        heartMultiplie: 1.025,
        costMultiple: 1.12,
    },
    {
        name: `candy`,
        cost: document.querySelector('.candy-cost'),
        parsedCost: parsedcandyCost = parseFloat(document.querySelector('.candy-cost').innerHTML),
        increase: document.querySelector('.candy-increase'),
        parsedIncrease: parseFloat(document.querySelector('.candy-increase').innerHTML),
        level: document.querySelector('.candy-level'),
        heartMultiplie: 1.025,
        costMultiple: 1.12,
    },
    {
        name: `cake`,
        cost: document.querySelector('.cake-cost'),
        parsedCost: parsedcakeCost = parseFloat(document.querySelector('.cake-cost').innerHTML),
        increase: document.querySelector('.cake-increase'),
        parsedIncrease: parseFloat(document.querySelector('.cake-increase').innerHTML),
        level: document.querySelector('.cake-level'),
        heartMultiplie: 1.025,
        costMultiple: 1.12,
    },
    {
        name: `pizza`,
        cost: document.querySelector('.pizza-cost'),
        parsedCost: parseFloat(document.querySelector('.pizza-cost').innerHTML),
        increase: document.querySelector('.pizza-increase'),
        parsedIncrease: parseFloat(document.querySelector('.pizza-increase').innerHTML),
        level: document.querySelector('.pizza-level'),
        heartMultiplie: 1.025,
        costMultiple: 1.12,
    }
]

// Функция для обновления значения "сердец" на экране
function updateHeartDisplay() {
    heart.textContent = Math.round(parsedHeart); // Отображаем округлённое значение
    win();
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

function buyUpgrade(upgrade){
    const mU = upgrades.find((u) => {
        if(u.name === upgrade) return u
      })
    
      if (parsedHeart >= mU.parsedCost){
        heart.innerHTML = Math.round(parsedHeart -= mU.parsedCost);
        
    
        mU.level.innerHTML ++ // Отображаем новый уровень улучшения
    
        mU.parsedIncrease = parseFloat((mU.parsedIncrease * mU.heartMultiplie).toFixed(2))
        mU.increase.innerHTML = mU.parsedIncrease
    
        mU.parsedCost *= mU.costMultiple;
        mU.cost.innerHTML = Math.round(mU.parsedCost)

        if(mU.name === `clicker`)   {
            hpc += mU.parsedIncrease
      } else {
        hps += mU.parsedIncrease
      }
    }
}
// Функция, которая выполняется каждую 1/10 секунды
setInterval(() => {
    parsedHeart += hps / 10; // Добавляем "сердца" в зависимости от HPS
    updateHeartDisplay(); // Обновляем отображение
    hpcText.textContent = hpc.toFixed(2); // Отображаем точное значение HPC
    hpsText.textContent = hps.toFixed(2); // Отображаем точное значение HPS
}, 100);

function addHeart(){
    parsedHeart += 100000;
    updateHeartDisplay();
}

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
    
    function save () {
      // Очищаем предыдущие сохранения
    localStorage.clear();

    upgrades.map((upgrade) => {
        // Сохраняем данные улучшения в локальное хранилище
        const obj = JSON.stringify({
            parsedLevel: parseFloat(upgrade.level.innerHTML),
            parsedCost: upgrade.parsedCost,
            parsedIncrease: upgrade.parsedIncrease,
        })

        localStorage.setItem(upgrade.name, obj);
    // Сохраняем основные значения
    })

    localStorage.setItem('hpc', JSON.stringify(hpc)),
    localStorage.setItem('hps', JSON.stringify(hps)),
    localStorage.setItem('parsedHeart', JSON.stringify(parsedHeart))
    
    console.log("Игра сохранена");
    }
    
    function load () {
        upgrades.map((upgrade) => {
            const savedValues = JSON.parse(localStorage.getItem(upgrade.name))

            upgrade.parsedCost = savedValues.parsedCost;
            upgrade.level.innerHTML = savedValues.parsedLevel;
            upgrade.parsedIncrease = savedValues.parsedIncrease;
            upgrade.cost.innerHTML = Math.round(upgrade.parsedCost);
            upgrade.increase.innerHTML = upgrade.parsedIncrease;
        })

        hpc = JSON.parse(localStorage.getItem('hpc'));
        hps = JSON.parse(localStorage.getItem('hps'));
        parsedHeart = JSON.parse(localStorage.getItem('parsedHeart'));

        heart.innerHTML = Math.round(parsedHeart)
        console.log("Игра загружена");

    }

    // setInterval(() => {
    //     save(); 
    // }, 300000);

    window.load();

    window.addEventListener('beforeunload', (event) => {
        save(); // Вызываем функцию сохранения
        // Чтобы предотвратить случайное закрытие, можно показать предупреждение (опционально)
        // event.preventDefault();
        // event.returnValue = ''; // Некоторые браузеры требуют эту строку для отображения предупреждения
    });

    function win() {
        // Проверяем, достигло ли количество "сердец" 1 000 000
        if (parsedHeart >= 1000000 && !hasWon) {
            hasWon = true; // Устанавливаем флаг, чтобы функция больше не вызывалась
            // Создаём затемняющий фон
            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                z-index: 9999;
            `;
            document.body.appendChild(overlay);
    
            // Создаём модальное окно
            const modal = document.createElement('div');
            modal.id = 'winnerModal';
            modal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: black;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;
    
            // Добавляем текст "Вы выиграли!"
            const title = document.createElement('h1');
            title.textContent = 'Вы выиграли!';
            title.style.cssText = 'margin-bottom: 20px; font-size: 24px; color: white;';
            modal.appendChild(title);
    
            // Добавляем первый GIF
            const firework1 = document.createElement('img');
            firework1.src = '/assets/firework1.gif';
            firework1.alt = 'Firework 1';
            firework1.style.cssText = 'width: 400px; margin: 10px;';
            modal.appendChild(firework1);
    
            // Добавляем второй GIF
            const firework2 = document.createElement('img');
            firework2.src = '/assets/firework2.gif';
            firework2.alt = 'Firework 2';
            firework2.style.cssText = 'width: 400px; margin: 10px;';
            modal.appendChild(firework2);
    
            // Кнопка "Закрыть"
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Закрыть';
            closeButton.style.cssText = `
                display: block;
                margin: 20px auto 0;
                padding: 10px 20px;
                background: #333;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            `;
            closeButton.addEventListener('click', () => {
                document.body.removeChild(modal);
                document.body.removeChild(overlay);
                close();
            });
            modal.appendChild(closeButton);
    
            document.body.appendChild(modal);
        }
    }