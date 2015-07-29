angular.module('app').directive('facetBullets', [ function() {
  return {
    restrict: 'EA',
    controller: 'main',
    templateUrl: '../../views/facet-bullets.html'
  };
} ]);
