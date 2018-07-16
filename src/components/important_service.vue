<template>
  <div>
    <div class="tags-container">
      <h2>
        <span><i class="el-icon-menu"></i> 重点服务</span>
      </h2>
    </div>
    <div>
    <el-row>
      <el-col :span="7" class="my-margin-left">
        <div class="grid-content bg-purple">
          <!--<div class="title-style">-->
            <!--title-->
          <!--</div>-->
          <iframe class="my-ifram" src="http://netmon.cnnic.cn/dashboard-solo/db/quan-qiu-jie-dian-dnscha-xun?refresh=10s&orgId=1&panelId=6&from=1531661638242&to=1531704838242&panelId=6"  name="leftFrame" scrolling="No"
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
      <el-col :span="7" class="my-margin-left">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" src="http://www.baidu.com"  name="leftFrame" scrolling="No"
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
      <el-col :span="7" class="my-margin-left">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" src="http://www.baidu.com"  name="leftFrame" scrolling="No"
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
    </el-row>
    <el-row>
      <el-col :span="7" class="my-margin-left2">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" src="http://www.baidu.com"  name="leftFrame" scrolling="No"
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
      <el-col :span="7" class="my-margin-left2">
        <div class="grid-content bg-purple">
          <iframe class="my-ifram" src="http://www.baidu.com"  name="leftFrame" scrolling="No"
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
        select_default_value: this.$store.state.important_select_default_value
      }
    },
    beforeCreate: function (){
        // 从接口获取数据all_front_data, 数据结构等同于下边的default_front_data, 后台接口是从一个all_front_data.json文件
        // 中读取数据，该文件有暂存数据的功能
        let all_front_data = {  // 这里需要从接口获取数据
          important_service:[],
            idc_table_data: [],
            detail_table_data: [{
            hardware_default_value: '无',
            system_default_value: '无',
            network_default_value: '无',
            service_default_value: '无',
            other_default_value: '无',
            is_handle: '是',
            is_report: '无',
            alert_source: 'sos2',
          }],
          all_workers: [{
            value: '6.18 白班',
            label: '张三，李四'
          }, {
            value: '6.18 夜班',
            label: '张三，李四'
          }],
          default_worker: '张三，李四   6.18 夜班',
          check_workers: ['李四', '张三'],
        };
        let default_front_data = {
          important_service:[{
            select_default_value1: '正常',
            select_default_value2: '正常',
            select_default_value3: '正常',
            select_default_value4: '正常',
            select_default_value5: '正常'
            }]
        };
        if (all_front_data.important_service.length == 0){  // 更改重要服务检查数据
          this.$store.commit('changeImportantService', default_front_data.important_service)

        }else {
          this.$store.commit('changeImportantService', default_front_data.important_service)
        }
    },
    
        
    
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
  .title-style{
    max-height: 30px;
    line-height: 30px
  }
  .my-ifram{
    width: 100%;
    height: 300px;
  }
  .my-margin-left{
    margin-left: 3%;
  }
  .my-margin-left2{
    margin-left: 14%;
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
