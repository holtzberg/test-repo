/**
 * Created by maulikpatel on 12/6/16.
 */
(function(){
    'use strict';
    angular
        .module('invoice-manager')
        .config(routeConfig);
    routeConfig.$inject = ['$stateProvider'];

    /**
     * @method routeConfig
     * @description function to manage dashboard controller
     * @param $stateProvider
     */
    function routeConfig($stateProvider){
        $stateProvider
            .state('app.dashboard', {
                url:'/dashboard',
                controller:'DashboardController',
                controllerAs:'vm',
                resolve:{
                    'invoices':['dashboardService', function(dashboardService){
                        debugger;
                        return dashboardService.getInvoices();
                    }]
                },
                templateUrl:'app/modules/dashboard/templates/dashboard.html'
            });
    }
})();
