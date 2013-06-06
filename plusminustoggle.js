//CONSTANTS
var NUM_LIST_ITEMS = 4;
var PLUSMINUS = ["url('assets/images/minus.png')", "url('assets/images/plus.png')"];

//keep track of toggle expandedState
var expandedState = new Array(NUM_LIST_ITEMS);

$(document).ready(function(){
	for(var i = 0; i < NUM_LIST_ITEMS; i++){
		expandedState[i] = 1;

		$("#plus" + (i+1)).click(
			function(index){
				return function(){
					$("#block" + (index+1)).fadeToggle("slow", "linear");
					expandedState[index] = (expandedState[index]+1)%(PLUSMINUS.length);
					$(this).css("background-image", PLUSMINUS[expandedState[index]]);
				};
			}(i)
		);
	}
}); 
