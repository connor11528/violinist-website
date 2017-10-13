<template>
	<v-container grid-list-xl text-xs-center class='blue-grey darken-1' style='width:100%;'>
		<v-flex xs10 offset-xs1>
	        <v-card style='padding: 25px;'>
	        	<h3>Say hello</h3>
				<form>
				    <v-text-field
				      v-model="name"
				      label="Name"
				      :counter="10"
				      :error-messages="errors.collect('name')"
				      v-validate="'required|max:10'"
				      data-vv-name="name"
				      required
				    ></v-text-field>
				    <v-text-field
				      v-model="email"
				      label="E-mail"
				      :error-messages="errors.collect('email')"
				      v-validate="'required|email'"
				      data-vv-name="email"
				      required
				    ></v-text-field>

				    <v-text-field
				    	v-model="message"
				    	label='Message'
						name="message"
						:error-messages="errors.collect('message')"
						v-validate="'required|message'"
						data-vv-name='message'
						multi-line
						></v-text-field>

				    <v-btn @click="submit">submit</v-btn>
				    <v-btn @click="clear">clear</v-btn>
				  </form>
			</v-card>
		</v-flex>
	</v-container>
</template>

<script>

  export default {
    $validates: true,
    data () {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.message = ''
        this.$validator.clean()
      }
    }

  }
</script>