angular.module('app').factory('ResumeApi', [ '$resource', function($resource) {
  return $resource('api/:endpointName.json', {}, {
    query: {method:'GET', params:{endpointName:'api'}, isArray:true}
  });
} ]);
