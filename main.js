let btn = document.querySelector('.btn'),
    block = document.querySelector('.blocks'),
    blockDiv = document.querySelectorAll('.blocks>div');
let betred = document.querySelector('.betred'),
    betgreen = document.querySelector('.betgreen'),
    betblack = document.querySelector('.betblack'),
    bet = document.querySelector('.bet'),
    cash = document.querySelector('.cash');
let money = cash.value,
    moneyBet = bet.value;
console.log(moneyBet, money);
const red = [],
    dark = [];
let array = Array.from(blockDiv);
blockDiv.forEach((blc, i = 0) => {
    if (i % 2 == 0) {
        blc.style.backgroundColor = 'darkred';
        red.push(blc);
    } else {
        blc.style.backgroundColor = 'grey';
        dark.push(blc);
    }
    i++;
});




blockDiv[6].style.backgroundColor = 'green';








btn.addEventListener('click', () => {

    let rand = Math.floor(Math.random() * 9);
    block.style.left = -rand * 90 + 10 + 'px';
    rand++;

    setTimeout(() => {
        let winner = blockDiv[rand].style.backgroundColor;
        blockDiv[rand].style.backgroundColor = '#B2BFFC';
        setTimeout(() => { blockDiv[rand].style.backgroundColor = winner; }, 1000);






    }, 3000);
})