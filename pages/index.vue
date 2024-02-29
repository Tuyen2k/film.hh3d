<template>
  <div>
    <Editor></Editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor from '~/components/Editor.vue';



export default Vue.extend({
  name: 'IndexPage',
  components: {
    Editor
  },
  data() {
    return {

    };
  },
  methods: {
    saveEditor() {


    }
  }
})
</script>

<style>
.ck-editor__editable {
  height: 300px;
}
</style>
