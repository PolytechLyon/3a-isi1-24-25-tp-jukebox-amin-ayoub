<template>
  <div class="add-song-form">
    <h2>Ajouter un titre</h2>
    <form @submit.prevent="addSong">
      <div>
        <label for="title">Titre:</label>
        <input type="text" v-model="title" required />
      </div>
      <div>
        <label for="link">Lien:</label>
        <input type="url" v-model="link" required />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      link: ''
    };
  },
  methods: {
    addSong() {
      this.$emit('song-added', { title: this.title, link: this.link });
      this.title = '';
      this.link = '';
    }
  }
};
</script>

<style scoped>
.add-song-form {
  margin: 20px 0;
}
.add-song-form h2 {
  margin-bottom: 10px;
}
.add-song-form form {
  display: flex;
  flex-direction: column;
}
.add-song-form label {
  margin-bottom: 5px;
}
.add-song-form input {
  margin-bottom: 10px;
}
</style>