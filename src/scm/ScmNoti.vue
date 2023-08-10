<template>
    <h1 data-common-head-title>공지사항</h1>
    <div id="scmTexts" class="ani_down">
        <div class="scm-common-table">
            <!-- <div class="scm-table-header">
                <ul class="scm-table-line" data-scm-table-header>
                    <li>No</li>
                    <li>제목</li>
                    <li>작성일</li>
                    <li>파일</li>
                </ul>
            </div> -->
            <div class="board-table-body">
                <router-link v-for="item in dataPerPage[recentPage]" :to="{ name: 'ScmDetail', params: { id: item.NO } }">
                    <ul class="scm-table-line">
                        <li data-list-date>
                            <p data-list-date-year>{{ item.DATE.substr(0, 4) }}</p>
                            <p data-list-date-day>{{ item.DATE.substr(5,5) }}</p>
                        </li>
                        <!-- <li>{{ item.NO }}</li> -->
                        <li data-list-texts>
                            <p data-list-texts-title>{{ item.TITLE }}</p>
                            <div data-list-texts-body v-html="item.TEXTS"></div>
                        </li>
                        
                        <li data-list-file-yn v-if="item.FILE_YN == 'Y'">
                            <a :href="item.FILE_URL">
                                <font-awesome-icon icon="fa-regular fa-file" />
                            </a>
                        </li>
                        <li v-else>-</li>
                    </ul>
                </router-link>
            </div>
        </div>
        <!-- common pager -->
        <div class="scm-common-pager">
            <ul class="scm-pager-list">
                <li @click="recentPage = recentPage > 1 ? recentPage - 1 : recentPage = 0"><font-awesome-icon icon="fa-solid fa-angle-left" /></li>
                <li v-for="pageNumber in totalPages" @click="recentPage = pageNumber-1" :class="{ 'pager-recent-page': pageNumber == recentPage }">
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

    //Front에서 사용하기위하여 가져온 데이터를 별도의 배열로 복사
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

    .board-table-body .scm-table-line {
        grid-template-columns: 10rem 1fr .2fr 3rem;

        &:hover {
            background-color: rgba(var(--main-black), .05);
        }
    }

    .board-table-body li:nth-child(2) {
        text-align: start;
        padding: 0 1rem;
    }
    
</style>