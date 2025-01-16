import { ref } from 'vue';

export function useSongs() {
  const songs = ref([]);
  const newSong = ref({ link: '', file: null });
  const importMode = ref('link');
  const repeatMode = ref('none');
  const audio = ref(null);

  const submitSong = () => {
    if (importMode.value === 'link' && newSong.value.link) {
      songs.value.push({ link: newSong.value.link, file: null });
    } else if (importMode.value === 'file' && newSong.value.file) {
      songs.value.push({ link: '', file: newSong.value.file });
    }
    newSong.value = { link: '', file: null };
  };

  const handleFileUpload = (event) => {
    newSong.value.file = event.target.files[0];
  };

  const playSong = (song) => {
    if (audio.value) {
      audio.value.src = song.link || URL.createObjectURL(song.file);
      audio.value.play();
    }
  };

  const deleteSong = (index) => {
    songs.value.splice(index, 1);
  };

  const handleEnd = () => {
    if (repeatMode.value === 'single') {
      audio.value.play();
    } else if (repeatMode.value === 'list') {
      const currentIndex = songs.value.findIndex(
        (song) => song.link === audio.value.src || URL.createObjectURL(song.file) === audio.value.src
      );
      const nextIndex = (currentIndex + 1) % songs.value.length;
      playSong(songs.value[nextIndex]);
    }
  };

  return {
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
  };
}