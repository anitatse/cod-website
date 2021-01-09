// taken from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileNavBar() {
  var x = document.getElementById("navitems");
  var y = document.getElementById("topnav");
  var logo = document.getElementById("leftnav")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "80px";
    logo.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.height = "330px";
    logo.style.display = "none";
  }
}
