export class LoginController {
  constructor (LoginService, $scope) {
    "ngInject";

    this.$scope = $scope;
    this.loginService = LoginService;

  }

  login () {
    let userObj = {
      user: this.$scope.email,
      password: this.$scope.password
    }
    this.loginService.login(userObj);
  }

  logout () {
    this.loginService.logout();   
  }

  
}