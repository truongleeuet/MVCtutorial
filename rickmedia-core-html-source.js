document.body.style.overflow='hidden';
var admcreateEle=function(htmlStr,admid){
	//neu truong hop 1 ve o man hinh dang chay
	if(admExpandCase==1){
		var a=parent.document;
	}
	else{
		//truong hop 2 ve o man hinh cha ở bên ngoai
		var a=document;
	}
	
	//console.log(a);
	var iframeFirst = a.getElementById(admid);
	iframeFirst.style.height = '0px';
	iframeFirst.style.width = '980px';
	iframeFirst.style.transition = 'height 3s ease-out';
	console.log(iframeFirst);
	var frag = a.createDocumentFragment(),
		temp = a.createElement('div');
	temp.innerHTML = htmlStr;
	while (temp.firstChild) {
		frag.appendChild(temp.firstChild);
	}
	return frag;
};

//định nghĩa hàm expand
function admExpand(){
	if(admExpandCase==1){
		var a = document.getElementById('_AdmExpand');
		if (a == undefined) {
			var fragment = admcreateEle('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>',admid);
			document.body.insertBefore(fragment, document.body.childNodes[0]);
			var a = document.getElementById('_AdmExpand');
			
		}
		a.innerHTML='<ifra'+'me src="'+admExpandPram.src+'?url='+'" frameborder="0" scrolling="no" width="'+admExpandPram.wd+'" height="'+admExpandPram.he+'"></ifr'+'ame><a href="javascript:closeExpand()" style="position:absolute; z-index:9999; bottom:2px; right:2px;"><img border="0" src="//adi.vcmedia.vn/adt/banners/nam2015/148/expand/closeBtn0004.png" /></a>';
		//ScrollContent(admid,'height',admExpandPram.hs,admExpandPram.he,true,(new Date).getTime(),1500);
		ExpandAnimation(admid);
	}
}

function getBrowser(){
	var nameBrowser = navigator.userAgent;
	if(nameBrowser.indexOf(''));
};
(function(){
	var nameBrowser = navigator.userAgent;
	if(nameBrowser.indexOf('MISE') >= 0){
		console.log(1);
	}
	if(nameBrowser.indexOf('Chrome') >= 0){
		console.log(10);
	}
	console.log(nameBrowser);
	
})();
function ScrollContent(id,attr,start,stop,chk,time1,time2){
	var tm=(new Date()).getTime();
	console.log(tm);
	var tm1=tm-time1;
	console.log(tm1);
	if(chk){
		var value=start+Math.floor((stop-start)*tm1/time2);
		console.log(value);
	}
	else{
		var value=stop-Math.floor((stop-start)*tm1/time2);
	}
	var idch=parent.document.getElementById(id);
	//console.log(idch);
	//khi da cham den diem dung
	if(tm1>time2){
		if(!chk){
			console.log(chk);
			value=start;
			document.getElementById('_AdmExpand').innerHTML='';
		}else{
			value=stop;
		}
		idch.style[attr]=value+'px';
	}else{
		idch.style[attr]=value+'px';
		window.setTimeout(function(){
			ScrollContent(id,attr,start,stop,chk,time1,time2)
		},100);
	}
}

function ExpandAnimation(id){
	var idch = parent.document.getElementById(id);
	//console.log(idch);
	//idch.style.width = '980px';
	idch.style.height = '480px';
	//console.log(idch.style.height);
}
function closeExpandAnimation(id){
	var idch = parent.document.getElementById(id);
	//console.log(idch);
	//idch.style.width = '980px';
	idch.style.height = '50px';
	window.setTimeout(function(){
		document.getElementById('_AdmExpand').innerHTML='';
	},2500);
	//console.log(idch.style.height);
}
function closeExpand(){
	if(admExpandCase==1){
		//ScrollContent(admid,'height',admExpandPram.hs,admExpandPram.he,false,(new Date).getTime(),1500);
		closeExpandAnimation(admid);
		//document.getElementById('_AdmExpand').innerHTML='';
	}
}
//Định nghĩa hàm close expan.
parent.window['admcloseExpand']=function(){
	var id=parent.document.getElementById('_AdmExpand');
	if(id)
	id.innerHTML='';
	parent.document.body.style.overflow='auto';
}
//định nghĩa hàm năng nghe sự kiện	
function admaddEventListener(d, c, a) {
    "addEventListener" in d ? d.addEventListener(c, a) : "attachEvent" in d && d.attachEvent("on" + c, a)
};

admaddEventListener(parent.window,'message',function(e){
	if(typeof(e.data)=='string' && e.data.indexOf('ADMexpand_'+admid)!=-1){
		admExpand();
	}
});
/*
//expand troi
_AdmExpand.innerHTML='<div id="bgbody" style="position:absolute; top:0; left:0; height:'+wPrototype.bdHeight()+'px; width:'+wPrototype.bdWidth()+'px;background-color:rgba(0,0,0,0.3); opactity:0.5"></div><div id="ifrexpandMain" style="width:1px; overflow:hidden;z-index:999999;position:relative;top:'+getElementTop('adnzone_11279')+'px; right:'+(getElementLeft('adnzone_11279')+getElementWidth('adnzone_11279'))+'px"><iframe src="http://demo.admicro.vn/kydq/demo/loreal/Loreal800x500/Loreal800x500.html" frameborder="0" scrolling="no" width="800" height="500" ></iframe><a id="closeExpand" style="display:none;position:absolute; right:2px; bottom:5px;" href="javascript:delaywidth(\'ifrexpandMain\',\'adnzone_11279\',800,false,new Date().getTime(),1500)"><img src="//demo.admicro.vn/kydq/demo/loreal/closeBtn0004.png" border="0" /></a></div>';
function delaywidth(ide,id1,wd2,chk,time,time1){
	var tm=(new Date()).getTime();
	var tm1=tm-time;
	//ket thuc qua trinh chay.
	if(chk){
		var wd=Math.floor(wd2*tm1/time1);
	}
	else{
		var wd=wd2-Math.floor(wd2*tm1/time1);
	}
	var id=document.getElementById(ide);
	if(tm1>time1){
		if(chk){
			wd=wd2;
		}
		else{
		var ida=document.getElementById('closeExpand');
		ida.style.display='';
		var lf=(getElementLeft(id1)+getElementWidth(id1))-wd;
		id.style.width=wd+'px';
		id.style.left=lf+'px';
		if(!chk){
			document.getElementById('_AdmExpand').innerHTML='';
		}
	}else{
		id.style.width=wd+'px';
		var lf=(getElementLeft(id1)+getElementWidth(id1))-wd;
		id.style.left=lf+'px';
		window.setTimeout(function(){
			delaywidth(ide,id1,wd2,chk,time,time1);
		},50);
	}
}
*/