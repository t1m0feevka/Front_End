// Варіант 145
const n = 145;
const firstElementNumber = (n % 10) + 1; // 6
const secondElementNumber = firstElementNumber + 1; // 7

// Зміна кольорів через getElementById (element6)
let firstClicked = false;
document.getElementById(`element${firstElementNumber}`).addEventListener('click', function() {
    firstClicked = !firstClicked;
    if(firstClicked) {
        this.style.backgroundColor = '#ffcc00'; // фон
        this.style.color = '#0000ff';           // текст
    } else {
        this.style.backgroundColor = '';
        this.style.color = '';
    }
});

// Зміна кольорів через querySelector (element7)
let secondClicked = false;
document.querySelector(`#element${secondElementNumber}`).addEventListener('click', function() {
    secondClicked = !secondClicked;
    if(secondClicked) {
        this.style.backgroundColor = '#00ccff'; // фон
        this.style.color = '#ff0000';           // текст
    } else {
        this.style.backgroundColor = '';
        this.style.color = '';
    }
});

// Кнопки для керування зображенням
let img = document.getElementById('tbilisi-img');
const container = img.parentElement;

document.getElementById('add-btn').addEventListener('click', () => {
    if (!document.getElementById('tbilisi-img')) {
        const newImg = document.createElement('img');
        newImg.id = 'tbilisi-img';
        newImg.src = 'https://www.advantour.com/img/georgia/images/tbilisi.jpg';
        newImg.width = 500;
        container.appendChild(newImg);
        img = newImg; // оновлюємо змінну img
    }
});

document.getElementById('increase-btn').addEventListener('click', () => {
    if (img) img.width = img.width * 1.2;
});

document.getElementById('decrease-btn').addEventListener('click', () => {
    if (img) img.width = img.width * 0.8;
});

document.getElementById('remove-btn').addEventListener('click', () => {
    if (img) {
        img.remove();
        img = null; // очищаємо змінну img
    }
});
