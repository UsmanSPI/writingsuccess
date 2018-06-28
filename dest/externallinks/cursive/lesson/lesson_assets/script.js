 var pausebutton=false; 
  var iframeEl;
 var scorminitiated=false;
    var angularscope = parent.angular.element('#lesson_view_iframe').scope(); 
document.addEventListener("DOMContentLoaded", initiframe, false);
	function initiframe(){
		
	iframeEl=document.createElement('iframe');
iframeEl.setAttribute("src", angularscope.scormurl);
iframeEl.setAttribute("id", 'activityIframe');
	iframeEl.style.display='none';	
		  document.body.appendChild(iframeEl);
		   
			
	}
 var audiotag = document.createElement("AUDIO");

    if (audiotag.canPlayType("audio/mpeg")) {
        audiotag.setAttribute("src","../../lesson_assets/lesson_sample.mp3");
    } else {
        audiotag.setAttribute("src","../../lesson_assets/lesson_sample.mp3");
    }
 audiotag.setAttribute('loop','true')

 bindEvent(window, 'message', function (e) {
	 if(!angularscope.obj.ispreview && angularscope.scorm_status!='completed'){
	             if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null) iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('incomplete', "*");
	 }
     				  scorminitiated=true; 
                });

function setincomplete(){
	 if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null)
			{
				iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('incomplete', "*");
				
				}
}

function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

	
 showSuccess = function(){
      angularscope.$apply(function() {
                 angularscope.playpausebutton="Replay";
				// audiotag.pause();
            });
			
       if(!angularscope.obj.ispreview && angularscope.scorm_status!='completed' && angularscope.scorminitiated){
		  		
            if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null)
			{
				iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('completed', "*");
				angularscope.scormupdatejson();
				}
		 
	   }
    }
     replayanimation = function(){
         
     // audiotag.play();
         if(exportRoot.currentFrame==exportRoot.totalFrames){
             pausebutton=false;
         }
        
        
        
        if(!pausebutton){
            angularscope.playpausebutton="Pause";
			//audiotag.play();
            pausebutton=true;
            if(exportRoot.currentFrame==exportRoot.totalFrames){
             exportRoot.gotoAndPlay(4);
        }else{
           var framenumber=exportRoot.currentFrame;
       exportRoot.gotoAndPlay(framenumber);     
        }
        
        }
        else{
            exportRoot.paused=true
             pausebutton=false;
			// audiotag.pause();
             angularscope.playpausebutton="Play";
        }
     
           
     
           
            
    }