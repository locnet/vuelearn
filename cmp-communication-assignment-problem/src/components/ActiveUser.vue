<template>
	<div>
		<h1> Active User Component</h1>
		<h2> Name: {{ name }}</h2>
		<h3> Age: {{ age }}</h3>
	</div>
</template>

<script>
	

	export default {
		props: ['name', 'age'],

		data() {

			return {
				
			}
		}
	}
</script>