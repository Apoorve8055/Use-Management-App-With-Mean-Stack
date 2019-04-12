angular.module('UserMgmt', ['appRoutes', 'userController', 'ngAnimate', 'AuthCtrl','Auth'])
    .config(function($httpProvider){
        $httpProvider.interceptors.push('AuthInterceptor');
    });
