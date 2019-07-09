//Check the Session Values
var getsession = JSON.parse(sessionStorage.getItem("loginusers")) ;
      if(getsession ==null){
        sessionStorage.removeItem("loginusers");
        sessionStorage.clear();
        document.location.href = "login.html";
        
    }

//Logout Function
function logout(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var monthsdate = today.getDate() +'   '+months[today.getMonth()];

    var dateTime = date+' '+time;
    var activity = localStorage.getItem('activity');
    var activitys = JSON.parse(activity);
    if(activitys ==null){
        activitys=[];
    }
    
    var client1 = JSON.stringify({
            title    : 'Logout',
            times  : dateTime,
            datemonth : monthsdate
            });
    activitys.push(client1);
    localStorage.setItem("activity", JSON.stringify(activitys));
    sessionStorage.removeItem("loginusers");
    sessionStorage.clear();
    document.location.href = "login.html";
    
  }
$(document).ready(function(){
  $('.profileimg').popover({
    placement : 'right',
    trigger : 'hover',
    html : true,
    content : '<img class="img " src="./images/dhoni.jpg" alt=""  height="200px" width="200px" >'
  }).addClass('popcolor');
});
//back function    
function back(){
    document.location.href = "profile.html";
  }