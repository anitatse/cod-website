// taken from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileNavBar() {
  var x = document.getElementById("navitems");
  var y = document.getElementById("topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
<<<<<<< HEAD
    y.style.height = "80px";
  } else {
    x.style.display = "block";
    y.style.height = "400px";
=======
    y.style.height = "85px";
  } else {
    x.style.display = "block";
    y.style.height = "350px";
>>>>>>> a2c9e1305e322a281bd2d6f9aa59bed66a77f2a9
  }
}
