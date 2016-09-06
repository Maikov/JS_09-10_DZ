
//KAROUSEL SWITCH ON

$(function() {
    $('.jcarousel').jcarousel({
    
    });

//SELECT SWITCH ON

$(function () {
    $("#country_id").selectbox();

});


// ANIMATE MENU

	$( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(300);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
 
    $( '.sub-menu' ).mouseenter(
    	function () {
    		$(this).animate({
    			backgroundColor:"#800000",
    		},500);
    });

    $( '.sub-menu' ).mouseleave(
    	function () {
    		$(this).animate({
    		    backgroundColor:"#c0c0c0",
    		},500);
    	}
    );
});

// CHECKBOX SWITCH ON

$(function(){
    $('.checkCustom').checkbox();
});