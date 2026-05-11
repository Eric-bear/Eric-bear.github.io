/*
**********
 Funções para fazer a transição dos conteudos no site. Parte da Ideia de esconder o conteudo quando não for o conteudo selecionado
**********
 */

const linksobre = document.getElementById("linksobre")
const linkformacao = document.getElementById("linkformacao")
const linkportifolio = document.getElementById("linkportifolio")
const linkcontato = document.getElementById("linkcontato") 

const secaosobre = document.getElementById("sobre")
const secaoformacao = document.getElementById("formacao")
const secaoportifolio = document.getElementById("portifolio")
const secaocontato = document.getElementById("contato")


function limpaestado(){
    secaosobre.classList.remove("on")
    secaoformacao.classList.remove("on")
    secaoportifolio.classList.remove("on")
    secaocontato.classList.remove("on")

    secaosobre.classList.add("off")
    secaoformacao.classList.add("off")
    secaoportifolio.classList.add("off")
    secaocontato.classList.add("off")
}

linksobre.addEventListener("click", function(){
    limpaestado()
    secaosobre.classList.remove("off")
    secaosobre.classList.add("on")

})

linkformacao.addEventListener("click", function(){
    limpaestado()
    secaoformacao.classList.remove("off")
    secaoformacao.classList.add("on")

})

linkportifolio.addEventListener("click", function(){
    limpaestado()
    secaoportifolio.classList.remove("off")
    secaoportifolio.classList.add("on")

})

linkcontato.addEventListener("click", function(){
    limpaestado()
    secaocontato.classList.remove("off")
    secaocontato.classList.add("on")

})


/*
********** 
Area de contato para fazer a verificação do conteudo inserido na area de contato 
**********
*/
const textarea = document.getElementsByTagName("textarea")
const botao = document.getElementById("botao")
botao.addEventListener("click", function(){

const inputs = document.getElementsByTagName("input"); 
const inputmsg = Array.from(inputs) 

/*Adiciona o valor de "textarea" junto dos inputs para serem validados juntos*/
for (let i=0; i<textarea.length; i++){
    inputmsg.push(textarea[i])
}
/*area que valida os valores dentros dos formularios*/
let validInput = true; 

    for(let i=0; i<inputmsg.length; i++) {
        validInput &= inputmsg[i].value !== "" && inputmsg[i].value !== undefined && inputmsg[i].value !== null; 
    }

if (validInput) {
     alert("Mensagem enviada!" );
     for(let i=0; i<inputmsg.length; i++){
        inputmsg[i].value=""
     } 
    } 
    else {
    alert("Não foi possível enviar mensagem: Campo vazio detectado"); 
    }
})



