const app = Vue.createApp({

	data() {

		return {
			userClass: '',
			setParagraphColor:'',
			isVisible: true

		}
	},

	methods: {
		setVisibility: function() {

			this.isVisible = !this.isVisible;
		}
	}
});

app.mount('#assignment')