// build time:Mon Jun 15 2020 14:16:29 GMT+0800 (GMT+08:00)
!function(){var e=document.getElementById("ribbon");var t=e.getAttribute("mobile");if(t=="false"&&/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){return}config={z:n(e,"zIndex",-1),a:n(e,"alpha",.6),s:n(e,"size",90),c:n(e,"data-click",true)};function n(e,t,n){if(n===true){return e.getAttribute(t)||n}return Number(e.getAttribute(t))||n}var i=document.createElement("canvas"),o=i.getContext("2d"),a=window.devicePixelRatio||1,c=window.innerWidth,r=window.innerHeight,l=config.s,d,u,g=Math,f=0,s=g.PI*2,h=g.cos,b=g.random;i.id="ribbon-canvas";i.width=c*a;i.height=r*a;o.scale(a,a);o.globalAlpha=config.a;i.style.cssText="opacity: "+config.a+";position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;";document.getElementsByTagName("body")[0].appendChild(i);function m(){o.clearRect(0,0,c,r);d=[{x:0,y:r*.7+l},{x:0,y:r*.7-l}];while(d[1].x<c+l)x(d[0],d[1])}function x(e,t){o.beginPath();o.moveTo(e.x,e.y);o.lineTo(t.x,t.y);var n=t.x+(b()*2-.25)*l,i=y(t.y);o.lineTo(n,i);o.closePath();f-=s/-50;o.fillStyle="#"+(h(f)*127+128<<16|h(f+s/3)*127+128<<8|h(f+s/3*2)*127+128).toString(16);o.fill();d[0]=d[1];d[1]={x:n,y:i}}function y(e){u=e+(b()*2-1.1)*l;return u>r||u<0?y(e):u}if(config.c!=="false"){document.onclick=m;document.ontouchstart=m}m()}();
//rebuild by neat 