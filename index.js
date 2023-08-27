let val=document.querySelectorAll(".num");
let interval=3000;
val.forEach((valuedisplay) => {
   let startval=0;
   let endval = parseInt(valuedisplay.getAttribute("data-val"));
   let duration= Math.floor(interval/endval);
   let counter=setInterval(function (){
    startval += 1;
 
    valuedisplay.textContent = startval;
    if(startval== endval){
       
        clearInterval(counter);
    }

   },duration);
});
