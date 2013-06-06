//suck mah dick
var NUM_LIST_ITEMS = 4;

			var plusminus = new Array();
			plusminus[0] = "url('minus.png')";
			plusminus[1] = "url('plus.png')";

			//keep track of toggle state
			var state = new Array(NUM_LIST_ITEMS);

			for(var i = 0; i < state.length; i++){
				state[i] = 1;
			}

			$(document).ready(function(){
				for(var i = 0; i < NUM_LIST_ITEMS; i++){
					$("#plus" + (i+1)).click(
						function(index){
							return function(){
								$("#block" + (index+1)).fadeToggle("slow", "linear");
								state[index] = (state[index]+1)%(plusminus.length);
								$(this).css("background-image", plusminus[state[index]]);
								console.log("state: " + state[index]);
							};
						}(i)
					);
				}
			}); 
