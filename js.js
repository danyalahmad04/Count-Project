const inc  = document.getElementById("inc");
const dec  = document.getElementById("dec");
const reset  = document.getElementById("reset");
const max  = document.getElementById("max");
const counterlabel= document.getElementById("counterlabel");

let count  =0 ;
inc.onclick =  function(){
    count++;
counterlabel.textContent =  count;
}
dec.onclick =  function(){
    count--;
counterlabel.textContent =  count;
}
reset.onclick =  function(){
    count =0;
counterlabel.textContent =  count;
}
max.onclick =  function(){
    count =   max;
    maxlabel.textContent = "Max: " + maxCount;
}
