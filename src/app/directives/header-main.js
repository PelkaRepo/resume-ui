angular.module('app').directive('headerMain', [ function() {
  return {
    restrict: 'EA',
    controller: 'header-contents',
    templateUrl: '../../views/header-main.html'
  };
} ]);
