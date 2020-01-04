<template>
  <div id="app">
    <keep-alive>
      <router-view @translate-currentid="currentSongId=$event" />
    </keep-alive>

    <audio v-if="currentSongId" :src="currentSongUrl" controls autoplay></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSongId: null
    };
  },
  computed: {
    currentSongUrl() {
      return (
        "https://music.163.com/song/media/outer/url?id=" +
        this.currentSongId +
        ".mp3"
      );
    }
  },
  watch: {
    currentSongId: function(newValue) {}
  }
};
</script>
<style>
a {
  color: #2c3e50;
  text-decoration: none;
}
audio {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
}
</style>
