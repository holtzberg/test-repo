/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('CustomerAddController', CustomerAddController);
    CustomerAddController.$inject=['customerService','commonService','$state'];

    /**
     * @method CustomerAddController
     * @description Controller to manage add customer
     */
    function CustomerAddController(customerService,commonService,$state){
        var vm = this;
        vm.customer = {};
        vm.addCustomer = addCustomer;

        /**
         * @method addCustomer
         * @description function to add customer
         */
        function addCustomer(form){
            if(form.$valid){
                customerService.createCustomer(vm.customer)
                    .then(function(){
                        commonService.showSuccessMessage('Customer added successfully.');
                        $state.go('app.customer.list');
                    })
                    .catch(function(){
                        commonService.showErrorMessage('Error in adding customer.');
                    })
            }
        }
    }
})();