<!doctype html>
<html ng-app="app">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <asset:javascript src="application.js"/>
    <asset:stylesheet src="application.css"/>
</head>


<body>


<div id="loggedOut" class="alert alert-info" ng-show="logout" role="alert">Sorry to see you leave...</div>
<nav ng-include src="'/app/navigation.htm'" ng-if="location.path() !== '/login'" class="navbar navbar-default"></nav>

<div ng-view></div>


</body>
</html>