/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .factory('dashboardService', service);
    service.$inject = ['dataService'];

    /**
     * @method service
     * @description function to manage the dashboard services
     * @param dataService
     */
    function service(dataService){
        return {
            getInvoices:getInvoices
        };

        /**
         * @method getInvoices
         * @description function to call api for getting invoices
         */
        function getInvoices(){
            return dataService.callAPI({
                url:'/api/invoices'
            });
        }
    }
})();
