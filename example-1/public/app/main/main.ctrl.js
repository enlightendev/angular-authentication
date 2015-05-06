'use strict';

angular.module('app')

    .controller('MainCtrl', function ($scope, RandomUserFactory, UserFactory) {

        UserFactory.getUser().then(function success(response) {
            $scope.user = response.data;
        });

        $scope.getRandomUser = function() {
            RandomUserFactory.getUser().then(function success(response) {
                $scope.randomUser = response.data;
            }, handleError);
        };

         $scope.login = function(username, password) {
            UserFactory.login(username, password).then(function success(response) {
                $scope.user = response.data.user;
                //alert(response.data.token);
            }, handleError);
        };

        $scope.logout = function() {
            UserFactory.logout();
            $scope.user = null;
        };

        function handleError(response) {
            alert('errors: ' + response.data);
        }
    });
