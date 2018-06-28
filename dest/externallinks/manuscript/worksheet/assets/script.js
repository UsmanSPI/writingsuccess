  var angularscope = parent.angular.element('#worksheetElem').scope();

     	
	if(!onepage){
					 var img1= new Image();
		img1.src=angularscope.letterandsound;
		img1.onload=function(){
			 document.getElementById('pageone').src=angularscope.letterandsound;
		}
	}
		
		 var img2= new Image();
		img2.src=angularscope.writingabc;
		img2.onload=function(){
			  document.getElementById('pagetwo').src=angularscope.writingabc;
		}
		
		
		
		
		
		
		function printDocument(iframe) {
			var data='<img style="width:100%;height:100%;" src="' + $('#'+iframe).attr('src')  + '" onload="window.print();window.close()" />'	
		if($('#'+iframe).attr('id')=="pageone"){
			if(flag1>1){
				  PrintWithIframe(data);
			}
		}else{
			if(flag2>1){
				  PrintWithIframe(data);
			}
			
		}
		
			
           // PrintWithIframe($('#'+iframe).parent().html())
		  
			 /* if(!angularscope.obj.ispreview && angularscope.scorm_status!='completed' && angularscope.scorminitiated){
		  		
            if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null)
			{
				iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('completed', "*");
				angularscope.scormupdatejson();
				}
		 
	   }
			console.log(window.frames);
			var iframe = document.getElementById(iframe);
		    if (iframe.src) {
		    	var htmlcontent='<title>print</title><style>body{margin: 0 auto; text-align: center;}</style><img src="'+iframe.src+'"></img>';
	          	popup = window.open();
				popup.document.write(htmlcontent);
				popup.focus(); //required for IE
				popup.print();
				popup.close();
	        }*/
		}
	
		/*print in current window*/
  function PrintWithIframe(data)
  {

      //if ($('iframe#printf').size() == 0) {
      $('html').append('<iframe id="printf" name="printf" style="width:100%;height:1024px;visibility:hidden;"></iframe>');  // an iFrame is added to the html content, then your div's contents are added to it and the iFrame's content is printed

      var mywindow = window.frames["printf"];
      mywindow.document.write('<html><head><title></title><style>body{margin: 0 auto; text-align: center;}@page { size: auto;  margin: 0mm; }</style>'  // Your styles here, I needed the margins set up like this
          + '</head><body style="text-align:center;"><div>'
          + data
          + '</div></body></html>');

      $(mywindow.document).ready(function(){
         // mywindow.print();
          setTimeout(function(){
                  $('iframe#printf').remove();
              },
              1000);  // The iFrame is removed 2 seconds after print() is executed, which is enough for me, but you can play around with the value
      });
      // }

      return true;
  }
		/*Ends*/
	
 var iframeEl;
 
	 document.addEventListener("DOMContentLoaded", initiframe, false);
	function initiframe(){
		
	iframeEl=document.createElement('iframe');
iframeEl.setAttribute("src", angularscope.scormurl);
iframeEl.setAttribute("id", 'activityIframe');
	iframeEl.style.display='none';	
		  document.body.appendChild(iframeEl);
		   
			
	}

function setincomplete(){
	 if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null)
			{
				iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('incomplete', "*");
				
				}
}

 bindEvent(window, 'message', function (e) {
	 if(!angularscope.obj.ispreview && angularscope.scorm_status!='completed' && angularscope.scorminitiated){
	             if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null){
				 iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('completed', "*");
				 angularscope.scormupdatejson();
				 }
	 }
     				 
                });



function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }