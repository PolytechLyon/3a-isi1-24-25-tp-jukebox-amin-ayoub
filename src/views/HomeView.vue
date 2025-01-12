<template>
  <div>
    <h1>Boite a musique !</h1>
    <form @submit.prevent="submitSong">
      <input v-model="newSong.title" placeholder="Song Title" required />
      <input v-model="newSong.link" placeholder="Song Link" />
      <input type="file" @change="handleFileUpload" />
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
    <ul>
      <li v-for="song in songs" :key="song.link || song.file.name">
        {{ song.title }}
        <button @click="playSong(song)">Play</button>
      </li>
    </ul>
    <audio ref="audio" controls @ended="handleEnd"></audio>
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
        link: '',
        file: null
      },
      repeatMode: 'none',
      currentSongIndex: 0
    };
  },
  methods: {
    handleFileUpload(event) {
      this.newSong.file = event.target.files[0];
    },
    submitSong() {
      if (this.newSong.link || this.newSong.file) {
        this.$emit('add-song', { ...this.newSong });
        this.newSong.title = '';
        this.newSong.link = '';
        this.newSong.file = null;
      } else {
        alert('Please provide a link or upload a file.');
      }
    },
    playSong(song) {
      const audio = this.$refs.audio;
      if (song.link) {
        audio.src = song.link;
      } else if (song.file) {
        audio.src = URL.createObjectURL(song.file);
      }
      audio.play();
    },
    handleEnd() {
      const audio = this.$refs.audio;
      if (this.repeatMode === 'single') {
        audio.play();
      } else if (this.repeatMode === 'list') {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.playSong(this.songs[this.currentSongIndex]);
      }
    }
  },
  watch: {
    songs(newSongs) {
      if (newSongs.length > 0) {
        this.currentSongIndex = 0;
      }
    }
  }
};
</script>

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