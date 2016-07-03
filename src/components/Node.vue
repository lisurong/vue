<template>
<div class="n_body">
    <div class="body_span body_bt">
        <span><i class="red">*</i>&nbsp;任务名称</span>
        <span><i class="red">*</i>&nbsp;执行账户</span>
        <span><i class="red">*</i>&nbsp;服务器数</span>
        <span><i class="red">*</i>&nbsp;目标路径</span>
        <span class="span_last"><i class="red">*</i>&nbsp;操作</span>
    </div>
    <div class="body_span body_con">
        <div class="n_par">
            <span>
              <input 
                @focus="focusHandler" 
                value="{{node.name}}" 
                text="text" class="shell_name n_input230"/>
            </span>
            <span>
                <select class="n_sel">
                    <option>tomcat</option>
                    <option>tomcat</option>
                    <option>tomcat</option>
                </select>
            </span>
            <span><input text="text" class="n_input230" value="{{node.servers}}" /></span>
            <span><input text="text" class="n_input230" value="{{node.dir}}" /></span>
            <span class="span_last"><input type="checkbox"/>&nbsp;完成后暂停<a href="javascript:;" class="n_bj" style="color:#000;">编辑</a><a href="javascript:;" class="n_del2"></a></span>
        </div>
        <div :class="childClass">
            <div class="n_btn">
                <table>
                    <tr>
                        <th><i class="red">*</i>&nbsp;文件名称：</th>
                        <td>
                            <label><input type="radio" name="1" />手动输入</label>
                            <label><input type="radio" name="1" />脚本克隆</label>
                            <label><input type="radio" name="1" />本地脚本</label>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="n_concent">
                <table>
                    <tr>
                        <th><i class="red">*</i>&nbsp;脚本名称：</th>
                        <td><input type="text" class="n_input450" value="{{node.name}}" /></td>
                    </tr>
                    <tr>
                        <th><i class="red">*</i>&nbsp;脚本名称：</th>
                        <td><input type="text" class="n_input450" value="{{node.name}}" /></td>
                    </tr>
                    <tr>
                        <th><i class="red">*</i>&nbsp;脚本名称：</th>
                        <td><input type="text" class="n_input450" value="{{node.name}}" /></td>
                    </tr>
                </table>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'node',
  props: ['node'],
  data () {
    return {
      'editting': false
    }
  },
  methods: {
    focusHandler () {
      this.editting = true
    },
    blurHandler () {
      this.editting = false
    }
  },
  computed: {
    childClass: function () {
      return {
        'n_child': true,
        'hidden': !this.editting,
        'show': this.editting
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.show{
  display: block;
}
.hidden{
  display: none;
}
</style>
