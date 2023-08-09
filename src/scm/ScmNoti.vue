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
            <div v-for="item in dataPerPage[recentPage]" class="scm-table-body">
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
        <div class="scm-common-pager">
            <ul class="scm-pager-list">
                <li @click="recentPage = recentPage > 1 ? recentPage - 1 : recentPage = 0"><font-awesome-icon icon="fa-solid fa-angle-left" /></li>
                <li v-for="pageNumber in totalPages" @click="recentPage = pageNumber-1" :class="{ pagerRecentPage: pageNumber == recentPage }">
                    {{ pageNumber }}
                </li>
                <li @click="recentPage = recentPage < totalPageNum - 1 ? recentPage + 1 : recentPage = totalPageNum - 1"><font-awesome-icon icon="fa-solid fa-angle-right" /></li>
            </ul>
        </div>
        <!-- <button type="button" @click="chkPage"> recentPage 확인용 버튼</button> -->
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

    const perPage = 5 //페이지 당 글 갯수
    const totalPageNum = Math.ceil(copyOfData.length / perPage) // 페이지가 총 몇 페이지 나와야하는지 계산

    const totalPages = Array.from({ length: totalPageNum }, (v, i) => i+1); // 모든 페이지 구하기(1페이지~마지막 페이지까지) -> 예시) <  1 2 3 4 5  >
    console.log(totalPages)

    //각 페이지마다 들어가야할 데이터들 분류하기( pagesDivide() + dataPerPage )
    function pagesDivide(data = [], size = 1) {
        const arr = [];

        for (let i = 0; i < data.length; i += size) {
            arr.push(data.slice(i, i + size));
        }

        return arr;
    }

    const dataPerPage = pagesDivide(copyOfData, perPage)

    console.log(dataPerPage)

    const recentPage = ref(0)  // 현재페이지

    function chkPage() {
        console.log(recentPage.value)
    }

    watch(recentPage, () => {
        
    })
    
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