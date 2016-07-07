//starts a new app with vue
var hello = new Vue({

    //the element that I will use
    el:'#hello',
    data: { // all data that I can use in vue app
        msg: 'Hello World',
        list: [
            {name: "Maria"},
            {name: "Joao"},
            {name: "Pedro"}
        ],
        newElement:'',
        elements:[]
    },
    methods:{
        addElement: function () {
            var title = this.newElement.trim();
            if(title ) {
                this.elements.push({title:title});
                this.newElement = '';
            }

        },
        removeElement: function(e,index){
            e.preventDefault();
            this.elements.splice(index,1);
        }
    }


});

