var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller('myController',['$scope', '$log',
    function($scope, $log){
        $scope.id = '1';
        $scope.$log = $log;
        $scope.list = {
            model: null,
            pokemons :[
                {id: '1', name: 'bulbasaur'},
                {id: '2', name: 'ivysaur'},
                {id: '3', name: 'venusaur'},
                {id: '4', name: 'charmander'},
                {id: '7', name: 'squirtle'}
            ]
        };
    }]);

pokeApp.controller('httpController', function($scope, $http) {
    $http.get("https://pokeapi.co/api/v1/pokedex/")
        .then(function(response) {
            $scope.data = response.data;
        });
});