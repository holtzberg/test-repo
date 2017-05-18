/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('invoiceEditController', invoiceEditController);
    invoiceEditController.$inject=['invoiceService','commonService','$state','invoice'];

    /**
     * @method invoiceEditController
     * @description Controller to manage edit invoice
     */
    function invoiceEditController(invoiceService,commonService,$state,invoice){
        debugger;
        var vm = this;
        vm.invoice = angular.copy(invoice);
        vm.editinvoice = editinvoice;

        /**
         * @method editinvoice
         * @description function to edit invoice
         */
        function editinvoice(form){
            if(form.$valid){
                invoiceService.editinvoice(vm.invoice.id,vm.invoice)
                    .then(function(){
                        commonService.showSuccessMessage('invoice updated successfully.');
                        $state.go('app.invoice.list');
                    })
                    .catch(function(){
                        commonService.showErrorMessage('Error in updating invoice.');
                    })
            }
        }
    }
})();