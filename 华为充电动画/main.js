var play =function(){
var oNum = document.getElementsByClassName("g-number")[0]
var n=10.7;
 setInterval(function(){
     n=n+0.1;
     n=Math.floor(n*100)/100;
oNum.innerText = n+"%";
     console.log(n);
    },1000);
}