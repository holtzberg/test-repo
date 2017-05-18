/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function () {
    angular
        .module('invoice-manager')
        .controller('productEditController', productEditController);
    productEditController.$inject = ['productService', 'commonService', '$state', 'product'];

    /**
     * @method productEditController
     * @description Controller to manage edit product
     */
    function productEditController(productService, commonService, $state, product) {
        debugger;
        var vm = this;
        vm.product = angular.copy(product);
        vm.editproduct = editproduct;

        /**
         * @method editproduct
         * @description function to edit product
         */
        function editproduct(form) {
            if (form.$valid) {
                productService.editproduct(vm.product.id, vm.product)
                    .then(function () {
                        commonService.showSuccessMessage('product updated successfully.');
                        $state.go('app.product.list');
                    })
                    .catch(function () {
                        commonService.showErrorMessage('Error in updating product.');
                    })
            }
        }
    }
})();