<template>
  <div id="app">
    <HomeView :songs="songs" @add-song="addSong" @delete-song="deleteSong" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeView from './components/HomeView.vue';
import Playlist from './components/Playlist.vue';

const songs = ref([]);

const addSong = (song) => {
  songs.value.push(song);
};

const deleteSong = (index) => {
  songs.value.splice(index, 1);
};
</script>

<style src="../src/styles/styles.css"></style>