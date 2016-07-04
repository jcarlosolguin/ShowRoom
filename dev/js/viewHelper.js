//It should kind of work even without js support, but lets make super sure the presentation is good.
var __cWidth=0; // silly Carlos JS doesn't need to initialize variables, even less integers
var __cHeight=0;
var __heightMenu=0;
var __heightBod=0;
var __fontSizeBanner=0;
var __fontSizeH1=0;
var __fontSizeH2=0;

function __init()
{
  __getInitSizes();
  __render();
}
function __getInitSizes()
{
  __cWidth=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

  __cHeight=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

  __heightMenu=.1*__cHeight;
  __heightBod=.9*__cHeight;
}
function __render()
{

  $("#mynavbar").height(__heightMenu);
  $("#splash").height(__heightBod);
  $("#splashTitle").css("fontSize", __heightMenu+"px");


  $(".t1").css("fontSize",__heightMenu*.35+"px");
  $(".t2").css("fontSize",__heightMenu*.25+"px");
  var $menuLink = $('.navbar-nav>li>a');
  if(__cWidth>991)//992px or more title and story are side to side
  {
    $("#splashTitle").css("margin-top", (__heightBod/10)-__heightMenu+"px");
    $("#intro").css("margin-top", (__heightBod/8)-__heightMenu+"px");

    $menuLink.attr("style", $menuLink.attr("style") + "; " + "font-size: "+__heightMenu*.2+"px !important");

  }
  else {
    $("#splashTitleContainer").height(__heightMenu*2.7);
    //$("#splashTitle").css("margin-top", (__heightBod/4)-__heightMenu+"px");
    $("#intro").css("margin-top", (__heightBod/2)-__heightMenu+"px");

    var $elem = $('.navbar-nav>li>a');
    $menuLink.attr("style", $menuLink.attr("style") + "; " + "font-size: "+__heightMenu*.4+"px !important");
  }
}
