<template>
<div class="n_main">
    <div class="n_div_t">
        <span><i class="red">*</i>&nbsp;作业名称：</span>
        <input text="text" class="n_input450" value="{{data.name}}" />
    </div>

    <div id="n_boxs" class="n_boxs">
      <shell v-for="shell in data.shells" :shell="shell"></shell>
    </div>

    <div class="n_add_box" id="n_add_box">
        <a class="add_rw" href="javascript:;">+&nbsp;添加任务</a>
        <div class="rw_xl" style="display:none;">
            <a href="javascript:;" class="add_by_file">添加传输文件</a>
            <a href="javascript:;" class="add_shell">添加脚本</a>
        </div>
    </div>
    <div class="n_b">
        <a class="add_rw" href="javascript:;">保存</a>
        <a class="add_rw" href="javascript:;">去执行</a>
    </div>
</div>
</template>

<script>
require('assets/css/common.css')
require('assets/css/newFile.css')
import Shell from './components/Shell.vue'
var $ = require('jquery')
export default {
  data () {
    return {
      data: {}
    }
  },
  components: {
    Shell
  },
  created () {
    var me = this
    $.ajax({
      type: 'GET',
      url: '/static/data.json',
      dataType: 'json',
      success: function (resp) {
        me.data = resp
      }
    })
  }
}
</script>

<style>

</style>
