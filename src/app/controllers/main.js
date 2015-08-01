angular.module('app').controller('main', [ '$scope', 'ResumeApi', '_', function($scope, ResumeApi, _) {
		$scope.sections = ResumeApi.query({endpointName : "sections"});
		$scope.job = ResumeApi.query({endpointName : "facets"});
		$scope.edu = ResumeApi.query({endpointName : "facets"});
		$scope.skills = ResumeApi.query({endpointName : "grids"});
		$scope.subnotes = ResumeApi.query({endpointName : "subnotes"});

		/*
		 * Add additional promises for each additional instance of
		 * Highlights used in the main view for each directive
		 */
		$scope.job.$promise.then(processJobRs);
		$scope.edu.$promise.then(processEduRs);
		$scope.skills.$promise.then(processSkillsRs);

		function processJobRs(data) {
			$scope.job = _.where(data,{section : "job"});
		}
		function processEduRs(data) {
			$scope.edu = _.where(data,{section : "edu"});
		}
		function processSkillsRs(data) {
			$scope.skills = _.where(data,{section : "skills"});
		}
} ]);
