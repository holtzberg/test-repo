/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('invoiceListController', invoiceListController);
    invoiceListController.$inject=['invoices','invoiceService','commonService','$state','customers'];

    /**
     * @method invoiceListController
     * @description invoiceListController to manage the invoiceListController for the list of invoices
     */
    function invoiceListController(invoices,invoiceService,commonService,$state,customers){
        var vm = this;
        vm.invoices = invoices;
        vm.deleteinvoice = deleteinvoice;
        activate();

        /**
         * @method activate
         * @description function to be called when controller is active
         */
        function activate(){
            _.forEach(vm.invoices,function(invoice){
                invoice.customer_name = _.get(_.find(customers,{id:invoice.customer_id}),'name');
            })
        }

        /**
         * @method deleteinvoice
         * @description function to delete invoice
         */
        function deleteinvoice(invoice){
            invoiceService.deleteinvoice(invoice.id)
                .then(function(){
                    //TODO set the message from some constant file
                    commonService.showSuccessMessage('invoice deleted successfully.');
                    $state.reload();
                })
                .catch(function(){
                    //TODO set the message from some constant file
                    commonService.showSuccessMessage('Error in deleting the invoice.');
                })
        }
    }
})();