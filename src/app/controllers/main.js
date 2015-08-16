angular.module('app').controller('main', ['$scope', 'ResumeApi', '_', function($scope, ResumeApi, _) {
  /*
   * Add additional scope objects for each new major section and/or
   * highlight added to the main view
   */
  $scope.sections = ResumeApi.query({
    endpointName: "sections"
  });
  $scope.obj = ResumeApi.query({
    endpointName: "facets"
  });
  $scope.job = ResumeApi.query({
    endpointName: "facets"
  });
  $scope.edu = ResumeApi.query({
    endpointName: "facets"
  });
  $scope.skills = ResumeApi.query({
    endpointName: "grids"
  });
  $scope.certs = ResumeApi.query({
    endpointName: "facets"
  });
  $scope.subnotes = ResumeApi.query({
    endpointName: "subnotes"
  });
  objTextOverflow(133);

  /*
   * Add additional promises for each additional instance of
   * Highlights used in the main view for each directive
   */
  $scope.obj.$promise.then(processObjRs);
  $scope.job.$promise.then(processJobRs);
  $scope.edu.$promise.then(processEduRs);
  $scope.skills.$promise.then(processSkillsRs);
  $scope.certs.$promise.then(processCertsRs);

  function processObjRs(data) {
    $scope.obj = _.where(data, {
      section: "obj"
    });
  }

  function processJobRs(data) {
    $scope.job = _.where(data, {
      section: "job"
    });
  }

  function processEduRs(data) {
    $scope.edu = _.where(data, {
      section: "edu"
    });
  }

  function processSkillsRs(data) {
    $scope.skills = _.where(data, {
      section: "skills"
    });
  }

  function processCertsRs(data) {
    $scope.certs = _.where(data, {
      section: "certs"
    });
  }

  /*
   * Used by ng-repeat functionality to assign specific style to an HTML element
   * in the view
   */
  $scope.setRightSideClass = function (index) {
    if ((index == 2) || (index == 3)) {
      return "float-right-align";
    }
  }

  /*
   * Handles custom overflow for the tag-line class and
   * subsequent objective artifact "obj".  Use-case: One
   * should not have a long objective!
   */
  function objTextOverflow(objMaxTextLength) {
    $("div.tag-line").text(function(index, currentText) {
      if (currentText.length > objMaxTextLength) {
        return currentText.substr(0, objMaxTextLength - 4) + ' ...';
      }
    });
  }
}]);
