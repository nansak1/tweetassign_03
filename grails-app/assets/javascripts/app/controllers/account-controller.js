/**
 * Created by nayna on 4/5/2016.
 */
app.controller('accountController', function($scope, accService, authService, msgService, $location, $routeParams){

    var currentUser = authService.getUsername();
    var currentUserInfo =  accService.getUserProfile();
    var token = authService.getToken();
    var poster = $routeParams.handle;

    //auth stuff
    if (!token && !currentUser){
        $location.path('/login');
    }
    else{
        var anAccount = !poster ? currentUser : poster;
        $scope.isLoggedIn = currentUser;
    }

    $scope.aToken = token;
    $scope.isLoggedIn = currentUser;
    $scope.poster = poster;
    $scope.state = "Follow"
    $scope.editorEnabled = false;


    //if current user is already following poster follow button should say "following"
    if (poster && !(poster == currentUser)){
        var currentUserFollowing = currentUserInfo.following;
        if (currentUserFollowing.indexOf(poster) == -1) {
            $scope.state = "Follow";
            console.log($scope.state);
        }
        else {
            $scope.state = "Following";
        }
    }


    accService.accountsFollowing(currentUser,token)
        .then(function(response)
        {
        var currentUserFollowing = response.data.following;
            console.log(currentUserFollowing);
            console.log(poster);
        },function(error){

            console.log('error', error);
    });


//display messages by user
    msgService.searchMessagesbyPoster(anAccount)
        .then(function(response){
            $scope.messages = response.data;
            return response.data;
        },
        function (error) {
            console.log('error', error);
        });


    //display logged in user info
    accService.findAccount(anAccount, token)
        .then(function(response){
                $scope.accounts = response.data;
                // currentUserId = $scope.accounts.id;
                return response.data;
            },
            function (error) {
                console.log('error', error);
            });


    $scope.Follow = function(posterId){
        accService.followAccount(currentUserInfo.id, posterId, token)
            .then(function(response){
                    $scope.accounts = response.data;
                    $scope.state ="Following";
                    console.log("current user following poster");
                    return response.data;
                },
                function (error) {
                    console.log('error', error);
                });
    };

    $scope.saveDetails = function(fullName, emailAddress,id)
    {
        accService.updateAccount(fullName, emailAddress, id, token)
            .then(function(response) {
                console.log (response.data);
                $scope.accounts.fullName = response.data.fullName;
                $scope.accounts.emailAddress = response.data.emailAddress;

                },
                function(error) {
                    console.log('error', error);

                });


    };

});