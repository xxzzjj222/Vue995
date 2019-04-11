<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars0.githubusercontent.com/u/44662120?s=40&v=4"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-4-11 19:18:56</span>
              <span>点击：1次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars0.githubusercontent.com/u/44662120?s=40&v=4"
          >
          <div class="mui-media-body">
            <h1>木屋</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-4-11 19:18:56</span>
              <span>点击：1次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars0.githubusercontent.com/u/44662120?s=40&v=4"
          >
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-4-11 19:18:56</span>
              <span>点击：1次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from "mint-ui"

export default {
  data() {
    return {
      newsList: []
    };
  },
  created(){
      this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getNewsList").then(result => {
        if (result.body.status == 0) {
          this.newsList = result.body.message;
        } else {
            Toast("获取新闻资讯失败"); 
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
