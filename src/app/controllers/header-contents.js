angular.module('app').controller('header-contents', ['$scope', 'ResumeApi', function($scope, ResumeApi) {
  $scope.personal = ResumeApi.query({
    endpointName: "personal"
  });
}]);
