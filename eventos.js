const divClick = document.getElementById("divClick");
const button = document.querySelector("#divClick button");

divClick.addEventListener('click', function() {
    alert("Hola! Soy el div");
});

button.addEventListener('click', function(event){
    event.stopPropagation();
});