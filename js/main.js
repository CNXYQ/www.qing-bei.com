// build time:Wed Jun 17 2020 15:06:18 GMT+0800 (GMT+08:00)
$(function(){var e=GLOBAL_CONFIG.Snackbar!==undefined;var i=$("#page-header");var t=$("#rightside");var a=$("body");var n=$("#blog_name").width();var s=$(".menus").width();var o=$("#sidebar").width();function r(e){var t;if(e===1){t=n+s>i.width()-o-20}else if(e===2){t=n+s>i.width()-20}if(t)c();else d()}function c(){i.find(".toggle-menu").addClass("is-visible-inline");i.find(".menus_items").addClass("is_invisible");i.find("#search_button span").addClass("is_invisible")}function d(){i.find(".toggle-menu").removeClass("is-visible-inline");i.find(".menus_items").removeClass("is_invisible");i.find("#search_button span").removeClass("is_invisible")}function l(){if(window.innerWidth<768)c();else r(2)}l();$("#page-header").css({opacity:"1",animation:"headerNoOpacity 1s"});$(window).on("resize",function(){if($("#sidebar").hasClass("tocOpenPc")&&i.hasClass("fixed")){r(1)}else{l()}});if(GLOBAL_CONFIG_SITE.isHome){var f=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent);if(!f&&isDesktop()){$("#nav").css("background-attachment","fixed")}}if(GLOBAL_CONFIG_SITE.isPost){if(window.innerWidth>1024&&$("#toggle-sidebar").hasClass("on")){setTimeout(function(){h()},400)}}function u(){$("#sidebar").removeClass("tocOpenPc");$(".menus").animate({paddingRight:0},400);$("#body-wrap").animate({paddingLeft:0},400);$("#sidebar").animate({left:"-300px"},400);$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"});setTimeout(function(){r(2)},400)}function h(){$("#sidebar").addClass("tocOpenPc");$(".menus").animate({paddingRight:300},400);$("#body-wrap").animate({paddingLeft:300},400);$("#sidebar").animate({left:0},400);$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var e=window.setInterval(function(){if(i.hasClass("fixed"))r(1);else r(2)},100);setTimeout(function(){clearInterval(e)},400)}$("#toggle-sidebar").on("click",function(){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on");if(e){u()}else{h()}});var m=$(".toggle-menu");var v=$("#mobile-sidebar-menus");var p=$("#mobile-toc-button");var g=$("#menu_mask");function C(e){sidebarPaddingR();$("body").css("overflow","hidden");g.fadeIn();if(e==="menu"){m.removeClass("close").addClass("open");v.css("transform","translate3d(-100%,0,0)");var i=v.children();for(var t=0;t<=i.length;t++){var a=t/5+.2;i.eq(t).css("animation","sidebarItem "+a+"s")}}if(e==="toc"){p.removeClass("close").addClass("open");$("#sidebar").addClass("tocOpenMobile");$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""})}}function b(e){$("body").css({overflow:"","padding-right":""});g.fadeOut();if(e==="menu"){m.removeClass("open").addClass("close");v.css("transform","");$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")}if(e==="toc"){p.removeClass("open").addClass("close");$("#sidebar").removeClass("tocOpenMobile");$("#sidebar").css({transform:""})}}m.on("click",function(){C("menu")});p.on("click",function(){C("toc")});g.on("click touchstart",function(e){if(m.hasClass("open")){b("menu")}if(p.hasClass("open")){b("toc")}});$(window).on("resize",function(e){if(!m.is(":visible")){if(m.hasClass("open"))b("menu")}});var w=window.matchMedia("(max-width: 1024px)");w.addListener(function(e){if(e.matches){if($("#sidebar").hasClass("tocOpenPc"))u()}else{if($("#toggle-sidebar").hasClass("on"))h();if(p.hasClass("open"))b("toc")}});$("#scroll_down").on("click",function(){scrollTo("#content-inner")});$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(document.title,window.location.href,"")}else if(window.external&&"AddFavorite"in window.external){window.external.AddFavorite(location.href,document.title)}else if(window.opera&&window.print){this.title=document.title;return true}else{if(e){var i=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(navigator.userAgent.toLowerCase().indexOf("mac")!==-1?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(i)}else{alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(navigator.userAgent.toLowerCase().indexOf("mac")!==-1?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}}});var _=$("figure.highlight");if(_.length){var O=GLOBAL_CONFIG.highlightCopy;var L=GLOBAL_CONFIG.highlightLang;var y=GLOBAL_CONFIG.highlightShrink;if(O||L||y!=="none"){_.wrap('<div class="code-area-wrap"></div>').before('<div class="highlight-tools"></div>')}var G=$(".highlight-tools");if(y==="true"){G.append('<i class="fa fa-angle-down code-expand code-closed" aria-hidden="true"></i>')}else if(y==="false"){G.append('<i class="fa fa-angle-down code-expand" aria-hidden="true"></i>')}$(document).on("click",".highlight-tools >.code-expand",function(){var e=$(this).parent().next();if($(this).hasClass("code-closed")){e.css("display","block");$(this).removeClass("code-closed")}else{e.css("display","none");$(this).addClass("code-closed")}});if(L){var k,A;_.each(function(){k=A=$(this).attr("class").split(" ")[1];if(k==="plain")A="Code";$(this).prev().append('<div class="code-lang">'+A+"</div>")})}if(O){G.append('<div class="copy-notice"></div><i class="fa fa-clipboard" aria-hidden="true"></i>');var I=function ae(i,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy")){try{document.execCommand("copy");if(e){snackbarShow(GLOBAL_CONFIG.copy.success)}else{$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1,right:30},450,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)})}}catch(a){if(e){snackbarShow(GLOBAL_CONFIG.copy.success)}else{$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1,right:30},650,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)});return false}}}else{if(e){snackbarShow(GLOBAL_CONFIG.copy.noSupport)}else{$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}}};$(document).on("click",".highlight-tools>.fa-clipboard",function(){var e=window.getSelection();var i=document.createRange();i.selectNodeContents($(this).parent().next().find(".code pre")[0]);e.removeAllRanges();e.addRange(i);var t=e.toString();I(t,this);e.removeAllRanges()})}}function x(){var e=$("#article-container img");e.each(function(e,i){var t=$(i);if(t.attr("alt")){var a=$('<div class="img-alt is-center">'+t.attr("alt")+"</div>");t.after(a)}})}if(GLOBAL_CONFIG.isPhotoFigcaption)x();var F=$(".justified-gallery");var N=false;if(F.length){N=true;var B=F.find("img");B.unwrap();if(B.length){B.each(function(e,i){if($(i).attr("data-src"))$(i).attr("src",$(i).attr("data-src"));$(i).wrap("<div></div>")})}$("head").append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/justifiedGallery/dist/css/justifiedGallery.min.css">');loadScript("https://cdn.jsdelivr.net/npm/justifiedGallery/dist/js/jquery.justifiedGallery.min.js",function(){S(F)});var S=function ne(e){e.each(function(e,i){if($(this).is(":visible")){$(this).justifiedGallery({rowHeight:220,margins:4})}})}}var T=GLOBAL_CONFIG.medium_zoom;var D=GLOBAL_CONFIG.fancybox;if(D){var j=$("#article-container img:not(.gallery-group-img)").not($("a>img"));j.each(function(e,i){var t=$(i).attr("data-src")?$(i).attr("data-src"):$(i).attr("src");$(i).wrap('<a href="'+t+'" data-fancybox="group" data-caption="'+$(i).attr("alt")+'" class="fancybox"></a>')});$().fancybox({selector:"[data-fancybox]",loop:true,transitionEffect:"slide",protect:true,buttons:["slideShow","fullScreen","thumbs","close"]})}else if(T){(function(){var e=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));e.on("open",function(i){var t=$(document.documentElement).attr("data-theme")==="dark"?"#121212":"#fff";e.update({background:t})})})()}if(GLOBAL_CONFIG.islazyload){window.lozad("img").observe()}var z=0;$(window).scroll(function(e){var a=$(this).scrollTop();var n=P(a);if(a>56){if(n){if(i.hasClass("visible"))i.removeClass("visible")}else{if(!i.hasClass("visible"))i.addClass("visible")}i.addClass("fixed");if(t.css("opacity")==="0"){t.css({opacity:"1",transform:"translateX(-38px)"})}}else{if(a===0){i.removeClass("fixed").removeClass("visible")}t.css({opacity:"",transform:""})}});function P(e){var i=e>z;z=e;return i}$("#go-up").on("click",function(){scrollTo("body")});if(GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar){$(".toc-child").hide();$(window).scroll(throttle(function(e){var i=$(this).scrollTop();R(i);W(i);Z(i)},100));$(".toc-link").on("click",function(e){if(window.innerWidth<=1024){b("toc")}else{e.preventDefault();scrollTo($(this).attr("href"))}});var E=function se(e){if(e.is(":visible")){return}e.fadeIn(400)};var R=function oe(e){var i=$("#article-container").height();var t=$(window).height();var a=i>t?i-t:$(document).height()-t;var oe=e/a;var n=Math.round(oe*100);var s=n>100?100:n<=0?0:n;$(".progress-num").text(s);$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)};var M=GLOBAL_CONFIG.isanchor;var q=function re(e){if(window.history.replaceState&&e!==window.location.hash){window.history.replaceState(undefined,undefined,e)}};var W=function ce(e){if($(".toc-link").length===0){return false}var i=$("#article-container").find("h1,h2,h3,h4,h5,h6");var t="";i.each(function(){var i=$(this);if(e>i.offset().top-25){t="#"+$(this).attr("id")}});if(t===""){$(".toc-link").removeClass("active");$(".toc-child").hide()}var a=$(".toc-link.active");if(t&&a.attr("href")!==t){if(M)q(t);$(".toc-link").removeClass("active");var n=$('.toc-link[href="'+t+'"]');n.addClass("active");var s=n.parents(".toc-child");var o=s.length>0?s.last():n;E(o.closest(".toc-item").find(".toc-child"));o.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}};var Z=function de(e){if($(".toc-link").hasClass("active")){var i=$(".active").offset().top;var t=$("#sidebar .sidebar-toc__content").scrollTop();if(i>e+$(window).height()-100){$("#sidebar .sidebar-toc__content").scrollTop(t+100)}if(i<e+100){$("#sidebar .sidebar-toc__content").scrollTop(t-100)}}}}$("#readmode").click(function(){$("body").toggleClass("read-mode")});$("#font_plus").click(function(){a.css("font-size",parseFloat(a.css("font-size"))+1)});$("#font_minus").click(function(){a.css("font-size",parseFloat(a.css("font-size"))-1)});$("#mobile-sidebar-menus .menus-expand").on("click",function(){if($(this).hasClass("menus-closed")){$(this).parents(".menus_item").find(".menus_item_child").slideDown();$(this).removeClass("menus-closed")}else{$(this).parents(".menus_item").find(".menus_item_child").slideUp();$(this).addClass("menus-closed")}});$(window).on("touchmove",function(e){var i=$("#page-header .menus_item_child");if(i.is(":visible")){i.css("display","none")}});$("#rightside_config").on("click",function(){if($("#rightside-config-hide").hasClass("rightside-in")){$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out")}else{$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")}});var H=GLOBAL_CONFIG.copyright;if(H!==undefined){document.body.oncopy=function(e){e.preventDefault();var i=void 0;var t=window.getSelection(0).toString();if(t.length>45){i=t+"\n"+"\n"+"\n"+H.languages.author+"\n"+H.languages.link+window.location.href+"\n"+H.languages.source+"\n"+H.languages.info}else{i=t}if(e.clipboardData){return e.clipboardData.setData("text",i)}else{return window.clipboardData.setData("text",i)}}}var U=GLOBAL_CONFIG.isFontAwesomeV5;var V=$("#darkmode");if(typeof autoChangeMode!=="undefined"){document.documentElement.getAttribute("data-theme")==="dark"?X():J()}function X(){U?V.removeClass("fa-moon").addClass("fa-sun"):V.removeClass("fa-moon-o").addClass("fa-sun-o")}function J(){U?V.removeClass("fa-sun").addClass("fa-moon"):V.removeClass("fa-sun-o").addClass("fa-moon-o")}function K(){var i=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";if(i==="light"){X();activateDarkMode();Cookies.set("theme","dark",{expires:2});if(e)snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{J();activateLightMode();Cookies.set("theme","light",{expires:2});if(e)snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}}V.click(function(){K();if(typeof utterancesTheme==="function")utterancesTheme()});if(GLOBAL_CONFIG.runtime){var Q=$("#webinfo-runtime-count");var Y=Q.attr("start_date");var ee=function le(){var e=new Date(Y);var i=new Date;var t=i.getTime()-e.getTime();var a=Math.floor(t/(24*60*60*1e3));Q.text(a+" "+GLOBAL_CONFIG.runtime_unit)};var ie;ee();clearInterval(ie);ie=setInterval(ee,1e4)}if(GLOBAL_CONFIG.baiduPush){(function(){var e=document.createElement("script");var i=window.location.protocol.split(":")[0];if(i==="https"){e.src="https://zz.bdstatic.com/linksubmit/push.js"}else{e.src="http://push.zhanzhang.baidu.com/push.js"}var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()}var te=$(".hide-button");if(te.length){te.on("click",function(e){e.preventDefault();var i=$(this);var t=$(this).next(".hide-content");i.toggleClass("open");t.toggle();if(i.hasClass("open")){if(N&&t.find(".justified-gallery").length>0){S(t.find(".justified-gallery"))}}})}});
//rebuild by neat 