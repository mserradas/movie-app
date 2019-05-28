export function routerConfig($stateProvider, $urlRouterProvider) {
  "ngInject";
  $stateProvider
    .state("movie-search", {
      url: "/movie-search",
      templateUrl: "app/components/movie-search/movie-search.html",
      controller: "MovieSearchController",
      controllerAs: "ms"
    })
    .state("movie-detail", {
      url: "/movie-detail",
      params: { 
         obj: null 
      },
      templateUrl: "app/components/movie-detail/movie-detail.html",
      controller: "MovieDetailController",
      controllerAs: "md"
    })
    .state("login", {
      url: "/login",
      templateUrl: "app/components/login/login.html",
      controller: "LoginController",
      controllerAs: "lg"
    });

  $urlRouterProvider.otherwise("/login");
}
