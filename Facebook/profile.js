
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
      $('.likes').popover({
        placement : 'top',
        trigger : 'hover',
        html : true,
        content : '<img src="./images/icon/in-love.png" alt="" style="height: 40px;width: 40px;margin-right:10px;"> <img src="./images/icon/confused.png" alt="" style="height: 40px;width: 40px;margin-right:10px;"><img src="./images/icon/happy.png" alt="" style="height: 40px;width: 40px;margin-right:10px;"><img src="./images/icon/smiling.png" alt="" style="height: 40px;width: 40px;margin-right:10px;">'
    });
    $('.img1').popover({
      placement : 'top',
      trigger : 'hover',
      html : true,
      content : '<img class="img " src="./images/dfb.jpg" alt="" height="300px" width="200px" >'
  });
  $('.img2').popover({
    placement : 'top',
    trigger : 'hover',
    html : true,
    content : '<img class="img " src="./images/dhoni.jpg" alt=""  height="300px" width="200px" >'
});
$('.img3').popover({
  placement : 'top',
  trigger : 'hover',
  html : true,
  content : '<img class="img " src="./images/dhoniimg.jpg" alt=""  height="300px" width="200px" >'
});
$('.img4').popover({
  placement : 'top',
  trigger : 'hover',
  html : true,
  content : '<img class="img " src="./images/dhonitimeline.jpg" alt=""  height="300px" width="200px" >'
});

    $('.commentsicon').popover({
      placement : 'bottom',
      trigger : 'hover',
      html : true,
      content : 'Leave a Comment'
  });
  $('.shareicon').popover({
    placement : 'bottom',
    trigger : 'hover',
    html : true,
    content : 'send to your friends or post to your timeline'
});
    });
 