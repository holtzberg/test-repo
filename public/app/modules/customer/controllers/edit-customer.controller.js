/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('CustomerEditController', CustomerEditController);
    CustomerEditController.$inject=['customerService','commonService','$state','customer'];

    /**
     * @method CustomerEditController
     * @description Controller to manage edit customer
     */
    function CustomerEditController(customerService,commonService,$state,customer){
        debugger;
        var vm = this;
        vm.customer = angular.copy(customer);
        vm.editCustomer = editCustomer;

        /**
         * @method editCustomer
         * @description function to edit customer
         */
        function editCustomer(form){
            if(form.$valid){
                customerService.editCustomer(vm.customer.id,vm.customer)
                    .then(function(){
                        commonService.showSuccessMessage('Customer updated successfully.');
                        $state.go('app.customer.list');
                    })
                    .catch(function(){
                        commonService.showErrorMessage('Error in updating customer.');
                    });
            }
        }
    }
})();