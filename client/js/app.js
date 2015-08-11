var app = angular.module('anm', ['ConfigurationManager.develop', 'ui.router', 'angular-loading-bar'])

.config(['Config', '$stateProvider', '$urlRouterProvider', function(Config, $stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homectrl'
        })
        .state('addproduct', {
            url: '/addproduct',
            templateUrl: 'templates/product.html',
            controller: 'productsctrl'
        })
        .state('product', {
            url: '/product/:id',
            templateUrl: 'templates/product.html',
            controller: 'productsctrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'templates/products.html',
            controller: 'productsctrl'
        });

    $urlRouterProvider.otherwise('/home');
}]);