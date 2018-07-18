import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    all_data: [],
    filter_data: [],
    start_time: '',
    end_time: '',
    search_key: '',
    search_time: [],
    all_front_data: [],
    default_front_data: {
      important_service:[{
        select_default_value1: '正常',
        select_default_value2: '正常',
        select_default_value3: '正常',
        select_default_value4: '正常',
        select_default_value5: '正常'
        }],
      idc_table_data: [{
        select_default_value_ca_tem: '正常',  //ca机房温度
        select_default_value_ca_hum: '正常',  //ca机房湿度
        select_default_value_5_tem: '正常',   //5楼机房温度
        select_default_value_5_hum: '正常',   //5楼机房湿度
        select_default_value_2_tem: '正常',   //2号楼机房温度
        select_default_value_2_hum: '正常',   //2号楼机房湿度
        value_of_check_time: '',  // 机房巡检时间
        check_workers: 'sysmgr1', // 存放机房巡检人
      }, {
        select_default_value_ca_tem: '正常',  //ca机房温度
        select_default_value_ca_hum: '正常',  //ca机房湿度
        select_default_value_5_tem: '正常',   //5楼机房温度
        select_default_value_5_hum: '正常',   //5楼机房湿度
        select_default_value_2_tem: '正常',   //2号楼机房温度
        select_default_value_2_hum: '正常',   //2号楼机房湿度
        value_of_check_time: '',  // 机房巡检时间
        check_workers: 'sysmgr1', // 存放机房巡检人
      }, {
        select_default_value_ca_tem: '正常',  //ca机房温度
        select_default_value_ca_hum: '正常',  //ca机房湿度
        select_default_value_5_tem: '正常',   //5楼机房温度
        select_default_value_5_hum: '正常',   //5楼机房湿度
        select_default_value_2_tem: '正常',   //2号楼机房温度
        select_default_value_2_hum: '正常',   //2号楼机房湿度
        value_of_check_time: '',  // 机房巡检时间
        check_workers: 'sysmgr1', // 存放机房巡检人
      }, {
        select_default_value_ca_tem: '正常',  //ca机房温度
        select_default_value_ca_hum: '正常',  //ca机房湿度
        select_default_value_5_tem: '正常',   //5楼机房温度
        select_default_value_5_hum: '正常',   //5楼机房湿度
        select_default_value_2_tem: '正常',   //2号楼机房温度
        select_default_value_2_hum: '正常',   //2号楼机房湿度
        value_of_check_time: '',  // 机房巡检时间, 赋值的话必须为时间类型  new Date(Date.parse('2018-09-09 12:09:09'))
        check_workers: 'sysmgr1', // 存放机房巡检人
      }]
      ,
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
        value: '白班',
        label: 'sysmgr1，sysmgr1'
      }, {
        value: '夜班',
        label: 'sysmgr1，sysmgr1'
      }],  // 所有可选值班人员，需要从后台获取， 类型数组
      default_worker: 'sysmgr1，sysmgr1   夜班',  // 默认的值班人员，需要从后台获取，类型字符串
      check_workers: ['sysmgr1', 'sysmgr1'],  // 默认巡检机房的人员，需要从后台获取， 类型数组
      },
    check_workers: ['sysmgr1', 'sysmgr2'],  // 默认巡检机房的人员，需要从后台获取， 类型数组
    default_worker: ['sysmgr1, sysmgr2   夜班'],  // 默认的值班人员，需要从后台获取，类型字符串
    all_workers: [{
      value: '白班',
      label: 'sysmgr1'
    }, {
      value: '夜班',
      label: 'sysmgr2'
    }],  // 所有的值班人员，需要从后台获取，类型数组
    important_select_default_value: [],
    idc_table_data: [],
    detail_table_data: [],
  },
  mutations: {
    changeAllData (state, datas) {
      state.all_data = datas
    },
    changeFilterData (state, filterData) {
      if (filterData[0] == 'none_data'){
        state.filter_data = ['none_data']
      }else{
        state.filter_data = filterData;
      }
    },
    changeSearchTime (state, timeArry) {
      if (timeArry == 'clear'){
        state.search_time = []
      }
      state.start_time = timeArry[0];
      state.end_time = timeArry[1];
    },
    changeSearchKey (state, SearchKey) {
      state.search_key = SearchKey;
    },
    changeIdcTableData (state, data) {
      state.idc_table_data = data;
      let save_data = JSON.stringify(data)
      sessionStorage.setItem('idc_table_data', save_data);
    },
    changeDetailData (state, data) {
      state.detail_table_data = data;
      let save_data = JSON.stringify(data)
      sessionStorage.setItem('detail_table_data', save_data);
    },
    changeImportantService (state, data) {
      state.important_select_default_value = data
      console.log(data, 'change service data');
      let save_data = JSON.stringify(data)
      sessionStorage.setItem('important_select_default_value', save_data);
    },
    changeAllFrontData (state, data) {
      console.log(data, 'changeAllFrontData');
      state.important_select_default_value = data.important_service  // 将接口获取的数据给state
      state.all_workers = data.all_workers  // 将接口获取的数据给state
      state.default_worker = data.default_worker  // 将接口获取的数据给state
      console.log(state.default_worker, 'default worker')
      console.log(state.important_select_default_value, 'set important')
      if (data.detail_table_data.length == 0) {  // 更改详细记录的数据
        state.all_front_data = state.default_front_data // 设置默认值
        state.detail_table_data = state.default_front_data.detail_table_data
        console.log('set defaul all data')
      }else {
        state.all_front_data = data
        state.detail_table_data = data.detail_table_data  // 将接口获取的数据给state， 同时存放到sessionStorage
        let detail_table_data = JSON.stringify(state.all_front_data.detail_table_data)
        sessionStorage.setItem('detail_table_data', detail_table_data);
        console.log(state.detail_table_data,'detail')
      }
      if(data.idc_table_data.length == 0) {
        state.idc_table_data = state.default_front_data.idc_table_data
        console.log(state.idc_table_data,'idc','default idac')
      }else{
        state.all_front_data = data
        state.idc_table_data = state.all_front_data.idc_table_data  // 将接口获取的数据给state
        state.check_workers = data.idc_table_data[0].check_workers
        let save_data = JSON.stringify(state.all_front_data.idc_table_data)
        sessionStorage.setItem('idc_table_data', save_data);
        console.log(state.idc_table_data,'change idc')
      }

    },

  },
  //  以下的getters属性函数在本项目中用不到了，可以删掉
  //  本getter主要作用是将存放在sessionStorage中的数据取出来
  getters: {
    // 相当于computed
    important_service_data: function (state) {
      if (state.important_select_default_value.length == 0) {
        let important_select
        important_select = JSON.parse(sessionStorage.getItem('important_select_default_value')); // 注意：
        // important_select这个变量名在getters中，
        // 要保证唯一
        console.log(important_select, 'getter get sessionStorage services')
        state.important_select_default_value = important_select;
        return important_select
      }else{
        console.log(state.important_select_default_value, 'getter2 get state.service')
        return state.important_select_default_value
      }
    },
    idc_table_data: function (state) {
      if (state.idc_table_data.length == 0) {
        let idc_data
        idc_data = JSON.parse(sessionStorage.getItem('idc_table_data')); // 注意：idc_data这个变量名在getters中，
        // 要保证唯一
        state.idc_table_data = idc_data;
        console.log(idc_data, 'getter get idc_data')
        return idc_data
      }else{
        console.log(state.idc_table_data, 'getter2 get state.idc_data')
        return state.idc_table_data
      }

    },
    detail_table_data: function (state){
      if(state.detail_table_data.length == 0){
        let  detail_data = JSON.parse(sessionStorage.getItem('detail_table_data'));
        state.detail_table_data = detail_data;
        return detail_data
      }
    },

  }
});

export default store
