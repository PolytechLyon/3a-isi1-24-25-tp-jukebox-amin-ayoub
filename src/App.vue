<template>
  <div id="app">
    <HomeView :songs="songs" @add-song="addSong" @delete-song="deleteSong" />
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
    },
    deleteSong(index) {
      this.songs.splice(index, 1);
    }
  }
};
</script>

<style src="../src/styles/styles.css"></style>