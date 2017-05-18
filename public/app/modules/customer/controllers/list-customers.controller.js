/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('CustomerListController', customerListController);
    customerListController.$inject=['customers','customerService','commonService','$state'];

    /**
     * @method customerListController
     * @description customerListController to manage the customerListController for the list of customers
     */
    function customerListController(customers,customerService,commonService,$state){
        var vm = this;
        vm.customers = customers;
        vm.deleteCustomer = deleteCustomer;

        /**
         * @method deleteCustomer
         * @description function to delete customer
         */
        function deleteCustomer(customer){
            customerService.deleteCustomer(customer.id)
                .then(function(){
                    //TODO set the message from some constant file
                    commonService.showSuccessMessage('Customer deleted successfully.');
                    $state.reload();
                })
                .catch(function(){
                    //TODO set the message from some constant file
                    commonService.showSuccessMessage('Error in deleting the customer.');
                })
        }
    }
})();