function tag () {

    let poo = document.querySelector('#poo');
    let coding = document.querySelector('#coding');
    let hungry = document.querySelector('#hungry');
    let love = document.querySelector('#love');
    let energy = document.querySelector('#energy');
    let wash = document.querySelector('#wash');

    let poos = poo.setAttribute("value", "20");
    let coos = coding.setAttribute("value", "60");
    let hungs = hungry.setAttribute("value", "40");
    let loves = love.setAttribute("value", "70");
    let eners = energy.setAttribute("value", "30");
    let wahs = wash.setAttribute("value", "80");

     let interval = 5;
  
  
    function animatorpoo () {
        poo.value = poo.value + interval;
      if ( poo.value < 99 ){
     
      } else { 
        poo.value = "100";
        }
    }
    function animatorco () {
        coding.value = coding.value + interval;
        if ( coding.value < 99 ){
        } else { 
          coding.value = "100";
          }
   
      }
      function animatorhung () {
        hungry.value = hungry.value + interval;
        if ( hungry.value < 99 ){
        } else { 
          hungry.value = "100";
          }
      }
      function animatorlove () {
        love.value = love.value + interval;
        if ( love.value < 99 ){
        } else { 
          love.value = "100";
          }
      }
      window.onload = function eneminus () {
        energy.value = energy.value - 10;
        energy.style.setProperty("--c", "red");
      } 

      function animatorene () {
        energy.value = energy.value + interval;
        if ( energy.value < 99 ){
        } else { 
          energy.value = "100";
          }
      } 

      function animatorwahs () {
        wash.value = wash.value + interval;
        if ( wash.value < 99 ){
        } else { 
          wash.value = "100";
          }
      } 

setTimeout(() => {
    animatorpoo()
}, 5000)

setTimeout(() => {
    animatorco ()
}, 5000)

setTimeout(() => {
    animatorhung()
  }, 5000)

setTimeout(() => {
    animatorlove()
  }, 5000)

setTimeout(() => {
    animatorene()
  }, 5000)

setTimeout(() => {
    animatorwahs()
  }, 5000)
}
tag();