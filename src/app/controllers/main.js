angular.module('app').controller('main', [ '$scope', 'ResumeApi', function($scope, ResumeApi) {
	$scope.sections = ResumeApi.query({endpointName : "sections"});

	$scope.facets = ResumeApi.query({endpointName : "facets"});

	$scope.grids = ResumeApi.query({endpointName : "grids"});

	$scope.subnotes = ResumeApi.query({endpointName : "subnotes"});
} ]);
