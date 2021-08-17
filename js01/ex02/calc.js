
function dates(){

    const now = new Date().toLocaleDateString();
    const now1 = new Date().toLocaleTimeString();
    const time = `${now} ${now1}`;

    const datelement = document.createElement("time");
    const datetime = document.createTextNode(time);
    datelement.appendChild(datetime);
    const dates = document.getElementsByTagName('time');
    dates[0].setAttribute("datetime", "toISOString");
    dates[0].appendChild(datelement);


}
dates();



function pro(){
    const pro = document.getElementById('pro').value;
    document.getElementById("fir").innerText = '상품명: ' + pro;
}
pro();


function mon(){
 let mon = document.getElementById('money').value;
 document.getElementById("sec").innerText = '원가: ';
 document.getElementById("thir").innerText = '할인가: ' ;

 mon = parseInt(mon);
 if(typeof mon === "number" && isNaN(mon) === false){
    let cn1 = mon.toLocaleString('ko-KR');
    document.getElementById("sec").innerText = '원가: ' + cn1;
 }
}
mon();

function checkbox(frm){

    if(frm.member.checked == true){
        frm.level.disabled = false;
     } else 
     {
        frm.level.disabled = true;
     }

}
checkbox();

function dis(rate) {
    let mon = document.getElementById('money').value;

    mon = parseInt(mon);
    mon = mon * rate;
    if(typeof mon === "number" && isNaN(mon) === false){
       let cn1 = mon.toLocaleString('ko-KR');
       document.getElementById("thir").innerText = '할인가: ' + cn1;
    }
}
dis();   


