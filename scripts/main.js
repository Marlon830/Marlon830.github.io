var i = 1;
alert('la premiere');
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Réussi ! Hello world !';
alert('wow quelle alerte là');
alert('la deuxieme');
document.querySelector('html').addEventListener('click', function() {
    alert('Tu as cliqué ' + i + ' fois.');
    i = i + 1;
});
