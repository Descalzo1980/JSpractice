"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// let noAds = document.querySelector('.promo__adv img'); //сам сделал))

// noAds.remove(); // сделал плохо)))


// удаляем рекламу
const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

adv.forEach(function (item) { // то же самое
    item.remove();
});

// меняем жанр

genre.textContent = 'драма';

// меняем фон

poster.style.backgroundImage = "url('../img/bg.jpg')";

// список фильмов из const movieDB

movieList.innerHTML = ""; // querySelectorAll 
                            //создаст псевдомассив исп. querySelector

movieDB.movies.sort(); // сотрируем по алфавиту

// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});




