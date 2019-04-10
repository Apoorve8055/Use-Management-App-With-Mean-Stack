angular.module('UserServices', [])
    .factory('User', function($http)
{
    userFactory = {};
    userFactory.create = function (RegData) {
        return $http.post('/api/user', RegData);
    }
    return userFactory;
});