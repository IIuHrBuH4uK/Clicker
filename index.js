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
        
    }

    function load () {
        
    }