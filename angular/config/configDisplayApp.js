displayApp.config(['$routeProvider',function($routeProvider){
    
    // $routeProvider.when(
    //     '/dashboard',{
    //         templateUrl: 'views/pages/dashboard.html',
    //         controller: 'dashboardCtrl'
    //     }
    // );

    $routeProvider.otherwise({
        templateUrl: 'apps/main/0.1/views/main.html',
        controller: 'mainCtrl'
    });
    
}]);