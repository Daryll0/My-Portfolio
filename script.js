function myFunction(x) {
  x.classList.toggle("change"); 
  showFunction();
}


function showFunction() {
  var element = document.getElementById("nav-menu");
  element.classList.toggle("show");
}