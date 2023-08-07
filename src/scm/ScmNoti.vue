<template>
    <h1 data-common-head-title>공지사항</h1>
    <div id="scmTexts" class="ani_down">
        <div class="scm-common-table">
            <div class="scm-table-header">
                <ul class="scm-table-line" data-scm-table-header>
                    <li>No</li>
                    <li>제목</li>
                    <li>작성일</li>
                    <li>파일</li>
                </ul>
            </div>
            <div v-for="item in copyOfData" class="scm-table-body">
                <ul class="scm-table-line">
                    <li>{{ item.NO }}</li>
                    <li>{{ item.TITLE }}</li>
                    <li>{{ item.DATE }}</li>
                    <li v-if="item.FILE_YN == 'Y'">
                        <a :href="item.FILE_URL">
                            <font-awesome-icon icon="fa-regular fa-file" />
                        </a>
                    </li>
                    <li v-else>-</li>
                </ul>
            </div>
        </div>
        <button type="button" @click="chkChk()">확인용버튼</button>
    </div>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    //store에서 영역별 데이터 import
    import { useScmNoticeStore } from '@/store/scmNoticeStore'
    import { storeToRefs } from 'pinia';

    const scmNoticeStore = useScmNoticeStore()
    const { scmNoticeGroup } = storeToRefs(scmNoticeStore)
    const copyOfData = [...scmNoticeGroup.value]
    
    function chkChk() {
        console.log(copyOfData)
    }
    
</script>

<style lang="scss" scoped>
    // table

    .scm-table-line {
        grid-template-columns: 3rem 1fr .2fr 3rem;
    }

    .scm-table-body li:nth-child(2) {
        text-align: start;
        padding: 0 1rem;
    }
    
</style>