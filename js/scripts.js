$(document).ready(function() {
  $(".icecream").click(function(event) {
    var flavors = ["vanilla", "chocolate", "strawberry", "cookiesandcream" ]

    flavors.forEach(function(flavor,index) {
      // var flavorTypes = $( + flavor).val()
        $("#flavor" + (index)).text(flavor);
    })



    event.preventDefault();
});
});
