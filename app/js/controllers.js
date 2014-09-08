'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {
  }])
  .controller('WaitListController', ['$scope','$firebase', function($scope, $firebase) {
    // Connectiing $scope.parties to live Firebase data
    var partiesRef = new Firebase('https://waitandeat-arup.firebaseio.com/parties');

    // Object to store data from the waitlist form
    $scope.parties = $firebase(partiesRef);
    $scope.newParty = {
      name: '',
      phone: '',
      size: ''
    }
    // Function to save a new party to the waitlist
    $scope.saveParty = function(){
        $scope.parties.$add($scope.newParty);
        $scope.newParty = '';
    }
    // Function to send a text message to a party
    $scope.sendTextMessage = function(phoneNumber) {
      var textMessageRef = new Firebase('http://waitandeat-arup.firebaseio.com/textMessages');
      var textMessages = $firebase(textMessageRef);
      textMessages.$add({phoneNumber: phoneNumber});
    };
  }]);
