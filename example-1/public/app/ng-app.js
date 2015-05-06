'use strict';

angular.module('app', ['ui.router'])

    .constant('API_URL', 'http://localhost:3000')

    .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html'
                ,controller: 'MainCtrl'
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
;