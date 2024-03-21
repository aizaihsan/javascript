var date = new Date(); 

var day = date.getDay(); // 0 - Sunday, 1 - Monday


var hour = date.getHours() ; // get current hours and minutes
var  min = date.getMinutes()+ ":";
var sec= date.getSeconds();

var x;
var daylist= ["Sunday", "Monday",  "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
console.log("Today is " + daylist[day])+ "." ;
var checkam_pm= (hour < 12) ? "AM":"PM";

var hour = (hour>=12)? (hour-12):hour;  
if(hour==0){
    if(min==0  && sec ==0 )
    {
     hour = 12;
    }
   else{
    hour=12;
   }
}
console.log( "Current time is " + hour + " " + checkam_pm + " "+ min +" "+ sec );

