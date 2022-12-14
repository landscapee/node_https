
var view_timer = null;
function viewPort(userAgent, pageWidth) {
    var oView = document.getElementById('viewport');
    if (oView) {
        document.head.removeChild(oView);
    }
    if (!pageWidth) {
        pageWidth = 720;//手机页面设计图的宽度，宽度多少设置多少
    }
    var screen_w = parseInt(window.screen.width),
        scale = screen_w / pageWidth;
    if (/Android (\d+\.\d+)/.test(userAgent)) {
        var creat_meta = document.createElement('meta');
        creat_meta.name = 'viewport';
        creat_meta.id = 'viewport';
        var version = parseFloat(RegExp.$1);
        if (version > 2.3) {
            creat_meta.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ',user-scalable=1, minimum-scale = ' + scale + ', maximum-scale = ' + scale  ;
        } else {
            creat_meta.content = '"width=' + pageWidth  ;
        }
        document.head.appendChild(creat_meta);
    } else {
        var creat_meta = document.createElement('meta');
        creat_meta.name = 'viewport';
        creat_meta.id = 'viewport';
        if(window.orientation=='-90' || window.orientation == '90'){//判断移动设备横屏竖屏
            scale = window.screen.height / pageWidth;
            creat_meta.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', user-scalable=no';
        }
        else{
            creat_meta.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', user-scalable=no';
        }
        document.head.appendChild(creat_meta);
    }
}
viewPort(navigator.userAgent);
 
window.onresize = function() {
    clearTimeout(view_timer);
    view_timer = setTimeout(function(){
        viewPort(navigator.userAgent);
    }, 500);
}
