export class LoginService {
  constructor($http, $q, $state, $log) {
    "ngInject";

    this.$http = $http;
    this.$q = $q;
    this.$state = $state;
    this.$log = $log;
  }

  login(userObj) {
    this.cleanCredentials();
    return Promise.resolve()
      .then(() => {
        sessionStorage.setItem("user", angular.toJson(userObj));
        this.$state.go("movie-search");
      })
      .catch(() => {
        this.$log.log("Error Login");
      });
  }

  logout() {
    return Promise.resolve()
      .then(() => {
        localStorage.clear();
        sessionStorage.clear();
        this.$state.go("login");
      })
      .catch((error) => {
        this.$log.log("Error Logout", error);
      });
  }

  cleanCredentials() {
    sessionStorage.removeItem("user");
  }
}
