window.onload = function() {
    document.getElementById("cards").onmousemove = e => {
       for(const card of document.getElementsByClassName("card")) {
         const rect = card.getBoundingClientRect(),
               x = e.clientX - rect.left,
               y = e.clientY - rect.top;
     
         card.style.setProperty("--mouse-x", `${x}px`);
         card.style.setProperty("--mouse-y", `${y}px`);
       };
     }
    resizeWindow();
   }

function resizeWindow()
{
  var w = window.innerWidth;
  var h = window.innerHeight;
  var fac = (h / 900);

  if (w <= 1080 && h <= 900) {
    document.getElementById("cards").style.transform = `scale(${fac})`;
  } else {
    document.getElementById("cards").style.transform = 'scale(1)';
  }
  setTimeout(resizeWindow, 200);
}
