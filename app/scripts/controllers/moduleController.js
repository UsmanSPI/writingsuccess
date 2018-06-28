writingSuccess.controller('moduleController',['$scope','factoryname','$rootScope',function($scope,factoryname,$rootScope){
  function startupController(){
    
   /*factoryname.serviceCall('dest/js/JsonFiles.json').then(
       function(data){
         
              $scope.jsondata=data.data;
          
            $rootScope.$broadcast('jsondata', data);    
       },
       function(Error){
           console.log('fail'+Error)
       }
   );*/
       $scope.jsondata=factoryname.myData;
        
    }
    startupController();
  
}]);