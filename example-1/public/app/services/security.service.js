'use strict';

angular.module('app')

    .factory('UserFactory', function ($http, API_URL, AuthTokenFactory, $q, $log) {
        return {
            login: login,
            logout: logout,
            getUser: getUser
        };

        function login(username, password) {
            $log.debug("login in");
            return $http.post(API_URL + '/login', {
                username: username,
                password: password
            }).then(function success(response) {
                AuthTokenFactory.setToken(response.data.token);
                return response;
            });
        }

        function logout() {
            AuthTokenFactory.setToken();
        }

        function getUser() {
            if (AuthTokenFactory.getToken()) {
                return $http.get(API_URL + '/me');
            } else {
                return $q.reject({data: 'client has no auth token'});
            }
        }
    })

    .factory('RandomUserFactory', function ($http, API_URL) {
        return {
            getUser: getUser
        };

        function getUser() {
            return $http.get(API_URL + '/random-user');
        }
    })

    .factory('AuthTokenFactory', function ($window) {

        var store = $window.localStorage;
        var key = 'auth-token';

        return {
            getToken: getToken,
            setToken: setToken
        };

        function getToken() {
            return store.getItem(key)
        }

        function setToken(token) {
            if (token) {
                store.setItem(key, token);
            } else {
                store.removeItem(key);
            }
        }
    })

/**
 * Used to add jwt bearer token on every request.
 */
    .factory('AuthInterceptor', function (AuthTokenFactory) {

        return {
            request: addToken
        };

        function addToken(config) {
            var token = AuthTokenFactory.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }


    })
;