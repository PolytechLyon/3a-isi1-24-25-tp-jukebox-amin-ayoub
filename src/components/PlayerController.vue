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
}
.controls {
  display: flex;
  align-items: center;
}
</style>