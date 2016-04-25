app.controller('accountController', function ($scope, accService, authService, msgService, $location, $routeParams) {

    var currentUser = authService.getUsername();
    var currentUserInfo = accService.getUserProfile();
    var token = authService.getToken();
    var poster = $routeParams.handle;

    //auth stuff
    if (!token && !currentUser) {
        $location.path('/login');
    }
    else {

        var anAccount = !poster ? currentUser : poster;
        $scope.isLoggedIn = currentUser;
    }

    //is the user the current user or the poster

    $scope.aToken = token;
    $scope.isLoggedIn = currentUser;
    $scope.poster = poster;
    $scope.state = "Follow"
    $scope.editorEnabled = false;

    //if current user is already following poster follow button should say "following"
    if (poster && (poster != currentUser)) {
        var currentUserFollowing = currentUserInfo.following;
        if (currentUserFollowing.indexOf(poster) == -1) {
            $scope.state = "Follow";
            console.log($scope.state);
        }
        else {
            $scope.state = "Following";
        }
    }


//to get followers
    accService.accountsFollowing(currentUser, token)
        .then(function (response) {
            var currentUserFollowing = response.data.following;
            console.log(currentUserFollowing);
            console.log(poster);
        }, function (error) {

            console.log('error', error);
        });

//display messages by user
    msgService.searchMessagesbyPoster(anAccount)
        .then(function (response) {
                $scope.messages = response.data;
                return response.data;
            },
            function (error) {
                console.log('error', error);
            });


    //display logged in user info
    accService.findAccount(anAccount, token)
        .then(function (response) {
                $scope.accounts = response.data;
                return response.data;
            },
            function (error) {
                console.log('error', error);
            });


    $scope.Follow = function (posterId) {
        accService.followAccount(currentUserInfo.id, posterId, token)
            .then(function (response) {
                    $scope.accounts = response.data;
                    $scope.state = "Following";
                    return response.data;
                },
                function (error) {
                    console.log('error', error);
                });


    };

    $scope.saveDetails = function (fullName, emailAddress, id) {
        accService.updateAccount(fullName, emailAddress, id, token)
            .then(function (response) {

                    $scope.accounts.fullName = response.data.fullName;
                    $scope.accounts.emailAddress = response.data.emailAddress;

                },
                function (error) {
                    console.log('error', error);

                });

    };


});