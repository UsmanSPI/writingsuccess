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