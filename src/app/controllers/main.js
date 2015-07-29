angular.module('app').controller('main', [ '$scope', function($scope) {
	$scope.sections = ["Career History","Key Skills"];

	$scope.facets = [
		{
			highlights : [
				{
					job : "Software Engineer",
					loc : "Richmond, VA",
					level : "Sr. Associate",
					other : "Another Component",
					timeFrame : "2015-Present",
					qualifiers : [ 'This is a qualifier', 'Super cool action happened' ]
				},
				{
					job : "Process Manager",
					loc : "Richmond, VA",
					level : "Associate",
					other : "Another Component",
					timeFrame : "2013-2015",
					qualifiers : [ 'Made process stuff', 'Super cool BPM stuff happened' ]
				}
			]
		},
		{
			highlights : [
				{
					job : "Pennsylvania State University",
					loc : "State College, PA",
					level : "",
					other : "Information Science and Technology, B.S.; Psychology, B.A.",
					timeFrame : "Graduated 2011",
					qualifiers : [ 'This is a qualifier', 'Super cool action happened' ]
				}
			]
		}
	];

	$scope.grids = [
		{
			categories : ["Platforms"],
			skills : [
				{
					rows : ["Java","AngularJS","Is","Cool"]
				},
				{
					rows : ["This","Is","Also","Neat"]
				},
				{
					rows : ["This","Is","Also","JDK"]
				},
				{
					rows : ["This","Is","Also",""]
				}
			]
		},
		{
			categories : ["Coding Languages"],
			skills : [
				{
					rows : ["Java","AngularJS","Is"]
				},
				{
					rows : ["This","Is","Also"]
				},
				{
					rows : ["This","Is","Also"]
				}
			]
		}
	];

	$scope.subnotes = "Please reach out to me directly if references are needed, and I would be more than happy to provide contacts.  This software is distributed using the open source MIT license, and is free and open to use, contribute, and create anew along those guidelines.  Feel free to submit issues to the developers at the <a href='https://github.com/PelkaRepo/resume-ui/issues/new'>PelkaRepo on GitHub</a>";
} ]);
