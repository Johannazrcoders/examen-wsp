
function getInputValue(){
	var inputBox= document.getElementById("inputBox");
	return inputBox.value;
}

function tweet(){
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== ""){
		doTweet(inputBoxValue);
		clean("inputBox");
		console.log("Hola");
	}
}
//ENTER
document.getElementById("inputBox").addEventListener("keypress",la);
function la(){
	document.getElementById("inputBox");
	// var input=document.getElementById("inputBox");

	var inputBoxValue = getInputValue();
	if (event.keyCode === 13) {
		doTweet(inputBoxValue);
		clean("inputBox");
	}
 }
//DIV DE MENSAJE 
function doTweet(tweetText){
	var fecha= new Date()
	var hours= fecha.getHours();
	var min= fecha.getMinutes();

	var tarea = document.getElementById("tarea");
	var content = '<div id="tweets" class="left">' + '<div class="check">'+tweetText +'<div class="hours">'+hours+':'+min+'</div>'+'</div>'+ '</div>';

	//CREAR ELEMENTO DE MENSAJE
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML = content;
	//AGREGAR ELEMENTO A LEFT
	tarea.appendChild(elemento);

	var ex= tarea.lastChild;

}
//LIMPIAR TEXTAREA
function clean(id){
	var inputBox = document.getElementById(id);
	inputBox.value = "";
	inputBox.focus();
}
//PARA LIMPIAR CHATLAB
$(".friends").on("click", function(){
	limpia();
	//var imagen = $(".friends img").attr('src');
	//console.log(imagen);
	var ima=$(this).firstChild;
	source=ima.attr('src');
	console.log(source);
});
function limpia(){
	var inputBox = document.getElementById("chatlab");
	 inputBox.innerHTML="<div id='tarea'></div>";
}
