<template>
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
    <ul>
      <li v-for="(song, index) in songs" :key="song.link || song.file.name">
        {{ song.link || song.file.name }}
        <button @click="playSong(song)">Play</button>
        <button @click="deleteSong(index)">Delete</button>
      </li>
    </ul>
    <audio ref="audio" controls @ended="handleEnd"></audio>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  songs: Array
});
</script>
