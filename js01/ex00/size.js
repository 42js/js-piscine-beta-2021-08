window.onload = function() {
    const screen_height = window.screen.height;
    const screen_width = window.screen.width;
    const outer_height = window.outerHeight;
    const outer_width = window.outerWidth;
    const inner_height = window.innerHeight;
    const inner_width = window.innerWidth;
    const document_height = document.documentElement.clientHeight;
    const document_width = document.documentElement.clientWidth;
    const time = document.getElementsByTagName('time')[0];
    let time_text = new Date();
    var hours = time_text.getHours();
    var ampm = '오전';
    const minutes = time_text.getMinutes();
    const seconds = time_text.getSeconds();
    if (time_text.getHours() > 12){
        hours = time_text.getHours() - 12
        ampm = '오후';
    }
    time.dateTime = `${time_text.getHours()}:${minutes}:${seconds}`;
    time.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
    const ul = document.getElementsByTagName('ul')[0];
    const screen = document.createElement('LI');
    const screen_text = document.createTextNode(`screen: ${screen_width} * ${screen_height}`);
    screen.appendChild(screen_text);
    ul.appendChild(screen);
    const outer = document.createElement('LI');
    const outer_text = document.createTextNode(`Window Outer: ${outer_width} * ${outer_height}`);
    outer.appendChild(outer_text);
    ul.appendChild(outer);
    const inner = document.createElement('LI');
    const inner_text = document.createTextNode(`Window Inner: ${inner_width} * ${inner_height}`);
    inner.appendChild(inner_text);
    ul.appendChild(inner);
    const docu = document.createElement('LI');
    const docu_text = document.createTextNode(`Document: ${document_width} * ${document_height}`);
    docu.appendChild(docu_text);
    ul.appendChild(docu);
}