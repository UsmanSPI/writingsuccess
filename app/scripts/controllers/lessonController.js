writingSuccess.controller('lessonController',['$scope','factoryname','sharedVariable','$state','$mdDialog',function($scope,factoryname,sharedVariable,$state,$mdDialog){
    $scope.showInfo_modal=false;
    
    bindEvent(window, 'message', function (e) {

     				  $scope.scorminitiated=true; 
        document.getElementById("lesson_view_iframe").contentWindow.setincomplete();
                });



function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }
    
    $scope.showInfo_modalfunc = function(val){
       $scope.showInfo_modal=val; 
    }
   
    $scope.showInfo_modal = false;
    $scope.closeBan = function(){
        $scope.showInfo_modal = false;
    }
    $scope.temURL=WSTemplate+'dest/externallinks/intro/index.html';
    
    $scope.changelessonview=function(response){

       $scope.playpausebutton="Play";
        $scope.viewport=response;
        $scope.current_letter = response.name;
          sharedVariable.currentletter=response.name;
          var temp_index=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
          sharedVariable.currentindex=temp_index;
		$scope.url=WSTemplate+response.url;
        $scope.scormurl=response.scormurl;
        $scope.scorm_status=response.scorm_status;
        checkbuttons();
    };
    function startupController(){
         $scope.obj=sharedVariable;
         $scope.lowecasevalue=false;
       
       
        $scope.playpausebutton="Play";
       
            if(sharedVariable.introanim==1){
          $scope.showInfo_modal=true;  
           sharedVariable.introanim++;
          }
        
        $scope.lessondata=factoryname.subdata('lesson');
      
    
       
        
        if(sharedVariable.current_active_menu){
               $scope.current_active_menu = sharedVariable.current_active_menu;
             
        }else{
               $scope.current_active_menu = 'uppercase';
        } 
        if( $scope.current_active_menu == 'lowercase'){
              $scope.lowecasevalue=true;
        }
     
      
         if(sharedVariable.currentletter){
           
      var selectedletterindex=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
           
    var isactive=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][selectedletterindex].isadded;
             
             if(isactive==true){
             $scope.current_letter = sharedVariable.currentletter;    
             }
             else{
                  sharedVariable.currentletter=searchfirstactive($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu])
            $scope.current_letter = sharedVariable.currentletter; 
             }
             
             
        }else{
             sharedVariable.currentletter=searchfirstactive($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu])
            $scope.current_letter = sharedVariable.currentletter;
            
          
        }
      
        if($scope.current_letter){
            var letterindex=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter);
        sharedVariable.sharedletterurl=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].url;
            $scope.scorm_status=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].scorm_status;
            $scope.scormurl=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].scormurl;
       $scope.url =WSTemplate+sharedVariable.sharedletterurl;
            
         sharedVariable.currentindex=letterindex; 
        }else{
             sharedVariable.currentindex=''; 
             // $scope.aaa.myVal =' _'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';  
        }
       
     
      
        $scope.aaa = {'myVal':sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu};
        checkbuttons();
        
        
        $scope.menuitems=[{
            'link':'uppercase',
            'text':'UPPERCASE "A-Z"',
            'active_menu': '1'
        },
                         {
            'link':'lowercase',
            'text':'LOWERCASE "a-z"',
            'active_menu': '0'
        },
                         {
            'link':'numbers',
            'text':'NUMBERS "0-9"',
            'active_menu': '0',
        }]
        
        $scope.jsonlessonvalue=$scope.lessondata[$scope.obj.lettertype][ $scope.current_active_menu];
        
        
        
    }
    
startupController();
    
  $scope.playpause=function(e){
    
        document.getElementById("lesson_view_iframe").contentWindow.replayanimation();
  }
  $scope.lettertype=function(e){
    //  alert('s')
      
      $scope.obj.lettertype=e;
      $scope.jsonlessonvalue={};
       $scope.jsonlessonvalue=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu];
     //console.log($scope.jsonlessonvalue)
      
       var letterindex=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter);
      //console.log(letterindex);
       
    
          var letteractive=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].isadded;
         if(letteractive){
              sharedVariable.sharedletterurl=$scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].url;
       sharedVariable.currentindex=letterindex;
        
          $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
           
           $scope.changelessonview($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex]);
         }
                    
      
      else{
         var checkisactive=searchfirstactive($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu]) 
         if(checkisactive){
            
            var letterindex=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],checkisactive);
       sharedVariable.currentindex=letterindex;
        $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
        $scope.current_letter =checkisactive;
        sharedVariable.currentletter=$scope.current_letter
        $scope.changelessonview($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][letterindex]);
        }else{
            sharedVariable.currentindex=''; 
              $scope.aaa.myVal =' _'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';   
            checkbuttons();
          }
      }
      
      
       
      
      
  }
  
  
  
  
    $scope.test=function(e){
       
       
        $scope.current_active_menu = e;
        if(e=='lowercase'){
            $scope.lowecasevalue=true;
        }
        else{
           $scope.lowecasevalue=false;  
        }
        sharedVariable.current_active_menu=e;
       
        
       $scope.jsonlessonvalue=$scope.lessondata[$scope.obj.lettertype][e];
        var checkisactive=searchfirstactive($scope.lessondata[$scope.obj.lettertype][e])
        if(checkisactive){
            
            var letterindex=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],checkisactive);
       
           $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
        $scope.current_letter =checkisactive;
        sharedVariable.currentletter=$scope.current_letter
        $scope.changelessonview($scope.lessondata[$scope.obj.lettertype][e][letterindex]);
        }
        else{
             $scope.aaa.myVal =' _'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             sharedVariable.currentindex=''; 
            $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';  
            checkbuttons();
        }
        
    }
    $scope.gotopractice=function(e){
        
        if($scope.practiceactive){
           sharedVariable.currentletter=e;
        sharedVariable.current_active_menu=$scope.current_active_menu;
      
        sharedVariable.mainmenu='practice';
        var temp_index=searchvalue($scope.lessondata[$scope.current_active_menu],$scope.current_letter)
    sharedVariable.currentindex=temp_index;
         $state.go('practice');     
        }
      
    }
    
    $scope.gotoworksheet=function(e){
        if($scope.worksheetactive){
            sharedVariable.currentletter=e;
        sharedVariable.current_active_menu=$scope.current_active_menu;
      
        sharedVariable.mainmenu='worksheets';
        var temp_index=searchvalue($scope.lessondata[$scope.current_active_menu],$scope.current_letter)
    sharedVariable.currentindex=temp_index;
         $state.go('worksheets');    
        }
      
    }
    
    
    
    function searchvalue (json,enteredValue) {     
    var result;
        angular.forEach(json, function(value, key) {
     //   //console.log('key '+key,value.name)
        if (value.name === enteredValue) {
          result=key;
            return;
        }
    });
       if(result){
        return result;           
       }
        else{
            return '0';
        }

}
    
    function searchfirstactive (json) {     
    var result='';
    angular.forEach(json, function(value, key) {
     
        if (value.isadded === true && result=='') {
          result=value.name;
              return false; 
          }
        
    });
       return result;
}
     function searchactiveelements (json) {     
    var result='';
    angular.forEach(json, function(value, key) {
     
        if (value.isadded === true) {
          result+=key+'~';
              
          }
        
    });
       return result;
}
    
    
    function checkbuttons(){
      //console.log('************************************************');  
        //console.log(sharedVariable.currentletter)
     //console.log('************************************************');    
        
        $scope.nextbuttonactive=false;
        $scope.prevbuttonactive=false;
        $scope.practiceactive=false;
        $scope.worksheetactive=false;
    if($scope.url =='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html') {
        $scope.playactive=false;
         $scope.current_letter='  *  '
        
    }   else{
          $scope.playactive=true;
        var currentletterindex=searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        var activeindexes=searchactiveelements($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
       for(var i=0;i<indexarray.length-1;i++){
           //console.log(indexarray[i],currentletterindex)
           if(indexarray[i]>currentletterindex){
                  $scope.nextbuttonactive=true;
           }else if(indexarray[i]<currentletterindex){
                  $scope.prevbuttonactive=true;
           }
       }
      
        $scope.practicedata=factoryname.subdata('practice'); 
        var practiceindex= searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        if($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][practiceindex].isadded){
           $scope.practiceactive=true; 
        }
        $scope.worksheetdata=factoryname.subdata('worksheets'); 
         var worksheetindex= searchvalue($scope.worksheetdata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        if($scope.worksheetdata[$scope.obj.lettertype][$scope.current_active_menu][worksheetindex].isadded){
           $scope.worksheetactive=true; 
        }
    }
      
        
  }
    
    
    
    
     $scope.nxtbtnclick=function(e){
         
         
          var activeindexes=searchactiveelements($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
       for(var i=0;i<indexarray.length-1;i++){
       //console.log(indexarray[i])   
           if(indexarray[i]>sharedVariable.currentindex){
           
               sharedVariable.currentindex=indexarray[i];
               break;
           }
       }
           $scope.aaa.myVal= sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
                 $scope.playpausebutton="Play";
         
     }
     $scope.prvbtnclick=function(e){
     
         
           var activeindexes=searchactiveelements($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
        
       for(var i=indexarray.length-2;i>=0;i--){
     
           if(indexarray[i]<sharedVariable.currentindex){
      
               sharedVariable.currentindex=indexarray[i];
            break;
          }
       }
         $scope.aaa.myVal= sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
                $scope.playpausebutton="Play";
         
         
         
           
      
         
     }
     
     $scope.scormupdatejson=function(e){
factoryname.myData.data.lesson[$scope.obj.lettertype][$scope.current_active_menu][sharedVariable.currentindex].scorm_status='completed';
    $scope.jsonlessonvalue[sharedVariable.currentindex].scorm_status='completed';   
       
          $scope.aaa.myVal=sharedVariable.currentindex+'_menucorrection';
         $scope.$apply();
     }
     
     
    
}]);