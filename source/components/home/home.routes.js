(function() {
    angular
        .module('Blog')
        .config(['$routeProvider', 'localeResolverProvider', 'config', homeRoutes]);

    ///////////////

    function homeRoutes($routeProvider, localeResolverProvider, config) {
        var langPath = '/resources/locale-' + config.defaultLocation + '.json';

        $routeProvider
            .when('/', { //route main
                controller: 'HomeController', // name of Conroller
                controllerAs: 'homeVm', // alias for controller
                templateUrl: 'partials/_home.html', //template to call
                resolve: {
                    loadLang: localeResolverProvider.resolve(langPath), // load language
                    data: ['$q', 'personnage', getDataHome]
                }
            })
            .otherwise({redirectTo: '/'});

        ///////////////

        function getDataHome($q, personnage) {
            var defer = $q.defer();

            resolve();

            return defer.promise;

            ///////////////

            function resolve() {
                personnage
                    .get()
                    .then(function(data) {
                        defer.resolve(data);
                    }, function(response) {
                        defer.reject(response);
                    });
            }
        }
    }
})();
