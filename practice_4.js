"use strict";
/*jshint -W030 */
let personMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (personMovieDB.count == '' || isNaN(personMovieDB.count) == true || personMovieDB.count == null) {
            personMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
                secondQuestion = prompt('На сколько оцените его?', '');

            if (firstQuestion != null && secondQuestion != null && firstQuestion != '' &&
                secondQuestion != '' && firstQuestion.length < 50) {

                personMovieDB.movies[firstQuestion] = secondQuestion;
                console.log('DONE');
            } else {
                console.log('ERROR');
                i--;
            }
        }
    },
    detect: () => {
        if (personMovieDB.count < 10) {
            console.log('Мало');
        } else if (personMovieDB.count >= 10 && personMovieDB.count < 30) {
            console.log('Много');
        } else {
            console.log('Очень много');
        }
    },
    showMyDB: (hidden) => {
        if (hidden == true) {
            console.log(personMovieDB);
        } else {
            console.log('Done!');
        }
    },
    toggleVisibleDB: function() {
        if (personMovieDB.privat) {
            personMovieDB.privat = false;
        } else {
            personMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (genre == null || genre === '') {
                i--;
            } else {
                personMovieDB.genres.push(genre);
            }
        }
        return personMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
};