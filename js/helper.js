var __cWidth=0;
var __cHeight=0;
var __bigRad=0;
var __smallRad=0;
var __cardSide=0;
var __topMargin=0;
var __leftMargin=0;
var __changed=false;

function __init()
{
  if(!__changed){
    __getInitSizes();
    __render();
    __changed=true;//lets avoid way too many updates
  }
}
function __getInitSizes()
{
  var __topOffset=.05;
  __cWidth=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
// alert("width:"+__cWidth);
  __cHeight=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
// __cHeight=__cHeight-100;
// __cWidth=__cWidth*.3;
 //__cHeight=__cHeight*.3;

  if(__cHeight>__cWidth){
    __leftMargin=__cWidth*.2;
    __bigRad=__cWidth-__leftMargin*2;
    __topMargin=(__cHeight-__bigRad)/2-(__cHeight*__topOffset);
  }
  else {
    __topMargin=__cHeight*.3;
    __bigRad=__cHeight-__topMargin*2;
    __leftMargin=(__cWidth-__bigRad)/2;
    __topMargin-=__cHeight*__topOffset;
  }
  __smallRad=__bigRad*.4;
// alert("lm:"+__leftMargin+",bg:"+__bigRad);
}
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};
function __render()
{
  $("#big").width(__bigRad).height(__bigRad);
  $("#big").css("margin-top",__topMargin);
  $("#big").css("margin-left",__leftMargin);

  var ___lol=40;
  if(__bigRad<400)___lol=30;
  $(".wing").width(__bigRad*1.1).height(__bigRad*1.1);
  $(".wing").css("margin-top",__topMargin-__bigRad*.05);
  $(".wing").css("margin-left",__leftMargin-__bigRad*.05);

  $("#small").width(__smallRad).height(__smallRad);
  $("#small").css("margin-top",__topMargin+.3*__bigRad);//cause MATH!
  $("#small").css("margin-left",__leftMargin+.3*__bigRad);
}
function h(){$(".wing").rotate(0);}
function uh(){$("#wing1").rotate(-35);$("#wing2").rotate(-5);$("#wing3").rotate(25);}
//hook events
