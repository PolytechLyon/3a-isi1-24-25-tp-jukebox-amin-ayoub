<template>
  <div class="playlist">
    <h2>Playlist</h2>
    <ul>
      <li v-for="(song, index) in playlist" :key="index" :class="{ 'playing': currentSongIndex === index, 'disabled': !song.isValid }">
        <span>{{ song.title }}</span>
        <button @click="playSong(index)" :disabled="!song.isValid">Play</button>
        <button @click="removeSong(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Array,
      required: true
    },
    currentSongIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    playSong(index) {
      this.$emit('play-song', index);
    },
    removeSong(index) {
      this.$emit('remove-song', index);
    }
  }
}
</script>

<style scoped>
.playlist {
  margin: 20px 0;
}
.playlist ul {
  list-style-type: none;
  padding: 0;
}
.playlist li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}
.playing {
  font-weight: bold;
}
.disabled {
  text-decoration: line-through;
}
</style>