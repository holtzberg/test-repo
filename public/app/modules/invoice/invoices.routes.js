(function () {
    'use strict';
    angular
        .module('invoice-manager')
        .config(invoiceRoutes);
    invoiceRoutes.$inject = ['$stateProvider'];

    /**
     * @method invoiceRoutes
     * @description function to manage invoice routes
     * @param $stateProvider
     */
    function invoiceRoutes($stateProvider) {
        $stateProvider
            .state('app.invoice', {
                url: '/invoice',
                templateUrl: 'app/layout/defualt.html'
            })
            .state('app.invoice.list', {
                url: '/list',
                controller: 'invoiceListController',
                controllerAs: 'vm',
                resolve: {
                    'invoices': ['invoiceService', function (invoiceService) {
                        return invoiceService.getinvoices();
                    }],
                    'customers': ['customerService', function (customerService) {
                        return customerService.getCustomers()
                    }]
                },
                templateUrl: 'app/modules/invoice/templates/list-invoices.html'
            })
            .state('app.invoice.add', {
                url: '/add',
                controller: 'invoiceAddController',
                controllerAs: 'vm',
                resolve: {
                    'customers': ['customerService', function (customerService) {
                        return customerService.getCustomers()
                    }],
                    'products': ['productService', function (productService) {
                        return productService.getproducts()
                    }]
                },
                templateUrl: 'app/modules/invoice/templates/add-invoice.html'
            })
            .state('app.invoice.edit', {
                url: '/edit/:id',
                controller: 'invoiceEditController',
                controllerAs: 'vm',
                resolve: {
                    'customers': ['customerService', function (customerService) {
                        return customerService.getCustomers()
                    }],
                    'invoice': ['invoiceService', '$stateParams', function (invoiceService, $stateParams) {
                        return invoiceService.getinvoice($stateParams.id)
                    }],
                    'products': ['productService', function (productService) {
                        return productService.getproducts()
                    }]
                },
                templateUrl: 'app/modules/invoice/templates/edit-invoice.html'
            });
    }
})();
