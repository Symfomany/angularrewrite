(function () {
    angular
        .module('Blog')
        .controller('HomeController', ['data', HomeController]);

    ///////////////

    function HomeController(data) {
        var vm = this;

        // Attributes
        vm.personnages = [];
        fetchDatas(data);

        ///////////////

        function fetchDatas(data) {
            vm.personnages = data;
        }
    }
})();
