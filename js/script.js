const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
let personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const firstQuestion = prompt('Один из последних просмотренных фильмов?',''),
      secondQuestion = prompt('На сколько оцените его?',''),
      thirdQuestion = prompt('Один из последних просмотренных фильмов?',''),
      fourthQuestion = prompt('На сколько оцените его?','');
personMovieDB.movies[firstQuestion] = secondQuestion;
personMovieDB.movies[thirdQuestion] = fourthQuestion;
console.log(personMovieDB);