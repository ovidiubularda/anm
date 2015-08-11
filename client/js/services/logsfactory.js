/*
 * Outputs console log statements
 * 
 * Usage: 
 * var logs = logsFactory({ name: 'entity name', debug: true });
 * logs.info('message');
 */

app.factory('LogsFactory', ['$log', function($log) {

    var noOpLogger = function() {
        var n = angular.noop;
        this.info = n;
        this.debug = n;
        this.error = n;
        this.log = n;
        this.warn = n;
    };

    var currentTime = function() {
        var date = new Date();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var miliseconds = date.getMilliseconds();

        var str = date.getHours() + ":" + minutes.substr(-2) + ":" + seconds.substr(-2) + ' ' + miliseconds;
        return str;
    };

    var debugLogger = function(moduleName) {

        var _currentModule = moduleName;

        function logIt() {
            var args = [].slice.call(arguments);
            for (var i = 0; i < args[1].length; i++) {
                if (angular.isObject(args[1][i])) {
                    $log[args[0]]("[ " + currentTime() + " | " + _currentModule + " ] => ", args[1][i]);
                } else
                    $log[args[0]]("[ " + currentTime() + " | " + _currentModule + " ] => " + args[1][i]);
            }
        }

        this.info = function() {
            logIt('info', arguments);
        };
        this.debug = function() {
            logIt('debug', arguments);
        };
        this.error = function() {
            logIt('error', arguments);
        };
        this.log = function() {
            logIt('log', arguments);
        };
        this.warn = function() {
            logIt('warn', arguments);
        };
    };

    var logger = function() {
        var args = [].slice.call(arguments)[0] || {
            debug: false
        };
        var moduleName = args.name || '-';

        return (args.debug) ? new debugLogger(moduleName) : new noOpLogger();
    };

    return logger;
}]);