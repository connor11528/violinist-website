<template>
	<v-toolbar>
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
			<v-btn flat to='/about' router>About</v-btn>
			<v-btn flat to='/contact' router>Contact</v-btn>
			<v-btn flat to='/events' router>Events</v-btn>
			<v-btn flat to='/compositions' router>Compositions</v-btn>

		</v-toolbar-items>
	</v-toolbar>
</template>
<style>
#titlelink {
	text-decoration: none;
}


</style>
<script>
export default {
	data: () => ({
      navmenu: [
        'About', 'Contact', 'Events', 'Compositions'
      ]
    })
}
</script>