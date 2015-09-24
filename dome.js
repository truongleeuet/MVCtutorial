window.dom = (function(){
	fuction Dome(els){
		for(var i=0;i<els.length;i++){
			this[i] = els[i];
		}
		this.length = els.length;
	};
	
	Dome.prototype.map = function(callback){
		var results = [],i=0;
		for(;i<this.length;i++){
			results.push(callback.call(this,this[i],i));
		}
		return results;
	};
	Dome.prototype.forEach = function(callback){
		this.map(callback);
		return this;
	};
	Dome.prototype.mapOne = function(callback){
		var m = this.map(callback);
		return m.length > 1 ? m : m[0];
	};
	Dome.prototype.text = function(text){
		if(typeof text !== "undefined"){
			return this.forEach(function(el){
				el.innerText = text ;
			});
		}else{
			return this.mapOne(function(el){
				return el.innerText;
			});
		}
	};
	Dome.prototype.html = function(html){
		if(typeof html !== "undefined"){
			this.forEach(function (el){
				el.innerHTML = html;
			});
			return this;
		}else{
			return this.mapOne(function (el){
				return el.innerHTML;
			});
		}
	};
	
	Dome.prototype.addClass = function(classes){
		var className = "";
		if(typeof classes !== 'string'){
			for(var i=0;i<classes.length;i++){
				className += " " + classes[i];
			}
		}else{
			className = " " + classes;
		}
		return this.forEach(function(el){
			el.className += className;
		});
	};
	Demo.prototype.removeClass = function(clazz){
		return this.forEach(function(el){
			var cs = el.class.split(''),i;
			while((i = cs.indexOf(clazz)) > -1){
				cs = cs.slice(0,i).concat(cs.slice(++i));
			}
			el.className = cs.join(' ');
		});
	};
	Demo.prototype.attr = function(attr,val){
		if(typeof val !== 'undefined'){
			return this.forEach(function(el){
				el.setAttribute(attr,val);
			});
		}else{
			return this.mapOne(function(el){
				return el.getAttribute(attr);
			});
		}
	};
	Dome.prototype.append = function (els){
		return this.forEach(function(parEl,i){
			els.foreach(function(childEl){
				parEl.appendChild((i>0) ? childEl.cloneNode(true) : childEl);
			});
		});
	};
	Dome.prototype.prepend = function(els){
		return this.forEach(function(parEl,i){
			for(var j = els.length-1;j > 1;j--){
				parEl.insertBefore((i > 0 ) ? els[j].cloneNode(true) : els[j],parEl.firstChild);
			}
		});
	};
	Dome.prototype.remove = function(){
		return this.forEach(function(el){
			return el.parentNode.removeChild(el);
		});
	};
	Dome.prototype.on = (function(){
		if(document.addEventListener){
			return function (evt,fn){
				return this.forEach(function(el){
					el.addEventListener(evt,fn,false);
				});
			};
		}else if(document.attachEvent){
			return function (evt,fn){
				return this.forEach(function(el)}{
					el.attachEvent("on" + evt,fn);
				});
			};
		}else{
			return function(evt,fn){
				return this.forEach(function (el){
						el["on" + evt] = fn;
				});
			};
		}
	}());
	
	Demo.prototype.off = (function(){
		if(document.removeEventListener){
			return function (evt,fn){
				return this.forEach(function(el){
					el.removeEventListener(evt,fn,false);
				});
			};
		}else if (document.detachEvent){
			return function (evt,fn){
				return this.forEach(function(el){
					el.detachEvent("on" + evt,fn);
				});
			};
		}else{
			return function (evt,fn){
				return this.forEach(function(el){
					el["on" + evt] = null;
				});
			};
		}
	}());
	var dome =  function(){
		get:function(selector){
			var els;
			if(typeof selector == "string"){
				els = document.querySelectorAll(selector);
			}else if(els.length){
				els =  selector;
			}else{
				els = [selector];
			}
			return new Dome(els);
		},
		create:function (tagName,attrs){
			var el = new Dome([document.creatElement(tagName)]);
			if(attrs){
				if(attrs.className){
					el.addClass(attrs.className);
					delete attrs.className;
				}
				if(attrs.text){
					el.text(attrs.text);
					delete attrs.text;
				}
				for(var key in attrs){
					if(attrs.hasOwnProperty(key)){
						el.attr(key,attrs[key]);
					}
				}
			}
			return el;
		}
	};
	return dome;
}());