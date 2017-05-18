/**
 * Created by admin on 05/18/2017.
 */
'use strict';
(function(){
    angular
        .module('invoice-manager')
        .factory('productService', productService);
    productService.$inject = ['dataService'];

    /**
     * @method productService
     * @description function to manage the product productService
     * @param dataService
     */
    function productService(dataService){
        return {
            getproducts:getproducts,
            getproduct:getproduct,
            createproduct:createproduct,
            editproduct:editproduct,
            deleteproduct:deleteproduct
        };

        /**
         * @method getproducts
         * @description function to call API for getting the products
         */
        function getproducts(){
            return dataService.callAPI({
                url:'/api/products'
            });
        }

        /**
         * @method getproduct
         * @description function to call API for getting the product
         */
        function getproduct(productId){
            return dataService.callAPI({
                url:'/api/products/'+productId
            });
        }

        /**
         * @method createproduct
         * @description function to create the product
         */
        function createproduct(postData){
            return dataService.callAPI({
                method:'post',
                data:postData,
                url:'/api/products'
            });
        }

        /**
         * @method deleteproduct
         * @description function to delete the product
         */
        function deleteproduct(productId){
            return dataService.callAPI({
                method:'delete',
                url:'/api/products/'+productId
            });
        }

        /**
         * @method editproduct
         * @description function to edit the product
         */
        function editproduct(productId,postData){
            return dataService.callAPI({
                method:'put',
                data:postData,
                url:'/api/products/'+productId
            });
        }
    }
})();
