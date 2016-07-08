//starts a new app with vue
var app = new Vue({
    el:'#app',
    data:{
        books:[],
        search:'',
    },
    methods:{

    },

    ready: function () {
        var self = this;
        self.$http.get('data.json').then(function (response) {
            self.books = JSON.parse(response.data);;
        })

    }


});

