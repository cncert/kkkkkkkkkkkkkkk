<template>
  <div class="block">
    <div class="tags-container">
      <h2>
        <span><i class="el-icon-view"></i> 机房检查</span>
      </h2>
    </div>
    <el-table align="center"
      border
      :data="idc_table_data"
      style="width: 100%;margin-top: 20px; line-height: 0"
      ref="multipleTable"
      @selection-change="handleIdcSelectionChange">
      <el-table-column
        type="selection"
        min-width="20">
      </el-table-column>
      <el-table-column
        label="CA机房温度"
        min-width="120"
        align="center"
      >
        <template slot-scope="scope">
          <div class="my-select">
            <el-select v-model="scope.row.select_default_value_ca_tem " class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="CA机房湿度"
        align="center"
        min-width="120"
      >
        <template slot-scope="scope">
          <div class="my-select">
            <el-select v-model="scope.row.select_default_value_ca_hum" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="5楼机房温度"
        align="center"
        min-width="120"
      >
        <template slot-scope="scope">
          <div class="my-select">
            <el-select v-model="scope.row.select_default_value_5_tem" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="5楼机房湿度"
        align="center"
        min-width="120">
        <template slot-scope="scope">
          <div class="my-select">
            <el-select v-model="scope.row.select_default_value_5_hum" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="2号楼机房温度"
        min-width="120">
        <template slot-scope="scope">
          <div class="my-select">
            <el-select v-model="scope.row.select_default_value_2_tem" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>
        <!--<template slot-scope="scope">-->
          <!--&lt;!&ndash;通过 slot-scope 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据&ndash;&gt;-->
          <!--&lt;!&ndash;scope.row 会获取一个data元素的所有数据&ndash;&gt;-->
          <!--<el-button @click="handleClick(scope.$index ,scope.row)" type="text" size="small">查看详细</el-button>-->
        <!--</template>-->
      </el-table-column>
      <el-table-column
        label="2号楼机房湿度"
        align="center"
        min-width="120">
        <template slot-scope="scope">
          <div class="my-select">
            <el-select v-model="scope.row.select_default_value_2_hum" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="巡检时间"
        align="center"
        min-width="220">
        <template slot-scope="scope">
          <div class="block">
            <el-date-picker
              v-model="scope.row.value_of_check_time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="巡检人员"
        align="center"
        min-width="250"
      >
        <template slot-scope="scope">
          <div class="my-worker-style">
          <el-select
            v-model="scope.row.check_workers"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择或输入">
            <el-option
              v-for="item in check_workers"
              :key="item"
              :value="item"
              :label="item">
            </el-option>
          </el-select>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px;" class="edit-button-style">
      <el-button type="primary" size="small" @click="addIdcRow">添加</el-button>
      <el-button type="danger" size="small" @click.native.prevent="deleteIdcRow()">删除</el-button>
    </div>
    <div class="tags-container">
      <h2>
        <span><i class="el-icon-edit"></i> 详细记录</span>
      </h2>
    </div>
    <el-table align="center"
              border
              :data="detail_table_data"
              style="width: 100%;margin-top: 20px; line-height: 0"
              ref="multipleTable"
              @selection-change="handleDetailSelectionChange">
      <el-table-column
        type="selection"
        min-width="20">
      </el-table-column>
      <el-table-column
        label="硬件"
        min-width="180"
        align="center">
        <template slot-scope="scope">
          <div class="my-textarea">
            <el-input v-model="scope.row.hardware_default_value" placeholder="" type="textarea"  autosize resize="none"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="系统"
        align="center"
        min-width="180"
        >
        <template slot-scope="scope">
          <div class="my-textarea">
            <el-input v-model="scope.row.system_default_value" placeholder="" type="textarea"  autosize resize="none"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="网络"
        align="center"
        min-width="180"
        >
        <template slot-scope="scope">
          <div class="my-textarea">
            <el-input v-model="scope.row.network_default_value" placeholder="" type="textarea"  autosize resize="none"></el-input>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="服务"
        align="center"
        min-width="180">
        <template slot-scope="scope">
          <div class="my-textarea">
            <el-input v-model="scope.row.service_default_value" placeholder="" type="textarea"  autosize resize="none"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="其他"
        min-width="180">
        <template slot-scope="scope">
          <div class="my-textarea">
            <el-input v-model="scope.row.other_default_value" placeholder="" type="textarea"  autosize resize="none"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="是否处理"
        align="center"
        min-width="100"
        >
        <template slot-scope="scope">
          <el-select v-model="scope.row.is_handle" placeholder="请选择">
            <el-option
              v-for="item in is_handle_select_option"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="故障报告"
        align="center"
        min-width="100"
        >
        <template slot-scope="scope">
          <el-select v-model="scope.row.is_report" placeholder="请选择">
            <el-option
              v-for="item in is_report_select_option"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="告警源"
        align="center"
        min-width="100"
        >
        <template slot-scope="scope">
          <div class="my-cell">
          <el-select v-model="scope.row.alert_source" placeholder="请选择">
            <el-option
              v-for="item in alert_source_select_option"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          </div>
        </template>
      </el-table-column>
      <!--<el-table-column-->
        <!--label="删除"-->
        <!--align="center"-->
        <!--width="50"-->
        <!--&gt;-->
      <!--</el-table-column>-->
    </el-table>
    <div style="margin-top: 10px" class="edit-button-style">
      <el-button type="primary" size="small" @click="addDetailRow">添加</el-button>
      <el-button type="danger" size="small" @click="deleteDetailRow">删除</el-button>
    </div>
    <div style="line-height: 40px">
      <el-row :gutter="100" style="margin-left: 0;margin-right: 0">
        <el-col :span="12">
          <div style="margin-left:80%" class="grid-content bg-purple">
            <h2>
              <el-button type="primary" icon="el-icon-message" @click="save_data_to_db">交班</el-button>
            </h2>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="margin-right:80%" class="grid-content bg-purple">
            <h2>
              <el-button type="primary" icon="el-icon-upload" @click="fetch_all_data">保存</el-button>
            </h2>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import swal from 'sweetalert';
    export default {
      name: "main_table",
      data() {
        return {
          value_of_datetime: '',
          options: [{
            value: '正常',
            label: '正常'
          }, {
            value: '异常',
            label: '异常'
          }],

          // idc表的默认数据
          // 可以定时将此数据提交给后台存起来成为一个新的数据集
          idcMultipleSelection: [], // idc表选中的数据,用于删除
          detailMultipleSelection: [], // 详细记录表选中的数据,用于删除
          is_handle_select_option: [{
            value: '是',
            label: '是'
          }, {
            value: '否',
            label: '否',
          }],
          is_report_select_option: [{
            value: '有',
            label: '有'
          }, {
            value: '无',
            label: '无',
          }],
          alert_source_select_option: [{
            value: 'sos2',
            label: 'sos2'
          }, {
            value: 'netmon',
            label: 'netmon',
          }, {
            value: '邮件',
            label: '邮件',
          }],
        };
      },
      methods: {
        handleIdcSelectionChange(val) {
          // val是所有被选中的对象，
          this.idcMultipleSelection = val;
        },
        deleteIdcRow(index, rows) {
          // 删除选中的机房数据
          swal({
            title: "确定删除吗?",
            icon: "warning",
            buttons: ['取消', '确定'],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              for (let i = 0; i < this.idcMultipleSelection.length; i++){
                for (let n = 0; n < this.idc_table_data.length; n++){
                  if(this.idc_table_data[n] == this.idcMultipleSelection[i]) {
                    this.idc_table_data.splice(n, 1);
                  }
                }
              }
            } else {
              swal("取消删除!");
            }
          })          
        },
        addIdcRow() {
          this.idc_table_data.push({
            select_default_value_ca_tem: '正常',  //ca机房温度
            select_default_value_ca_hum: '正常',  //ca机房湿度
            select_default_value_5_tem: '正常',   //5楼机房温度
            select_default_value_5_hum: '正常',   //5楼机房湿度
            select_default_value_2_tem: '正常',   //2号楼机房温度
            select_default_value_2_hum: '正常',   //2号楼机房湿度
            value_of_check_time: '',  // 机房巡检时间
            check_workers: this.$store.state.check_workers, // 存放机房巡检人
          })
        },
        handleDetailSelectionChange(val) {
          // val是所有被选中的对象，
          this.detailMultipleSelection = val;
        },
        addDetailRow() {
          this.detail_table_data.push({
            hardware_default_value: '无',
            system_default_value: '无',
            network_default_value: '无',
            service_default_value: '无',
            other_default_value: '无',
            is_handle: '是',
            is_report: '无',
            alert_source: 'sos2',
          })
        },
        deleteDetailRow() {
          // 删除选中的详细记录数据
          swal({
            title: "确定删除吗?",
            icon: "warning",
            buttons: ['取消', '确定'],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              for (let i = 0; i < this.detailMultipleSelection.length; i++){
                for (let n = 0; n < this.detail_table_data.length; n++){
                  if(this.detail_table_data[n] == this.detailMultipleSelection[i]) {
                    this.detail_table_data.splice(n, 1);  // 从第n个开始删除，总共删除1个
                  }
                }
              }
            } else {
              swal("取消删除!");
            }
          })
        },
        fetch_all_data() {  // 获取所有要提交的数据,并提交
            let important_service = this.$store.state.important_select_default_value;
            let idc_table_data = this.idc_table_data
            let detail_table_data = this.detail_table_data
            let all_workers = this.$store.state.all_workers;
            let default_worker = this.$store.state.default_worker;
            let class_date = this.$store.state.class_date;
            let current_timestamp = this.$store.state.current_timestamp;
            let yesterday_timestamp = this.$store.state.yesterday_timestamp;
            let params;
            if(idc_table_data.length != 0){
              let value_of_check_time;
              for (var i=0;i<idc_table_data.length; i++){
                value_of_check_time = moment(idc_table_data[i].value_of_check_time).format("YYYY-MM-DD HH:mm:ss");
                idc_table_data[i].value_of_check_time = value_of_check_time
                
              }
            }
            params = {
              important_service: important_service,
              idc_table_data: idc_table_data,
              detail_table_data: detail_table_data,
              all_workers: all_workers,
              default_worker: default_worker,
              class_date: class_date,
              current_timestamp: current_timestamp,
              yesterday_timestamp: yesterday_timestamp
            }
            
            this.$api.post('current_record_data',params=params, r =>{
              console.log('short save success');
            })
        },
        save_data_to_db() {
          //
          swal({
                 title: "请确认您的交班信息是否正确?",
                 text: "值班人员：" + this.$store.state.default_worker + '\n'  + '值班日期：' + this.$store.state.class_date,
                 icon: "warning",
                 buttons: ['我再改改', '我要交班'],
                 dangerMode: true,
               })
               .then((willDelete) => {
                 if (willDelete) {
                    
                    swal({
                           text: "交班成功!",
                           button: '确定',
                       }).then((willDelete) => {
                          this.$api.post('save_data_to_db', r =>{
                            console.log('save to db');
                          });
                          window.location.reload()
                       }
                       );
                       //
                    
                    
                    //
                 } else {
                   swal({
                           text: "取消交班!",
                           button: '确定',
                       }
                   );
                 }
               });
          //


            
        },
      },
      computed: {
        // 要想将vuex中state变化后的数据实时更改在页面上，必须通过computed属性来动态改变，不能直接给data中的数据赋state中的值，
        // 因为这样并不起作用
        idc_table_data: function () {
          
          return this.$store.state.idc_table_data
        },
        detail_table_data: function () {
          return this.$store.state.detail_table_data
        },
        check_workers: function () {
          return this.$store.state.check_workers
        }
      }
    }
</script>

<style>
  .my-textarea .el-textarea > textarea{
    border: none;
  }

</style>
<style scoped>
  /*要自定义样式--->要修改巡检人input框的样式，而又不影响其他input框的样式，可以给巡检人这个template下层加个div，
  并且给这个div指定个唯一样式名，方便寻找它，然后根据这个指定的样式名寻找巡检人的input框，再给这个input框指定样式，
  中间使用 /deep/
  如下所示：*/
  .my-worker-style /deep/ .el-input__inner{
    background-color: white;
  }
  /*以上是给单个标签指定样式*/
  .my-cell /deep/ .el-input__inner{
    padding:  0 0 0 5px;
    font-size: 14px;
    text-align: left;
  }
  .el-input__inner{
    background-color: #fff;
    color: #606266;
    padding: 0;
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
  .tags-container{
    line-height: 0;
    text-align: left;
  }
  .edit-button-style{
    line-height: 0;
    text-align: right;
  }
</style>
