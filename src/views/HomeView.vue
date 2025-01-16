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
    <ul>
      <li v-for="(song, index) in songs" :key="song.link || song.file.name">
        {{ song.link || song.file.name }}
        <button @click="playSong(song)">Play</button>
        <button @click="deleteSong(index)">Delete</button>
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
        link: '',
        file: null
      },
      importMode: 'link', // Default import mode
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
    deleteSong(index) {
      this.$emit('delete-song', index);
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
h1 {
  color: #42b983;
  margin-bottom: 20px;
}
form {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
select, input, button {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #369f6b;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
li button {
  margin-left: 10px;
}
</style>