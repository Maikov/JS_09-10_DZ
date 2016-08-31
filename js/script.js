
//KAROUSEL SWITCH ON

$(function() {
    $('.jcarousel').jcarousel({
    
    });

//SELECT SWITCH ON

$(function () {
    $("#country_id").selectbox();
	});

// MENU
	$( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(100);
        }
    );
    $( '.sub-menu' ).mouseenter(
    	function () {
    		$(this).animate({
    			backgroundColor:"rgb(255,100,100)",
    		},1000);
    });
    $( '.sub-menu' ).mouseleave(
    	function () {
    		$(this).animate({
    			backgroundColor:"rgb(255,10,10)",
    		},1000);
    	}
    	);
});
