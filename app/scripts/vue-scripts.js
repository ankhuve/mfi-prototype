v = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todos: [
            {
                text: 'Vacuum your room',
                active: 1,
                urgency: '#4cacd3',
                reward: 25
            },
            {
                text: 'Take out the trash',
                active: 1,
                urgency: '#4cacd3',
                reward: 30
            },
            {
                text: 'Mow the lawn',
                active: 1,
                urgency: '#4cacd3',
                reward: 25
            }
        ],
        familyMembers: [
            {
                name: 'Kalle'
            },
            {
                name: 'Hanna'
            }
        ],
        newItem: '',
        newItemReward: '',
        newItemUrgency: '',
        newItemAssignedTo: '',
        editingItems: []
    },
    methods: {

        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },

        addTodoItem: function ( color ) {
            if (this.newItem && this.newItemUrgency){
                this.todos.push( {text: this.newItem, active: 1, urgency: color, reward: this.newItemReward } );
                this.newItem = '';
                this.newItemReward = '';
                this.newItemUrgency = '';

            }
        },

        cancelNewChore: function(){
            $('.new-task, .new-task > i').removeClass( 'cancel-state confirm-state' );
            $('#chore-view-changer').find('i').removeClass( 'up' );
            $('.select-urgency').removeClass( 'selected-urgency' );
            this.newItem = '';
            this.newItemReward = '';
            this.newItemUrgency = '';
        },

        deleteLastTodoItem: function () {
            this.todos.pop();
        },

        deleteThisTodoItem: function ( id ) {
            this.todos.splice(id, 1);
        },

        getNumOfTodos: function () {
            return this.todos.length;
        },

        editThisTodoItem: function ( id ) {
            if ( this.editingItems.indexOf( id ) === -1 ){
                document.getElementById( id ).style.display = "block";
                this.editingItems.push( id );

            } else{
                document.getElementById( id ).style.display = "none";
                this.editingItems.splice( this.editingItems.indexOf( id ), 1 );
            }
        },

        saveEdit: function ( id ) {
            this.todos[id].text = document.getElementById( "edit-" + id).value;
            document.getElementById( "edit-" + id).innerHTML = '';
            this.editThisTodoItem( id );
        },

        checkChore: function( id ){
            var clicked = $('#' + id);
            if(this.todos[id].active > 0){
                this.todos[id].active = 0;
            } else{
                this.todos[id].active = 1;
            }

            clicked.find( ".fa-check" ).toggle(200);
            clicked.find( ".fa-square-o" ).toggle(200);
            clicked.parent().find( ".urgency" ).toggle(200);

            clicked.parent().find( ".description, .reward" ).toggleClass( 'completed' );
            console.log(this.todos);
        },

        goToUrgency: function(){
            var urgencyDescription = $( ".urgency-description" );
            if ( !urgencyDescription.hasClass( 'toggled' )){
                $('#chore-view-changer').find('i').addClass( 'up' );
                setTimeout( function(){
                    urgencyDescription.addClass( 'toggled' );
                }, 100);
                $("#urgency-1").addClass( 'toggled' );
                setTimeout( function(){
                    $('#urgency-2').addClass( 'toggled' );
                    setTimeout( function(){
                        $('#urgency-3').addClass( 'toggled' );
                    }, 100)
                }, 100);
                $(".modal-inner-container").addClass( 'next' );
            } else{
                $('#chore-view-changer').find('i').removeClass( 'up' );
                urgencyDescription.removeClass( 'toggled' );
                $(".select-urgency").removeClass( 'toggled' );
                $(".modal-inner-container").removeClass( 'next' );
            }
        },

        confirmUrgency: function( color ){
            var footerButton = $('.new-task, .new-task > i');
            if(!$('#'+event.currentTarget.id).hasClass( 'selected-urgency' )){
                $('.select-urgency').removeClass( 'selected-urgency' );
                $('#'+event.currentTarget.id).addClass( 'selected-urgency' );
                this.newItemUrgency = color;
                if(this.newItem){
                    footerButton.removeClass( 'cancel-state' );
                    footerButton.addClass( 'confirm-state' );
                }
            } else{
                footerButton.removeClass( 'confirm-state' );
                footerButton.addClass( 'cancel-state' );
                $('.select-urgency').removeClass( 'selected-urgency' );
                this.newItemUrgency = '';
            }

        }
    }
});

Vue.config.debug = true;