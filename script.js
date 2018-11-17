import {without } from 'lodash';

console.log(without);
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