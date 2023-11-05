
const hoursElement =document.getElementById("hours");
const minutesElement =document.getElementById("minutes");
const secondsElement =document.getElementById("seconds");
const ampnElement =document.getElementById("ampm");

var date = new Date();
console.log(date);

date.innerText =date;




setInterval(function(){
    const date = new Date();

    let hours = date.getHours();
    let ampm = "AM"
    if(hours > 11){
       ampm = "PM"
       if(hours > 12){
        hours -= 12;
    }
    }

  //  date.getHours();
hoursElement.innerText = hours; 
minutesElement.innerText = date.getMinutes();
secondsElement.innerText = date.getSeconds();
ampnElement.innerText = ampm;
},1000);
