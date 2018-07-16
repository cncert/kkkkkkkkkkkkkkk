<template>
    <div id="header">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" style="font-size: larger">历史记录</el-menu-item>
        <el-menu-item index="2"  class="align-right">
          <div class="demo-input-suffix">
            <el-input
              placeholder="请输入内容"
              v-model="search_key" size="small"
              @keyup.enter.native="onSubmit"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </el-menu-item>
        <el-menu-item index="3"  class="align-right">
          <span>{{people.label}}</span>
        </el-menu-item>

        <!--<el-menu-item index="3" class="align-right select-people">-->
          <!--<template>-->
            <!--<el-select v-model="value6" placeholder="请选择值班人员" size="small">-->
              <!--<el-option-->
                <!--v-for="item in cities"-->
                <!--:key="item.value"-->
                <!--:label="item.label"-->
                <!--:value="item.value">-->
                <!--<span style="float: left">{{ item.label }}</span>-->
                <!--<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>-->
              <!--</el-option>-->
            <!--</el-select>-->
          <!--</template>-->
        <!--</el-menu-item>-->
      </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '0',
        people: {
          value: '6.18 夜班',
          label: '张三，李四'
        },
        value6: '',
        search_key:''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // 获取选中元素的属性：index值等
        console.log(key, keyPath,'获取选中元素的属性：index值等');
      },
      onSubmit() {
        if (this.search_key == ''){
          let datas;
          let filter_data;
          datas = this.$store.state.all_data;
          this.$store.commit('changeFilterData', datas);
          return filter_data
        }else {
          this.$store.commit('changeSearchKey', this.search_key);
          this.$store.commit('changeSearchTime', 'clear');
          this.filterDatas() //过滤符合条件的数据
        }
      },
      filterBySearchKey (item) {
        let itemIterator;
        let filterKey = ['classes', 'name', 'desc', 'dateTime', 'week']
        itemIterator = Reflect.enumerate(item[0])
        for (var i of filterKey){
          if (typeof itemIterator['_t'][i] == 'object'){
            for (var sub of itemIterator['_t'][i] ){
              if (sub.includes(this.search_key)){
                return item
              }
            }
          }else if( itemIterator['_t'][i].includes(this.search_key)){
            return item
          }
        }
      },
      filterDatas () {
          let datas;
          let filter_data;
          datas = this.$store.state.all_data;
          filter_data = datas.filter(this.filterBySearchKey);
          if (filter_data.length == 0){
            filter_data = ['none_data']
          }
          console.log(filter_data)
          this.$store.commit('changeFilterData', filter_data);
          return filter_data
        },
    }
  }
</script>

<style scoped>
  .align-right{
    float: right;
  }
</style>
<style>  /*修改默认的样式：新建一个style，不加scoped*/
 .el-input__inner{
    background-color: #606266;
    color: #fff;
  }
</style>
