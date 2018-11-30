
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
/*var button = document.getElementsByTagName("button")[14];

button.addEventListener("mouseenter", function(){


	console.log("CLICK");
})

var botao = document.getElementById("bonus");
var ul = document.getElementById("lista");

botao.addEventListener("click", function(){

	console.log("clicar esta funcionando");
	var li = document.createElement("h5"); // cria documento h5
	li.appendChild(document.createTextNode("IREHUSAHUSAU")); // adiciona o texto ao elemente, usar TextNode
	ul.appendChild(li); // adiciona o h5 pra ser filho do li, no fim do li

})*/

//botaoreputacao
const reputacao = document.getElementById("reputacao");
htmlReputacao = reputacao.innerHTML;
htmlNew3 = '<span class="fas fa-crown"> </span>';
htmlReputacao =   htmlNew3+ htmlReputacao + " "+ htmlNew3;
reputacao.innerHTML = htmlReputacao;



// direitos autorias
const direitos = document.getElementById("direitos");
htmlDireitos = direitos.innerHTML;

htmlNew = '<span class="fas fa-copyright"></span>';
htmlDireitos = htmlNew + htmlDireitos;

direitos.innerHTML = htmlDireitos;

//PEGAR O ELEMENTO DIV COMENTARIOS E ADICIONAR UM ELEMENTO HTML COM CLASSE
const comentarios = document.getElementById("comentarios");
const divComentario = document.getElementById("comentario");

 HTMLTemporario = comentarios.innerHTML;
    // Novo HTML que será inserido
    HTMLNovo = '<span class="fas fa-comments"></span>';
 
// Concatena as strings colocando o novoHTML antes do HTMLTemporario
HTMLTemporario = HTMLNovo + HTMLTemporario;
 
// Coloca a nova string(que é o HTML) no DOM
comentarios.innerHTML = HTMLTemporario;




//pagamento

const pagamentos = document.getElementById("pagamentos");
htmlPagamentos = pagamentos.innerHTML;
htmlNew2 = '<span class="fas fa-shopping-cart"></span>';
htmlPagamentos = htmlNew2 + htmlPagamentos;
pagamentos.innerHTML = htmlPagamentos;






/*

GERADOR DE COR DE FUNDO, BACKGROUND

*/
var css = document.querySelector("h5");
var cor1 = document.getElementById("cor1");
var cor2 = document.getElementById("cor2");
var body = document.getElementById("gradient");


function setGradient(){

	console.log(cor1.value);
	body.style.background =
	"linear-gradient(to right, "+
	cor1.value +
	", " + cor2.value + ")";

	console.log("Código da cor: "+ body.style.background + ";");

}

cor1.addEventListener("input", setGradient);
cor2.addEventListener("input", setGradient);
