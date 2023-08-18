<template>
    <ScmHeaders />

    <section class="scm-common-board-inner">
        <h1 data-common-head-title>글쓰기</h1>

        <div id="scmNotiWr" class="ani_down">
            <div class="wr-top-inputs">
                <div class="top-input-line">
                    <h2 class="wr-input-title">제목</h2>
                    <div class="wr-input-container">
                        <font-awesome-icon icon="fa-heading" />
                        <input type="text" class="wr-input">
                    </div>
                    
                </div>
            </div>
            <div class="wr-body">
                <QuillEditor :options="editorOption" theme="snow" />
                <div class="wr-upload-container">
                    <h2 class="wr-input-title">파일 첨부</h2>
                    <div class="wr-upload-body">
                        <div class="wr-upload-location" @drop.prevent="dragToUpload" @dragenter.prevent @dragover.prevent>
                            <div class="wr-drag-location">
                                <font-awesome-icon icon="fa-file-import" />
                                <p data-drag-here-note>drag to here</p>
                            </div>
                            <p>or</p>                        
                            <label class="wr-upload-label" for="wrUploadOrigin">
                                <font-awesome-icon icon="fa-folder-open" />
                                Browse
                            </label>
                            <input id="wrUploadOrigin" type="file" multiple @change="inputToUpload">
                        </div>
                        <div class="wr-up-list-location">
                            <p class="up-list-title">Uploaded files list</p>
                            <ul v-for="item in recentFileList" class="wr-uploaded-list">
                                <li>
                                    <font-awesome-icon icon="fa-regular fa-file" />
                                    <p>{{ item.name }}<span data-file-size>({{ Math.floor(item.size / 1024) }}kb)</span></p>
                                    <font-awesome-icon @click="isDelete" icon="trash-can" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </section>
    
</template>
<script setup>
    import ScmHeaders from '@/components/ScmHeaders.vue';
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css';

    import { useRoute } from 'vue-router'

    let recentFile = {}
    const recentFileList = reactive([])
        
    let dragToUpload = (e) => {

        const datas = ref(e.dataTransfer.files)

        for(let i=0; i < datas.value.length ; i++) {
            recentFile.name = datas.value[i].name;
            recentFile.size = datas.value[i].size;

            Object.assign(recentFileList, datas.value[i])

            recentFileList.push({...recentFile})
            
        }
        console.log(recentFileList)
    }

    const inputToUpload = (e) => {
        const inputDatas = ref(e.currentTarget.files)

        console.log(inputDatas.value)
        
        for(let i=0; i<inputDatas.value.length; i++) {
            recentFile.name = inputDatas.value[i].name;
            recentFile.size = inputDatas.value[i].size;

            console.log(inputDatas.value[i].name)

            Object.assign(recentFileList, inputDatas.value[i])

            recentFileList.push({...recentFile})
        }

        inputDatas.value = null
    }

    const isDelete = (e) => {
        const thisItem = e.currentTarget.parentNode
        const nowList = e.currentTarget.parentNode.parentNode

        console.log(nowList)
        console.log(thisItem)        
      
    }




    //Quill editor 옵션(바인드 되어있음)
    const editorOption = ref({
        placeholder: '본문을 작성해주세요.'
    }) 


</script>
<style lang="scss" scoped>
    #scmNotiWr {
        display: flex;
        flex-direction: column;
    }

    .wr-input-container {
        border: 1px solid rgba(var(--main-black), .15);
        border-radius: .5rem;
        padding: .5rem .75rem;
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 1rem;
            font-size: var(--fontM);
            color: rgba(var(--deepblue), 1);
        }

        .wr-input {
            padding: .5rem .75rem .5rem 2.25rem;
            width: 100%;
            outline: 0;
        }
    }

    .wr-input {

    }

    .wr-input-title {
        margin-bottom: .5rem;
        font-size: var(--fontMT)
    }

    .wr-body {
        margin-top: 1rem;
    }

</style>