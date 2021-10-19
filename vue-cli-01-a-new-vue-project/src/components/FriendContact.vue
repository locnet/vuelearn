<template>
	<ul>
		<li>
			<h2>{{ name }}</h2>
      <h4>( {{ isFavorite  ? 'Is' : 'Is not' }} Favorite )</h4>
      <button @click="toggleFavorite()"> Toggle favorite</button>
			<button @click="toggleDetails()">{{ detailsAreVisibles ? 'Hide' : 'Show' }} Details</button>
      <button @click="$emit('delete-friend',id)">Delete</button>

			<ul v-if="detailsAreVisibles">
				<li><strong>Phone: </strong>{{ email }}</li>
				<li><strong>Email: </strong>{{ phone }}</li>
			</ul>
		</li>
	</ul>

</template>

<script>

	export default {
    emits: ['toggle-favorite','delete-friend'],
		props:{

      id: {
        type: String,
        required: true
      },

      name: {
        type: String,
        required: true
      },

      email: {
        type: String,
        required: true
      },

      phone: {
        type: Number,
        required: true
      },

      isFavorite: {
        type: Boolean
      }
    },

		data() {

			return {

				detailsAreVisibles: false,
				
			};
		},

		methods: {
			toggleDetails() {
				this.detailsAreVisibles = !this.detailsAreVisibles;
			},
      toggleFavorite() {
        this.friendIsFavorite = !this.friendIsFavorite;
        // emit a custom event
        this.$emit('toggle-favorite',this.id);
      }
		}
	}
</script>

