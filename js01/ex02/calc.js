
const getTime = () => {
    const timeArea = document.querySelector('time');

    const now = new Date();

    let datetime = now.toISOString();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    
    if (hours > 12) 
        hours = `오후 ${hours - 12}`;
    else
        hours = `오전 ${hours}`;
    
    timeArea.dateTime = datetime;
    timeArea.innerHTML = `${year}. ${month}. ${day}. ${hours}:${minutes}:${seconds}`;
}

getTime();