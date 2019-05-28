export class MovieDetailController {
  constructor($state) {
    "ngInject";

    this.$state = $state;
    this.movie = [];

    this.showMovie(this.$state.params.obj);
  }

  showMovie(obj) {
    this.movie = obj;
  }

}
