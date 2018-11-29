<template>
  <!--old展示每天的主要故障-->
  <div>
  <el-row >
    <!--指定使用computed中的‘from_vuex_all_data’计算过的数据，而不是直接使用datas的数据-->
    <!--为了使每条数据的dom元素唯一，指定一个key，:key="item.id"-->
    <el-col :span="3" v-for="item in from_vuex_all_data" :key="item.id" class="space" >
      <!--添加tooltip-->
      <el-popover
        placement="top"
        width="300"
        trigger="hover"
        >
        <!-- 下边的这个item必须是列表，不能是字典 -->
        <el-table  align="center"
          :data="item"
          style="width: 100%;">
          <el-table-column
            label="主要故障"
            align="left"
            width="300"
            prop="desc">
          </el-table-column>
        </el-table>
          <el-button  slot="reference"  type="primary" class="button-font"  @click="jumps"  >
            <span v-if="item[0].show_normal" class="my-icon-style">
              <i class="el-icon-success"></i>
            </span>
            <span v-if="item[0].show_waring" class="my-icon-style">
              <i class="el-icon-warning"></i>
            </span>
            <div>
              {{item[0].date}}  {{item[0].week}}
            </div>
            <div style="margin-top: 15px;">
              {{item[0].classes}}
            </div>
            <div style="margin-top: 15px;">
              {{item[0].name}}
            </div>
          </el-button>
      </el-popover>
    </el-col>
  </el-row>
  <div class="block" style="margin-top: 20px">
    <span class="demonstration"></span>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[28,10, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="show_data.length">
    </el-pagination>
  </div>

  </div>
</template>

<script>
    import vueWaterfallEasy from 'vue-waterfall-easy'
    import moment from 'moment'
    import axios from 'axios'
    export default {
      name: "main_2",
      components: {
        vueWaterfallEasy,
      },
      data() {
        return {
          datas: [], //存放展示数据，它的数据是由下边的computed更改过的
          filter_data: [], //存放展示数据，它的数据是由下边的computed更改过的
          show_data:[],
          fetchData: [],
          // isTime: '',  //True  or False  显示何种图标
          currentPage: 1,
          pageSize: 28
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
          date = key.target.innerText.split(' ')[0]
          on_watch = key.target.innerText.split(' ')[1].split('\n')
          on_watch = on_watch[2]
          window.open('http://xxx/history_report/' + date +'/' + on_watch, '_blank')
        }
      },
      created: function(){ // 只在加载页面时执行一次
          // 从服务器获取数据
          this.$api.get('get_data',null, r =>{
            this.datas = r.data
            this.$store.commit('changeAllData', r.data)
          })
          //将数据存放到vuex

      },
      computed: {
        from_vuex_all_data: function () {
          // 从vuex取数据
          if (this.$store.state.filter_data.length == 0){
            this.show_data = this.datas;
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
  .space{
    margin-left: 1.5%;
    margin-top: 15px;
  }
  .button-font{
    width: 100%;
    height: 150px;
  }
  .my-icon-style{
    float: right;
    margin-top: -20px
  }
</style>
