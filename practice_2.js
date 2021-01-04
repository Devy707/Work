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

/*--------------------РЕЩЕНИЕ ЗАДАЧИ ЧЕРЕЗ ЦИКЛ FOR--------------------*/
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
/*--------------------РЕЩЕНИЕ ЗАДАЧИ ЧЕРЕЗ ЦИКЛ FOR--------------------*/


/*--------------------РЕЩЕНИЕ ЗАДАЧИ ЧЕРЕЗ ЦИКЛ WHILE--------------------*/
// let k = 0;
// while (k < 2) {
//     const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
//         secondQuestion = prompt('На сколько оцените его?', '');
//     k++;
//     if (firstQuestion != null && secondQuestion != null && firstQuestion != '' &&
//         secondQuestion != '' && firstQuestion.length < 50) {

//         personMovieDB.movies[firstQuestion] = secondQuestion;
//         console.log('DONE');
//     } else {
//         console.log('ERROR');
//         k--;
//     }
// }
/*--------------------РЕЩЕНИЕ ЗАДАЧИ ЧЕРЕЗ ЦИКЛ WHILE--------------------*/

if (personMovieDB.count < 10) {
    console.log('Мало');
} else if (personMovieDB.count >= 10 && personMovieDB.count < 30) {
    console.log('Много');
} else {
    console.log('Очень много');
}
console.log(personMovieDB);