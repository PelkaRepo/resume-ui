angular.module('app').directive('navMain', ['ngDialog', function(ngDialog) {
  return {
    restrict: 'EA',
    controller: 'options',
    templateUrl: '../../views/nav.html'
  };
} ]);
