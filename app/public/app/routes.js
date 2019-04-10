angular.module('appRoutes', ['ngRoute'])

    .config(function ($routeProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/pages/home.html'
            })
            .when('/about',{
                templateUrl: 'view/pages/about.html'
            })
            .when('/SignUp',{
                templateUrl : 'view/pages/users/register.html',
                controller : 'regCtrl',
                controllerAs : 'Register'
            })
            .otherwise({
                redirectTo : '/'
            });
        $locationProvider.html5Mode({
            enabled :true,
            requireBase : false
        });

    });