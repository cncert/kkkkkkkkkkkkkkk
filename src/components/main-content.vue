<template>
  <div class="block">
    <el-date-picker
      v-model="value13"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
      <el-button type="primary" >按时间范围筛选</el-button>

    <el-table align="center"
      :data="tableData5"
      style="width: 100%;margin-top: 20px">
      <el-table-column
        label="班次"
        width="150"
        prop="date_class"
        align="center">
      </el-table-column>
      <el-table-column
        label="星期"
        align="center"
        width="50"
        prop="week">
      </el-table-column>
      <el-table-column
        label="值班人员"
        align="center"
        width="250"
        prop="name">
      </el-table-column>

      <el-table-column
        label="重要故障"
        prop="desc"
        width="700">
        <!--width：设置表格宽度-->
      </el-table-column>
      <el-table-column
        align="center"
        label="详细">
        <template slot-scope="scope">
          <!--通过 slot-scope 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据-->
          <!--scope.row 会获取一个data元素的所有数据-->
          <el-button @click="handleClick(scope.$index ,scope.row)" type="text" size="small">查看详细</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "main_content",
      data() {
        return {
          value13: []
        };
      },
      methods: {
        handleClick(index, row) {
          console.log(index, row)
        },
        dateClass(row) {
          this.date_class = row.date + '  ' + row.day_or_night
        }
      }
    }
</script>

<style scoped>

</style>
<style>
  .el-input__inner{
    background-color: #fff;
    color: #606266;
  }
  .el-main[data-v-6efe4612]{
    line-height: 40px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-table .cell {
    /*pre-line 合并空白符序列，但是保留换行符。*/
    white-space: pre-line;
  }
</style>
