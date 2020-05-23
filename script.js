const plus = document.querySelector('.sizeUp');
const minus = document.querySelector('.sizeDown');
const changeColor = document.querySelector('.color');
const par = document.querySelector('p');

let $fontSize = 36

plus.addEventListener('click', function () {
    par.style.fontSize = $fontSize + "px";
    $fontSize++;
});

minus.addEventListener('click', function () {
    par.style.fontSize = $fontSize + "px";
    $fontSize--;
});

const blabla = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    par.style.color = `rgb(${r},${g},${b})`;
};

changeColor.addEventListener('click', blabla);