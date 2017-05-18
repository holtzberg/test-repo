/**
 * Created by admin on 05/18/2017.
 */
(function () {
    'use strict';
    /**
     * @name dataService
     * @description
     * DataService is a wrapper for the $http.
     */
    angular.module('invoice-manager')
        .service('dataService',dataService);
    dataService.$inject = ['$http', '$rootScope', '$q'];
    function dataService($http, $rootScope, $q) {

        return {
            callAPI: callAPI
        };

        /**
         * @method callAPI
         * @param {object} request request data to call the api
         *        <ul>
         *            <li>showLoader - option to show the loader</li>
         *            <li>setStatus - setting the status 'success' or 'error'</li>
         *        </ul>
         * @return {promise} return the promise of the api call
         *
         * @description
         * Method for the wrapper of $http
         */
        function callAPI(request) {
            _init();
            var requestPromise = $q.defer();
            $http(request)
                .then(_success)
                .catch(_error)
                .finally(_finally);
            return requestPromise.promise;

            /**
             * @method _init
             * @description
             * function to be called when initializing
             */
            function _init(){
                request.showLoader = _.isUndefined(request.showLoader)? true:request.showLoader;
                request.setStatus = _.isUndefined(request.setStatus)?false:request.setStatus;
                request.method = request.method || 'GET';

                //set the loading indicator
                if (request.showLoader) {
                    $rootScope.$broadcast('loader_show');
                }
                //set the loading status
                if (request.setStatus) {
                    $rootScope.DataServiceStatus = 'loading';
                }
            }

            /**
             * @method _success
             * @description
             * function to be called when success response is recieved from the http request
             */
            function _success(response) {
                if (response) {
                    console.debug('DataService : this is success in getting the response :: ' + request.url);
                    requestPromise.resolve(response.data);
                    if (request.setStatus) {
                        $rootScope.DataServiceStatus = 'success';
                    }
                } else {
                    _error(response);
                }
            }

            /**
             * @method _error
             * @description
             * function to be called when error response is recieved from the http request
             */
            function _error(response) {
                console.error('DataService : this is error in getting the response :: ' + request.url);
                if (!_.isObject(response)) {
                    console.error('response is not an Object:' + response);
                    response = {
                        Error: {
                            Code:'0000',
                            Message:'Something went wrong',
                            Name:'InvalidResponse'
                        }
                    };
                }
                requestPromise.reject(response);
                if (request.setStatus) {
                    $rootScope.DataServiceStatus = 'error';
                }
            }

            /**
             * @method _finally
             * @description
             * function to be called when http request is complete
             */
            function _finally(){
                if (request.showLoader) {
                    $rootScope.$broadcast('loader_hide');
                }
            }
        }
    }
})();
