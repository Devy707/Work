"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function remember() {
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
}

remember();


function detect() {
    if (personMovieDB.count < 10) {
        console.log('Мало');
    } else if (personMovieDB.count >= 10 && personMovieDB.count < 30) {
        console.log('Много');
    } else {
        console.log('Очень много');
    }
}
detect();

function showMyDB(hidden) {
    if (hidden == true) {
        console.log(personMovieDB);
    } else {
        console.log('Done!');
    }
}
showMyDB(personMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personMovieDB.genres.push(genre);
    }
}
writeYourGenres();