/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('productListController', productListController);
    productListController.$inject=['products','productService','commonService','$state'];

    /**
     * @method productListController
     * @description productListController to manage the productListController for the list of products
     */
    function productListController(products,productService,commonService,$state){
        var vm = this;
        vm.products = products;
        vm.deleteproduct = deleteproduct;

        /**
         * @method deleteproduct
         * @description function to delete product
         */
        function deleteproduct(product){
            productService.deleteproduct(product.id)
                .then(function(){
                    //TODO set the message from some constant file
                    commonService.showSuccessMessage('product deleted successfully.');
                    $state.reload();
                })
                .catch(function(){
                    //TODO set the message from some constant file
                    commonService.showSuccessMessage('Error in deleting the product.');
                })
        }
    }
})();