<template>
  <div class="newsinfo-container">
    <h1 class="title">{{message.title}}----{{id}}</h1>
    <p class="subtitle">
      <span>发表时间：{{message.time|dataFormat}}</span>
      <span>点击次数：{{message.click}}</span>
    </p>
    <hr>

    <div class="content" v-html="message.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subComponents/Comment.vue"

export default {
  data() {
    return {
      id: this.$route.params.id,
      message: {
        title: "新闻详情",
        time: "2019/04/15 11:18",
        click:1,
        content:
          '<p align="center"><img id="{C7B33509-43D5-44B0-BB6C-BB568AA6037B}" title="" style="BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px" border="0" hspace="0" alt="" src="#" align="center" sourcedescription="编辑提供的本地文件" sourcename="本地文件" /></p><p>　　<font color="navy" face="仿宋">1942年5月2日至23日，在延安整风期间，毛泽东同志亲自主持召开了有文艺工作者、中央各部门负责人共100多人参加的延安文艺座谈会。图为延安文艺座谈会代表合影（吴印咸/摄）。</font></p><p align="center"><img id="{C708C05A-4A13-4366-A4E2-2D2D99EC7A84}" title="" style="BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px" border="0" hspace="0" alt="" src="# align="center" sourcedescription="编辑提供的本地文件" sourcename="本地文件" /></p><p style="FONT-FAMILY: 仿宋; COLOR: navy"><font color="navy" face="仿宋">　　2017年，内蒙古自治区苏尼特右旗乌兰牧骑队员们联名给习近平总书记写信，表达了为繁荣发展社会主义文艺事业作贡献的决心。2017年11月21日，习近平总书记给他们回信，勉励他们扎根生活沃土，服务牧民群众，推动文艺创新，努力创作更多接地气、传得开、留得下的优秀作品，永远做草原上的“红色文艺轻骑兵”。图为2018年11月20日，乌兰牧骑队员们又一次奔赴牧区为牧民们表演节目。 新华社发 东哈达/摄</font></p><p style="FONT-FAMILY: 仿宋; COLOR: navy" align="center"><img id="{358AC0DF-CE35-4CA2-B0DA-4073F25DAFDE}" title="" style="BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px" border="0" hspace="0" alt="" src="#" align="center" sourcedescription="编辑提供的本地文件" sourcename="本地文件" /></p><p style="FONT-FAMILY: 仿宋; COLOR: navy"><font color="navy" face="仿宋">　　2017年9月，由中国文联等单位共同主办的“百年巨匠——四十三位文学艺术大师作品展”在国家博物馆举行。图为展览现场。 光明日报记者 金闻/摄</font></p><p style="FONT-FAMILY: 仿宋; COLOR: navy" align="center"><img id="{D84515C6-8858-4E93-9289-12943C47E84B}" title="" style="BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px" border="0" hspace="0" alt="" src="#" align="center" sourcedescription="编辑提供的本地文件" sourcename="本地文件" /></p><p><font color="navy" face="仿宋">　　2015年1月，中央印发《关于加强中国特色新型智库建设的意见》，提出实施国家高端智库建设规划。图为2015年12月入选国家高端智库建设试点单位的25家智库。 图片来源：伟大的变革——庆祝改革开放40周年大型展览</font></p>'
      }
    };
  },
  components:{
      'comment-box':comment
  }
};
</script>

<style with <style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size:16px;
        color:aqua;
        text-align: center;
        padding: 5px 0;
    };
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
}
</style>
