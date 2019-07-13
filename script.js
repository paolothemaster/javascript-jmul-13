var input = document.getElementById('input');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

function inputLength(){
	return input.value.length;
}

function createListElement(){
		var li = document.createElement('li');
		/*console.log("click is working");*/
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}

button.addEventListener("click", function(){
	if(inputLength()){
		createListElement();
	}
})

input.addEventListener("keypress" ,function(event){
	console.log(event);
	if(inputLength()>0 && event.which === 13){
		createListElement();
	}})
//})

