(function() {
    angular
        .module('Blog')
        .factory('personnage', ['$q', '$http', personnageService]);

    ///////////////
    function personnageService($q, $http) {
        return {
            get: build
        };

        ///////////////

        function build() {
            var defer = $q.defer();
            $http({
                  method: 'GET',
                  url: 'https://jsonblob.com/api/57aaf50ce4b0dc55a4ebcca7'
                }).success(function(data) {
                    var results = data;
                    defer.resolve(results);
                }).error(function(data, status) {
                    defer.reject({data: data, status: status});
                });

            return defer.promise;
        }
    }
})();
