angular.module('app').directive('facetBullets', [ function() {
  return {
    restrict: 'EA',
    controller: 'main',
    scope: {
      content: '=content',
    },
    templateUrl: '../../views/facet-bullets.html'
  };
} ]);
