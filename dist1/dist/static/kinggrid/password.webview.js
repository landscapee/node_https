(function(root,factory){
	if ((typeof define === 'function' && define.amd) && !("undefined" != typeof nonUseAmd && nonUseAmd)) {
		if("undefined" != typeof HTMLDev && HTMLDev){
			define(["./signature"],factory);
		}else{
			define(["./signature.min"],factory);
		}
	} else {
		factory();
	}
})(window, function(obj){
	var kinggrid = window.kinggrid;
	var kingPlus = window.kingPlus;
	var Signature = window.Signature; 
	var Utils = kinggrid.Utils;
	var $ = window.jQuery;
	
	this.getsec = function(str) { 
		var str1=str.substring(1,str.length)*1; 
		var str2=str.substring(0,1); 
		if (str2=="s") { 
			return str1*1000; 
		}else if (str2=="h") {
			return str1*60*60*1000; 
		}else if (str2=="d") {
			return str1*24*60*60*1000; 
		} 
	} 
	
	this.setCookie = function(name,value,time) { 
		var strsec = getsec(time); 
		var exp = new Date(); 
		var name_expires = name + "_expires";
		var storage = window.localStorage;
		storage.setItem(name, value);
		storage.setItem(name_expires, exp.getTime() + strsec);	
	} 
	
	this.getCookie = function(name) { 
		var storage = window.localStorage;   
		var name_expires = name + "_expires";
		var expires = storage.getItem(name_expires);
		var exp = new Date(); 
		
		if (exp >= expires) {				
			delCookie(name);			
			return null;
		}
		return storage.getItem(name);
	} 

	this.delCookie = function(name) { 
		var storage = window.localStorage;
		var name_expires = name + "_expires";
		storage.removeItem(name);	
		storage.removeItem(name_expires);
	}
	
    Signature.prototype.onshowSealsDialog_PW = function(d){
    	var that = this;
    	var keysn = that.keysn || that.keyData.keysn;
 
    	if(getCookie("ck") == "true"){
    		d.find('#kg-remenberPwd').attr('checked','checked');
    	}
    	if(d.find('#kg-remenberPwd').is(":checked")){
    		var ksn = getCookie("ksn");
    		if(keysn == ksn){
    			var pw = d.find('#kg-password');
    			var cpw = getCookie("pwd");
    			if(Signature.options.pw_enc_save){
    				cpw = Utils.Base64.of().decode(cpw);
    			}
    			if(cpw != null){
    				pw.val(cpw);
    			}else{
    				pw.val("123");
    			}
    		}
    	}
    }
    Signature.prototype.onexecSuccess = function(d, pw, isCheck){
    	var that = this;
    	var keysn = that.keysn || that.keyData.keysn;
    	if(isCheck){
    		var ksn = getCookie("ksn");
    		var valTimeOut = Signature.options.pw_timeout;
    		var setTimeFn = function(valTimeOut){
    			if(keysn != ksn){
        			if(typeof(valTimeOut)=="undefined" || 
        					(valTimeOut.indexOf("s") < 0 && 
        					valTimeOut.indexOf("h") < 0 && valTimeOut.indexOf("d") < 0)){
        				valTimeOut = 's1800';
        			}
        			if(Signature.options.pw_enc_save){
        				pw = Utils.Base64.of().encode(pw);
        			}
        			setCookie("ksn",keysn,valTimeOut); 
            		setCookie("pwd",pw,valTimeOut); 
            		setCookie("ck","true",valTimeOut); 
        		}
    		}
    		
    		if(Signature.options.pw_server_timeout){
    			that.sealService.getPwdSaveTime(setTimeFn,valTimeOut);
    		}else{
    			setTimeFn(valTimeOut);
    		}
    	}else{
    		delCookie("ksn"); 
    		delCookie("pwd"); 
    		delCookie("ck"); 
    	}
    }
	return Signature;
});

