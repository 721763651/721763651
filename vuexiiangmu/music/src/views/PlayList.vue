<template>
  <div class="palylist">
    <div class="go-back" @click="$router.go(-1)"><i class="fa fa-reply" aria-hidden="true"></i></div>
    <div class="xxx"></div>
    <hr />
    <!-- <i class="fa fa-arrow-left" aria-hidden="true"></i> -->

    <ul class="songlist">
      <template v-if="playlist">
        <SongListItem
          v-for="(item, index) in playlist.tracks"
          :key="index"
          :song-item="item"
          :is-show-quality="false"
          @translate-currentid="$emit('translate-currentid',$event)"
        />
      </template>
    </ul>
  </div>
</template>

<script>
import SongListItem from "@/components/SongListItem.vue";
export default {
  components: {
    SongListItem
  },
  data: function() {
    return {
      //   playlistId: null,
      playlist: null
    };
  },
  methods: {
    getPlayListDetail(id) {
      this.axios
        .get("http://music.kele8.cn/playlist/detail", {
          params: {
            id: id
          }
        })
        .then(reponse => {
            window.console.log(reponse.data);
          ({ playlist: this.playlist } = reponse.data);
        });
    }
  },
  created() {
    window.console.log("创建");
  },
  //   watch: {
  //       $route: function () {
  //           window.console.log(this.$route);
  //       }
  //   },

  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getPlayListDetail(to.query.id);
    });
  }
};
</script>

<style lang="less">
.go-back{
  background: #d43c33;
  /* background: url("") */
  height: 160px;
  i{
    width: 20px;
    height: 20px;
  }
}
</style>