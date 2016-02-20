$(document).ready(function(){

    var tasks = [];

    $(".new-task").click( function(){
        $(".modal").toggleClass( "modal-active" );

    });

    $(".modal").click( function(){
        $(".modal").toggleClass( "modal-active" );
    });

    $("#menu-toggle").click(function () {
        $(".side-menu").toggleClass( "side-menu-active" );
        $('#nav-icon4').toggleClass('open');
    });

    $(".main-content").click(function(){
        $('#nav-icon4').removeClass('open');
        $(".side-menu").removeClass( "side-menu-active" );
    });

    function addTask(){
        
    }

});


