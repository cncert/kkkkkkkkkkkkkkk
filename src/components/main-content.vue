<template>
  <!--new展示每天的主要故障-->
  <div class="block">
    <el-table
      :data="from_vuex_all_data"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        >
        <template slot-scope="scope">
        <el-button
          @click.native.prevent="jumps(scope.row)"
          type="text"
          size="small">
          {{scope.row.date}}
        </el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop="classes"
        label="班次"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="值班人员"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="主要故障">
      </el-table-column>
    </el-table>
    <div class="block" style="margin-top: 20px">
      <span class="demonstration"></span>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[14, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="show_data.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      name: "display_detail_table",
      data() {
        return {
          tableData: [], //存放展示数据，它的数据是由下边的computed更改过的
          filter_data: [], //存放展示数据，它的数据是由下边的computed更改过的
          show_data:[],
          fetchData: [],
          // isTime: '',  //True  or False  显示何种图标
          currentPage: 1,
          pageSize: 14
        };
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize = val
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val
        },
        jumps(key){
          // 跳转到详细页面
          let date
          let on_watch
          date = key.date
          on_watch = key.name
          window.open('http://xxx.cn/history_report/' + date +'/' + on_watch, '_blank')
        }
      },
      created: function(){ // 只在加载页面时执行一次
        // 从服务器获取数据，取出数据传给this.tableData
        let dataArray = [];
        this.$api.get('get_data',null, r =>{
          for (let item of r.data){
            dataArray.push(item[0])
          }
          this.tableData = dataArray;
          this.$store.commit('changeAllData', dataArray)
        })
        //将数据存放到vuex

      },
      computed: {
        from_vuex_all_data: function () {
          // 从vuex取数据
          if (this.$store.state.filter_data.length == 0){
            this.show_data = this.tableData;
            return this.show_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
            //分页： this.show_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
            //从所有数据中，根据当前页数值和每页数量值，获取每页数据
          }else if(this.$store.state.filter_data[0] == 'none_data'){
            this.show_data = [];
            return this.show_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
          }else {
            this.filter_data = this.$store.state.filter_data;
            this.show_data = this.filter_data;
            return this.show_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
          }
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
    text-align: left;
  }
</style>
