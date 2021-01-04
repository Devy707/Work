"use strict";
let numberOfFilms;
for (let i = 0; i < 1; i++) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    if (isNaN(numberOfFilms) != true && numberOfFilms != '' && numberOfFilms != null) {
        break;
    } else {
        i--;
    }
}
let personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



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

if (personMovieDB.count < 10) {
    console.log('Мало');
} else if (personMovieDB.count >= 10 && personMovieDB.count < 30) {
    console.log('Много');
} else {
    console.log('Очень много');
}
console.log(personMovieDB);