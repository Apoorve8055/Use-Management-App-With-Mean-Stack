angular.module('Auth', [])

    .factory('Log', function ($http, AuthToken) {
        authFactory = {};
        authFactory.Auth = function (logData) {
            return $http.post('/api/authentication', logData).then(function (data1) {
                AuthToken.setToken(data1.data.token);
                return data1;
            });
        }


        authFactory.isLoggedIn = function () {
            if (AuthToken.getToken()) {
                return true;
            } else {
                return false;
            }
        }

        authFactory.LogedOut = function () {
            AuthToken.setToken();
        }


        return authFactory;
    })

    .factory('AuthToken', function ($window) {
        authTokenFactory = {};
        authTokenFactory.setToken = function (token) {
            if (token) {
                $window.localStorage.setItem('token', token);
            } else {
                $window.localStorage.removeItem('token');
            }
        };
        authTokenFactory.getToken = function () {
            return $window.localStorage.getItem('token');
        }
        return authTokenFactory;
    });
