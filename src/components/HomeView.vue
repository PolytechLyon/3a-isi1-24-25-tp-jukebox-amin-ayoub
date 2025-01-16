<template>
  <div>
    <h1>Boite a musique !</h1>
    <form @submit.prevent="submitSong">
      <select v-model="importMode">
        <option value="link">Importer un lien</option>
        <option value="file">Importer un fichier</option>
      </select>
      <div v-if="importMode === 'link'">
        <input v-model="newSong.link" placeholder="Lien du son" required />
      </div>
      <div v-if="importMode === 'file'">
        <input type="file" @change="handleFileUpload" required />
      </div>
      <button type="submit">Add Song</button>
    </form>
    <div>
      <label>
        <input type="radio" value="none" v-model="repeatMode" /> Ne pas répéter
      </label>
      <label>
        <input type="radio" value="single" v-model="repeatMode" /> Répéter le son
      </label>
      <label>
        <input type="radio" value="list" v-model="repeatMode" /> Répéter la liste
      </label>
    </div>
    <Playlist :songs="songs" @play-song="playSong" @delete-song="deleteSong" />
    <audio ref="audio" controls @ended="handleEnd"></audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSongs } from '../composables/Controller.js';
import Playlist from './Playlist.vue';

const {
  songs,
  newSong,
  importMode,
  repeatMode,
  audio,
  submitSong,
  handleFileUpload,
  playSong,
  deleteSong,
  handleEnd,
} = useSongs();

onMounted(() => {
  audio.value = document.querySelector('audio');
});
</script>