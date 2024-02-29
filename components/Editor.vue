<template>
    <div>
        <h2>CKEditor Example</h2>
        <ckeditor class="ckeditor" :editor="editor" v-model="editorData" />
        <md-button class="md-raised md-primary">Save</md-button>
    </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return new Promise(async (resolve, reject) => {
            const file = await this.loader.file;

            console.log('file', file);

            // const base64 = await toBase64(file);
            // if (!base64 || base64.trim().length === 0) {
            //     reject('Tải ảnh thất bại');
            // }
            // try {
            //     const image = await ImageService.create2(base64);
            //     if (!image.url) {
            //         reject('Không thể tải lên hình ảnh');
            //         throw new Error('Không thể tải lên hình ảnh');
            //     }
            resolve({ default: file });
            // } catch (error) {
            //     reject(`Không thể tải lên hình ảnh: ${error?.response?.message ?? ''}`);
            // }
        });
    }

    abort() { }
}

export default {
    name: 'IndexPage',
    components: {
        // Use the <ckeditor> component in this view.
        ckeditor: CKEditor.component
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                extraPlugins: [this.MyCustomUploadAdapterPlugin]
            }
        };
    },
    methods: {
        MyCustomUploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                console.log('aaaaa');
                
                return new UploadAdapter(loader);
            };
        },
    }
}

</script>