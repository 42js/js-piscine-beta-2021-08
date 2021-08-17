
window.onload = function(){
	document.write("Size Checker".fontsize(6).bold());
	document.write("<br/><br/>");

	var time = new Date();
	var tmp;
	tmp = time.getHours();
	if (tmp > 11){
		if (tmp > 12)
			tmp -= 12;
		document.write('오후 ' + tmp);
	}
	else
		document.write('오전 ' + tmp);

	document.write(':' + time.getMinutes() + ':' + time.getSeconds());
	document.write("<br/><br/>");

	document.write('&nbsp;&nbsp;<span>&#149;</span>');
	document.write('Screen: ' + window.screen.availWidth + ' * ' + window.screen.availHeight);
	document.write("<br />");
	document.write('&nbsp;&nbsp;<span>&#149;</span>');
	document.write('Window Outer: ' + window.outerWidth + ' * ' + window.outerHeight);
	document.write("<br />");
	document.write('&nbsp;&nbsp;<span>&#149;</span>');
	document.write('Window Inner: ' + window.innerWidth + ' * ' + window.innerHeight);
	document.write("<br />");
	document.write('&nbsp;&nbsp;<span>&#149;</span>');
	document.write('Document: ' + document.body.scrollWidth + ' * ' + document.body.scrollHeight);
	document.write("<br />");
}
