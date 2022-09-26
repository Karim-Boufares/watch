function time_date(){
    var watch =new Date();
    var time=document.getElementById("time");
    time.innerHTML=watch.getHours()+":"+watch.getMinutes()+":"+watch.getSeconds();
    var date=document.getElementById("date");
    date.innerHTML=watch.getDate() +"-"+ parseInt(watch.getMonth()+1) +"-"+watch.getFullYear();
}
setInterval(time_date,100);
onload =new time_date();

function gcolor(){
    var color1 =document.getElementById("color1").value;
    localStorage.setItem("Co",color1);
    document.getElementById("art1").style.background = localStorage.getItem("Co");
    document.getElementById("body1").style.background = localStorage.getItem("Co");
}

function scolor(){
    document.getElementById("color1").value=localStorage.getItem("Co");

    document.getElementById("art1").style.background = localStorage.getItem("Co");
    document.getElementById("body1").style.background = localStorage.getItem("Co");
}
setInterval(scolor,5000);
