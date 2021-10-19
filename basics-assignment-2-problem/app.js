const app = Vue.createApp({

	data() {

		return {
			output: '',
			enterKeyPressed: ''

		}
	},
	methods: {
		showAlert:  function() {
			alert("button submitted!")
		}, 

		registerOutput: function(event) {
			this.output = event.target.value;
		},

		showValue: function(event) {
			this.enterKeyPressed = event.target.value;
		}

	}
});

app.mount('#assignment')