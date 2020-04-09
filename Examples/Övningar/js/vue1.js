new Vue({
    el: "#root",
    data: {
        newName: "",
        names: ["Patrik", "Stehpanie", "Nellie", "Noah"]
    },

    methods: {
        addName() {
            this.names.push(this.newName);
            this.newName = "";
        }
    }
});