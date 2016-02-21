new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todos: [
            {
                text: 'Vacuum your room',
                checked: false
            },
            {
                text: 'Take out the trash',
                checked: false
            },
            {
                text: 'Mow the lawn',
                checked: false
            }
        ],
        newItem: '',
        editingItems: []
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },
        addTodoItem: function () {
            if (this.newItem){
                this.todos.push( {text: this.newItem, id: this.getNumOfTodos() + 1, checked: false} );
                this.newItem = '';
                document.getElementById('addTodo').focus();
            }
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
            //console.log( "ändrar till: " + document.getElementById( "edit-" + id).value );
            this.todos[id].text = document.getElementById( "edit-" + id).value;
            document.getElementById( "edit-" + id).innerHTML = '';
            this.editThisTodoItem( id );
        },
        checkChore: function( id ){
            $("#" + id).find( ".fa-check" ).toggle(200);
            $("#" + id).find( ".fa-square-o" ).toggle(200);
            $("#" + id).parent().find( ".urgency" ).toggle(200);
            this.todos[id].checked = !this.todos[id].checked;
            //$("#" + id).parent().find( ".description" ).toggle(200);
        }
    }
});

Vue.config.debug = true;