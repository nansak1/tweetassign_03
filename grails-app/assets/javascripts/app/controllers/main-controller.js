/**
 * Created by nansak1 on 4/6/2016.
 */
/*app.controller('mainController', function($scope, authService, $location){

    var user = authService.getUsername();
    var token = authService.getToken();
    $scope.aToken = token;

    $scope.isLoggedIn = user;
    console.log( "main 1:" + $scope.isLoggedIn);

    $scope.isActive = function (viewLocation) {
        return viewLocation == $location.path();
    }


     if (!user && !token){
         $location.path('/login');
         $scope.isLoggedIn = null;
         console.log( "No token:" + $scope.isLoggedIn)
     }
     else{
         $location.path('/home')
         $scope.isLoggedIn = user;
         console.log( "token found:" + $scope.isLoggedIn)
     }

    if (!token){
        $location.path('/login');
        $scope.isLoggedIn = null;
        console.log( "No token:" + $scope.isLoggedIn)
    }
    else{
       // $location.path('/')
        $scope.isLoggedIn = user;
        console.log( "token found:" + $scope.isLoggedIn)
    }

    //$scope.isLoggedIn = authService.getUsername();
    //console.log("in main " +  $scope.isLoggedIn);

    $scope.isActive = function (viewLocation) {
        return viewLocation == $location.path();
    }

});*/

