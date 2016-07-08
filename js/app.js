//starts a new app with vue
var app = new Vue({
    el:'#app',
    data:{
        books:[],
        search:'',
        orderCol:'id',
        order: 1
    },
    methods:{
        reOrder: function(e,col){
            this.orderCol = col;
            this.order = this.order == 1 ? -1 : 1;
        }
    },

    ready: function () {
        var self = this;
        self.$http.get('data.json').then(function (response) {
            self.books = JSON.parse(response.data);;
        })

    }


});

