/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .factory('invoiceService', invoiceService);
    invoiceService.$inject = ['dataService'];

    /**
     * @method invoiceService
     * @description function to manage the invoice invoiceService
     * @param dataService
     */
    function invoiceService(dataService){
        return {
            getinvoices:getinvoices,
            getinvoice:getinvoice,
            createinvoice:createinvoice,
            editinvoice:editinvoice,
            deleteinvoice:deleteinvoice
        };

        /**
         * @method getinvoices
         * @description function to call API for getting the invoices
         */
        function getinvoices(){
            return dataService.callAPI({
                url:'/api/invoices'
            });
        }

        /**
         * @method getinvoice
         * @description function to call API for getting the invoice
         */
        function getinvoice(invoiceId){
            return dataService.callAPI({
                url:'/api/invoices/'+invoiceId
            });
        }

        /**
         * @method createinvoice
         * @description function to create the invoice
         */
        function createinvoice(postData){
            return dataService.callAPI({
                method:'post',
                data:postData,
                url:'/api/invoices'
            });
        }

        /**
         * @method deleteinvoice
         * @description function to delete the invoice
         */
        function deleteinvoice(custmerId){
            return dataService.callAPI({
                method:'delete',
                url:'/api/invoices/'+custmerId
            });
        }

        /**
         * @method editinvoice
         * @description function to edit the invoice
         */
        function editinvoice(custmerId,postData){
            return dataService.callAPI({
                method:'put',
                data:postData,
                url:'/api/invoices/'+custmerId
            });
        }

        /**
         * @method getinvoices
         * @description function to call API for getting the invoice Items
         */
        function getinvoiceItems(invoiceId){
            return dataService.callAPI({
                url:'/api/invoices/'+invoiceId+'/items'
            });
        }

        /**
         * @method getinvoiceItem
         * @description function to call API for getting the invoice Item
         */
        function getinvoiceItem(invoiceId,invoiceItemId){
            return dataService.callAPI({
                url:'/api/invoices/'+invoiceId+'/items/'+invoiceItemId
            });
        }

        /**
         * @method createinvoiceItem
         * @description function to create the invoice item
         */
        function createinvoiceItem(postData,invoiceId){
            return dataService.callAPI({
                method:'post',
                data:postData,
                url:'/api/invoices/'+invoiceItemId+'/items'
            });
        }

        /**
         * @method deleteinvoiceItem
         * @description function to delete the invoice item
         */
        function deleteinvoiceItem(invoiceId,invoiceItemId){
            return dataService.callAPI({
                method:'delete',
                url:'/api/invoices/'+invoiceId+'/items/'+invoiceItemId
            });
        }

        /**
         * @method editinvoiceItem
         * @description function to edit the invoice
         */
        function editinvoiceItem(invoice_id,invoiceItemId,postData){
            return dataService.callAPI({
                method:'put',
                data:postData,
                url:'/api/invoices/'+invoice_id+'/items/'+invoiceItemId
            });
        }
    }
})();
