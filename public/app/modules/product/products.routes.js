(function(){
    'use strict';
    angular
        .module('invoice-manager')
        .config(productRoutes);
    productRoutes.$inject = ['$stateProvider'];

    /**
     * @method productRoutes
     * @description function to manage product routes
     * @param $stateProvider
     */
    function productRoutes($stateProvider){
        $stateProvider
            .state('app.product', {
                url:'/product',
                templateUrl:'app/layout/defualt.html'
            })
            .state('app.product.list', {
                url:'/list',
                controller:'productListController',
                controllerAs:'vm',
                resolve:{
                    'products':['productService', function(productService){
                        return productService.getproducts();
                    }]
                },
                templateUrl:'app/modules/product/templates/list-products.html'
            })
            .state('app.product.add', {
                url:'/add',
                controller:'productAddController',
                controllerAs:'vm',
                templateUrl:'app/modules/product/templates/add-product.html'
            })
            .state('app.product.edit', {
                url:'/edit/:id',
                controller:'productEditController',
                controllerAs:'vm',
                resolve:{
                    'product':['productService','$stateParams',function(productService,$stateParams){
                        return productService.getproduct($stateParams.id)
                    }]
                },
                templateUrl:'app/modules/product/templates/edit-product.html'
            });
    }
})();
