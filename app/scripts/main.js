$(document).ready(function(){

    $(".new-task").click( function(){
        $(".modal, .modal-close").toggleClass( "modal-active" );
        $(".urgency-description").removeClass( 'toggled' );
        $(".modal-inner-container").removeClass( 'next' );
    });

    $(".modal-close").click( function(){
        $(".modal, .modal-close").removeClass( "modal-active" );
        $(".urgency-description, .select-urgency").removeClass( 'toggled' );
        $(".modal-inner-container").removeClass( 'next' );
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