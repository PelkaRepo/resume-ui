angular.module('app').directive('subnotes', [ function() {
  return {
    restrict: 'EA',
    controller: 'main',
    templateUrl: '../../views/subnotes.html'
  };
} ]);
