/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .factory('customerService', customerService);
    customerService.$inject = ['dataService'];

    /**
     * @method customerService
     * @description function to manage the customer customerService
     * @param dataService
     */
    function customerService(dataService){
        return {
            getCustomers:getCustomers,
            getCustomer:getCustomer,
            createCustomer:createCustomer,
            editCustomer:editCustomer,
            deleteCustomer:deleteCustomer
        };

        /**
         * @method getCustomers
         * @description function to call API for getting the customers
         */
        function getCustomers(){
            return dataService.callAPI({
                url:'/api/customers'
            });
        }

        /**
         * @method getCustomer
         * @description function to call API for getting the customer
         */
        function getCustomer(customerId){
            return dataService.callAPI({
                url:'/api/customers/'+customerId
            });
        }

        /**
         * @method createCustomer
         * @description function to create the customer
         */
        function createCustomer(postData){
            return dataService.callAPI({
                method:'post',
                data:postData,
                url:'/api/customers'
            });
        }

        /**
         * @method deleteCustomer
         * @description function to delete the customer
         */
        function deleteCustomer(custmerId){
            return dataService.callAPI({
                method:'delete',
                url:'/api/customers/'+custmerId
            });
        }

        /**
         * @method editCustomer
         * @description function to edit the customer
         */
        function editCustomer(custmerId,postData){
            return dataService.callAPI({
                method:'put',
                data:postData,
                url:'/api/customers/'+custmerId
            });
        }
    }
})();
