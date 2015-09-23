var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
/*Выподающее меню при наведении*/
$('.navbar .dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
});