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
      $('.from').text(birthcity);
      $('.live').text(currentcity);
      $('.country').text(', '+country);
      $('.jobrole').text(Jobrole);
      $('.organization').text(Organization);
      $('.school').text(School);
      $('.college').text(College);
    });

//Get the values from activity localstorage
            var tbClients = localStorage.getItem("activity");//Retrieve the stored data
            tbClients = JSON.parse(tbClients); //Converts string to object
            if(tbClients == null) //If there is no data, initialize an empty array
                tbClients = [];
        
// Activity Append function         
        function list(){		
            var res = JSON.parse(localStorage.getItem('users'));   
            var result=JSON.parse(res[0]);
            var username=result.Username;
            var count= tbClients.length;
            count = count -1;
            
            for(var i=count;i =>0;i--){
                var cli = JSON.parse(tbClients[i]);
              
        $("#contents").append('<div class="panel panel-default"><div class="panel-heading">'
        +'<span class="timedate">'+cli.datemonth+'</span></div>'+
        '<div class="panel-body activity-time'+i+'"><div class="col-md-2">'+
        '<img src="./images/dhoni.jpg" class="media-object img" style="width: 50px; border-radius: 50%;"></div>'+
        '<span class="activityname ">'+username+'</span><br><span class="logindetails">'+cli.title+' -  '+cli.times+'</span></div></div>');
           
            }
            
         
        } 
        