<template>
  <div>
    <h1>Boite a musique !</h1>
    <form @submit.prevent="submitSong">
      <input v-model="newSong.title" placeholder="Song Title" required />
      <input v-model="newSong.link" placeholder="Song Link" required />
      <button type="submit">Add Song</button>
    </form>
    <ul>
      <li v-for="song in songs" :key="song.link">{{ song.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newSong: {
        title: '',
        link: ''
      }
    };
  },
  methods: {
    submitSong() {
      this.$emit('add-song', { ...this.newSong });
      this.newSong.title = '';
      this.newSong.link = '';
    }
  }
};
</script>