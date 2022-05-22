const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt("Какой последний фильм?", ''),
      b = prompt("Оценка?", ''),
      c = prompt("Какой последний фильм?", ''),
      d = prompt("Оценка?", '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);