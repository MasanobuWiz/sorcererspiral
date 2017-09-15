function TabSet(elementid,name) {
	this.container = layer.get(elementid);
	this.name = name;
}

TabSet.prototype.initialize = function() {
	this.selectedIndex = -1;
}

TabSet.prototype.add = function(title,callback,pageelementid) {
	var tab = document.createElement('div');
	tab.className = 'tab';
	
	var tableft = document.createElement('div');
	tableft.className = 'tab_left';
	tableft.origClass = tableft.className;
	tab.appendChild(tableft);

	var tabcenter = document.createElement('div');
	tabcenter.className = 'tab_center';
	tabcenter.origClass = tabcenter.className;
	tabcenter.innerHTML = title;
	tab.appendChild(tabcenter);

	var tabright = document.createElement('div');
	tabright.className = 'tab_right';
	tabright.origClass = tabright.className;
	tab.appendChild(tabright);
	
	tab.tabindex = this.container.childNodes.length;
	tab.owner = this;
	tab.onmouseover = this.tab_mouseover;
	tab.onmouseout = this.tab_mouseout;
	tab.onclick = this.tab_click;
	tab.deselect = this.tab_deselect;
	tab.callback = callback;
	tab.pageelement = pageelementid ? layer.get(pageelementid) : null
	this.container.appendChild(tab);
}

TabSet.prototype.tab_mouseover = function() {
	if (this.tabindex==this.owner.selectedIndex) return;
	for (var i=0; i<this.childNodes.length; i++) {
		this.childNodes[i].className += ' '+this.childNodes[i].className+'_hover';
	}
}

TabSet.prototype.tab_mouseout = function() {
	if (this.tabindex==this.owner.selectedIndex) return;
	for (var i=0; i<this.childNodes.length; i++) {
		this.childNodes[i].className = this.childNodes[i].origClass;
	}
}

TabSet.prototype.tab_click = function() {
	if (this.tabindex==this.owner.selectedIndex) return;
	
	this.owner._set_selected(this.tabindex);
	for (var i=0; i<this.childNodes.length; i++) {
		this.childNodes[i].className = this.childNodes[i].origClass+' '+this.childNodes[i].origClass+'_active';
	}	
}

TabSet.prototype.tab_deselect = function() {
	for (var i=0; i<this.childNodes.length; i++) {
		this.childNodes[i].className = this.childNodes[i].origClass;
	}	
}

TabSet.prototype._set_selected = function(tabindex) {
	this.selectedIndex = tabindex;
	
	for (var i=0; i<this.container.childNodes.length; i++) {
		if (i==tabindex) continue;
		this.container.childNodes[i].deselect();
		if (this.container.childNodes[i].pageelement) this.container.childNodes[i].pageelement.style.display = 'none';
	}
	
	if (this.container.childNodes[tabindex].pageelement) this.container.childNodes[tabindex].pageelement.style.display = 'block';
	if (this.container.childNodes[tabindex].callback) this.container.childNodes[tabindex].callback(this,tabindex);
}

TabSet.prototype.select = function(tabindex) {
	if (!this.container.childNodes[tabindex]) return;
	this.container.childNodes[tabindex].onclick();
}
