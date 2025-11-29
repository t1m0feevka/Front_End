const n = 145;
const firstElementNumber = (n % 10) + 1; 
const secondElementNumber = firstElementNumber + 1; 

let firstClicked = false;
document.getElementById(`element${firstElementNumber}`).addEventListener('click', function() {
    firstClicked = !firstClicked;
    if(firstClicked) {
        this.style.backgroundColor = '#ffcc00'; 
        this.style.color = '#0000ff';           
    } else {
        this.style.backgroundColor = '';
        this.style.color = '';
    }
});

let secondClicked = false;
document.querySelector(`#element${secondElementNumber}`).addEventListener('click', function() {
    secondClicked = !secondClicked;
    if(secondClicked) {
        this.style.backgroundColor = '#00ccff'; 
        this.style.color = '#ff0000';           
    } else {
        this.style.backgroundColor = '';
        this.style.color = '';
    }
});

let img = document.getElementById('tbilisi-img');
const container = img.parentElement;

document.getElementById('add-btn').addEventListener('click', () => {
    if (!document.getElementById('tbilisi-img')) {
        const newImg = document.createElement('img');
        newImg.id = 'tbilisi-img';
        newImg.src = 'https://www.advantour.com/img/georgia/images/tbilisi.jpg';
        newImg.width = 500;
        container.appendChild(newImg);
        img = newImg;
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
        img = null; 
    }
});
