/**
 * Created by admin on 05/18/2017.
 */
(function () {
    'use strict';

    /**
     * @name commanService
     * @description function to manage the common services
     */
    angular.module('invoice-manager')
        .service('commonService',commonService);
    commonService.$inject = [];
    function commonService() {

        return {
            showSuccessMessage: showSuccessMessage,
            showErrorMessage:showErrorMessage
        };

        /**
         * @method showSuccessMessage
         * @description function to show success message
         * @param message
         */
        function showSuccessMessage(message) {
            //TODO set here some good popup
            alert(message);
        }

        /**
         * @method showErrorMessage
         * @description function to show the error message
         * @param message
         */
        function showErrorMessage(message) {
            //TODO set here some good popup
            alert(message);
        }
    }
})();
