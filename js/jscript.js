/*remember to include in the head of each page
this links to the Google jQuery library*/

// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"> </script>


//selecting elements in jQuery is similar to CSS

// format: $("<element name, class, id, or XPath>")
// example: $("#navbar")


/*This sinppet ensure your code doesn't run before your document fires a ready event*/

// $(document).ready()

//Anonymous function

/* function(){
        alert("I am anonymous!");
}
/*
/*Anonymous functions can be stored in variables
and can be used in callbacks*/

// var my_anon_func = function(){ alert("Har!");

/*A callback is an anonymous function supplied to another
function to be run when that function is done running*/


//Showing and hiding

// $("body").hide();
// $("body").show();


//Fading in, fading out

//$("#section-one").fadeOut();
//$("#section-one").fadeIn();


//Fade over time

//$("#section-one").fadeOut(1000);
    //Fade out over 1 second
//$("#section-one").fadeIn(4000);
    //Fade in over 4 seconds


//Hiding by sliding

//$("#section-one").slideUp(1000);
//Fade out over 1 second
//$("#section-one").slideDown(4000);
//Fade in over 4 seconds


//Animating CSS example

/*$(".my-element").animate( {
        opacity: 0.25,
        width: 70%
    } , 2000 );*/


//The click event

/*$("ul li a").click(
    function(){
    alert('imclicked!');
    }
    );*/
    
