// Get the values from loginusers localstorage
$(document).ready(function(){
  var res = JSON.parse(localStorage.getItem('users'));   
  
  var result=JSON.parse(res[0]);

var username=result.Username;
var emailid= result.Emailid;
var birthcity= result.Birthcity;
var currentcity= result.Currentcity;
var state= result.State;
var country= result.country;
var Jobrole= result.Jobrole;
var Organization= result.Organization;
var School = result.School;
var College= result.College;

$('.uname').text(username);
$('.emails').text(emailid);
$('.from').text(birthcity);
$('.live').text(currentcity);
$('.country').text(', '+country);
$('.jobrole').text(Jobrole);
$('.organization').text(Organization);
$('.school').text(School);
$('.college').text(College);
$('#username').val(username);
$('#birthcity').val(birthcity);
$('#currentcity').val(currentcity);
$('#state').val(state);
$('#country').val(country);
$('#jobrole').val(Jobrole);
$('#organisation').val(Organization);
$('#school').val(School);
$('#college').val(College);
$('#emailid').val(emailid);

$('#newpassword').keyup(function(){
      if($('#confirmpassword').val() ==''){
          $('#confirmpassword').attr('data-content','Please Enter Current Password');
          $('#confirmpassword').popover('show');
          $('#newpassword').val('');
      }
});
$('#confirmpassword').keyup(function(){
  $('#confirmpassword').popover('hide');
});
});

var res = JSON.parse(localStorage.getItem('users'));   
var result=JSON.parse(res[0]);
//Profile Update Part
function profile(){
  var currentpassword=document.getElementById("confirmpassword").value;
  var newpassword = document.getElementById("newpassword").value;
  var npassword="";
  var usersn= document.getElementById("username").value;
  if(usersn ==''){
    $('#username').attr('data-content','Please Enter the Username');
    $('#username').popover('show');
    return false;
  }
  if(newpassword !='' && currentpassword!='' ){
      if(currentpassword == result.Password){
              npassword=newpassword;
          }else{
              
              $('#confirmpassword').attr('data-content','Invalid Password');
              $('#confirmpassword').popover('show');
              return false;
          }
  }else{
      npassword=result.Password;     
  }
  
  res[0] = JSON.stringify({
      Username    : document.getElementById("username").value,
          Password  : npassword,
          Emailid  : document.getElementById("emailid").value,
          Birthcity    : document.getElementById("birthcity").value,
          Currentcity  : document.getElementById("currentcity").value,
          State    : document.getElementById("state").value,
          country  : document.getElementById("country").value,
          Jobrole    : result.Jobrole,
          Organization  : result.Organization,
          School    : result.School,
          College  : result.College,
  });//Alter the selected item on the table
localStorage.setItem("users", JSON.stringify(res));
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
          title    : 'Personal Details Edit',
          times  : dateTime,
          datemonth : monthsdate
          });
  activitys.push(client1);
  localStorage.setItem("activity", JSON.stringify(activitys));
alert('Profile Updated Successfully!!!');
window.location.href="profile.html";

}
//Job Update Part 
function job(){
  res[0] = JSON.stringify({
          Username    : result.Username,
          Password  : result.Password,
          Emailid  : result.Emailid,
          Birthcity    : result.Birthcity,
          Currentcity  : result.Currentcity,
          State    : result.State,
          country  : result.country,
          Jobrole    : document.getElementById("jobrole").value,
          Organization  : document.getElementById("organisation").value,
          School    : result.School,
          College  : result.College,
  });//Alter the selected item on the table
localStorage.setItem("users", JSON.stringify(res));
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
          title    : 'Job Details Edit',
          times  : dateTime,
          datemonth : monthsdate
          });
  activitys.push(client1);
  localStorage.setItem("activity", JSON.stringify(activitys));
alert('Profile Updated Successfully!!!');
window.location.href="profile.html";


}
//Education Update Part
function education(){
  res[0] = JSON.stringify({
          Username    : result.Username,
          Password  : result.Password,
          Emailid  : result.Emailid,
          Birthcity    : result.Birthcity,
          Currentcity  : result.Currentcity,
          State    : result.State,
          country  : result.country,
          Jobrole    : result.Jobrole,
          Organization  : result.Organization,
          School    : document.getElementById("school").value,
          College  : document.getElementById("college").value,
  });//Alter the selected item on the table
localStorage.setItem("users", JSON.stringify(res));
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
          title    : 'Education Details Edit',
          times  : dateTime,
          datemonth : monthsdate
          });
  activitys.push(client1);
  localStorage.setItem("activity", JSON.stringify(activitys));
alert('Profile Updated Successfully!!!');
window.location.href="profile.html";


}
