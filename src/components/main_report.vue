<template>
    <div id="index">
      <el-container class="main-container">
        <el-header>
          <mynav_header></mynav_header>
        </el-header>
        <el-main>
          <important_service></important_service>
          <main_table></main_table>
        </el-main>
        <el-footer style="background-color: #545c64; color: white">运行管理部</el-footer>
      </el-container>
    </div>
</template>

<script>
  import mynav_header from './edit_report_header'
  import main_table from './idc_and_detail'
  import important_service from './important_service'


    export default {
      name: "index",
      components: {
        mynav_header,
        main_table,
        important_service,
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
