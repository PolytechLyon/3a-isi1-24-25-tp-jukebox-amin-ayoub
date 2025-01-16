<script>
export default {
  props: {
    currentSong: {
      type: Object,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    },
    repeatMode: {
      type: String,
      required: true
    }
  },
  methods: {
    updateRepeatMode(event) {
      this.$emit('update:repeatMode', event.target.value);
    }
  },
  watch: {
    currentSong(newSong) {
      if (newSong) {
        this.$refs.audio.load();
        if (this.isPlaying) {
          this.$refs.audio.play();
        }
      }
    }
  }
};
</script>

<style scoped>
.player-controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>