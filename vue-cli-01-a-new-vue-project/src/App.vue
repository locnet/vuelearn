<template>

	<div class="container">
		<header><h1>My Friends</h1></header>

		<new-friend @add-contact="addContact"></new-friend>

		<friend-contact 
						v-for="friend in friends"
						:key="friend.id"
						:id="friend.id"
						:name="friend.name"
						:email= "friend.email"
						:phone= "friend.phone"
						:isFavorite="friend.isFavorite"
						@toggle-favorite="toggleFavoriteStatus"
						@delete-friend="deleteFriend">
		</friend-contact>

	</div>

</template>


<script>
	
	export default {

		data() {
			return {

				friends: [
					{
						id: 'adrian',
						name: 'Adrian Cojocaru',
						email: 'adrian@localhost.com',
						phone: '55 66 88 77 99',
						isFavorite: true
					},
					{
						id: 'denis',
						name: 'Denis Cojocaru',
						email: 'denis@locaholst.com',
						phone: '88 99 77 54 24 56',
						isFavorite: false
					}
				]
			}
		},

		methods: {
			// aunque arriba, en las propiedades, estoy llamando esta funcion sin ningun parametro,
			// el paramentro es 
			toggleFavoriteStatus(friendId) {
				const identifiedFriend = this.friends.find(friend => friend.id === friendId);
				identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
			},

			/* 
			 * en el componente NewFriend emitimos un event que lleva 3 parametros
			 * arriba, donde hemos incluido el componente, escuchamos este evento mediante @add-component
			 * y lo relacionamos con la actual funcion, que - BINGO - espera recibir 3 parametros, que son
			 * exactamente los parametros que transporta el evento emitido en NewFriend.vue. VERY COOL!!!
			*/
			addContact(recivedName, recivedPhone, recivedEmail) {
				const newFriendContact = {
					id: new Date().toISOString(),
					name: recivedName,
					email: recivedEmail,
					phone: recivedPhone,
					isFavorite: false
				};
				this.friends.push(newFriendContact);
			},
			deleteFriend(friendId) {

				this.friends = this.friends.filter(friend => friend.id !== friendId);
			}

		}
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
	font:inherit;
	padding: 0.15rem;
}

#app label {
	font-weight: bold;
	margin-right: 1rem;
	width: 7rem;
	display: inline-block;
}

#app form div {
	margin: 1rem 0;
}
</style>