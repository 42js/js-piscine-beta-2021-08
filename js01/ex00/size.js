const time = document.body.children[1].children[0];
const time_text = document.createTextNode(new Date().toLocaleTimeString());

time.setAttribute('datetime', new Date().toISOString());
time.appendChild(time_text);

const ul = document.body.children[1].children[1];
const il = new Array(4);
const text = new Array(4);

for (i = 0; i < 4; i++)
{
	il[i] = document.createElement('li');
}

text[0] = document.createTextNode('Screen: ' + screen.width + ' * ' + screen.height);
text[1] = document.createTextNode('Window Outer: ' + outerWidth + ' * ' + outerHeight);
text[2] = document.createTextNode('Window Inner: ' + innerWidth + ' * ' + innerHeight);
text[3] = document.createTextNode('Document: ' + document.body.scrollWidth + ' * ' + document.body.scrollHeight);

for (i = 0; i < 4; i++)
{
	il[i].appendChild(text[i]);
	ul.appendChild(il[i]);
}