<template>
  <div>
    <Editor></Editor>
    <input type="file" @change="handleUpFile" />
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


    },
    handleUpFile(e : any){
      const file = e.target.files[0]
      console.log('file', file);
      
    }
  }
})
</script>

<style>
.ck-editor__editable {
  height: 300px;
}
</style>
