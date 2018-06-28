writingSuccess.controller('practiceController',['$scope','factoryname','sharedVariable','$state',function($scope,factoryname,sharedVariable,$state){
   
    $scope.nextletterenable=true; 
         bindEvent(window, 'message', function (e) {

     				  $scope.scorminitiated=true; 
        //document.getElementById("practice_view_iframe").contentWindow.setincomplete();
                });
function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }
    
 $scope.changelessonview=function(response){
    $scope.nextletterenable=false; 
	//enable next letter by default
	//$scope.nextletterenable=true; 
	
	
     //console.log('rsp',response);
        //console.log("12312313"+response.name);
       $scope.current_letter = response.name;
     $scope.thumb=response.thumbnail;
     $scope.worksheet=response.worksheet;
     
       sharedVariable.currentletter=response.name;
          var temp_index=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
          sharedVariable.currentindex=temp_index;
        $scope.answer = response.name;
      $scope.scormurl=response.scormurl;
        $scope.scorm_status=response.scorm_status;
     	$scope.url=WSTemplate+response.url;
   checkbuttons();
    };
  
   $scope.$watch('obj.accuracyvalue',function(newval,oldval){
       if(document.getElementById("practice_view_iframe").contentWindow.accuracyvisible)
       { document.getElementById("practice_view_iframe").contentWindow.accuracyvisible(newval);}
   })
    
    $scope.$watch('obj.showguideline',function(newval,oldval){
       if(document.getElementById("practice_view_iframe").contentWindow.showguidelinevisible)
       { document.getElementById("practice_view_iframe").contentWindow.showguidelinevisible(newval);}
   })
    
    $scope.$watch('obj.guidelinewidth',function(newval,oldval){
       if(document.getElementById("practice_view_iframe").contentWindow.setlinewidth)
       { document.getElementById("practice_view_iframe").contentWindow.setlinewidth(newval);}
   })
     $scope.$watch('obj.accuracypercent',function(newval,oldval){
       if(document.getElementById("practice_view_iframe").contentWindow.setaccuracylimit)
       { document.getElementById("practice_view_iframe").contentWindow.setaccuracylimit(newval);}
   })
    
       if(document.getElementById("practice_view_iframe").contentWindow.setaccuracylimit)
       { document.getElementById("practice_view_iframe").contentWindow.setaccuracylimit(obj.accuracypercent);}
    //resetDashboard
    $scope.cleardashboard=function(){
      document.getElementById("practice_view_iframe").contentWindow.resetDashboard();  
    }
    
    function startupController(){
        //console.log('***********************************************', sharedVariable.togglemenu)
        $scope.obj=sharedVariable;
        //console.log($scope.obj)
        //console.log(sharedVariable.currentletter);
        //console.log(sharedVariable.current_active_menu);
       $scope.practicedata=factoryname.subdata('practice');
         $scope.lowecasevalue=false;
        
        
         
        
        if(sharedVariable.current_active_menu){
               $scope.current_active_menu = sharedVariable.current_active_menu;
             
        }else{
               $scope.current_active_menu = 'uppercase';
        }
        if( $scope.current_active_menu == 'lowercase'){
              $scope.lowecasevalue=true;
        }
        
        
        
        
         if(sharedVariable.currentletter){
             //console.log(sharedVariable.currentletter)
      var selectedletterindex=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
             //console.log(selectedletterindex)
    var isactive=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][selectedletterindex].isadded;
             
             if(isactive==true){
             $scope.current_letter = sharedVariable.currentletter;    
             }
             else{
                  sharedVariable.currentletter=searchfirstactive($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu])
            $scope.current_letter = sharedVariable.currentletter; 
             }
             
             
        }else{
             sharedVariable.currentletter=searchfirstactive($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu])
            $scope.current_letter = sharedVariable.currentletter;
        }
        
        
        
       // hello($scope.current_letter)
        //sharedVariable.sharedletterurl
        
        if($scope.current_letter){
      var letterindex=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter);
        sharedVariable.sharedletterurl=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].url;
            
             $scope.scormurl=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].scormurl;
        $scope.scorm_status=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].scorm_status;
       $scope.url = WSTemplate+sharedVariable.sharedletterurl;
         sharedVariable.currentindex=letterindex;
       
        $scope.thumb=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].thumbnail;
         $scope.worksheet=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].worksheet;
        //console.log('*******************************************************************');
        //console.log( $scope.url, $scope.current_active_menu,$scope.current_letter)
        //console.log('*******************************************************************');
        }
        else{
         sharedVariable.currentindex=''; 
           
             $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';  

        }
          $scope.aaa = {'myVal':sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu};
          checkbuttons();
        
        
        
        
        
        
        
        
        
        $scope.menuitems=[{
            'link':'uppercase',
            'text':'UPPERCASE "A-Z"'
        },
        {
            'link':'lowercase',
            'text':'LOWERCASE "a-z"'
        },
        {
            'link':'numbers',
            'text':'NUMBERS "0-9"'
        }]
         $scope.jsonlessonvalue=$scope.practicedata[$scope.obj.lettertype][ $scope.current_active_menu];
    }
    
startupController();
    $scope.lettertype=function(e){
      //console.log(e)
      $scope.obj.lettertype=e;
      $scope.jsonlessonvalue={};
       $scope.jsonlessonvalue=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu];
     //console.log($scope.jsonlessonvalue)
      
       var letterindex=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter);
      //console.log(letterindex);
       
     
          var letteractive=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].isadded;
         if(letteractive){
              sharedVariable.sharedletterurl=$scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].url;
       sharedVariable.currentindex=letterindex;
        
          $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
           
           $scope.changelessonview($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex]);
         }
               
      else{
         var checkisactive=searchfirstactive($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu]) 
         if(checkisactive){
            
            var letterindex=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],checkisactive);
       sharedVariable.currentindex=letterindex;
        $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
        $scope.current_letter =checkisactive;
        sharedVariable.currentletter=$scope.current_letter
        $scope.changelessonview($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][letterindex]);
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
       
        
       $scope.jsonlessonvalue=$scope.practicedata[$scope.obj.lettertype][e];
        var checkisactive=searchfirstactive($scope.practicedata[$scope.obj.lettertype][e])
        if(checkisactive){
            
            var letterindex=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],checkisactive);
       
           $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
        $scope.current_letter =checkisactive;
        sharedVariable.currentletter=$scope.current_letter
        $scope.changelessonview($scope.practicedata[$scope.obj.lettertype][e][letterindex]);
        }
        else{
             $scope.aaa.myVal =' _'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             sharedVariable.currentindex=''; 
            $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';  
            checkbuttons();
        }
        
    }
    
     $scope.gotolesson=function(e){
     if(  $scope.lessonactive){
        sharedVariable.currentletter=e;
        sharedVariable.current_active_menu=$scope.current_active_menu;
      
        sharedVariable.mainmenu='lesson';
        var temp_index=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
    sharedVariable.currentindex=temp_index;
         $state.go('lesson');  
}
    }
    
    $scope.gotoworksheet=function(e){
if(  $scope.worksheetactive){
        sharedVariable.currentletter=e;
        sharedVariable.current_active_menu=$scope.current_active_menu;
      
        sharedVariable.mainmenu='worksheets';
        var temp_index=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
    sharedVariable.currentindex=temp_index;
         $state.go('worksheets');  
}
    }
    
     function searchvalue (json,enteredValue) {     
    var result;
    angular.forEach(json, function(value, key) {
        ////console.log('key '+key,value.name)
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
        $scope.lessonactive=false;
        $scope.worksheetactive=false;
    if($scope.url =='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html') {
        $scope.playactive=false;
         $scope.current_letter='  *  '
        
    }   else{
          $scope.playactive=true;
        var currentletterindex=searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        var activeindexes=searchactiveelements($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
       for(var i=0;i<indexarray.length-1;i++){
           //console.log(indexarray[i],currentletterindex)
           if(indexarray[i]>currentletterindex){
                  $scope.nextbuttonactive=true;
           }else if(indexarray[i]<currentletterindex){
                  $scope.prevbuttonactive=true;
           }
       }
      
        $scope.lessondata=factoryname.subdata('lesson'); 
        var practiceindex= searchvalue($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        if($scope.lessondata[$scope.obj.lettertype][$scope.current_active_menu][practiceindex].isadded){
           $scope.lessonactive=true; 
        }
        $scope.worksheetdata=factoryname.subdata('worksheets'); 
         var worksheetindex= searchvalue($scope.worksheetdata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        if($scope.worksheetdata[$scope.obj.lettertype][$scope.current_active_menu][worksheetindex].isadded){
           $scope.worksheetactive=true; 
        }
    }
      
        
  }
    
    
    
    
     $scope.nxtbtnclick=function(e){
         
        // if($scope.nextletterenable){
             
        
          var activeindexes=searchactiveelements($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
       for(var i=0;i<indexarray.length-1;i++){
       //console.log(indexarray[i])   
           if(indexarray[i]>sharedVariable.currentindex){
           
               sharedVariable.currentindex=indexarray[i];
               break;
           }
       }
           $scope.aaa.myVal= sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             
       /// }  
     }
     
     
     
     $scope.prvbtnclick=function(e){
     
         
           var activeindexes=searchactiveelements($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
        
       for(var i=indexarray.length-2;i>=0;i--){
     
           if(indexarray[i]<sharedVariable.currentindex){
      
               sharedVariable.currentindex=indexarray[i];
            break;
          }
       }
         $scope.aaa.myVal= sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
              
         
      
         
     }
     
      $scope.scormupdatejson=function(e){
factoryname.myData.data.practice[$scope.obj.lettertype][$scope.current_active_menu][sharedVariable.currentindex].scorm_status='completed';
    $scope.jsonlessonvalue[sharedVariable.currentindex].scorm_status='completed';   
       
          $scope.aaa.myVal=sharedVariable.currentindex+'_menucorrection';
         $scope.$apply();
     }
     
     
     
  
}]);