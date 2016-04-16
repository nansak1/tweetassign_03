app.controller('searchController', function ($scope, msgService, authService, accService, $location) {

    var currentUser = authService.getUsername();
    var token = authService.getToken();
    $scope.aToken = token;
    $scope.isLoggedIn = currentUser;


    if (!currentUser && !token) {
        $location.path('/login');
        $scope.isLoggedIn = undefined;
    }
    else {
        //$location.path('/');
        $scope.isLoggedIn = currentUser;
    }


    //to route to account poster's detail page
    $scope.getMessages = function (params) {

        accService.setAccount(params);

        msgService.searchMessagesbyPoster(params, token)
            .then(function (response) {
                    msgService.setMessages(response.data);
                    $scope.results = response.data;
                    return response.data;
                },
                function (error) {
                    console.log('error', error);
                });
    };


    // search by poster and text?
    $scope.searchMessages = function () {

        msgService.searchMessages($scope.text, token)
            .then(function (response) {
                    $scope.messages = response.data;
                    console.log($scope.messages);
                    return response.data;
                },
                function (error) {
                    console.log('error', error);
                });


    };


    $scope.searchByTextAndAccHandle = function () {

        msgService.searchByTextAndAccHandle($scope.text, $scope.accHandle, token)
            .then(function (response) {
                    $scope.messages = response.data;
                    return response.data;
                },
                function (error) {
                    console.log('error'.error);
                })
    };


});