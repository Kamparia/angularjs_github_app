var app = angular.module("githubViewer");

var MainController = function($scope, $location, $log) {
    
    // a get http request
    $scope.search = function(username) {
      $log.info("Searching for " + username)
      $location.path("/user/" + username);
    };
    
};

app.controller("MainController", MainController);