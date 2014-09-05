'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {
  }])
  .controller('WaitListController', ['$scope', function($scope) {
    $scope.parties = [];
    $scope.party = {
      name: '',
      phone: '',
      size: ''
    }
    $scope.saveParty = function(){
      if ($scope.party){
        $scope.parties.push($scope.party);
        $scope.party = '';
      }
    }
  }]);
