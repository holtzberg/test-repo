/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('invoiceAddController', invoiceAddController);
    invoiceAddController.$inject=['invoiceService','commonService','$state','customers','products'];

    /**
     * @method invoiceAddController
     * @description Controller to manage add invoice
     */
    function invoiceAddController(invoiceService,commonService,$state,customers,products){
        var vm = this;
        vm.invoice = {};
        vm.customers = angular.copy(customers);
        vm.products = angular.copy(products);
        vm.addinvoice = addinvoice;
        vm.selectProduct = selectProduct;
        vm.setTotal = setTotal;
        vm.invoiceItems = [];

        /**
         * @method selectProduct
         * @description function to select the product
         */
        function selectProduct(product){
            vm.invoice.total = 0;
            if(product.isSelected){
                if(product.isSelected){
                    var invoiceItem = {
                        product_id:product.id,
                        quantity:1,
                        name:product.name,
                        price:product.price
                    };
                    vm.invoiceItems.push(invoiceItem);
                }
            } else {
                _.remove(vm.invoiceItems,{product_id:product.id});
            }
            setTotal();
        }

        function setTotal(){
            _.each(vm.invoiceItems,function(item){
                vm.invoice.total =  (item.price*item.quantity) + vm.invoice.total;
            });
            var discount = vm.invoice.discount ? vm.invoice.total*(vm.invoice.discount)*0.01 :0;
            vm.invoice.total = vm.invoice.total-discount;
        }

        /**
         * @method addinvoice
         * @description function to add invoice
         */
        function addinvoice(form){
            if(form.$valid){
                invoiceService.createinvoice(vm.invoice)
                    .then(function(){
                        commonService.showSuccessMessage('invoice added successfully.');
                        $state.go('app.invoice.list');
                    })
                    .catch(function(){
                        commonService.showErrorMessage('Error in adding invoice.');
                    })
            }
        }
    }
})();