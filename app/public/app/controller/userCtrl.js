angular.module('userController', [])
    .controller('regCtrl', function ($http) {
       var app = this;
        this.RegClick = function (RegData) {
            $http.post('/api/user',this.RegData).then(function(data){
                console.log(data.data.success);
                console.log(data.data.message);
                app.errStatus = false;
                if(data.data.success){
                    app.successStatus = data.data.success;
                    app.successMsg = data.data.message;
                }else{
                    app.errStatus = data.data.success;
                    app.errMsg = data.data.message;
                }
            });
        }
    });