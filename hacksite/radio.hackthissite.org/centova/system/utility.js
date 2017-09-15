
NS4=(document.layers)?1:0;IE4=(document.all)?1:0;IE7=(IE4&&window.XMLHttpRequest)?1:0;IE8=(IE7&&window.XDomainRequest)?1:0;W3C=(document.getElementById)?1:0;SAF=(navigator.appName.indexOf('safari')!=-1)?1:0;NOTIE=W3C&&!IE4;function _var_dump(v){window._vd_indent++;if(window._vd_indent>10){return"*RECURSION*";}
var indent='';for(var i=0;i<window._vd_indent-1;i++)indent+='  ';var s=indent+'('+typeof v+')';if((typeof v=='Array')||(typeof v=='object')){s+=" {\n"
for(key in v){try{if(typeof v[key]=='function')continue;s+=indent+key+': '+_var_dump(v[key]);}catch(e){}}
s+=indent+"}\n";}else{s+=" \""+v+"\"\n";}
window._vd_indent--;return s;}
function var_dump(x){window._vd_indent=0;alert(_var_dump(x));}
function get_document(){if(this.framename){return parent[this.framename].document}else{return document}}
function get_window_height(){if(IE4){return parseInt(window.document.body.clientHeight);}else{return parseInt(window.innerHeight);}}
function get_window_width(){if(IE4){return parseInt(window.document.body.clientWidth);}else{return parseInt(window.innerWidth);}}
function get_style(name){var mydoc=this.browser.getDocument();if(W3C){return mydoc.getElementById(name).style;}else if(NS4){return mydoc.layers[name];}else{return mydoc.all[name].style;}}
function get_layer(name){var mydoc=this.browser.getDocument();if(W3C){return mydoc.getElementById(name);}else if(NS4){return mydoc.layers[name];}else{return mydoc.all[name];}}
function layer_hide(name){var mystyle=this.style(name);if(NS4){mystyle.visibility='hide';}else{mystyle.visibility='hidden'}}
function layer_show(name){var mystyle=this.style(name);if(NS4){mystyle.visibility='show';}else{mystyle.visibility='visible'}}
function layer_visible(name){var mystyle=this.style(name);return((mystyle.visibility=='visible')||(mystyle.visibility=='show'))}
function layer_write(name,text){var mydoc=this.browser.getDocument();writeto=W3C?mydoc.getElementById(name):IE4?mydoc.all[name]:NS4?mydoc.layers[name].document:0;if(NS4){writeto.write(text);writeto.close();}else{writeto.innerHTML=text;}}
function layer_read(name){var mydoc=this.browser.getDocument();readfrom=W3C?mydoc.getElementById(name):IE4?mydoc.all[name]:NS4?mydoc.layers[name].document:0;if(NS4){return readfrom.innerHTML;}else{return readfrom.innerHTML;}}
function get_client_height(){mydoc=this.getDocument();var myheight=(mydoc.documentElement.clientHeight?mydoc.documentElement.clientHeight:mydoc.body.clientHeight?mydoc.body.clientHeight:window.innerHeight);return myheight;}
function get_client_width(){mydoc=this.getDocument();var mywidth=(mydoc.documentElement.clientWidth?mydoc.documentElement.clientWidth:mydoc.body.clientWidth?mydoc.body.clientWidth:window.innerWidth);return mywidth;}
function layer_get_pos(el){var SL=0,ST=0;var is_div=/^div$/i.test(el.tagName);if(is_div&&el.scrollLeft)
SL=el.scrollLeft;if(is_div&&el.scrollTop)
ST=el.scrollTop;var r={x:el.offsetLeft-SL,y:el.offsetTop-ST};if(el.offsetParent){var tmp=layer_get_pos(el.offsetParent);r.x+=tmp.x;r.y+=tmp.y;}
return r;}
function layer_get_size(el){var r={x:el.offsetWidth,y:el.offsetHeight};return r;}
function layer_get_abspos(el){var pos=layer_get_pos(el);testel=el.parentNode;while(testel){if(testel.scrollTop)pos.y-=testel.scrollTop;if(testel.scrollLeft)pos.x-=testel.scrollLeft;testel=testel.parentNode;}
return pos;}
function layer_get_actualsize(el){var r={x:el.offsetWidth,y:el.offsetHeight};return r;}
function get_click_pos(e){var posx=0;var posy=0;var r={x:0,y:0};if(!e)var e=window.event;if(e.pageX||e.pageY)
{r.x=e.pageX;r.y=e.pageY;}
else if(e.clientX||e.clientY)
{r.x=e.clientX+document.body.scrollLeft;r.y=e.clientY+document.body.scrollTop;}
return r;}
function get_window_scroll_pos(){var r={x:0,y:0};if(IE4){r.x=document.body.scrollLeft;r.y=document.body.scrollTop;}else{r.x=window.pageXOffset
r.y=window.pageYOffset}
return r;}
function Browser(){this.getDocument=get_document;this.windowHeight=get_window_height;this.windowWidth=get_window_width;this.clientHeight=get_client_height;this.clientWidth=get_client_width;this.clickPos=get_click_pos;this.windowScrollPos=get_window_scroll_pos;this.handlers=new Array();this.handlers['mousemove']=new Array();this.handlers['mousedown']=new Array();this.handlers['mouseup']=new Array();}
Browser.prototype.register_handler=function(handlertype,handlermethod){if(!this.handlers[handlertype]){alert('Invalid handler: '+handler);return;}
this.handlers[handlertype].push(handlermethod);document['on'+handlertype]=this['handle_'+handlertype];}
Browser.prototype.deregister_handler=function(handlertype,handlermethod){if(!this.handlers[handlertype]){alert('Invalid handler: '+handler);return;}
this.handlers[handlertype].remove(handlermethod);if(this.handlers[handlertype].length==0)document['on'+handlertype]=null;}
Browser.prototype.call_handlers=function(handlertype,e){e=this.get_event(e);for(var i=0;i<this.handlers[handlertype].length;i++){var handler=this.handlers[handlertype][i]
handler(e);}}
Browser.prototype.handle_mousedown=function(e){browser.call_handlers('mousedown',e);}
Browser.prototype.handle_mouseup=function(e){browser.call_handlers('mouseup',e);}
Browser.prototype.handle_mousemove=function(e){browser.call_handlers('mousemove',e);}
Browser.prototype.get_event=function(e){if(typeof e=='undefined')e=window.event;if(typeof e.layerX=='undefined')e.layerX=e.offsetX;if(typeof e.layerY=='undefined')e.layerY=e.offsetY;if(typeof e.target=='undefined')e.target=e.srcElement;if(e.target.nodeType==3)targ=targ.parentNode;if(typeof e.keyCode=='undefined')e.keyCode=e.which;if(typeof e.which=='undefined')e.which=e.button;return e;}
Browser.prototype.disable_page=function(dodisable,shaded,cursor){if(this.isdisabled==dodisable)return;if(dodisable){this.disable_page_element=document.createElement('div');this.disable_page_element.className='disabled_page'+(shaded?' disabled_page_shaded':'');this.disable_page_element.style.width=(browser.clientWidth()-2)+'px';this.disable_page_element.style.height=browser.clientHeight()+'px';if(cursor)this.disable_page_element.style.cursor=cursor;document.body.insertBefore(this.disable_page_element,document.body.childNodes[0]);}else{document.body.removeChild(this.disable_page_element);this.disable_page_element=null;}}
Browser.prototype.popup_centered=function(location,name,width,height,options){if(options==null){options=',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,scrolling=no';}else{options=','+options;}
var w=screen.width;var h=screen.height;if(!w||!h){w=this.clientWidth();h=this.clientHeight();}
var l=Math.floor((w-width)/2);var t=Math.floor((h-height)/2);window.open(location,name,'top='+t+',left='+l+',width='+width+',height='+height+options);}
Browser.prototype.setcookie=function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else{var expires="";}
document.cookie=name+"="+value+expires+"; path=/";}
Browser.prototype.getcookie=function(name){name+='=';var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var c=cookies[i];if(c.charAt(0)==' ')c=c.replace(/^\s+/,'');if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return null;}
Browser.prototype.clearcookie=function(name){this.setcookie(name,"",-1);}
function Layer(){this.style=get_style;this.get=get_layer;this.hide=layer_hide;this.show=layer_show;this.visible=layer_visible;this.write=layer_write;this.read=layer_read;this.position=layer_get_pos;this.size=layer_get_size;this.actualsize=layer_get_actualsize;this.absposition=layer_get_abspos;}
var browser=new Browser();var layer=new Layer();browser.layer=layer;layer.browser=browser;String.prototype.ltrim=function(){return this.replace(/^\s+/,'');}
String.prototype.rtrim=function(){return this.replace(/\s+$/,'');}
String.prototype.trim=function(){return this.replace(/^\s+/,'').replace(/\s+$/,'');}
String.prototype.substr_count=function(s){var counter=0;if(IE4||SAF){var xre=new RegExp(s,'gi');counter=this.length-this.replace(xre,'').length;}else{for(var i=0;i<this.length;i++){if(this[i]==s)counter++;}}
return counter;}