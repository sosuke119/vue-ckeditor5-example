<template>
  <div id="app">
    <div class="content">
      <ckeditor :editor="editor" @ready="onReady" v-model="editorData" :config="editorConfig"></ckeditor>
      <button @click="submit">submit</button>
    </div>
  </div>
</template>
<script>

import DecoupledDoc from '@ckeditor/ckeditor5-build-decoupled-document' // ckeditor - 文字編輯器
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn' // ckeditor - 文字編輯器 - 語言
const upload = require('@/utils/ckeditorUpload') // ckeditor - 文字編輯器 - upload設定
export default {
  data () {
    return {
      editor: DecoupledDoc,
      editorData: '<h1>文档型富文本编辑器</h1>',
      editorConfig: {
        // 编辑器的配置
        language: 'zh-cn',
        extraPlugins: [upload.MyCustomUploadAdapterPlugin]
      }
    }
  },
  methods: {
    // 編輯器 Ready初始化
    onReady (editor) {
      // 在可编辑区域之前插入工具栏。
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      )
    },
    // 送出內容
    submit () {
      console.log('ckeditor content', this.editorData)
    }
  }
}
</script>
<style lang="stylus">
body
  margin 50px
  background gray

.content
  background white
  height 500px

.ck-content
  height 460px
</style>
