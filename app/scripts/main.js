$(document).ready(function(){

    $(".new-task").click( function(){
        $(".modal").toggleClass( "modal-active" );
        $(".modal-close").fadeToggle( 300 );

    });

    $(".modal-close").click( function(){
        $(".modal").removeClass( "modal-active" );
        $(".modal-close").hide( 300 );
    });

    $("#menu-toggle").click(function () {
        $(".side-menu").toggleClass( "side-menu-active" );
        $(this).toggleClass( "active" );
        $('#nav-icon4').toggleClass('open');
    });

    $(".main-content").click(function(){
        $('#nav-icon4').removeClass('open');
        $("#menu-toggle").removeClass( "active" );
        $(".side-menu").removeClass( "side-menu-active" );
    });



});


