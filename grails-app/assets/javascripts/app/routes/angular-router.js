app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/app/login.htm',
            controller: 'authController'
        })
        .when('/details', {
            templateUrl: '/app/account.htm',
            controller: 'accountController'
        })
        .when('/details/:handle?', {
            templateUrl: '/app/account.htm',
            controller: 'accountController'
        })
        .when('/search', {
            templateUrl: '/app/search.htm',
            controller: 'searchController'
        })
        .otherwise({
            redirectTo: '/login'
        })

});

//shows nav bar only when logged in
app.run(function($rootScope, $location) {
    $rootScope.location = $location;


});









