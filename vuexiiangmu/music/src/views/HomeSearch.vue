<template>
  <div class="search">
    <div class="searchbox" ><i class="fa fa-search" aria-hidden="true">
      <button @click="inputValue=null" class="reset"></button></i>
    <input type="text" v-model.trim="inputValue">
    </div>
    <!-- 1 -->


    <!-- 2 -->
    <template v-if="!inputValue" > 
    <h5>热门搜索</h5>
    <ul v-for="(item, index) in searchboxzz" :key="index"  @translate-currentid="$emit('translate-currentid', $event)">
      <li>{{item.first}}</li>
    </ul>
    </template>
    <!-- 2 -->



    <!-- 3 -->
    <template v-else-if="inputValue">
      <div class="shoshoujieguo">搜索:{{inputValue}}</div>
      <div class="shoshoujieguolits" v-for="(item, index) in tueijianyingyvs" :key="index">{{item.keyword}}</div>
    </template>
    <!-- 3 -->
    <div class="loading">
    <img v-if="loading" src="./sample.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
    return {
      searchboxzz: [],
      inputValue:null,
      tueijianyingyvs:[],
      loading:false
    };
  },
  methods: {
    getPersonalized() {
      this.axios
        .get("http://music.kele8.cn/search/hot")
        .then(response => {
          ({ hots: this.searchboxzz } = response.data.result);
            // window.console.log(this.searchboxzz)
        });
    },
    // 推荐音乐
     tueijianYingyv() {
      this.loading=true;
      this.axios
        .get("http://music.kele8.cn/search/suggest",{
          params: {
            keywords: this.inputValue,
            type: "mobile"
          }
        })
        .then(response => {
          ({ allMatch: this.tueijianyingyvs } = response.data.result);
            window.console.log(translate-currentid)
            this.loading=false;
            
        });
    },
    // 输入框音乐
    },
     created() {
    this.getPersonalized();
  },
  watch: {
    inputValue(newValue) {
      if (newValue) {
        this.tueijianYingyv();
        //  window.console.log(tueijianYingyv)
      }
    }
  },
}

</script>


<style lang="less">
.search{
  padding: 20px;
  .searchbox{
    width: 100%;
    background: #e7e5e5;
    padding: 10px;
   border-radius: 30px;
   outline: none;
   overflow: hidden;
    position: relative;
   .reset {
    position: absolute;
      top: 12px;
      width: 14px;
      height: 14px;
      left: auto;
      right: 8px;
      border: none;
      outline: none;
      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==");
    }
   i{
     width: 20px;
     float: left;
   }
   input{
     width: 92%;
     float: left;
     background: #e7e5e5;
     border: 0;
     outline: none;
   }
  }
  h5{
    color: #b4b2b2;
    margin-top:30px; 
  }
  ul{
    li{
      font-size: 13px;
      padding: 5px;
      float: left;
      margin: 5px;
      border-radius:90px;
      border: 1px solid rgb(219, 216, 216); 
    }
  }
}
.shoshoujieguo{
  margin: 10px;
  color: #b4b2b2;
}
.shoshoujieguolits{
  margin: 10px;
}
.loading{
  position: fixed;
  top: 40%;
  left: 50%;
}

</style>