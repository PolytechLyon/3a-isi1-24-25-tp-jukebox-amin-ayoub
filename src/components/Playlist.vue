<template>
  <div>
    <div>
      <label>
        <input type="radio" value="none" :checked="repeatMode === 'none'" @change="$emit('update:repeatMode', 'none')" /> Ne pas répéter
      </label>
      <label>
        <input type="radio" value="single" :checked="repeatMode === 'single'" @change="$emit('update:repeatMode', 'single')" /> Répéter le son
      </label>
      <label>
        <input type="radio" value="list" :checked="repeatMode === 'list'" @change="$emit('update:repeatMode', 'list')" /> Répéter la liste
      </label>
    </div>
    <ul>
      <li v-for="(song, index) in songs" :key="song.link || song.file.name">
        {{ song.link || song.file.name }}
        <button @click="$emit('play-song', song)">Play</button>
        <button @click="$emit('delete-song', index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  songs: Array,
  repeatMode: String,
});
</script>