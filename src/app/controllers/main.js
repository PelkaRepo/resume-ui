angular.module('app').controller('main', [ '$scope', function($scope) {
	$scope.job = "Software Engineer";
	$scope.loc = "Richmond, VA";
	$scope.level = "Sr. Associate";
	$scope.other = "Another Component";
	$scope.timeFrame = "Software Engineer";


	$scope.qualifiers = [ 'This is a qualifier', 'Super cool action happened' ];
} ]);
