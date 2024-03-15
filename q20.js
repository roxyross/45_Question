// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var movies = [
    { title: "Inception", year: 2010, genre: "sci-fi" },
    { title: "The Shawshank Redemption", year: 1994, genre: "Drama" },
    { title: "The Dark Knight", year: 2008, genre: "Action" },
    { title: "Forrest Gump", year: 1994, genre: "Drama" },
    { title: "Pulp Fiction", year: 1994, genre: "Crime" },
];
movies.forEach(function (movie) {
    console.log("Title : ".concat(movie.title, " , Year : ").concat(movie.year, ", Genre : ").concat(movie.genre));
});
