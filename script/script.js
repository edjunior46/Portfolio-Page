let cards = document.querySelectorAll('.cardFront');

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = 'url(/style/img/project0' + (i+1) + '.png)';
    cards[i].style.backgroundSize = 'cover';
    cards[i].style.backgroundPosition = 'center';
    cards[i].style.backgroundRepeat = 'no-repeat'; 
}

cards[cards.length-1].style.backgroundImage = 'url(/style/img/github.png)';
cards[cards.length-1].style.backgroundSize = '50%';

