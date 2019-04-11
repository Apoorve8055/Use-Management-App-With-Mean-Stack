angular.module('userController', ['UserServices'])
    .controller('regCtrl', function ($http, $location, $timeout, User) {
        var app = this;
        this.RegClick = function (RegData) {
            app.loading = true;
            User.create(this.RegData).then(function (data) {
                console.log(data.data.success);
                console.log(data.data.message);
                app.errStatus = false;
                app.loading = true;
                if (data.data.success) {
                    app.loading = false;
                    app.successStatus = data.data.success;
                    app.successMsg = data.data.message;
                    $timeout(function () {
                        $location.path('/about');
                    }, 3000);
                } else {
                    app.loading = false;
                    app.errStatus = data.data.success;
                    app.errMsg = data.data.message;
                }
            });
        }
    });