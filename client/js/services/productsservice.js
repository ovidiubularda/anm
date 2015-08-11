app.service('ProductsService', ['Config', 'LogsFactory', '$rootScope', '$q', '$http', function(Config, logsFactory, $rootScope, $q, $http) {

    /*
    / Setup logging
    */
    var logs = logsFactory({
        name: 'ProductsService',
        debug: Config.IsDebugginMode
    });

    /*
    / Public methods
    */

    this.getProducts = function() {
        return $http.get(Config.ApiUrl + '/products');
    };

    this.addProduct = function(product) {
        return $http.post(Config.ApiUrl + '/products', product);
    };

    this.getProduct = function(id) {
        return $http.get(Config.ApiUrl + '/products/' + id);
    };

    this.updateProduct = function(product) {
        return $http.put(Config.ApiUrl + '/products', product);
    };

}]);