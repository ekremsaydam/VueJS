var data = {
    title: 'VueJS Instance',
    showParagraph: false
};

Vue.component('hello', {
    template: '<h1>Merhaba!!!!</h1>'
});

var vm1 = new Vue({

    data: data,
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('VueJS Instance (Güncellendi)');
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title değişti, yeni değer : ' + value);
        }
    }
});

vm1.$mount('#app1');


var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'Vue Instance 2'
    },
    methods: {
        changeTitle: function() {
            vm1.title = 'instance 2 tarafından değiştirildi.';
        }
    }
});

vm1.newProperty = 'Test';
console.log(vm1.$data.title);
console.log(vm1.$data == data);

vm1.$refs.heading.innerText = 'Bu ref tarafından değiştirildi.';


// setTimeout(function() {
//     vm1.title = 'Timer tarafından değiştirildi.';
//     vm1.show();
// }, 2000);

// var vm3 = new Vue({
//     el: '.hello',
//     template: '<h1>Merhabalar!...</h1>'
// });



// vm3.$mount();

// document.getElementById('app3').appendChild(vm3.$el);