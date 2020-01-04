<template>
  <li class="song" @click="setCurrentSongId(songItem.id)">
    <!-- <div class="left" v-if="index !== undefined">{{index+1}}</div> -->
    <dl class="center">
      <dt>{{songItem.name}}</dt>
      <dd v-if="songItem.song">
        <b v-if="(songItem.song.hMusic) && isShowQuality">SQ</b>
        {{songItem.song.artists[0].name}}-{{songItem.song.album.name}}
      </dd>
      <dd v-else>
        <b v-if="(songItem.h) && isShowQuality">SQ</b>
        {{songItem.ar[0].name}}-{{songItem.al.name}}
      </dd>
    </dl>
    <div class="right">▶</div>
    <!-- <div>{{songItem}}</div> -->
  </li>
</template>

<script>
export default {
  props: ["songItem", "isShowQuality", "index"],
  methods: {
    setCurrentSongId(id) {
      this.$emit("translate-currentid", id);
     window.console.log(this.songItem);
    }
  }
};
</script>

<style lang="less">
li.song {
  display: flex;
  dl.center {
    flex: 1;
    dt {
      line-height: 30px;
      margin-left: 10px;
    }
    dd {
      line-height: 20px;
      font-size: 12px;
      color:rgb(133, 130, 130);
    }
    b{
      // padding: -5px 3px;
      display: inline-block;
      color: red;
      border: 1px solid red;
      transform: scale(0.5);
    }
  }
  .left,
  .right {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>