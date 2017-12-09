//check off specific todos by clicking
$(document).ready(function(){
	$("ul").on('click','li',function(){//when a li is clicked inside a ul run this
		$(this).toggleClass("active"); //code
	});//run this code for li that may or may not have been on their
		//when the page loaded inside a ul that is their
		// when the page loaded
	//use on() rather than click()
	$("ul").on('click','span',function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(event){
		
		if(event.which === 13){
			var todotext = $(this).val();
			var txt = "<li><span class='del'><i class='fa fa-trash'></i></span> "+todotext+"</li>";
			var our_list = $('#todo'); 
			our_list.append(txt);//append method
			
		}
	});
	$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle();
	});
});

