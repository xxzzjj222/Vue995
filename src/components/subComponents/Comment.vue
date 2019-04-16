<template>
  <div class="cmt-container">
    <h1>发表评论</h1>
    <hr>
    <textarea placeholder="请输入评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}} &nbsp;&nbsp;发表时间：{{item.time|dataFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1,
      msg: "",
      comments: [
        {
          id: 1,
          username: "xzj",
          time: "20190109",
          content: "锄禾日当午"
        },
        {
          id: 2,
          username: "xjy",
          time: "20190109",
          content: "汗滴禾下土"
        },
        {
          id: 3,
          username: "xml",
          time: "20190109",
          content: "谁知盘中餐"
        },
        {
          id: 4,
          username: "xyk",
          time: "20190109",
          content: "粒粒皆辛苦"
        }
      ]
    };
  },
  created() {
    //this.getComment();
  },
  methods: {
    getComment() {
      this.$http
        .get("api/" + this.id + "pageIndex=" + this.pageIndex)
        .then(result => {
          if (result.body.status == 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论数据失败");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      //this.getComment();
      Toast("第" + this.pageIndex + "页");
    },
    postComment() {
      if (this.msg.trim().length == 0) {
        return Toast("评论内容不能为空");
      }
      /*this.$http.post('api/'+this.$route.params.id,{content:this.msg.trim()}).then(result=>{
            if(result.body.status==0){
                var cmt={id:5,username:'nihao',time:Date.now(),content:this.msg.trim()};
                this.comments.unshift(cmt);
                this.msg='';
            }
            else{
                Toast("评论失败");
            }
        })*/
      var cmt = {
        id: 5,
        username: "nihao",
        time: new Date().toString(),
        content: this.msg.trim()
      };
      this.comments.unshift(cmt);
      this.msg = "";
    }
  },
  props: ["id"]
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h1 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    margin: 0;
    height: 85px;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
