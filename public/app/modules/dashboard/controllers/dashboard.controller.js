/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .controller('DashboardController', controller);
    controller.$inject=['invoices'];

    /**
     * @method controller
     * @description controller to manage the dashboard
     */
    function controller(invoices){
        var vm = this;
        console.log('this is the controller');
        vm.name = 'dashboard';
        vm.invoices = invoices;
    }
})();