// build time:Fri Jun 12 2020 00:15:39 GMT+0800 (GMT+08:00)
function co(){var t="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";var o=t.split(",");var a="#";for(var e=0;e<6;e++){a+=o[Math.floor(Math.random()*16)]}return a}var a_idx=0;jQuery(document).ready(function(t){t("body").click(function(o){var a=GLOBAL_CONFIG.ClickShowText;var e=a.text.split(",");var i=t("<span/>").text(e[a_idx]);a_idx=(a_idx+1)%e.length;var n=o.pageX,r=o.pageY;i.css({"z-index":150,top:r-20,left:n-40,position:"absolute","font-weight":"bold",color:co(),cursor:"default","font-size":a.fontSize||"inherit"});t("body").append(i);i.animate({top:r-180,opacity:0},1500,function(){i.remove()})})});
//rebuild by neat 