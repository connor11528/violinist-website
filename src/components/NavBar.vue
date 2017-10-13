<template>
	<v-toolbar class='grey darken-1'>
		<v-toolbar-title>
			<router-link to='/' id='titlelink'>Lauren Vandervelden</router-link>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-menu :nudge-width="100">
			<v-toolbar-side-icon class="hidden-md-and-up" slot="activator"></v-toolbar-side-icon>
			<v-list>
            <v-list-tile v-for="item in navmenu" :key="item" :to='"/"+item' router>
            	<v-list-tile-title v-text="item" ></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat to='/about' router class='white--text'>About</v-btn>
			<v-btn flat to='/contact' router class='white--text'>Contact</v-btn>
			<v-btn flat to='/compositions' router class='white--text'>Compositions</v-btn>
			<v-btn flat to='/events' router class='white--text'>Events</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>
<style>
#titlelink {
	text-decoration: none;
	color: white;
}
</style>
<script>
export default {
	data: () => ({
      navmenu: [
        'About', 'Contact', 'Compositions', 'Events'
      ]
    })
}
</script>