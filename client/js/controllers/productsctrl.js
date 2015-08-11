app.controller('productsctrl', ['Config', 'LogsFactory', '$scope', '$state', '$stateParams', 'ProductsService', function(Config, LogsFactory, $scope, $state, $stateParams, ProductsService) {

    /*
    / Setup logging
    */
    var logs = LogsFactory({
        name: 'productsctrl',
        debug: Config.IsDebugginMode
    });

    /*
    / Public fields
    */
    $scope.products = [];
    $scope.product = {};
    $scope.isNewProduct = false;
    $scope.headerText = "";
    $scope.comments = [];

    /*
    / Private methods
    */
    var initView = function() {
        logs.info('Init view started.');

        if ($state.current.name == 'addproduct') {
            $scope.isNewProduct = true;
            $scope.headerText = "Add new product";
        }

        if ($state.current.name == 'product') {
            $scope.isNewProduct = false;
            $scope.headerText = "View product";
            loadProduct();
        }

        if ($state.current.name == 'products') {
            listProducts();
        }
    };

    var listProducts = function() {
        ProductsService.getProducts().then(function(result) {
            $scope.products = result.data;
        }, function(error) {
            logs.error(error);
        });
    };

    var loadProduct = function() {
        logs.info('Load product id:', $stateParams.id);
        ProductsService.getProduct($stateParams.id).then(function(result) {
            logs.info(result.data);
            $scope.product = result.data;
        }, function(error) {
            logs.error(error);
        });
    };

    /*
    / Public methods
    */
    $scope.addProduct = function() {
        logs.info('User click added product.');
        $state.go('addproduct');
    };

    $scope.crateProduct = function() {
        $scope.product.comments = [];

        ProductsService.addProduct($scope.product).then(function(result) {
            logs.info(result.data);
            $state.go('products');
        }, function(error) {
            logs.error(error);
        });
    };

    $scope.addComment = function() {
        if (!$scope.product.comments) $scope.product.comments = [];
        $scope.product.comments.push({
            msg: $scope.newcomment
        });

        ProductsService.updateProduct($scope.product).then(function(result) {
            logs.info(result.data);
        }, function(error) {
            logs.error(error);
        });
    };

    // Init view
    initView();
}]);