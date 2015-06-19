angular.module('app').controller('options', ['$scope', 'ngDialog', function($scope, ngDialog) {
      $scope.games = function ($scope, ngDialog) {
          ngDialog.open({ template: '../../views/games.html' });
      };

      $scope.classes = function () {
          ngDialog.open({ template: '../../views/classes.html' });
      };

      $scope.travel = function () {
          ngDialog.open({ template: '../../views/travel.html' });
      };

      $scope.music = function () {
          ngDialog.open({ template: '../../views/music.html' });
      };
} ]);
