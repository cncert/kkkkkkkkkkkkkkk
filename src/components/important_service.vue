<template>
  <div>
    <div class="tags-container">
      <h2>
        <span><i class="el-icon-menu"></i> 重点服务</span>
      </h2>
    </div>
    <div>
    <el-row>
      <el-col :span="4" class="my-margin-left">
        <div class="grid-content bg-purple">
          <!--<div class="title-style">-->
            <!--title-->
          <!--</div>-->
          <iframe class="my-ifram" :src="service_img[0].xxxx_xun"  name="leftFrame" scrolling="No"
                  noresize="noresize"  id="leftFrame">
          </iframe>
          <el-select v-model="select_default_value[0].select_default_value1" class="select-style" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4" class="my-margin-left">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" :src="service_img[0].xxxang_f"  name="leftFrame" scrolling="No"
                  noresize="noresize"  id="leftFrame">
          </iframe>
          <el-select v-model="select_default_value[0].select_default_value2" class="select-style">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4" class="my-margin-left">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" :src="service_img[0].xxxxn_jian_ce"  name="leftFrame" scrolling="No"
                  noresize="noresize"  id="leftFrame">
          </iframe>
          <el-select v-model="select_default_value[0].select_default_value3" class="select-style">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    <!-- </el-row>
    <el-row> -->
      <el-col :span="4" class="my-margin-left">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" :src="service_img[0].www_xxxx_jian_kong"  name="leftFrame" scrolling="No"
                  noresize="noresize"  id="leftFrame">
          </iframe>
          <el-select v-model="select_default_value[0].select_default_value4" class="select-style">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4" class="my-margin-left">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" :src="service_img[0].xxxu_wu"  name="leftFrame" scrolling="No"
                  noresize="noresize"  id="leftFrame">
          </iframe>
          <el-select v-model="select_default_value[0].select_default_value5" class="select-style">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
  export default{

    data () {
      // this.getApiData()
      return {
        options: [{
          value: '平稳运行',
          label: '平稳运行'
        }, {
          value: '基本平稳',
          label: '基本平稳'
        }, {
          value: '存在异常流量',
          label: '存在异常流量'
        }, {
          value: '遭受攻击',
          label: '遭受攻击'
        }],

      }
    },
    beforeCreate: function (){
        // 从接口获取数据all_front_data, 数据结构等同于下边的default_front_data, 后台接口是从一个all_front_data.json文件
        // 中读取数据，该文件有暂存数据的功能
        this.$api.get('current_record_data',null, r =>{
            this.$store.commit('changeAllFrontData', r.data)
            
        })

    },
    computed: {
      // 要想将vuex中state变化后的数据实时更改在页面上，必须通过computed属性来动态改变，不能直接给data中的数据赋state中的值，
      // 因为这样并不起作用
      select_default_value: function () {
        if (this.$store.state.important_select_default_value.length == 0){
          return [{
            'select_default_value1': '平稳运行',
            'select_default_value2': '平稳运行',
            'select_default_value3': '平稳运行',
            'select_default_value4': '平稳运行',
            'select_default_value5': '平稳运行'
          }]
        }
        return this.$store.state.important_select_default_value
      },
      service_img: function(){
        return [{
          'qxxxxun': 'http://xxx/dashboard-solo/db/xxn?refresh=10s&orgId=1&panelId=6&from=' + this.$store.state.yesterday_timestamp + '&to=' +this.$store.state.current_timestamp + '&panelId=6',
          'xxxf': 'http://nxxn/dashboard-solo/db/gxxng-f?refresh=10s&orgId=1&panelId=1&from=' + this.$store.state.yesterday_timestamp + '&to=' + this.$store.state.current_timestamp,
          'qxxe': 'http://xxxn/dashboard-solo/db/quan-wei-yun-jian-ce?refresh=10s&orgId=1&panelId=2&from=' + this.$store.state.yesterday_timestamp  + '&to=' + this.$store.state.current_timestamp,
          'www_xxong': 'http://xxn/d-solo/000000013/wxxng?refresh=1m&orgId=1&panelId=1&from=' + this.$store.state.yesterday_timestamp  + '&to=' + this.$store.state.current_timestamp + '&var-job=snmp_f5',
          'ccxxu': 'http://xxn/d-solo/000000009/cxxwu?orgId=1&panelId=1&from=' + this.$store.state.yesterday_timestamp  + '&to=' + this.$store.state.current_timestamp + '&var-job=snmp_f5'
        }]
      }
    }



  }
</script>

<style scoped>
  .my-tag{
    /*float: left;*/
    margin-bottom: 1%;
  }
  .select-style{
    line-height: 40px;
    width: 100%;
  }
  .select-style /deep/ .el-input__inner{
    background-color: rgb(84, 92, 100);  /*重要服务下拉框颜色*/
    width: 101%;
    color: white
  }
  .title-style{
    max-height: 30px;
    line-height: 30px
  }
  .my-ifram{
    width: 100%;
    height: 230px;
  }
  .my-margin-left{
    margin-left: 3%;
  }
  .my-margin-left /deep/ .grid-content{
    width: 115%;
  }
  .my-margin-left2{
    margin-left: 1%;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 100px;
    line-height: 0;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .tags-container{
    line-height: 0;
    text-align: left;
  }

</style>

<style>
  .el-select .el-input__inner{
    text-align: center;
  }

</style>
