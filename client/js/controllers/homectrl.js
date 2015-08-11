app.controller('homectrl', ['Config', 'LogsFactory', '$scope', '$state', function(Config, LogsFactory, $scope, $state) {

    /*
    / Setup logging
    */
    var logs = LogsFactory({
        name: 'CheckoutCtrl',
        debug: Config.IsDebugginMode
    });

    /*
    / Public fields
    */

}]);