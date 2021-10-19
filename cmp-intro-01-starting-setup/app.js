const app = Vue.createApp({

	data() {
		return {

			friends: [
				{
					id: 'adrian',
					name: 'Adrian Cojocaru',
					email: 'adrian@localhost.com',
					phone: '0040 33 33 22 77'
				},

				{
					id: 'denis',
					name: 'Denis Cojocaru',
					email: 'denis@localhost.com',
					phone: '0040 33 44 88 99'
				}
			],
		}
	},

	methods: {
		
	}
});


app.component('friend-contact', {

	template: `

		<li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
	`,
	data() {

		return {
			detailsAreVisible: false,
			friend: {
					id: 'adrian',
					name: 'Adrian Cojocaru',
					email: 'adrian@localhost.com',
					phone: '0040 33 33 22 77'
				}

		}

	},

	methods: {
			
		toggleDetails() {

			this.detailsAreVisible = !this.detailsAreVisible;
		}
	}
});

app.mount('#app');