"use strict";

document.addEventListener('DOMContentLoaded', () => {

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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm){

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite){
                console.log("Добавляем любымый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);  
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    // adv.forEach(function (item) { // то же самое
    //     item.remove();
    // });

    // // меняем жанр

    // genre.textContent = 'драма';

    // // меняем фон

    // poster.style.backgroundImage = "url('../img/bg.jpg')";

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = "url('../img/bg.jpg')";
    };

    // список фильмов из const movieDB

    const sortArr = (arr) => {
        arr.sort();
    };


    // movieDB.movies.sort(); // сортируем по алфавиту

    function createMovieList(films, parent) {
        parent.innerHTML = ""; // querySelectorAll
        sortArr(films);
        //создаст псевдомассив исп. querySelector
        // console.log(poster.innerHTML);
        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
        });

        document.querySelectorAll('.delete').forEach((btn , i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); // ищем элементы 
                movieDB.movies.splice(i, 1);//удаляем элементы 
                createMovieList(films, parent); // рекурсия?
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});