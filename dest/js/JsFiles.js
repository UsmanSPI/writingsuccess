/* Angular app module */
var writingSuccess = angular.module('writingSuccess',["ui.router","ui.bootstrap",'ngMaterial']);
//var WSTemplate = (WSTemplate != "" && WSTemplate != undefined) ? WSTemplate : typeof(siteURL) == "undefined" ? "ws_dest/" : "";
var WSTemplate = (WSTemplate != "" && WSTemplate != undefined) ? WSTemplate : typeof(siteURL) == "undefined" ? "" : "";
/* Angular ui router starts here */

writingSuccess.config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider){
      $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://apwritingsuccess.s3.amazonaws.com/**'
  ]);
    $urlRouterProvider.otherwise('/ws_home');
      $stateProvider
        .state('ws_home', {
			url: '/ws_home',
			views: {
				'wsMenu@': { 
					templateUrl: WSTemplate+'dest/templates/home.html', 
					controller:'WShomeController'
				}
			}
          ,
            resolve: {
                       getData: function ($q,factoryname,$http) {
                           var deferred = $q.defer();
                           $http.get('app/scripts/JsonFiles/index.json').then(function(data){
                                factoryname.myData = data;                                                     
                                deferred.resolve(data);
                            },function(data){
                                deferred.reject(data);
                            }); 
                           return deferred.promise;
                       },                
                	/*   getPlayerData: function (coursePlayerWS,$q,factoryname,sharedVariable) {
                           var deferred = $q.defer();
                           coursePlayerWS.setData().then(function(response) {
                                if (response) {
                                    var activity = response.activity;
                                    factoryname.myData.data = response.data;
                                    sharedVariable.mainmenu = activity.subsection;
                                    sharedVariable.currentletter =  activity.name;
                                    sharedVariable.current_active_menu = activity.section;
                                    sharedVariable.lettertype = activity.scriptType;
                                    sharedVariable.ispreview = activity.isPreview;
                                    deferred.resolve();
                                } else {
                                    deferred.reject();
                                }
                            });
                            return deferred.promise;
                        }
*/
                    }			
      }).state('lesson', {
			url: '/lesson',
            parent:'ws_home',
			views: {
				'body@': { 
					templateUrl: WSTemplate+'dest/templates/lesson.html', 
					controller:'lessonController'
				}
			}
			
      }).state('practice',{
          url:'/practice',
          parent:'ws_home',
          views:{
               'body@':{
                   templateUrl:WSTemplate+'dest/templates/practice.html',
                   controller:'practiceController'
               }
          }
      })
    .state('worksheets',{
          url:'/worksheets',
          parent:'ws_home',
          views:{
               'body@':{
                   templateUrl:WSTemplate+'dest/templates/worksheet.html',
                   controller:'testController'
               }
          }
      })
    .state('nodata',{
          url:'/nodataassigned',
          parent:'ws_home',
          views:{
               'body@':{
                   templateUrl:WSTemplate+'dest/templates/nodata.html',
                   controller:'nodataController'
               }
          }
      })
});
//writingSuccess.factory('factoryname',function($http,$q){
//   
//    var myData;
//    return{
//        serviceCall: function(request){
//            var deffered=$q.defer();
//            
//            if(!myData){
//                $http.get(request).then(function(data){
//                    myData = data;
//                    deffered.resolve(data);
//                },function(data){
//                    deffered.reject(data);
//                });
//            }else{
//                deffered.resolve(myData);
//            }            
//            return deffered.promise;
//        },
//        subdata:function(request){
//            
//            return myData.data[request];
//        }
//        
//    }
//    
//})
//
writingSuccess.factory('factoryname',function($http,$q){
   
    return{
        myData : {data:{},activity:{}},
        serviceCall: function(request){
            /*var deffered=$q.defer();
            if(angular.isUndefined(this.myData)){
                $http.get(request).then(function(data){
                    this.myData = data;
                    deffered.resolve(data);
                },function(data){
                    deffered.reject(data);
                });
            }else{
                deffered.resolve(this.myData);
            }            
            return deffered.promise;*/
            return this.myData;
        },
        subdata:function(request){
                     return this.myData.data[request];    
          }
    }
    
})


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
writingSuccess.controller('testController', ['$scope', 'factoryname','sharedVariable','$state', function ($scope, factoryname,sharedVariable,$state) {
  bindEvent(window, 'message', function (e) {

     				  $scope.scorminitiated=true; 
        document.getElementById("worksheet_view_iframe").contentWindow.setincomplete();
                });


    function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }
    
    $scope.changelessonview = function (response) {
        //console.log(response);
        
        $scope.viewport = response;
          $scope.current_letter = response.name;
          sharedVariable.currentletter=response.name;
         $scope.letterandsound=response.letterandsound;
        $scope.writingabc=response.writingabc;
          var temp_index=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
          sharedVariable.currentindex=temp_index;
        $scope.scormurl=response.scormurl;
        $scope.scorm_status=response.scorm_status;
                  $scope.url = WSTemplate+response.url;
        checkbuttons();
     
    };

    function startupController() {
        //console.log('***********************************************', sharedVariable.togglemenu)
        $scope.obj=sharedVariable;
       $scope.testdata = factoryname.subdata('worksheets');
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
      var selectedletterindex=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
             //console.log(selectedletterindex)
    var isactive=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][selectedletterindex].isadded;
             
             if(isactive==true){
             $scope.current_letter = sharedVariable.currentletter;    
             }
             else{
                  sharedVariable.currentletter=searchfirstactive($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu])
            $scope.current_letter = sharedVariable.currentletter; 
             }
             
             
        }else{
             sharedVariable.currentletter=searchfirstactive($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu])
            $scope.current_letter = sharedVariable.currentletter;
        }
        
        
        
        if($scope.current_letter){
      var letterindex=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter);
        sharedVariable.sharedletterurl=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].url;
                  
        $scope.letterandsound=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].letterandsound;
        $scope.writingabc=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].writingabc;
         $scope.scormurl=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].scormurl;
        $scope.scorm_status=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].scorm_status;
       $scope.url = WSTemplate+sharedVariable.sharedletterurl;
         sharedVariable.currentindex=letterindex;
}
 else{
         sharedVariable.currentindex=''; 
     //  $scope.aaa.myVal =' _'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';  

        }
          $scope.aaa = {'myVal':sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu};
          checkbuttons();
      
        
       
        
        
        
        
        $scope.menuitems = [{
                'link': 'uppercase',
                'text': 'UPPERCASE "A-Z"'
        },
            {
                'link': 'lowercase',
                'text': 'LOWERCASE "a-z"'
        },
            {
                'link': 'numbers',
                'text': 'NUMBERS "0-9"'
        }]
        $scope.jsonlessonvalue = $scope.testdata[$scope.obj.lettertype][ $scope.current_active_menu];
     
    }

    startupController();
$scope.lettertype=function(e){
      //console.log(e)
      $scope.obj.lettertype=e;
   $scope.jsonlessonvalue={};
       $scope.jsonlessonvalue=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu];
        var letterindex=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter);
    
          var letteractive=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].isadded;
         if(letteractive){
        sharedVariable.sharedletterurl=$scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex].url;
       sharedVariable.currentindex=letterindex;
        
          $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
           
           $scope.changelessonview($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex]);
         }
            
     
      else{
         var checkisactive=searchfirstactive($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu]) 
         if(checkisactive){
            
            var letterindex=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],checkisactive);
       sharedVariable.currentindex=letterindex;
        $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
        $scope.current_letter =checkisactive;
        sharedVariable.currentletter=$scope.current_letter
        $scope.changelessonview($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu][letterindex]);
        }else{
              $scope.aaa.myVal =' _'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
            sharedVariable.currentindex=''; 
             $scope.url ='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html';   
            checkbuttons();
          }
      }
      
      
       
  }

    $scope.test = function(e) {
      
        $scope.current_active_menu = e;
        if(e=='lowercase'){
            $scope.lowecasevalue=true;
        }
        else{
           $scope.lowecasevalue=false;  
        }
        sharedVariable.current_active_menu=e;
       
        
       $scope.jsonlessonvalue=$scope.testdata[$scope.obj.lettertype][e];
        var checkisactive=searchfirstactive($scope.testdata[$scope.obj.lettertype][e])
        if(checkisactive){
            
            var letterindex=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],checkisactive);
       
           $scope.aaa.myVal = letterindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
        $scope.current_letter =checkisactive;
        sharedVariable.currentletter=$scope.current_letter
        $scope.changelessonview($scope.testdata[$scope.obj.lettertype][e][letterindex]);
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
        var temp_index=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
    sharedVariable.currentindex=temp_index;
         $state.go('lesson');  
}
    }
    
    $scope.gotopractice=function(e){
if(  $scope.practiceactive){
        sharedVariable.currentletter=e;
        sharedVariable.current_active_menu=$scope.current_active_menu;
      
        sharedVariable.mainmenu='practice';
        var temp_index=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],$scope.current_letter)
    sharedVariable.currentindex=temp_index;
         $state.go('practice');  
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
     function searchfirstactive (json,enteredValue) {     
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
        $scope.practiceactive=false;
    if($scope.url =='https://apwritingsuccess.s3.amazonaws.com/nodata/nodata.html') {
        $scope.playactive=false;
         $scope.current_letter='  *  '
        
    }   else{
          $scope.playactive=true;
        var currentletterindex=searchvalue($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        var activeindexes=searchactiveelements($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu]);
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
        $scope.practicedata=factoryname.subdata('practice'); 
         var worksheetindex= searchvalue($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu],sharedVariable.currentletter);
        if($scope.practicedata[$scope.obj.lettertype][$scope.current_active_menu][worksheetindex].isadded){
           $scope.practiceactive=true; 
        }
    }
      
        
  }
    
    
    
    
     $scope.nxtbtnclick=function(e){
         
         
          var activeindexes=searchactiveelements($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu]);
        var indexarray=activeindexes.split('~');
       for(var i=0;i<indexarray.length-1;i++){
       //console.log(indexarray[i])   
           if(indexarray[i]>sharedVariable.currentindex){
           
               sharedVariable.currentindex=indexarray[i];
               break;
           }
       }
           $scope.aaa.myVal= sharedVariable.currentindex+'_'+$scope.obj.lettertype+'_'+$scope.current_active_menu;
             
         
     }
     $scope.prvbtnclick=function(e){
     
         
           var activeindexes=searchactiveelements($scope.testdata[$scope.obj.lettertype][$scope.current_active_menu]);
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
factoryname.myData.data.worksheets[$scope.obj.lettertype][$scope.current_active_menu][sharedVariable.currentindex].scorm_status='completed';
    $scope.jsonlessonvalue[sharedVariable.currentindex].scorm_status='completed';   
       
          $scope.aaa.myVal=sharedVariable.currentindex+'_menucorrection';
         $scope.$apply();
     }
     
     
     

}]);
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
 writingSuccess.factory('sharedVariable',function() {
      return {
          mainmenu:"lesson",
         flow: "foo",
          togglemenu:true,
          lettertype:"manuscript",
         currentletter:"",
          currentindex:"",
          current_active_menu:"",
          sharedletterurl:"",
          accuracyvalue:true,
          accuracypercent:10,
          guidelinewidth:'medium',
          showguideline:'show',
          modevalue:true,
          introanim:1,
          ispreview:true
      }
    })