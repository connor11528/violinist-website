<template>
	<v-container grid-list-xl text-xs-center style='width:100%;'>
		<v-flex xs10 offset-xs1>
	        <v-card>
	        	<h3>Recent and Upcoming Events</h3>
	        </v-card>

	         <v-expansion-panel expand>
			    <v-expansion-panel-content>
			      <div slot="header">
			      	<h4>
			      		John Adams Young Composers Program
			      	</h4>
		        	<h5 class="grey--text">Saturday, December 9, 2017</h5>
		        	<h6>Crowden Concert Hall, Berkeley, CA</h6>
		        	<p>Concert featuring new works by students of the John Adams Young Composers Program, including an original work by Lauren Vandervelden.</p>
			      </div>
			        <v-card-text class="grey lighten-3">
			        	<blockquote>
			        		“With a diverse faculty of professional composers who are dedicated, gifted teachers, and a rich network of professional musicians and ensembles, the John Adams Young Composers Program is uniquely poised to offer a launching pad for artistic expression that is grounded in disciplined work, expert individual guidance and real-world experience.” 
			        		<br>
			        		<b>–John Adams Young Composers Program</b>
			        	</blockquote>
			        </v-card-text>
			        <v-card-text class='text-xs-center text-sm-center text-md-center'>
			        	<v-btn large flat color='primary' href='https://www.crowden.org/community-education/john-adams-young-composers-program' target='_blank'>Event link</v-btn>
			        </v-card-text>
			    </v-expansion-panel-content>
			  </v-expansion-panel>
			  <br>

			  <v-expansion-panel expand>
			    <v-expansion-panel-content>
			      <div slot="header">
			      	<h4>
			      		San Francisco Symphony Youth Orchestra
			      	</h4>
		        	<h5 class="grey--text">Sunday, November 19, 2017</h5>
		        	<h6>Davies Symphony Hall, San Francisco, CA</h6>
		        	<ul>
			        	<li>Detlev Glanert American Prelude No.1</li>
						<li>Rachmanioff Piano Concerto No. 2</li>
						<li>Elgar Enigma Variations</li>
						<li>Bernstein Overture to “Candide”</li>
					</ul>
			      </div>
			        <v-card-text class='text-xs-center text-sm-center text-md-center'>
			        	<v-btn large flat color='primary' href='http://www.sfsymphony.org/Youth-Family/Youth-Orchestra.aspx' target='_blank'>Event link</v-btn>
			        </v-card-text>
			    </v-expansion-panel-content>
			  </v-expansion-panel>
			  <br>

			  <v-expansion-panel expand>
			    <v-expansion-panel-content>
			      <div slot="header">
			      	<h4>
			      		Tribeca New Music
			      	</h4>
			      	<h5>Young Composer Winners</h5>
		        	<h5 class="grey--text">Sunday November 5, 2017 </h5>
		        	<h6>Nancy Manocherian’s – The Cell, New York, NY</h6>
		        	<p>As the First Place winner of Division 2, Lauren Vandervelden’s Kaleidoscopic Suite will be performed by the Tribeca Monsters.</p>
			      </div>
			      <v-card-text>
			      	<blockquote>“Tribeca New Music is proud to present the annual young composer winning scores for our national 2017 Young Composer Competition.  Divided into two groups, Division 1 for composers 22-35 years old, and Division 2 for composers 21 years old and younger, this competition continues to delight and surprise listeners with amazing new works from across the country.” 
			      	<br>
			        <b>–Tribeca New Music</b></blockquote>
			      </v-card-text>
			      <v-card-text>
			      	<blockquote>
			      		“Always rich in young composers, this series has taken on venerable status.”
			      		<br>
			        	<b>–New York Times</b>
			        </blockquote>
			      </v-card-text>
			      <v-card-text class='text-xs-center text-sm-center text-md-center'>
			      	<v-btn large flat color='primary' href='http://www.tribecanewmusic.org/youngcomposercompetition/' target='_blank'>Event link</v-btn>
			      </v-card-text>
			    </v-expansion-panel-content>
			  </v-expansion-panel>
			  <br>

			  <v-expansion-panel expand>
			    <v-expansion-panel-content>
			      <div slot="header">
			      	<h4>Ebb and Flow Arts</h4>
		        	<h5>Violin Synergy Festival</h5>
		        	<h5 class="grey--text">August 6-8, 2017</h5>
		        	<h6>Seabury Hall and Keawalai Congregational Church, Maui, Hawaii</h6>
		        	<p>Lauren Vandervelden was commissioned to write a violin quartet for Ebb and Flow Arts.</p>
			      </div>
			        <v-card-text class='text-xs-center text-sm-center text-md-center'>
			        	<v-card-text>
					      	<blockquote>
					      		“Leading members of San Francisco Symphony’s first violin section – Sarn Oliver, Mariko Smiley, Melissa Kleinbart, and Yun Chu – perform original and E&FA-commissioned works for four violins, and duo violins…[including an original work composed by] Lauren Vandervelden”  
					      		<br>
					        	<b>– Ebb and Flow Arts including</b>
					        </blockquote>
					      </v-card-text>
			        	<v-btn large flat color='primary' href='http://ebbandflowarts.org/' target='_blank'>Event link</v-btn>
			        </v-card-text>
			    </v-expansion-panel-content>
			  </v-expansion-panel>
			  <br>

			<v-expansion-panel style='cursor:text;'>
			    <v-expansion-panel-content :hide-actions='true' style='cursor:text;'>
			      <div slot="header" style='cursor:text;'>
			      	<h4>
			      		Yellow Barn
			      	</h4>
		        	<h5 class="grey--text">June 23 and 29, 2017</h5>
		        	<h6>The Big Barn, Putney, VT</h6>
		        	<p>
		        		Performances of new composers’ works including two world premiers from Lauren Vandervelden:
		        	</p>
					<ul>
						<li>Playing with Fire piano trio (prepared piano)</li>
						<li>Illumination viola quintet (Lauren Vandervelden, first violin)</li>
					</ul>
			      </div>
			    </v-expansion-panel-content>
			  </v-expansion-panel>			  

	    </v-flex>
	</v-container>
</template>
<style lang='sass'>
	h6 { font-weight: 100; }
	h4 { color: #546e7a!important; }
</style>
<script>
export default {

}
</script>


