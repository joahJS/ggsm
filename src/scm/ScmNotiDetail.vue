<template>
    <SubpHero />
    <div id="scmNtcDtBody" class="ani_down common-inner board-detail-inner">
        <h1 data-common-head-title>공지사항</h1>
        <div v-for="item in getThisData" id="scmNtcDtText" class="ani_down common-inner">
            <div class="board-title-line">
                <p data-board-detail-title>{{ item.TITLE }}</p>
                <P data-board-detail-title-bottom>
                    <span>{{ item.WRITER }}</span>
                    <span>{{ item.DATE }}</span>
                </P>
            </div>
            <div v-html="item.TEXTS" class="board-texts-body">

            </div>
            <div class="common-board-button-line">
                <router-link :to="{ name: 'Scm', params: { category: 'scmNoti' }}">
                    <button type="button" class="common-board-button">
                        목록
                    </button>
                </router-link>
            </div>
        </div>
    </div>

</template>
<script setup>
    import SubpHero from '@/components/SubpHero.vue';
    import { useRoute } from 'vue-router'

    //store에서 영역별 데이터 import
    import { useScmNoticeStore } from '@/store/scmNoticeStore'
    import { storeToRefs } from 'pinia';

    const scmNoticeStore = useScmNoticeStore()
    const { scmNoticeGroup } = storeToRefs(scmNoticeStore)

    const getParams = useRoute();
    const getId = parseInt(getParams.params.id)

    console.log(getId)

    //Front에서 사용하기위하여 가져온 데이터를 별도의 배열로 복사
    const copyOfData = [...scmNoticeGroup.value]

    // const getThisData = copyOfData.find((f) => f.NO = getId)
    const getThisData = copyOfData.filter((f) => f.NO == getId)
    console.log(getThisData)
    console.log(copyOfData)
</script>
<style lang="scss" scoped>
    .common-board-button {
        background-color: rgb(var(--black) 1);
        color: rgb(var(--white));
    }
</style>