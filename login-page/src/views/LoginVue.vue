<script>
export default {
  data() {
    return {
      isOpen: false,
      password: ""
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
          <label>Adresse e-mail</label>
          <input type="text" />
        </div>
        <div class="password">
          <label>Mot de passe</label>
          <div>
            <input v-show="!isOpen" type="password" v-model="password" />
            <input v-show="isOpen" type="text" v-model="password">
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
      <button class="btn btn-danger">Se connecter</button>

      <div class="imgs gap-2">
        <p>Ou se connecter avec</p>
        <div class="d-flex gap-2 justify-content-center">
          <img src="../assets/img/facebook.png" alt="" />
          <img src="../assets/img/google.png" alt="" />
          <img src="../assets/img/twitter.png" alt="" />
        </div>
      </div>
      <div class="inscription text-center">
        <p>
          Vous n'avez toujours pas de compte ? <br />
          <span>Inscrit-toi !</span>
        </p>
      </div>
    </section>
  </div>
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
