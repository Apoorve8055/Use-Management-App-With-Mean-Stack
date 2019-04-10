angular.module('Auth',[])
.factory('Log',function(){
    userFactory = {};
    userFactory.create = function (logData) {
        return $http.post('/api/authantication', logData);
    }
    return userFactory;
});