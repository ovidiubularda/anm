// Here we store global system variables

var configurationMangerDevelop = angular.module('ConfigurationManager.develop', []);
configurationMangerDevelop.constant('Config', {
    IsDebugginMode: true,
    ApiUrl: 'api/'
});