function addList()  {
 
    const now = new Date().toLocaleTimeString();
    const time = `${now}`;

    const screen_w = screen.width;
    const screen_h = screen.height;
    const screen_s = `Screen: ${screen_w} * ${screen_h}`;

    const outWindowWidth = window.outerWidth;
    const outwindowHeight = window.outerHeight;
    const outwindows = `Window Outer: ${outWindowWidth} * ${outwindowHeight}`;

    const intViewportWidth = window.innerWidth;
    const intViewportHeight = window.innerHeight;
    const intner = `Window Inner: ${intViewportWidth} * ${intViewportHeight}`;

    const document_h = document.documentElement.clientHeight;
    const document_w = document.documentElement.clientWidth;
    const documentswindow = `Document: ${document_w} * ${document_h}`;




    const liscreen1 = document.createElement("li");
    const liscreen2 = document.createElement("li");
    const liscreen3 = document.createElement("li");
    const liscreen4 = document.createElement("li");

    const text1 = document.createTextNode(screen_s);
    const text2 = document.createTextNode(outwindows);
    const text3 = document.createTextNode(intner);
    const text4 = document.createTextNode(documentswindow);


    liscreen1.appendChild(text1);
    liscreen2.appendChild(text2);
    liscreen3.appendChild(text3);
    liscreen4.appendChild(text4);

    const ulnew = document.getElementsByTagName('ul');
    const ulnew1 = document.getElementsByTagName('ul');
    const ulnew2 = document.getElementsByTagName('ul');
    const ulnew3 = document.getElementsByTagName('ul');
    ulnew[0].appendChild(liscreen1);  
    ulnew1[0].appendChild(liscreen2);  
    ulnew2[0].appendChild(liscreen3);  
    ulnew3[0].appendChild(liscreen4);  


    
    const datelement = document.createElement("time");
    const datetime = document.createTextNode(time);
    datelement.appendChild(datetime);
    const dates = document.getElementsByTagName('time');
    dates[0].setAttribute("datetime", "toISOString");
    dates[0].appendChild(datelement);
  


 
  }
  addList();