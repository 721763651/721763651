<template>
  <div class="hot">
    <div class="Hotsonglisttop">
      <h3>云音乐</h3>
      <h1>热歌榜</h1>
      <h4>更新日期</h4>
    </div>
    <div class="Ranking" v-for="(item, index) in personalizesd" :key="index"   @translate-currentid="$emit('translate-currentid', $event)">
      <h2>{{item.name}}</h2>
      <h4><div class="SB">{{index+1}}</div></h4>
      <h5>
        <div class="taop"><p>SQ</p></div>
        {{item.ar[0].name}}-{{item.al.name}}
        </h5>
    </div>
  </div>

</template>

<script>
export default {
    data: function() {
    return {
      personalizesd: []
    };
  },
  methods: {
    getPersonalized() {
      this.axios
        .get("http://musicapi.leanapp.cn/top/list?idx=1")
        .then(response => {
          ({ tracks: this.personalizesd } = response.data.playlist);
            window.console.log(this.personalizesd)
            // playlist
        });
    },
    },
     created() {
    this.getPersonalized();
    //  getPersonalized()
  },
}

</script>

<style lang="less">
.Hotsonglisttop{
background-image:url("./hot_music_bg_2x.jpg") ;
background-repeat:no-repeat;
background-position:right top;
padding: 30px;
color: white;
h1{
  font-size: 45px;
}
h3{
   font-size: 16px;
}
h4{
   font-size: 10px;

}
}
// bb
.Ranking{
width: 100%;
border-bottom:1px solid rgba(0, 0, 0, 0.164); 
padding: 15px;
position: relative;
      &:nth-child(2){
        .SB{
      color: red
        }
     
    }
       &:nth-child(3){
        .SB{
      color: red
        }
     
    }
       &:nth-child(4){
        .SB{
      color: red
        }
     
    }
h2{
  position: absolute;
  font-size:17px;
  top: 5px;
  left: 50px;
}
h4{
   width: 40px;
    font-size: 17px;
    color: #999;

}
h5{
  font-size: 12px;
    color: #888;
    position: absolute;
    top: 30px;
    left: 40px;
    // width: 80px;
    float: left;
    .taop{
     width:17px;
      height: 14px;
        border: 1px solid red;
       transform: scale(0.5);
       float: left;
    p {
      font-size: 1px;
      color: red
    }
    }
}
}
</style>