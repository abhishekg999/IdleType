let MEOWCOUNTER = 0;
let	MEOW = "MEOW";
let	DUCK = "DUCK";
let	WOOF = "WOOF";

function initialize(){
	MEOWCOUNTER = Cookies.get('meowcount');
	console.log(MEOWCOUNTER);
	if (MEOWCOUNTER === ''){
		MEOWCOUNTER = 0;
	}

	game_input();
	update_counter();


}

function populate_input(word){
	for (var i = 1; i < 5; i++) {
		document.getElementById(i).placeholder = word[i-1];
	}
}

function clear_input(){
	for (var i = 1; i < 5; i++) {
		document.getElementById(i).value = "";
	}
}

function update_counter(){
	document.getElementById("meow-count").innerHTML = MEOWCOUNTER;
	Cookies.set('meowcount', MEOWCOUNTER);
}

function game_input() {
	populate_input(MEOW);
	const inputs = document.querySelectorAll('#type-input > *[id]');
	inputs[0].focus()

	document.getElementById("type-input").addEventListener("click", function(){
		inputs[0].focus()
	});

	for (let i = 0; i < inputs.length; i++) {
	    inputs[i].addEventListener('keydown', function(event) {
	    	event.preventDefault();
	    	
	    	if (String.fromCharCode(event.keyCode) === inputs[i].placeholder){
	          	inputs[i].value = String.fromCharCode(event.keyCode);
	       		
	       		if (i !== inputs.length - 1){
	            	inputs[i + 1].focus();
	        	} else {
	        		MEOWCOUNTER++;

	        		setTimeout(function() {
  						clear_input();
	        			inputs[0].focus()
					}, 100);
	        		
	        		update_counter();
	        	}
	        }
		    


		/* 
	      if (event.key === "Backspace") {
	        inputs[i].value = '';
	        if (i !== 0)
	          inputs[i - 1].focus();
	      } else {
	        if (i === inputs.length - 1 && inputs[i].value !== '') {
	          return true;
	        } else if (event.keyCode > 47 && event.keyCode < 58) {
	          	if (String.fromCharCode(event.keyCode) === inputs[i].placeholder){
	          		inputs[i].value = String.fromCharCode(event.keyCode);
	          	}
	          if (i !== inputs.length - 1)
	            inputs[i + 1].focus();
	          event.preventDefault();
	        } else if (event.keyCode > 64 && event.keyCode < 91) {
	        	if (String.fromCharCode(event.keyCode) === inputs[i].placeholder){
	          		inputs[i].value = String.fromCharCode(event.keyCode);
	          	}
	          if (i !== inputs.length - 1)
	            inputs[i + 1].focus();
	          event.preventDefault();
	        }
	      }
      */

    	});
	}
}
