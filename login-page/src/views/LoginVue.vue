<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
      email: '',
      password: '',
      connect: false,
      disconnect: false
    }
  },
  methods: {
    send: function () {
      if (this.email != '' && this.password != '') {
        this.connect = true
        this.disconnect = false
        this.email = ''
        this.password = ''
      } else {
        this.disconnect = true
        this.connect = false
        this.email = ''
        this.password = ''
      }
    }
  }
}
</script>

<template>
  <div class="all">
    <section class="login">
      <h1 class="mb-3">Se Connecter</h1>
      <div class="info">
        <div class="email">
          <label>Adresse mail</label>
          <input type="text" v-model="email" />
        </div>
        <div class="password">
          <label>Mot de passe</label>
          <div>
            <input v-show="!isOpen" type="password" v-model="password" />
            <input v-show="isOpen" type="text" v-model="password" />
            <img
              v-show="!isOpen"
              @click="isOpen = !isOpen"
              src="../assets/img/oeil-ferme.png"
              alt=""
            />
            <img
              v-show="isOpen"
              @click="isOpen = !isOpen"
              src="../assets/img/oeil-ouvert.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-danger" @click="send()">Se connecter</button>
        <p style="color: green" v-show="connect">Vous êtes connecté</p>
        <p style="color: red" v-show="disconnect">Veuillez réessayez</p>
      </div>

      <div class="imgs gap-2">
        <p>Ou se connecter avec :</p>
        <div class="d-flex gap-2 justify-content-center">
          <a href="https://www.facebook.com/?locale=fr_FR"
            ><img src="../assets/img/facebook.png" alt=""
          /></a>
          <a href="https://twitter.com/?lang=fr">
            <img src="../assets/img/twitter.png" alt="" />
          </a>
          <a href="https://www.google.com/intl/fr/gmail/about/">
            <img src="../assets/img/google.png" alt="" />
          </a>
        </div>
      </div>
      <div class="inscription text-center">
        <p>
          Vous n'avez toujours pas de compte ? <br />
          <RouterLink to="/inscription"><span>Inscrivez-vous</span></RouterLink>
        </p>
      </div>
    </section>
  </div>
  <RouterView />
</template>
<style scoped>
.all {
  display: grid;
  place-items: center;
}
.login {
  display: grid;
  place-items: center;
  background-color: white;
  width: 500px;
  height: 700px;
  padding: 2% 5% 2% 5%;
  border-radius: 10px;
}
.imgs img {
  width: 30px;
}
input {
  width: 100%;
  border: none;
  padding: 2%;
  border-bottom: 1px solid grey;
}
input:focus {
  outline: none;
}
.password img {
  position: absolute;
  width: 30px;
}
</style>
