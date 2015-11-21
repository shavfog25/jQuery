$(document).ready(function(){

	var isLightOn = true;

	$("#lightSwitch").click(function(){
		flipTheLightSwitch();
	});

function flipTheLightSwitch(){
		if(isLightOn){
			
			$("body").css("background", "#000000");
			$("#lightSwitch").val("lights On");
			$("#ball1").fadeOut(1000);
            $("#ball2").fadeOut(1000);
            $("#ball3").fadeOut(1000);
            $("#ball1").fadeIn(3000);
            $("#ball2").fadeIn(3000);
            $("#ball3").fadeIn(3000);
			isLightOn = false;
		}else{
			
			$("body").css("background", "#ffffff");
			$("#lightSwitch").val("lights Off");
            $("#ball1").fadeOut(1000);
            $("#ball2").fadeOut(1000);
            $("#ball3").fadeOut(1000);
            $("#ball1").fadeIn(3000);
            $("#ball2").fadeIn(3000);
            $("#ball3").fadeIn(3000);
			isLightOn = true;
		}
	}
});