const contador = document.querySelector(".cont");
const decrementar = document.getElementById("decrementar");
const resetar = document.getElementById("resetar");
const adicionar = document.getElementById("adicionar");

var num = 0;

contador.textContent = num;

decrementar.addEventListener("click", () => {
    num--;

    contador.textContent = num;
})

adicionar.addEventListener("click", function(){
    num++;

    contador.textContent = num;
})

resetar.addEventListener("click", () => {
    num = "0";

    contador.textContent = num;
})