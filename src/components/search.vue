<template>
  <div style="margin-bottom: 20px;">
    <el-date-picker
      v-model="value13"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['16:00:00', '10:00:00']"
      :picker-options="pickerOptions2">
    </el-date-picker>

    <el-button type="primary" @click="filterArry" >按时间范围筛选</el-button>
  </div>
</template>

<script>
  import moment from 'moment'
    export default {
      name: "search",
      data() {
        return {
          value13: [],
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
        }
      },
      methods: {
        getSearchTime (){
          //使用moment格式化时间
          let start_time;
          let end_time;
          let timeArry;
          if(this.value13 == null){
            start_time = moment("2018-05-10 10:00:00").format("YYYY-MM-DD HH:mm:ss");
            end_time = moment().format('YYYY-MM-DD HH:mm:ss');
          }else {
            start_time = moment(this.value13[0]).format("YYYY-MM-DD HH:mm:ss");
            end_time = moment(this.value13[1]).format("YYYY-MM-DD HH:mm:ss");
          }
          timeArry = [start_time, end_time];
          this.$store.commit('changeSearchTime', timeArry)
        },
        compareTime (item) {
          let timeObj;
          let start_time;
          let end_time;
          start_time = this.$store.state.start_time;
          end_time = this.$store.state.end_time;
          timeObj = item[0].dateTime;
          if ((moment(timeObj).isAfter(start_time))
            && (moment(timeObj).isBefore(end_time))
          ){
            return item
          }
        },
        filterArry () {
          this.getSearchTime();
          let datas;
          let filter_data;
          datas = this.$store.state.all_data;
          filter_data = datas.filter(this.compareTime);
          this.$store.commit('changeFilterData', filter_data);
          return filter_data
        },
      },
      
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
