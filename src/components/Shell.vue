<template>
<div class="n_box">
    <div class="n_head {{shell.type}}">
        <div class="n_div_t">
            <span class="span_t"><i class="red">*</i>&nbsp;步骤名称：</span>
            <input text="text" class="n_input230" value="{{shell.name}}"/>
        </div>
        <div class="n_r_btn">
            <a href="javascript:;" class="n_zk"></a>
            <a href="javascript:;" class="n_del"></a>
        </div>
    </div>
    <div class="n_body">

        <node v-for="node in shell.nodes" :node="node"></node>          
        
        <div class="body_span body_bt">
            <a class="n_add {{type}}">+&nbsp;新增节点</a>
        </div>
    </div>
</div>
</template>

<script>
import Node from './Node.vue'
export default {
  name: 'shell',
  props: ['shell'],
  components: {
    Node
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
