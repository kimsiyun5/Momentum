let randomNum = Math.floor(Math.random() * 1);
const imgURL = `./img/backIMG${randomNum}.jpg`;

document.body.style.backgroundImage = `url(${imgURL})`;

