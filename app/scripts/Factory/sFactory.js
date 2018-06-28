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

