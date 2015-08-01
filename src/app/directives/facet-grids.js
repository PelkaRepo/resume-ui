angular.module('app').directive('facetGrids', [ function() {
  return {
    restrict: 'EA',
    controller: 'main',
    scope: {
      content: '=content',
    },
    templateUrl: '../../views/facet-grids.html'
  };
} ]);
