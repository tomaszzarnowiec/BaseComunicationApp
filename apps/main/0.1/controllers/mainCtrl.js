displayApp.controller("mainCtrl",function($scope,$http){
	$scope.main = {};
	$scope.main.name = "Tomasz";
	$scope.main.name2 = "Tomasz Inny";

	$scope.getContacts = function(){
		var req = {
			method: 'get',
			url: 'apps/main/0.1/backend/getContactsBasic.php'
		}

		var getContactsReq = $http(req);

		getContactsReq.success(function(data){
			$scope.contacts = data;
		});

		getContactsReq.fail(function(data){
			alert("Error");
		});
	}

	$scope.getContacts();

	$scope.getContactsSearch = function(text){
		
		var dane = JSON.stringify({
			tekst: text
		});

		var req = {
			method: 'post',
			url: 'apps/main/0.1/backend/getContacts.php'
			data: dane
		}

		var getContactsReq = $http(req);

		getContactsReq.success(function(data){
			$scope.contacts = data;
		});

		getContactsReq.fail(function(data){
			alert("Error");
		});
	}

	$scope.$watch('searchText', function() {
       $scope.getContactsSearch($scope.searchText);
    });

});