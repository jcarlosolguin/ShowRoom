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
  __cWidth=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
  __cHeight=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// __cWidth=__cWidth*.3;
// __cHeight=__cHeight*.3;

  if(__cHeight>__cWidth){
    __leftMargin=__cWidth*.1;
    __bigRad=__cWidth-__leftMargin*2;
    __topMargin=(__cHeight-__bigRad)/2;
  }
  else {
    __topMargin=__cHeight*.1;
    __bigRad=__cHeight-__topMargin*2;
    __leftMargin=(__cWidth-__bigRad)/2;
  }
  __smallRad=__bigRad*.4;
//alert("lm:"+__leftMargin+",bg:"+__bigRad);
}
function __render()
{
  $("#big").width(__bigRad).height(__bigRad);
  $("#big").css("margin-top",__topMargin);
  $("#big").css("margin-left",__leftMargin);

  $("#small").width(__smallRad).height(__smallRad);
  $("#small").css("margin-top",__topMargin+.3*__bigRad);//cause MATH!
  $("#small").css("margin-left",__leftMargin+.3*__bigRad);

  var _fontSize=__smallRad*.2;
  $("#myName").width(__smallRad*.8);
  $("#myName").css('font-size', (_fontSize)+'px');
  $("#myName").css("margin-left",(__leftMargin+.3*__bigRad)+__smallRad*.1);
  $("#myName").css("margin-top",(__topMargin+.3*__bigRad)+__smallRad*.3);

  var _c1Size=__bigRad*.6;
  $("#cardOn1").width(_c1Size).height(_c1Size);
  $("#cardOn1").css("margin-top",__topMargin+.2*__bigRad);//cause MATH!
  $("#cardOn1").css("margin-left",__leftMargin+.48*__bigRad);

  $("#cardOn2").width(_c1Size*(2/3)).height(_c1Size*(2/3));
  $("#cardOn2").css("margin-top",__topMargin+.5*__bigRad);//cause MATH!
  $("#cardOn2").css("margin-left",__leftMargin+.5*__bigRad);

  $("#cardOn3").width(_c1Size*(3/5)).height(_c1Size*(3/5));
  $("#cardOn3").css("margin-top",__topMargin+.6*__bigRad);//cause MATH!
  $("#cardOn3").css("margin-left",__leftMargin+.32*__bigRad);
  //alert("whoaa:"+__bigRad);
}
