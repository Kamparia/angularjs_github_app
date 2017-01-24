var app = angular.module("githubViewer");

var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onReposComplete, onError);
    };

    var onReposComplete = function(data) {
        $scope.repos = data;
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch the data.";
    };

    // Set Username from URL path
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    
    github.getUser($scope.username).then(onUserComplete, onError);

};

app.controller("UserController", UserController);