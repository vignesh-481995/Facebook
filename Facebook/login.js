//Check the session values isset or not isset
var getsession = JSON.parse(sessionStorage.getItem("loginusers")) ;
if(getsession !=null){
    document.location.href = "profile.html";
  
}

        
//Static List of peoples array      
        
var userslist2=[{Username    : 'vignesh',Password  : '1234',Emailid  : 'vignesh@gmail.com',Birthcity    : 'chennai',Currentcity  : 'bangalore',
State    : 'tamilnadu',country  : 'india',Jobrole    : 'Software Developer',Organization  : 'Enterprise Touch',
School    : 'National Higher Sec School',College  : 'Sri sairam',},
{Username    : 'vicky',Password  : '1234',Emailid  : 'vicky@gmail.com',Birthcity    : 'chennai',Currentcity  : 'bangalore',
State    : 'tamilnadu',country  : 'india',Jobrole    : 'Software Developer',Organization  : 'Enterprise Touch',
School    : 'National Higher Sec School',College  : 'Sri sairam',},
{Username    : 'vengatesh',Password  : '1234',Emailid  : 'vengat@gmail.com',Birthcity    : 'chennai',Currentcity  : 'bangalore',
State    : 'tamilnadu',country  : 'india',Jobrole    : 'Software Developer',Organization  : 'Enterprise Touch',
School    : 'National Higher Sec School',College  : 'Sri sairam',},
{Username    : 'vengat',Password  : '1234',Emailid  : 'vengatesh@gmail.com',Birthcity    : 'chennai',Currentcity  : 'bangalore',
State    : 'tamilnadu',country  : 'india',Jobrole    : 'Software Developer',Organization  : 'Enterprise Touch',
School    : 'National Higher Sec School',College  : 'Sri sairam',}];
//console.log(userslist2.length);

/*var client = JSON.stringify(
{Username    : 'vignesh',Password  : '1234',Emailid  : 'vignesh@gmail.com',Birthcity    : 'chennai',Currentcity  : 'bangalore',
State    : 'tamilnadu',country  : 'india',Jobrole    : 'Software Developer',Organization  : 'Enterprise Touch',
School    : 'National Higher Sec School',College  : 'Sri sairam',}
);*/

//userslist1.push(client);
//localStorage.setItem("users", JSON.stringify(userslist1));

//Signup Add Function

function Add(){
    var titles=document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("emailid").value;
    if(titles =="" || password=="" || email ==""){
    if(titles ==""){
    $("#username").popover('show');
    }else if(password ==""){
    $("#password").popover('show');
    }else if(email ==""){
    $("#emailid").popover('show');    
    }
    }else{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) 
    {
        $("#emailid").attr('data-content','Please enter a valid  email address.');
        $("#emailid").popover('show');
        
        return false;
    }
    var userslist1=[];
    var client = JSON.stringify({

    Username    : document.getElementById("username").value,
    Password  : document.getElementById("password").value,
    Emailid  : document.getElementById("emailid").value,
    Birthcity    : document.getElementById("birthcity").value,
    Currentcity  : document.getElementById("currentcity").value,
    State    : document.getElementById("state").value,
    country  : document.getElementById("country").value,
    Jobrole    : document.getElementById("jobrole").value,
    Organization  : document.getElementById("organization").value,
    School    : document.getElementById("school").value,
    College  : document.getElementById("college").value,

    });

    userslist1.push(client);
    localStorage.setItem("users", JSON.stringify(userslist1));
    location.reload();
    }



}
// Login Validate Fuction
function validlogin(event) {
    //Get the Date Time
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var monthsdate = today.getDate() +'   '+months[today.getMonth()];
    var dateTime = date+' '+time;
    //login form input data
    var username = document.getElementById('loginusername').value;
    var password = document.getElementById('loginpassword').value;
    //Check the Empty Validation
    if(username =="" || password==""){
        if(username ==""){
            $("#loginusername").popover('show');
            return false;
        }else if(password ==""){
            $("#loginpassword").popover('show');
            return false;
        }

    }else{  

        if(username !=""){
            //check the email validation
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(username) == false) 
            {
                $("#loginusername").attr('data-content','Please enter a valid  email address.');
                $("#loginusername").popover('show');

                return false;
            }
            //get the user details form users localstorage
            var res = localStorage.getItem('users');

            if (res) {

                var allEntries = JSON.parse(res);
                var activity = localStorage.getItem('activity');
                var activitys = JSON.parse(activity);
                if(activitys ==null){
                    activitys=[];
                }
                //Same users again once login check the login validation part
                for (var i = 0; i < allEntries.length; i++) {
                    
                    var client = JSON.stringify({
                    title    : 'Login',
                     times  : dateTime,
                    datemonth : monthsdate
                    });

                    var entry = JSON.parse(allEntries[i]);
                    var storedUserName = entry.Emailid;
                    var storedPassWord = entry.Password;

                    if (username == storedUserName && password == storedPassWord) {
                        sessionStorage.setItem("loginusers", JSON.stringify(entry));
                        activitys.push(client);
                        localStorage.setItem("activity", JSON.stringify(activitys));
                        document.location.href = "profile.html";

                        return;
                    }
                }
            }

            //new user login validation part
                var activitys=[];
                
                for(var j=0;j<userslist2.length;j++){
                var client1 = JSON.stringify({
                title    : 'Login',
                times  : dateTime,
                datemonth : monthsdate

                });
                var res=userslist2[j];
                var storedUserName1 = res.Emailid;
                var storedPassWord1 = res.Password;

                if (username == storedUserName1 && password == storedPassWord1) {
                sessionStorage.setItem("loginusers", JSON.stringify(res));
                var userslist1=[];
                var client = JSON.stringify(res);

                userslist1.push(client);
                localStorage.setItem("users", JSON.stringify(userslist1));
                activitys.push(client1);
                localStorage.setItem("activity", JSON.stringify(activitys));
                document.location.href = "profile.html";

                return;
                }
                }

                }
    }   
$("#loginusername").attr('data-content','Please enter a valid  email address & Password.');
$("#loginusername").popover('show');
return false;
}
$(document).ready(function(){
$('#username').keyup(function(){
$("#username").popover('hide');
});
$('#password').keyup(function(){
$("#password").popover('hide');
});
$('#emailid').keyup(function(){
$("#emailid").popover('hide');
});
$('#loginusername').keyup(function(){
$("#loginusername").popover('hide');
});
$('#loginpassword').keyup(function(){
$("#loginpassword").popover('hide');
});
});
