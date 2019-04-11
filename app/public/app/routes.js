angular.module('appRoutes', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/pages/home.html',

            })
            .when('/about', {
                templateUrl: 'view/pages/about.html'
            })
            .when('/SignIn', {
                templateUrl: 'view/pages/users/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'LoginAs'
            })

            .when('/SignUp', {
                templateUrl: 'view/pages/users/register.html',
                controller: 'regCtrl',
                controllerAs: 'Register'
            })
            .when('/logout', {
                templateUrl: 'view/pages/users/logout.html',
                controller: 'LoginCtrl',
                controllerAs: 'LoginAs'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    });