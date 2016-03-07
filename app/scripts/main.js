$(document).ready(function(){

    var makingNewChore = false;
    var footerButton = $('.new-task, .new-task > i');
    $(".new-task").click( function(){
        makingNewChore = !makingNewChore;
        if(makingNewChore){
            $('#chore-description').focus();
            footerButton.addClass( 'cancel-state' );
        } else{
            v.cancelNewChore();
        }

        $(".modal").toggleClass( "modal-active" );
        if($('.modal-close').hasClass( 'modal-active')){
            $('.modal-close').toggleClass('modal-active');
        } else {
            setTimeout(function () {
                $('.modal-close').toggleClass('modal-active');
            }, 150);
        }
        $(".urgency-description").removeClass( 'toggled' );
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

    $("#notification").click(function(){
        $("#notification-modal").toggleClass("modal-active");
        console.log("het");
    })

    $(".chore-action").click(function(){
        $("#notification-modal").removeClass("modal-active");
    })

});