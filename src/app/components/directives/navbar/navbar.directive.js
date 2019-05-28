export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/directives/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (LoginService) {
    'ngInject';

    this.loginService = LoginService;

  }

  logout () {
    this.loginService.logout();   
  }
}
