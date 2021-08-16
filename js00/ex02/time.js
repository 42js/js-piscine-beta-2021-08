const month = {newMonth: 7};
let day = 13;

const timeWarp =  (newMonth, newDay) => {
    const m_d = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (newMonth > 0 && newMonth < 13){
        month.newMonth = newMonth;
        if (newDay > 0 && newDay < m_d[newMonth - 1] + 1){
            day = newDay;
            console.log("Current time is " + month.newMonth + "-" + day + "!!");
        }
        else{
            console.log("Day input over!! " + newMonth + "month is " + m_d[newMonth - 1] + "!!");
        }
    }
    else{
        console.log("Month input error!!");
    }
}