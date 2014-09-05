'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {
  }])
  .controller('WaitListController', ['$scope','$firebase', function($scope, $firebase) {
    var partiesRef = new Firebase('https://waitandeat-arup.firebaseio.com/');

    $scope.parties = $firebase(partiesRef);
    $scope.newParty = {
      name: '',
      phone: '',
      size: ''
    }
    $scope.saveParty = function(){
        $scope.parties.$add($scope.newParty);
        $scope.newParty = '';
    }
  }]);
