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
  var cards = document.getElementById("cards");
  var currentCardsHeight = cards.offsetHeight;
  var fac = (h / currentCardsHeight);

  if (w <= 1080 && h <= 1000) {
    cards.style.transform = `scale(${fac})`;
  } else {
    cards.style.transform = 'scale(1)';
  }
  setTimeout(resizeWindow, 200);
}
