let heart = document.querySelector('.heart-cost');
let parseHeart = parseFloat(heart.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parseClickerCost = parseFloat(clickerCost.innerHTML);

function incrementHeart(){
parseHeart += 1;
heart.innerHTML = parseHeart;
}

function buyClick(){
    if(parseHeart >= parseClickerCost) {
        parseHeart -= parseClickerCost;
        heart.innerHTML = parseHeart;
    }
}