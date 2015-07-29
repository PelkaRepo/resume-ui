angular.module('app').directive('facetGrids', [ function() {
  return {
    restrict: 'EA',
    controller: 'main',
    templateUrl: '../../views/facet-grids.html'
  };
} ]);
