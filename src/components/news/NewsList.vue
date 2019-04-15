<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars0.githubusercontent.com/u/44662120?s=40&v=4"
          >
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>{{item.time|dataFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from "mint-ui"

export default {
  data() {
    return {
      newsList: [{
        "id":1,
        "title":"你好",
        "time":"2014/01/01 01:01:01",
        "click":1
      },{
        "id":2,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":3,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":4,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":5,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":6,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":7,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":8,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":9,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":10,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":11,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":12,
        "title":"你好",
        "time":"20190411",
        "click":1
      },{
        "id":13,
        "title":"你好",
        "time":"20190411",
        "click":1
      }]
    };
  },
  created(){
      //this.getNewsList();
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
