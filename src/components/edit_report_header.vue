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
        <el-menu-item index="1" style="font-size: larger">记录</el-menu-item>
        <el-menu-item index="2" style="font-size: larger" target="_blank">
          <a style="text-decoration-line: none" href="https://www.baidu.com" target="_blank">历史记录</a>
        </el-menu-item>

        <el-menu-item index="3" class="align-right select-people">
        <template>
          <el-select v-model="default_worker" placeholder="请选择值班人员" size="small">
            <el-option
            v-for="item in worker"
            :key="item.value"
            :label="item.label+ '   ' +item.value"
            :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '0',
        worker: this.$store.state.all_workers,
        default_worker: this.$store.state.default_worker,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // 获取选中元素的属性：index值等
        console.log(key, keyPath,'获取选中元素的属性：index值等');
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
