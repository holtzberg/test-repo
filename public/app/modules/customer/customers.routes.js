(function(){
    'use strict';
    angular
        .module('invoice-manager')
        .config(customerRoutes);
    customerRoutes.$inject = ['$stateProvider'];

    /**
     * @method customerRoutes
     * @description function to manage customer routes
     * @param $stateProvider
     */
    function customerRoutes($stateProvider){
        $stateProvider
            .state('app.customer', {
                url:'/customer',
                templateUrl:'app/layout/defualt.html'
            })
            .state('app.customer.list', {
                url:'/list',
                controller:'CustomerListController',
                controllerAs:'vm',
                resolve:{
                    'customers':['customerService', function(customerService){
                        return customerService.getCustomers();
                    }]
                },
                templateUrl:'app/modules/customer/templates/list-customers.html'
            })
            .state('app.customer.add', {
                url:'/add',
                controller:'CustomerAddController',
                controllerAs:'vm',
                templateUrl:'app/modules/customer/templates/add-customer.html'
            })
            .state('app.customer.edit', {
                url:'/edit/:id',
                controller:'CustomerEditController',
                controllerAs:'vm',
                resolve:{
                    'customer':['customerService','$stateParams',function(customerService,$stateParams){
                        return customerService.getCustomer($stateParams.id)
                    }]
                },
                templateUrl:'app/modules/customer/templates/edit-customer.html'
            });
    }
})();
