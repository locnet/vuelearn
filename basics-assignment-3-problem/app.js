const app = Vue.createApp({

	data() {

		return {

			result: 0,
			message: ''

		}
	},

	computed: {

		showMessage() {			

			if (this.result < 37) {
				return ' Not there yet!';

			} else if (this.result > 37) {

				return  ' Too much!';
				
			} else {
				return  "BINGO!!! You have exaclty "
			}
		}

	},

	watch: {

		result(value) {

			const that = this;

			if (value > 0) {
				setTimeout(function() {
					that.result = 0
				}, 7000);
			}
		}
	},

	methods: {

		addSome(number) {
			this.result += number

		}
	}
});

app.mount('#assignment')