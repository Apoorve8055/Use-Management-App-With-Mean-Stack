angular.module('AuthCtrl',['Auth'])
    .controller('LoginCtrl',function(Log){
        this.Login = function(logData){
            Log.Auth(this.logData).then(function(){
                console.log("Login ");
            })
        }

    })