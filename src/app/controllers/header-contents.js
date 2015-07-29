angular.module('app').controller('header-contents', ['$scope', function($scope) {
  $scope.personal = [
		{
			name : "Arnold Pelka",
			addr1 : "5725 Clarinbridge Ct.",
			addr2 : "Apt. I",
			addr3 : "Henrico, VA 23228",
			phoneEnc : "tel:+18145536737",
			phone : "(814) 553-6737",
			emailEnc : "mailto:arnoldpelka@gmail.com",
			email : "arnoldpelka@gmail.com"
		}
	];
} ]);
