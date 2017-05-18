'use strict';
(function(){
    angular.module('invoice-manager')
        .run(['$rootScope', '$state', '$stateParams', '$location', RunApp])
        .config(['$stateProvider', '$urlRouterProvider', ConfigApp]);

    /**
     * @method ConfigApp
     * @description function to set the configurations
     * @constructor
     */
    function ConfigApp($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/app/dashboard');
        $stateProvider.state('app', {
            abstract:true,
            url:'/app',
            templateUrl:'app/layout/app.html'
        });
    }

    /**
     * @method RunApp
     * @description function to be called when application is ready to run
     * @constructor
     */
    function RunApp($rootScope, $state, $stateParams){
        activate();

        /**
         * @method activate
         * @description function to be called when active
         */
        function activate(){
            $rootScope.$on('$stateChangeSuccess', function(event, toState){
                $rootScope.title = toState.title || 'Invoice Manager';
                $(window).scrollTop(0);
            });
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
            });
            $rootScope.$on('$stateChangeError', function(){
                $rootScope.$emit('$progressEnd');
            });
        }
    }

})();