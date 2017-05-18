/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('productAddController', productAddController);
    productAddController.$inject=['productService','commonService','$state'];

    /**
     * @method productAddController
     * @description Controller to manage add product
     */
    function productAddController(productService,commonService,$state){
        var vm = this;
        vm.product = {};
        vm.addproduct = addproduct;

        /**
         * @method addproduct
         * @description function to add product
         */
        function addproduct(form){
            if(form.$valid){
                productService.createproduct(vm.product)
                    .then(function(){
                        commonService.showSuccessMessage('product added successfully.');
                        $state.go('app.product.list');
                    })
                    .catch(function(){
                        commonService.showErrorMessage('Error in adding product.');
                    })
            }
        }
    }
})();