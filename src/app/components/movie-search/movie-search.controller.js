export class MovieSearchController {
  constructor(getMoviesSearchByTitle, $scope, $state, toastr) {
    "ngInject";

    this.toastr = toastr;
    this.$scope = $scope;
    this.$state = $state;
    this.movieService = getMoviesSearchByTitle;
    this.movie = [];
    this.movieFavorite = [];

    this.disabled = false;

    this.showMovieFavorite();
  }

  getMoviesSearch() {
    let title = this.$scope.movieTitle;
    let year = this.$scope.movieYear;

    this.movieService.getMoviesSearchByTitle(title, year).then(response => {
      if (response.data.Error) {
        this.toastr.error(response.data.Error);
        this.disabled = false;
      } else {
        this.movie = response.data;
        this.disabled = true;
      }
    });
  }

  addFavorite(movie) {
    let existing = localStorage.getItem("moviesFavorites");

    if (!existing) {
      let moviesFavorites = { movies: [movie] };
      localStorage.setItem("moviesFavorites", angular.toJson(moviesFavorites));
      this.toastr.success("Movie added to favorite");
      this.showMovieFavorite();
    } else {
      existing = angular.fromJson(existing);
      let movieExisting = this.checkExistingMovie(existing, movie);

      if (movieExisting) {
        this.toastr.warning("added Movie");
      } else {
        existing.movies.push(movie);
        localStorage.setItem("moviesFavorites", angular.toJson(existing));
        this.toastr.success("Movie added to favorite");
        this.showMovieFavorite();
      }
    }
  }

  checkExistingMovie(existing, movie) {
    for (let i = 0; i < existing.movies.length; i++) {
      if (existing.movies[i]["imdbID"] === movie["imdbID"]) return true;
    }

    return false;
  }

  showMovieFavorite() {
    this.movieFavorite = localStorage.getItem("moviesFavorites");

    if (this.movieFavorite) {
      this.disabledFavorite = true;
    } else {
      this.disabledFavorite = false;
    }

    this.moviesFavorite = angular.fromJson(this.movieFavorite);
  }

  clearSearch() {
    this.$scope.movieTitle = null;
    this.$scope.movieYear = null;
    this.disabled = false;
  }

  navigateToMovie(obj) {
    this.$state.go("movie-detail", { obj: obj });
  }
}
