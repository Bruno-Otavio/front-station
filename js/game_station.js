const game_container = document.querySelector('#game-container');
const ball = document.querySelector('.ball');
const points_element = document.querySelector('.points');

const button = document.querySelector('#double');
const price_element = document.querySelector('.price');

let points = 0;
let amount = 1;
let price = 10;

ball.addEventListener('click', () => {
    points += amount;
    points_element.textContent = `Pontos: ${points}`;
});

ball.addEventListener('click', () => {
    if (points >= price) {
        price *= 2;
        price_element.textContent `Preço: ${price} pontos`;

        amount *= 2;

        points -= price;
        points_element.textContent = `Pontos: ${points}`;
    }
});
