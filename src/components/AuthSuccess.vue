<template>
  <div>
    <div>
        <md-button @click="logOut">logout</md-button>
    </div>
    <div>
        <img :src="photo" style='height: 120px'/> <br>
        <p>{{name}}</p>
        <p>{{email}}</p>
        <p>{{userId}}</p>
        <pre>{{user}}</pre>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'

export default {
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
      roomDetails: [],
      test_room: {},
      test_id: ''
    }
  },
  created() {
    var vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vm.user = user;
        vm.name = vm.user.displayName;
        vm.email = vm.user.email;
        vm.photo = vm.user.photoURL;
        vm.userId = vm.user.uid;
      }
    });

    axios.get('http://localhost:3000/rooms')
      .then((response) => {
        this.roomDetails = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>
