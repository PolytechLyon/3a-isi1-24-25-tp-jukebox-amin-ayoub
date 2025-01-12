<template>
  <div id="app">
    <HomeView :songs="songs" @add-song="addSong" />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView
  },
  data() {
    return {
      songs: []
    };
  },
  methods: {
    addSong(song) {
      this.songs.push(song);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
form {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>