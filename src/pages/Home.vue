<template>
	<div style='width:100%;height:100vh;'>
		<v-parallax src="./src/assets/golden_gate_bridge.jpeg" height='1100'></v-parallax>

		<v-layout column align-center justify-center style='margin-bottom:200px;'>
			<h1 class="grey--text text--darken-3">Lauren Vandervelden</h1>
			
			<v-btn color="secondary" to='/about' router large>About</v-btn>
		</v-layout>

		<v-parallax src="./src/assets/flowers.jpeg" height='1000'></v-parallax>

		<v-layout column align-center justify-center style='margin-bottom:200px;'>
			<v-flex xs6 align-center justify-center>
				<p>Lauren’s compositions have been performed at MTNA and NAfME’s national conferences in Baltimore and Dallas respectively; Ebb and Flow Arts Violin Synergy Festival in Maui, Hawaii; and the Tribeca New Music Young Composers Concert in New York City.  Additionally, the Boise Philharmonic Youth Orchestra premiered one of her symphonic works.</p>
			</v-flex>

			<v-btn color="secondary" to='/events' router large>Recent and Upcoming Events</v-btn>

		</v-layout>

		<v-parallax src="./src/assets/violin_sunset_crop.jpeg" height='900'></v-parallax>

		<v-layout column align-center justify-center style='margin-bottom:200px;'>
			<v-flex xs6 align-center justify-center>
				<p>Lauren currently attends the John Adams Young Composers Program in Berkeley, where she studies with Matthew Cmiel, as well as the San Francisco Symphony Youth Orchestra Young Composers program led by Nathaniel Stookey.  In addition to her continuing composition studies, Lauren has studied with Stephen Coxe, Eric Nathan, Christopher Theofanidis, and David Ludwig.  She is a member of BMI.</p>
			</v-flex>

			<v-btn color="secondary" to='/compositions' router large>Compositions</v-btn>
		</v-layout>

		<v-parallax src="./src/assets/musical-notes-1.jpeg"></v-parallax>

		<v-footer class="pa-3">
			<v-icon large>email</v-icon>
		    <v-spacer></v-spacer>
		    <div>© {{ new Date().getFullYear() }}</div>
		</v-footer>
	</div>
</template>
<style>
.application--light {
    background: white;
}

p {
	font-size:20px;
}

</style>
<script>

export default {

}
</script>