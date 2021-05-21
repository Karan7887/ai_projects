
var first = window.pageYOffset;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
 
    document.getElementById("scrollNav").style.top = "0";
} else {
   
    document.getElementById("scrollNav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};
var open=0;
function setmargin() {
   var block=document.getElementById("navbarSupportedCon");
    if(open!=0){
        block.style.marginTop='0px';
        open=0;
    }else{
        block.style.marginTop='60px';
        open=1;
    }
    
}
