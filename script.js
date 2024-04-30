

var condicao = false;


var portaUm = document.querySelector(".portaUm");
var portaDois = document.querySelector(".portaDois");
var portaTres = document.querySelector(".portaTres");
var portaQuatro = document.querySelector(".portaQuatro");
var portaCinco = document.querySelector(".portaCinco");
var portaSexta = document.querySelector(".portaSexta");

var nome = document.querySelector('#nome')
var porta = document.querySelector('#porta')
var interior = document.querySelector('#interior')



if (condicao) {
   
    portaUm.classList.add("shadow-red");
    nome.textContent = 'Seu Nome Aqui Campeão'; 
    porta.textContent = 'Porta: fechada'; 
}else{
    portaUm.classList.add("shadow-green")
    nome.textContent = ''; 
    interior.textContent = ''; 

    porta.textContent = 'Porta: Aberta'; 
}




var portas = document.querySelectorAll("#porta");

       
        portas.forEach(function(porta) {
            
            if (porta.textContent.trim() === "Porta: aberta") {
                
                portaTres.classList.add("shadow-green");
                portaCinco.classList.add("shadow-green");
            }else{
                portaDois.classList.add("shadow-red")
                portaQuatro.classList.add("shadow-red")
                portaSexta.classList.add("shadow-red")
            }
        });