var module = angular.module("githubViewer");

var RepoController = function($scope, $routeParams, github) {
    var onRepoComplete = function(data){
      $scope.repo = data;  
    };
    
    var onError = function(reason){
      $scope.error = reason;  
    };


    // Set Repo Name
    var reponame = $routeParams.reponame;
    // Set Username
    var username = $routeParams.username;

    github.getRepoDetails(username, reponame)
          .then(onRepoComplete, onError);
};


module.controller("RepoController", RepoController);