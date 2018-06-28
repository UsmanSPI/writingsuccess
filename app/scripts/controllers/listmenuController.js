writingSuccess.controller('listmenuController',['$scope','sharedVariable',function($scope,sharedVariable){
  // //console.log($scope.datajson);
  $scope.counter=0;
  $scope.aud = new Audio();
  $scope.aud.src="../writingsuccess/dest/audio/writingclick.wav";
  
       
    $scope.$watch('buttonevent.myVal',function(newVal,oldVal){
        //console.log($scope.buttonevent," after watch   ",newVal);
        
        if(newVal.indexOf('menucorrection')>0){
            $scope.menucorrection(newVal.split('_')[0])
        }else{
          if(typeof(newVal)!='number'){
        if(newVal.split('_').length>1){
              $scope.hello(newVal.split('_')[0]);
        }else{
              $scope.hello(newVal);
        }  
      }else{
           $scope.hello(newVal+'');
      }  
        }
      
        
      
    });
   
  
     $scope.menucorrection=function(te){
      
      te+='';
         angular.forEach($scope.datajson, function(value, key) {
             $scope.datajson[key]['isActive']='true'
                value.isActive="false";
         });
            
  if(te && te !=' '){
       $scope.datajson[te].isActive="true";
    
  }
  };
    
    
    
      $scope.hello=function(te){
      
      te+='';
         angular.forEach($scope.datajson, function(value, key) {
             $scope.datajson[key]['isActive']='true'
                value.isActive="false";
         });
            
  if(te && te !=' '){
       $scope.datajson[te].isActive="true";
	   if($scope.counter>0){
		
	   $scope.aud.play(); 
	   }
	   else{
		   $scope.counter++;
	   }
	   
     $scope.changviewarea({"response":$scope.datajson[te]});
  }
  };
    function hellolocal(te){
      //   //console.log($scope.datajson);
     //   //console.log(te)
         angular.forEach($scope.datajson, function(value, key) {
               $scope.datajson[key]['isActive']='true'
                value.isActive="false";
         });
      
if(te && te !=' '){
    $scope.datajson[te].isActive="true";
	   $scope.changviewarea({"response":$scope.datajson[te]});
}
       
    }
    function init(){
       // //console.log(sharedVariable.currentindex)
         angular.forEach($scope.datajson, function(value, key) {
              if(value.isActive=="true"){
              //    //console.log(value.url)
              }
});
        if(sharedVariable.currentindex){
        hellolocal(sharedVariable.currentindex);   
        }
         
    }
    init();
    
   
}]);