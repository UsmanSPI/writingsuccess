var x = document.getElementById('demo');
var iframeEl;
var scorminitiated = false;
var printpreloadimage = new Image();

document.addEventListener("DOMContentLoaded", initiframe, false);

var aud = new Audio();
aud.src="../practice_assets/dummy.mp3";

function initiframe() {
 $('#worksheet').find('button').css('opacity','0.5')
    iframeEl = document.createElement('iframe');
    iframeEl.setAttribute("src", angularscope.scormurl);
    iframeEl.setAttribute("id", 'activityIframe');
    iframeEl.style.display = 'none';
    document.body.appendChild(iframeEl);
    printpreloadimage.src=angularscope.worksheet;


}

printpreloadimage.onload=function (ev) {$('#worksheet').find('button').css('opacity','1')  }
function printDocument(iframe) {
    /*var win = window.open('');
    win.document.write('<title>print</title><style>body{margin: 0 auto; text-align: center;}</style><img src="' +  angularscope.worksheet  + '" onload="window.print();window.close()" />');
    win.focus();*/
    //  PrintWithIframe()
    $('html').append('<iframe id="printf" name="printf" style="width:100%;height:1024px;visibility:hidden;"></iframe>');  // an iFrame is added to the html content, then your div's contents are added to it and the iFrame's content is printed
    var mywindow='';
    var mywindow = window.frames["printf"];
    // var win = window.open('');
    mywindow.document.write('<title>print</title><style>body{margin: 0 auto; text-align: center;}@page { size: auto;  margin: 0mm; }</style><img style="width:100%;height:100%;" src="' +  angularscope.worksheet  + '" onload="window.print();window.close()" />');
    //win.focus();
}

function setincomplete(){
	 if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null)
			{
				iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('incomplete', "*");
				
				}
}



bindEvent(window, 'message', function (e) {
    if (!angularscope.obj.ispreview && angularscope.scorm_status != 'completed') {
        if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null) iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('incomplete', "*");
    }
    scorminitiated = true;
});



function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

x.style.display = 'block';



function togglePBoard() {
    //console.log(this);
    var x = document.getElementById('letterBoard');
    var y = document.getElementById('practiceBoard');
    var pb = document.getElementById('pb');
    var lb = document.getElementById('lb');
    var CP = document.getElementById('colorpicker');
    if (x.style.display === 'none') {
        x.style.display = 'inline-block';
        y.style.display = 'none';
        pb.style.display = 'inline-block';
        lb.style.display = 'none';
        CP.style.top = '0px';

    } else {
        x.style.display = 'none';
        y.style.display = 'inline-block';
        pb.style.display = 'none';
        lb.style.display = 'inline-block';
        CP.style.top = '550px';
    }

}

var angularscope = parent.angular.element('#practice_ifr').scope();

// 	var angularscope={
// 'scormurl':'',
// 'obj':{
// 	accuracyvalue : true,
//        modevalue : true,
//        accuracypercent:90,
//        guidelinewidth:'medium',
//        showguideline:true

//      },
// 'scorm_status':'notcompleted',
// 'thumb':'',
// 'worksheet':''

// }


//console.log('guide lines',angularscope.obj)
accuracyvisible(angularscope.obj.accuracyvalue)
document.getElementById('thumbnail_print').src = angularscope.thumb;
//document.getElementById('worksheet').href = angularscope.worksheet;
var drawarea = document.getElementById('d'),
    drawareaobject = drawarea.getContext('2d');
var mousedown = false;
var lastX1 = 0,
    lastY1 = 0;
var r = 10;
var k = 10;
drawareaobject.fillStyle = "black";

function drawareaonmousedown(ev) {
    mousedown = true;
    ev.preventDefault();
};

function drawareaonmouseup(ev) {
    mousedown = false;
    lastX1 = 0;
    lastY1 = 0;
    ev.preventDefault();
};

function drawareaonmousemove(ev) {

    ev.preventDefault()


    function dotdragarea(x, y) {


        drawareaobject.beginPath();
        drawareaobject.fillStyle = document.querySelector(".active").getAttribute('clr');
        drawareaobject.lineWidth = "2"
        drawareaobject.arc(x, y, r, 0, Math.PI * 2)
        drawareaobject.closePath();
        drawareaobject.fill()



    }
    if (mousedown) {
        var rect = drawarea.getBoundingClientRect();


        if (ev.clientX) {
            clientx = ev.clientX;
            clienty = ev.clientY;
        } else {
            clientx = ev.touches[0].pageX;
            clienty = ev.touches[0].pageY;
        }

        var x = clientx - rect.left,
            y = clienty - rect.top;

        if (rect.left > 0) {
            if (lastX1 && lastY1) {
                var dx = x - lastX1,
                    dy = y - lastY1;
                var d = Math.sqrt(dx * dx + dy * dy);
                for (var i = 1; i < d; i += 2) {
                    dotdragarea(lastX1 + dx / d * i, lastY1 + dy / d * i)
                }
            }
            dotdragarea(x, y)

            lastX1 = x;
            lastY1 = y;
        }
    }
};

drawarea.addEventListener('mousedown', drawareaonmousedown, false);
drawarea.addEventListener('mouseup', drawareaonmouseup, false);
drawarea.addEventListener('mousemove', drawareaonmousemove, false);
drawarea.addEventListener('touchstart', drawareaonmousedown, false);
drawarea.addEventListener('touchend', drawareaonmouseup, false);
drawarea.addEventListener('touchmove', drawareaonmousemove, false);
drawarea.addEventListener('mouseout', drawareaonmouseup, false);





var pixels = null;

c = document.getElementById('c');

var ismobile =false;

if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i)){
    ismobile = true;
}


var guideimageicon = document.getElementById('guideimage');
var ipadDevice = navigator.userAgent.match(/iPad/i);
if(navigator.userAgent.match(/Android/i) && window.innerWidth ==730)
{
    
}
else
if (window.innerWidth <= 750 && ipadDevice!='iPad') {
    c.width = 300;
    c.height = 300;
    drawarea.width = 300;
    drawarea.height = 300;


} else if (window.innerWidth > 1000 && window.innerWidth <= 1366) {
    c.width = 400;
    c.height = 400;
    drawarea.width = 400;
    drawarea.height = 400;


}
if(ipadDevice=='iPad'){
   c.width = 400;
    c.height = 400;
    drawarea.width = 400;
    drawarea.height = 400;  
}
//alert(c.width );
o = c.getContext('2d');
var drag = false;
var bg = new Image();
bg.src = imageUrl;
var accuracy = 100;
var accuracylimit = 100;
var accuracyadd = .04;
var accuracyminus = .4;
var accuracyscore = angularscope.obj.accuracypercent;


c.addEventListener('touchstart', function (e) {
    e.preventDefault();
    drawareaonmousedown(e);
}, false)
c.addEventListener('touchsend', function (e) {
    e.preventDefault();
    drawareaonmouseup(e);
}, false)
c.addEventListener('touchmove', function (e) {
    e.preventDefault();
    drawareaonmousemove(e);
}, false)







bg.onload = function () {
    o.drawImage(bg, 0, 0, c.width, c.height);

    pixels = o.getImageData(0, 0, c.width, c.height);

    drawpoints();
}

if (angularscope.obj.guidelinewidth == 'low') {
    r = 5;
} else if (angularscope.obj.guidelinewidth == 'medium') {
    r = 10;
} else {
    r = 15;
}



if (c.width <= 300) {


    for (i = 0; i < sequence.length; i++) {
        sequence[i].startx = sequence[i].startx * 0.5454;
        sequence[i].starty = sequence[i].starty * 0.5454;
        sequence[i].endx = sequence[i].endx * 0.5454;
        sequence[i].endy = sequence[i].endy * 0.5454;
        sequence[i].imgx = sequence[i].imgx * 0.5454;
        sequence[i].imgy = sequence[i].imgy * 0.5454;
    }
    document.getElementById('arrow').style.width = "35px";
    document.getElementById('arrow').style.height = "35px";
    if (angularscope.obj.guidelinewidth == 'low') {
        r = 3;
    } else if (angularscope.obj.guidelinewidth == 'medium') {
        r = 6;
    } else {
        r = 9;
    }




} else if (c.width <= 400) {
    for (i = 0; i < sequence.length; i++) {
        sequence[i].startx = sequence[i].startx * 0.7272;
        sequence[i].starty = sequence[i].starty * 0.7272;
        sequence[i].endx = sequence[i].endx * 0.7272;
        sequence[i].endy = sequence[i].endy * 0.7272;
        sequence[i].imgx = sequence[i].imgx * 0.7272;
        sequence[i].imgy = sequence[i].imgy * 0.7272;
        document.getElementById('arrow').style.width = "45px";
        document.getElementById('arrow').style.height = "45px";
    }
} else {
    for (i = 0; i < sequence.length; i++) {
        sequence[i].startx = sequence[i].startx * 0.9090;
        sequence[i].starty = sequence[i].starty * 0.9090;
        sequence[i].endx = sequence[i].endx * 0.9090;
        sequence[i].endy = sequence[i].endy * 0.9090;
        sequence[i].imgx = sequence[i].imgx * 0.9090;
        sequence[i].imgy = sequence[i].imgy * 0.9090;
        document.getElementById('arrow').style.width = "54.54px";
        document.getElementById('arrow').style.height = "54.54px";
    }
}

function drawpoints() {
    // r = 10;
    if (angularscope.obj.showguideline == false) {

        document.getElementById('arrow').style.display = 'none !important';
    } else {
        document.getElementById('arrow').style.display = 'block';
    }

    o.fillStyle = 'blue';
    o.beginPath();

    var rect = c.getBoundingClientRect();
    guideimageicon.src = "../practice_assets/crct.png";
    guideimageicon.style.left = (sequence[sequenceindex].startx - 16) + "px";
    guideimageicon.style.top = (sequence[sequenceindex].starty - 16) + "px";
    document.getElementById('arrow').style.left = (sequence[sequenceindex].imgx) + "px";
    document.getElementById('arrow').style.top = (sequence[sequenceindex].imgy) + "px";
    document.getElementById('arrow').src = "../practice_assets/" + sequence[sequenceindex].img;
    // o.arc(sequence[sequenceindex].startx, sequence[sequenceindex].starty, r, 0, Math.PI * 2,true);  
    document.getElementById("arrow").style.transform = "rotate(" + sequence[sequenceindex].rotate + ")";
    o.arc(sequence[sequenceindex].endx, sequence[sequenceindex].endy, k, 0, Math.PI * 2);
    o.closePath();
    o.fill();
    // if (sequenceindex == sequence.length - 1) {
    accuracyminus = sequence[sequenceindex].accuracyminus;
    // }

    lastx = sequence[sequenceindex].startx;
    lasty = sequence[sequenceindex].starty;
    document.getElementById('c').style.cursor = "default";



}


c.onmousedown = function (e) {
    guideimageicon.onmousedown(e)
}
c.onmousemove = function (e) {
    guideimageicon.onmousemove(e)
}

c.onmouseup = function (e) {
    guideimageicon.onmouseup(e)
}



guideimageicon.onmousedown = function (e) {
    practicemousedown(e);
    e.preventDefault();
}



guideimageicon.onmouseup = function (e) {
    practicemouseup(e);
    e.preventDefault();
}

guideimageicon.onmousemove = function (e) {
    practicemousemove(e);
    e.preventDefault();
}





guideimageicon.addEventListener('touchstart', function (e) {
    practicemousedown(e);
    e.preventDefault();

}, false)
guideimageicon.addEventListener('touchend', function (e) {
    practicemouseup(e);
    e.preventDefault();

}, false)
guideimageicon.addEventListener('touchmove', function (e) {
    practicemousemove(e);
    e.preventDefault();

}, false)





function practicemousedown(e) {

    var rect = c.getBoundingClientRect();
    var clientx, clienty;
    if (e.clientX) {
        clientx = e.clientX;
        clienty = e.clientY;
    } else {
        clientx = e.touches[0].pageX;
        clienty = e.touches[0].pageY;
    }
    try{
        aud.src="../practice_assets/dummy.mp3";
        aud.play();  
    }
    catch(e){
        aud.pause(); 
    }
    



    //console.log(rect.left, rect.top, clientx, clienty)


    var x = clientx - rect.left;
    var y = clienty - rect.top
    console.log(x, y, getpixelcolour(x, y))
    // console.log(x, y, getpixelcolour(x, y))

    if ((lastx - 8 <= x && x <= lastx + 11) && (lasty - 8 <= y && y <= lasty + 11)) {
        drag = true;

    }
    lastX = 0;
    lastY = 0;
    if(mouseContain){
        if(!drag){
            drag = true;
            console.log('guideimageicon',guideimageicon)
        }
        mouseContain = false;
    }
    
    practicemousemove(e)
}



function practicemouseup(e) {



    if (drag != false) {

        var rect = c.getBoundingClientRect();
        var clientx, clienty;
        if (e.clientX) {
            clientx = e.clientX;
            clienty = e.clientY;
        } else {

            clientx = e.changedTouches[0].pageX;
            clienty = e.changedTouches[0].pageY;
        }

        lastx = clientx - rect.left;
        lasty = clienty - rect.top;

    }



    drag = false;

}
var rangeX =10;
var rangeY =10;
var mouseContain = false;
var count =0;
function practicemousemove(e) {

    var rect = c.getBoundingClientRect();
    // r = 10;
    var clientx, clienty;
    if (e.clientX) {
        clientx = e.clientX;
        clienty = e.clientY;
    } else {
        clientx = e.touches[0].pageX;
        clienty = e.touches[0].pageY;
    }
    var x = clientx - rect.left,
        y = clienty - rect.top;
    if ((lastx - 8 <= x && x <= lastx + 11) && (lasty - 8 <= y && y <= lasty + 11)) {

        // document.getElementById('c').style.cursor = "url('../practice_assets/crct.png')15 15, auto";

    } else {
        //  document.getElementById('c').style.cursor="url('../practice_assets/wrng.png')15 15, auto";   
        document.getElementById('c').style.cursor = "default";
    }


    function dot(x, y) {

        if (drag) {

            if (sequence[sequenceindex]) {
                if ((sequence[sequenceindex].endx - 10 <= x && x <= sequence[sequenceindex].endx + 10) && (sequence[sequenceindex].endy - 10 <= y && y <= sequence[sequenceindex].endy + 10)) {

                    if(count < 50)
                        return;


                    count =0;
                    drag = false;
                    //  o.fillStyle = document.querySelector(".active").getAttribute('clr');
                    o.fillStyle = 'black';
                    o.beginPath();
                    o.arc(sequence[sequenceindex].endx, sequence[sequenceindex].endy, k, 0, Math.PI * 2);
                    o.closePath();
                    o.fill();

                    sequenceindex++;

                    if (sequence.length == sequenceindex) {
                        lastx = -100;
                        lasty = -100;
                        console.log(accuracy, accuracyscore)
                        guideimageicon.style.display = 'none';
                        if (accuracy >= accuracyscore) {
                            document.getElementById('arrow').style.display = "none";
                            // angularscope.$apply(function () {
                                // angularscope.nextletterenable = true;
                            // });
							//var aud = new Audio();
							aud.src="../practice_assets/congratulation.mp3";
							aud.play();
                            if(!angularscope.obj.ispreview && angularscope.scorm_status!='completed' && angularscope.scorminitiated){
		  		
            if (iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow != null)
			{
				iframeEl.contentWindow.document.getElementById("scorm_object").contentWindow.postMessage('completed', "*");
				angularscope.scormupdatejson();
				}
		 
	   }
                        } else {
							aud.src="../practice_assets/pleasetryagain.mp3";
							aud.play();
                            document.getElementById('Count_run').style.color = 'red';
                            document.getElementById('arrow').style.display = "none";
                        }
                        // document.getElementById('c').style.cursor = "default";
                        return;

                    } else {
                        //	accuracy=100;
                        //  document.getElementById('c').style.cursor = "default";
                        accuracylimit = accuracy;

                        drawpoints();
                    }

                } else {
                    //  console.log(getpixelamount(0,0,0,255))

                    var getcolor = getpixelcolour(x, y);

                    var red, green, blue, alpha, red1, green1, blue1, alpha1, red2, green2, blue2, alpha2;
                    red = sequence[sequenceindex].color.r;
                    green = sequence[sequenceindex].color.g;
                    blue = sequence[sequenceindex].color.b;
                    alpha = sequence[sequenceindex].color.a;
                    red1 = sequence[sequenceindex].color.r;
                    green1 = sequence[sequenceindex].color.g;
                    blue1 = sequence[sequenceindex].color.b;
                    alpha1 = sequence[sequenceindex].color.a;

                    if (sequence[sequenceindex].mixcolor) {
                        red = sequence[sequenceindex].mixcolor.r;
                        green = sequence[sequenceindex].mixcolor.g;
                        blue = sequence[sequenceindex].mixcolor.b;
                        alpha = sequence[sequenceindex].mixcolor.a;
                    }

                    if (sequence[sequenceindex].mixcolor1) {
                        red1 = sequence[sequenceindex].mixcolor1.r;
                        green1 = sequence[sequenceindex].mixcolor1.g;
                        blue1 = sequence[sequenceindex].mixcolor1.b;
                        alpha1 = sequence[sequenceindex].mixcolor1.a;
                    }
                    if (sequence[sequenceindex].mixcolor2) {
                        red2 = sequence[sequenceindex].mixcolor2.r;
                        green2 = sequence[sequenceindex].mixcolor2.g;
                        blue2 = sequence[sequenceindex].mixcolor2.b;
                        alpha2 = sequence[sequenceindex].mixcolor2.a;
                    }






                    if (drag) {


                        //console.log('as',guideimageicon.offsetLeft);
                        if( guideimageicon.offsetTop < rangeY ){
                            guideimageicon.style.top = (rangeY+3)+'px';
                            drag = false;
                            mouseContain = true;
                            return;
                        }else if(guideimageicon.offsetLeft < rangeX){
                            guideimageicon.style.left = (rangeX+3)+'px';
                            drag = false;
                            mouseContain = true;
                            return;
                        }else if(guideimageicon.offsetTop > (c.height-50)){
                            guideimageicon.style.top = ((c.height-50)-3)+'px';
                            drag = false;
                            mouseContain = true;
                            return;
                        }else if(guideimageicon.offsetLeft > (c.width-50)){
                            guideimageicon.style.left = ((c.width-50)-3)+'px';
                            drag = false;
                            mouseContain = true;
                            return;
                        }


                        count++;
                        if ((getcolor.r == sequence[sequenceindex].color.r || getcolor.r == undefined || getcolor.r == red || getcolor.r == red1 || getcolor.r == red2) && (getcolor.g == sequence[sequenceindex].color.g || getcolor.g == undefined || getcolor.g == green || getcolor.g == green1 || getcolor.g == green2) && (getcolor.b == sequence[sequenceindex].color.b || getcolor.b == undefined || getcolor.b == blue || getcolor.b == blue1 || getcolor.b == blue2) && (getcolor.a == sequence[sequenceindex].color.a || getcolor.a == undefined || getcolor.a == alpha || getcolor.a == alpha1 || getcolor.a == alpha2)) {
                            document.getElementById('arrow').style.display = 'none';
                            if (accuracy < accuracylimit) {
                                document.getElementById("Count_run").innerHTML = (Math.round(accuracy += accuracyadd)) /*"accuracy :" +*/

                            }
                            // document.getElementById('c').style.cursor = "url('../practice_assets/crct.png')15 15, auto";
                            guideimageicon.src = "../practice_assets/crct.png";
                        } else {
                            guideimageicon.src = "../practice_assets/wrng.png";
                            // document.getElementById('c').style.cssText = 'cursor:url("../practice_assets/wrng.png")15 15, auto';
                            // console.log('out')
                            if (accuracy > 1) {
                                document.getElementById("Count_run").innerHTML = (Math.round(accuracy -= accuracyminus)) /*"accuracy :" +*/
                            }


                        }


                        //  o.fillStyle = document.querySelector(".active").getAttribute('clr');
                        o.fillStyle = 'black';
                        o.beginPath()
                        o.lineWidth = "2"
                        o.moveTo(x + r, y)
                        o.arc(x, y, r, 0, Math.PI * 2)
                        o.fill()
                        // o.stroke();
                    }
                }
            }

        }
    }
    if (drag) {


        if (lastX && lastY) {
            var dx = x - lastX,
                dy = y - lastY;
            var d = Math.sqrt(dx * dx + dy * dy);
            for (var i = 1; i < d; i += 2) {
                if (drag) {

                    dot(lastX + dx / d * i, lastY + dy / d * i)
                }

            }
            guideimageicon.style.left = (x - 16) + 'px';
            guideimageicon.style.top = (y - 16) + 'px';
        }

        if (drag) {
            if(ismobile){
                dot(x, y)
                lastX = x;
                lastY = y;
            }
            else{            
               var inheight=parseInt(document.getElementById('c').getAttribute('height'))-5;
                var inwidth=parseInt(document.getElementById('c').getAttribute('width'))-5;
                console.log(inwidth,inheight)
                if((x>5 && x<inwidth) && (y>5 && y<inheight)){
                    document.getElementById('guideimage').style.display='block';
                    dot(x, y)
                            lastX = x;
                            lastY = y;
                }
                else{

                document.getElementById('guideimage').style.display='none';
                }
            }
            } else {
            if (sequenceindex < sequence.length) {
                drawpoints();
            }
        }

    }
}


function getpixelcolour(x, y) {
    //            var index = ((y * (pixels.width * 4)) + (x * 4));
    var index = (Math.floor(y) * pixels.width + Math.floor(x)) * 4;

    //  console.log(x, y)
    return {
        r: pixels.data[index],
        g: pixels.data[index + 1],
        b: pixels.data[index + 2],
        a: pixels.data[index + 3]
    };
}

function accuracyvisible(val) {
    console.log('called', val);
    if (val) {
        document.getElementById('accuracyDiv').style.display = 'block';
    } else {
        document.getElementById('accuracyDiv').style.display = 'none';
    }
}

function showguidelinevisible(val) {

    if (val) {
        document.getElementById('arrow').style.display = 'block';
    } else {
        document.getElementById('arrow').style.display = 'none';
    }
}

function setaccuracylimit(val) {
    console.log('set', val)
    accuracyscore = val;

}

function setlinewidth(val) {
    if (window.innerWidth <= 729) {
        if (val == 'low') {
            r = 3;
        } else if (val == 'medium') {
            r = 6;
        } else {
            r = 9;
        }

    } else {
        if (val == 'low') {
            r = 5;
        } else if (val == 'medium') {
            r = 10;
        } else {
            r = 15;
        }

    }
}

var classname = document.getElementsByClassName("clr");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}

function myFunction() {

    var active = document.querySelector(".active");
    active.classList.remove("active");
    this.className += " active";
    drawareaobject.fillStyle = this.getAttribute("clr");
    // o.fillStyle = this.getAttribute("clr");

}

function resetDashboard() {
    drawareaobject.fillStyle = '#F9E9E9';
    o.fillStyle = '#F9E9E9';

    o.fillRect(0, 0, c.width, c.height)
    o.drawImage(bg, 0, 0, c.width, c.height);
    pixels = o.getImageData(0, 0, c.width, c.height);
    console.log(accuracylimit, accuracyscore)
    accuracy = 100;

    document.getElementById("Count_run").innerHTML = accuracy;
    document.getElementById('Count_run').style.color = 'white';
    sequenceindex = 0;
    drawpoints();
    guideimageicon.style.display = 'block';
    drawareaobject.fillRect(0, 0, drawarea.width, drawarea.height)
    drawareaobject.fillStyle = document.querySelector(".active").getAttribute('clr');
    // o.fillStyle= document.querySelector(".active").getAttribute('clr');

}