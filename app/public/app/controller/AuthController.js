angular.module('AuthCtrl', ['Auth'])

    .controller('LoginCtrl', function (Log, $location, $timeout) {
        var app = this;
        if(Log.isLoggedIn())
        {
            console.log("User is Logged In");
            app.logs = true ;

        }else{
            console.log("User is Not LogIn");
            app.logs = false ;

        }

        this.Login = function (logData) {
            app.loading = true;
            Log.Auth(this.logData).then(function (data) {
                app.errStatus = false;
                app.loading = true;

                if (data.data.success) {

                    app.loading = false;
                    app.successStatus = data.data.success;
                    app.successMsg = data.data.message;
                    $timeout(function () {
                        $location.path('/');
                    }, 3000);

                } else {
                    app.loading = false;
                    app.errStatus = data.data.success;
                    app.errMsg = data.data.message;
                    $timeout(function () {

                    }, 3000);
                }
            });
        }

        this.logout = function(){
            console.log("Logoutt");
            Log.LogedOut();
            $timeout(function () {
                $location.path('/logout');
            }, 3000);
        }
    });