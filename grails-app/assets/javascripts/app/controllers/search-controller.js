/**
 * Created by nayna on 4/5/2016.
 */
app.controller('searchController', function ($scope, msgService, authService, accService, $location) {
    //$scope.message = 'Search something';
    //$scope.toggle = true;


    var currentUser = authService.getUsername();
    var token = authService.getToken();
    //var allAccounts = {};

    var allAccounts = accService.getAllAccounts(token);
       /* .then(function(response){
                allAccounts = response.data;
                console.log(allAccounts.accountHandle);
                //return response.data;
            },
            function(error) {
                console.log("error", error);
            });*/

    console.log(allAccounts.accountHandle);

    $scope.aToken = token;
    $scope.isLoggedIn = currentUser;

   // $scope.$watch($scope.isLoggedIn, function(isLoggedIn, aToken) {
     /*   if (!token){
            $location.path('/login');
            $scope.isLoggedIn = null;
            console.log( "No token:" + $scope.isLoggedIn)
        }
        else{
            $location.path('/search');
            $scope.isLoggedIn = user;
            console.log( "token found:" + $scope.isLoggedIn)
        }*/

    if (!currentUser && !token){
        $location.path('/login');
        $scope.isLoggedIn = undefined;
        console.log( "No token in search:" + $scope.isLoggedIn)
    }
    else{
        //$location.path('/');
        $scope.isLoggedIn = currentUser;
        console.log( "token found in search:" + $scope.isLoggedIn)
    }
   // });
    //authService.isLoggedIn(user);

    // var user = $scope.accountHandle

    console.log(currentUser);
    //console.log(token);
    //console.log ($scope.text);

    // $scope.auth.token = authService.getToken();
    //$scope.auth.username = authService.getUsername()

    /*  accService.getAllAccounts()
     .then(function(response){
     $scope.accounts = response.data;
     return response.data;
     },
     function (error) {
     console.log('error', error);
     });*/


    //to route to account poster's detail page
    $scope.getMessages = function(params){

        accService.setAccount(params);

        msgService.searchMessagesbyPoster(params,token)
            .then(function(response){
                msgService.setMessages(response.data);
                $scope.results = response.data;
                //msgService.setMessages($scope.messages);
                console.log($scope.results);
                return response.data;
            },
                function(error) {
                    console.log('error', error);
                });
    };


    // search by poster and text?
    $scope.searchMessages = function() {
        //var params = {text: $scope.text};
        console.log($scope.text);



        //var userExists = accService.getAccount($scope.text);
       // console.log(userExists);

       /* accService.getAccount($scope.text)
            .then(function(response){
                    $scope.account = response.data;
                    return response.data;
                },
                function (error) {
                    console.log('error', error);
                });

        console.log($scope.account);



        if (!$scope.account) { */ //is a username
            msgService.searchMessages($scope.text,token)
                .then(function (response) {
                        $scope.messages = response.data;
                        console.log($scope.messages);
                        return response.data;
                    },
                    function (error) {
                        console.log("error", error);
                    });
     /*  }
        else {

            msgService.searchMessagesbyPoster($scope.text)
                .then(function (response) {
                        $scope.messages = response.data;
                        console.log($scope.messages);
                        return response.data;
                    },
                    function (error) {
                        console.log('error', error);

                    });


        }*/


    };




    $scope.searchByTextAndAccHandle=function(){
        console.log($scope.text);
        console.log($scope.accHandle);

        msgService.searchByTextAndAccHandle($scope.text,$scope.accHandle,token)
            .then(function (response) {
                    $scope.messages = response.data;
                    console.log($scope.messages);
                    return response.data;
                },
                function(error){
                    console.log('error'.error);
                })
    };


});