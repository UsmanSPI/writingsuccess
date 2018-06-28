writingSuccess.controller('WShomeController',['$scope','$state','factoryname','sharedVariable','$injector',function($scope,$state,factoryname,sharedVariable,$injector){
  
     $scope.checkboxModel = {

       accuracyvalue : true,
       modevalue : true,
       accuracypercent:sharedVariable.accuracypercent,
       guidelinewidth:'medium',
       showguideline:true

     };

$scope.backToDashboard = function(){
       // if(typeof(sessionService) !== 'undefined'){
            // var prevParams = angular.isDefined(sessionService.get('prevParams'))?JSON.parse(sessionService.get('prevParams')):{};
            // _.isEmpty(prevParams) ? $state.go(sessionService.get('prevState')) : $state.go(sessionService.get('prevState'),prevParams);
       // }
	   location.href='https://'+window.location.host+'/sommer_learning/publicsite/sommerlearning/#/SommerLearning';
    }


    

    

    
     $scope.$watch('checkboxModel.accuracypercent',function(newval,oldval){
         //console.log(newval)
        sharedVariable.accuracypercent=$scope.checkboxModel.accuracypercent;
           
   })
    
     sharedVariable.accuracypercent=$scope.checkboxModel.accuracypercent;
    sharedVariable.accuracyvalue=$scope.checkboxModel.accuracyvalue;
    sharedVariable.modevalue=$scope.checkboxModel.modevalue;
     sharedVariable.showguideline=$scope.checkboxModel.showguideline;
    
   
   

    $scope.closesetBan = function(){
        $scope.showsetting_modal = false;
    }
$scope.changeaccuarcy = function(e){

  
    $scope.checkboxModel.accuracyvalue=e;
  sharedVariable.accuracyvalue=$scope.checkboxModel.accuracyvalue;
  
   
} 
$scope.changeguidelinewidth = function(e){
 
    $scope.checkboxModel.guidelinewidth=e;
  sharedVariable.guidelinewidth=$scope.checkboxModel.guidelinewidth;
   
} 
$scope.changeguidelinearrow = function(e){

    $scope.checkboxModel.showguideline=e;
  sharedVariable.showguideline=$scope.checkboxModel.showguideline;
  
} 


$scope.changeguidelinewidth = function(e){

    $scope.checkboxModel.guidelinewidth=e;
  sharedVariable.guidelinewidth=$scope.checkboxModel.guidelinewidth;
    
} 
$scope.changeguidelinearrow = function(e){
 
    $scope.checkboxModel.showguideline=e;
  sharedVariable.showguideline=$scope.checkboxModel.showguideline;
   
} 


$scope.changemodevalue = function(e){
    $scope.checkboxModel.modevalue=e;
     sharedVariable.modevalue=$scope.checkboxModel.modevalue;
    
}   

  $scope.test=function(e){
 //console.log(e);
    
   $state.go(e);
      $scope.current_main_menu = e;
      sharedVariable.mainmenu=e;
      
      $scope.menu_active = true;
      $scope.navCollapsed = false;
      $scope.showsetting_modal = false;
      $scope.navCollapsed  = true;
    }
  
  $scope.showsetting = function(){
      $scope.showsetting_modal = true;
      $scope.navCollapsed  = true;
  }
  
    function startupfunc(){
        $scope.showsetting_modal = false;
            try{
        sessionService = $injector.get('sessionService');
    }catch(e){
        //console.log('sessionService not defined');
    }
    

        
        $scope.modeVal = sharedVariable.modevalue;
        $scope.obj=sharedVariable;
       // $scope.current_main_menu = 'lesson';
         $scope.mainmenuitems=[{'name': 'lesson','cname': 'lesson'},{'name':'practice','cname':'practice'},{'name':'worksheets','cname':'worksheet'}];
                             
          $scope.flow=false;
    
      sharedVariable.flow=$scope.flow;
     
           $scope.current_main_menu =  sharedVariable.mainmenu;        
           $state.go(sharedVariable.mainmenu);      
        
        
       
    }
  startupfunc();  
}]);