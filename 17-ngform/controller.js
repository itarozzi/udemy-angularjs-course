angular.module('eventApp')
    // STEP1 : .controller('FormCtrl', function ($scope) {
    // STEP2 : 
    .controller('FormCtrl',[eventFactory, $scope, function (eventFactory, $scope) {
        $scope.event = [];
    
        $scope.formSubmit = function (dataform) {
            //!!!!! NON usare direttamente dataform nel push, altrimenti passando per riferimento tutti gli elementi dell'array vengono aggiornati con i valori dell'ultimo!!!!!
            
            
            // Step1: $scope.event.push(angular.copy(dataform))
            // Step2: 
            eventFactory.createEvent(angular.copy(dataform), $scope.event)
            
            console.log($scope.event)
        }
    }]);