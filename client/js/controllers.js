app.controller('MainCtrl', function($scope, $http){
	$scope.getData = function(){
		$http.get('/car').success(function(response){
			console.log(response);
			$scope.response = response;
		});
	}
});
