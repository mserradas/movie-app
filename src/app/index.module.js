import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { NavbarDirective } from './components/directives/navbar/navbar.directive';
import { MovieSearchController } from "./components/movie-search/movie-search.controller";
import { MovieDetailController } from "./components/movie-detail/movie-detail.controller";
import { LoginController } from './components/login/login.controller';
import { LoginService } from './components/login/login.service';
import { MovieService } from './components/movie-search/movie.service';

angular.module('movieApp', ['ui.router', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .directive('acmeNavbar', NavbarDirective)
  .service('getMoviesSearchByTitle', MovieService)
  .service('LoginService', LoginService)
  .controller('MovieSearchController', MovieSearchController)
  .controller('MovieDetailController', MovieDetailController)
  .controller('LoginController', LoginController);
