writingSuccess.directive('listMenu',function(){
   return{
       restrict:"E",
       templateUrl: WSTemplate+'dest/templates/listmenu.html',
       controller:"listmenuController",
       scope:{
        datajson:"=",
        dataparam:"@",
        changviewarea:"&",
        buttonevent:"=",
        sampledata:"="
       },
       link:function(scope,element){
           
          //console.log("directive",scope.buttonevent);
       }
   } 
});