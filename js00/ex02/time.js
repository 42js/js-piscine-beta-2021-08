const month = 7;
let day = 13;

const timeWarp = (newMonth, newDay) => {
  if (newMonth != 7 || newDay != 13)
  {
	  let month = newMonth;
	  let day = newDay;
	  console.log(month + "월 " + day + "일");
  }
}

/* < test >
   timeWarp(5, 10);
   timeWarp(11, 20);
*/
