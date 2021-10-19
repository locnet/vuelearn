<template>
	<div>
		<h1>User Data Component</h1>

		<form @submit.prevent="submitData">

			<div>
				<label>Name: </label>
				<input type="text" v-model="name" />
			</div>

			<div>
				<label>Age: </label>
				<input type="text" v-model="age" />
			</div>

			<div>
				<button>Add Data</button>
			</div>

		</form>
	</div>
</template>


<script>
	export default {

		emits: ['data-submitted'],

		data() {

			return {
				name: '',
				age: ''

			}
		},

		methods: {

			submitData() {

				this.$emit('data-submitted', this.name, this.age);
			}
		}
	}
</script>