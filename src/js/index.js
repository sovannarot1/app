let start = true;
const menuli = document.getElementsByClassName("menuli");
const pyramid = document.getElementById("pyramid");
function menu() {
  start = !start;
  if (start) {
    pyramid.style.transform = "scale(1)";
    menuli[0].style.transform = "scale(0)";
    menuli[1].style.transform = "scale(0)";
    menuli[2].style.transform = "scale(0)";
  } else {
    pyramid.style.transform = "scale(0)";
    menuli[0].style.transform = "scale(1)";
    menuli[1].style.transform = "scale(1)";
    menuli[2].style.transform = "scale(1)";
  }
}
