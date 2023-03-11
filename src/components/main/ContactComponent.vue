<template>
	<div class="contact-in">
		<div class="contact-map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.702561810067!2d21.177342214630652!3d42.64646517916867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ec8f348ba5d%3A0xa41552bf1b3ebf7b!2sMuharrem%20Fejza%2C%20Prishtina!5e0!3m2!1sen!2s!4v1654904025404!5m2!1sen!2s"
				width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
		<div class="contact-form">
			<h1>Contact Us</h1>
			<form v-on:submit.prevent="handleSubmitContact">
				<input type="text" placeholder="Full Name..." class="contact-form-txt" v-bind:value="newContact.name"
					v-on:input="newContact.name = $event.target.value">
				<input type="email" placeholder="Email..." class="contact-form-txt" v-bind:value="newContact.email"
					v-on:input="newContact.email = $event.target.value">
				<input type="number" placeholder="Phone Number..." class="contact-form-txt"
					v-bind:value="newContact.phonenumber" v-on:input="newContact.phonenumber = $event.target.value">
				<textarea placeholder="Message" class="contact-form-textarea" v-model="newContact.message"></textarea>
				<input type="submit" name="Submit" class="contact-form-btn" />
			</form>
		</div>
	</div>
</template>
<script>
import firebase from 'firebase';
import db from '../../firebase/db'
export default {
	data() {
		return {
			newContact: {
				name: '',
				email: '',
				phonenumber: '',
				message: ''
			}
		}
	},
	methods: {
		async handleSubmitContact() {
			console.log('Attempting to create Contact')
			const userId = firebase.auth().currentUser.uid.valueOf();
            console.log(userId);
			//validation
			if (
				!this.newContact.name.trim() ||
				!this.newContact.message.trim()
			) return;
			// create a new post
			console.log('make request to create new contact -> ', this.newContact);
			try {
				const result = await db.collection('contacts').add({ ...this.newContact })
                console.log(result);
		
			} catch (err) {
				console.error(err);
			}
			this.newContact.name = '';
			this.newContact.email = '';
			this.newContact.phonenumber = '';
			this.newCantact.message = '';
		}
	}
}
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	width: 100%;
	height: 100vh;
	display: grid;
	align-items: center;
	background: #9aa2de;
	font-family: 'Poppins', sans-serif;
}

.contact-in {
	width: 80%;
	height: auto;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 0px 10px 0px #666;
}

.contact-map {
	width: 100%;
	height: auto;
	flex: 50%;
}

.contact-map iframe {
	width: 100%;
	height: 100%;
}

.contact-form {
	width: 100%;
	height: auto;
	flex: 50%;
	padding: 30px;
	text-align: center;
}

.contact-form h1 {
	margin-bottom: 10px;
}

.contact-form-txt {
	width: 100%;
	height: 40px;
	color: #000;
	border: 1px solid #bcbcbc;
	border-radius: 50px;
	outline: none;
	margin-bottom: 20px;
	padding: 15px;
}

.contact-form-txt::placeholder {
	color: #aaa;
}

.contact-form-textarea {
	width: 100%;
	height: 130px;
	color: #000;
	border: 1px solid #bcbcbc;
	border-radius: 10px;
	outline: none;
	margin-bottom: 20px;
	padding: 15px;
	font-family: 'Poppins', sans-serif;
}

.contact-form-textarea::placeholder {
	color: #aaa;
}

.contact-form-btn {
	width: 100%;
	border: none;
	outline: none;
	border-radius: 50px;
	background: #9aa2de;
	color: #fff;
	text-transform: uppercase;
	padding: 10px 0;
	cursor: pointer;
	font-size: 18px;
}
</style>




   
  