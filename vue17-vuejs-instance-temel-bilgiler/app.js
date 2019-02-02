new Vue({
    el: '#app1',
    data: {
        title: 'VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('VueJS Instance (Güncellendi)');
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

new Vue({
    el: '#app2',
    data: {
        title: 'Vue Instance 2'
    }
});