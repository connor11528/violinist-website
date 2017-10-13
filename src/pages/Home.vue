<template>
<div style='width:100%;height:100vh;'>
	<v-parallax src="./src/assets/play-violin-1.jpeg" height='500'>
		<v-layout column align-center justify-center>
			<h1 class="grey--text text--darken-3">Hi I'm Lauren</h1>
			<h5>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel.</h5>
			<v-btn color="secondary" to='/about' router>About</v-btn>
		</v-layout>
	</v-parallax>
	<v-parallax src="./src/assets/violin-2.jpeg" height='500'>
		<v-layout column align-center justify-center>
			<h1 class="grey--text text--darken-3">View compositions</h1>
			<h4 class="white--text">Lauren has composed dozens of pieces for X, Y and Z</h4>
			<v-btn color="secondary" to='/compositions' router>Compositions</v-btn>
		</v-layout>
	</v-parallax>
	<v-parallax src="./src/assets/play-violin-2.jpeg" height='500' :jumbotron='true'>
		<v-layout column align-center justify-center>
			<h1 class="grey--text text--darken-3">Welcome to the website</h1>
			<h4 class="white--text">Reach out to get in touch</h4>
			<v-btn color="secondary" to='/contact' router>Contact</v-btn>
		</v-layout>
	</v-parallax>
	<v-parallax src="./src/assets/musical-notes-1.jpeg" height='500' :jumbotron='true'>
		<v-layout column align-center justify-center>
			<h1 class="grey--text text--darken-3">Events</h1>
			<h4 class="white--text">Come see me play</h4>
			<v-btn color="secondary" router to='/events'>Events</v-btn>
		</v-layout>
	</v-parallax>
</div>
</template>

<script>
export default {

}
</script>