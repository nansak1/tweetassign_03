app.controller('authController', ['$scope', 'authService', 'accService','$location','$rootScope',function ($scope, authService, accService, $location,$rootScope) {

    var currentUser;
    $scope.isLoggedIn = null;
    $scope.logout = false;


    $scope.Login = function () {
        authService.Login($scope.accountHandle, $scope.accountPassword)
            .then(function(response) {

                authService.setCredentials(response.data.username);
                authService.setToken(response.data.access_token);
                accService.setUserProfile(response.data.username, response.data.access_token);

                $scope.aToken = authService.getToken();
                $scope.isLoggedIn = authService.getUsername();
                currentUser = authService.getUsername();
                $location.path('/details');
            },
            function(error) {
                $scope.error = "Invalid Login";
                console.log($scope.error);
            });
        };



       $scope.Logout = function () {

            authService.destroyToken();
            $scope.isLoggedIn = authService.isLoggedIn();

            $rootScope.logout = true;
            //$rootScope.logoutMsg = "Sorry to see you go";

            console.log($scope.logout);
            console.log($scope.logoutMsg);
            console.log($scope.isLoggedIn);

           //alert("Sorry to see you go...");
            //currentUser = authService.getUsername();
            //console.log(currentUser)
            console.log("User logged out and token destroyed")

        };


    /*$scope.$watch($scope.isLoggedIn, function(user, token) {
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
   });*/


    //function to keep track of login or logout

 /*   $scope.$watch(authService.isLoggedIn, function (value, oldValue) {
        token = authService.getToken
        console.log (token);
        //console.log(oldValue);
        //if(!value && oldValue)
        if(!value) {
            console.log("Disconnect");
            $location.path('/login');
        }
        if(value) {
            console.log("Connect");
            $scope.loggedInUser = value;
            $location.path('/home');
            //Do something when the user is connected
        }

    }, true);*/

}]);