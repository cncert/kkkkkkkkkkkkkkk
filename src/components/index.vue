<template>
    <div id="index">
      <el-container class="main-container">
        <el-header>
          <mynav_header></mynav_header>
        </el-header>
        <el-main>
          <!--<main_content></main_content>-->
          <search></search>
          <display_detail_table></display_detail_table>
        </el-main>
        <el-footer style="background-color: #545c64; color: white">运行管理部</el-footer>
      </el-container>
    </div>
</template>

<script>
  import mynav_header from './header'
  // import main_content from './idc_and_detail'
  // import main_2 from './main_2'
  import search from './search'
  import display_detail_table from './main-content'
    export default {
      name: "index",
      components: {
        mynav_header,
        display_detail_table,
        search
      }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    padding: 0;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .main-container{
    border: 1px solid #eee;
    display: flex;  /* 自适应屏幕高度*/
    min-height: 100vh;  /* 自适应屏幕高度*/
    flex-direction: column;  /* 自适应屏幕高度*/
  }
</style>
