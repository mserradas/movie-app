export class MovieService {
  constructor($http, $log, $q){
    'ngInject';

    this.$http = $http;
    this.$log = $log;
    this.deferred = $q.defer();
    this.urlAPi = 'http://www.omdbapi.com/';  
  }

  getMoviesSearchByTitle(title, year) {
    let configObj = {
      params: {
       apikey: 'f12ba140',
       t: title,
       y: year,
       r: 'json'
     }
   }  
    return this.$http.get(this.urlAPi, configObj)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  }

}
