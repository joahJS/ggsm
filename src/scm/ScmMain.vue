<template>
    <SubpHero />
    <section class="common-inner">

        <div v-show="getCate == 'fwd'">
            <ScmFwd />
        </div>
        <div v-show="getCate == 'invCs'">
            <ScmInvCs />
        </div>
        <div v-show="getCate == 'reqReg'">
            <ScmReqReg />
        </div>

        <div v-show="getCate == 'scmNoti'">
            <ScmNotice />
        </div>        
        
        <!-- <h1 data-common-head-title>SCM</h1>
        <div id="scmTexts" class="ani_down">
            
        </div> -->
    </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    import ScmNotice from '@/scm/ScmNoti.vue'; //공지사항
    import ScmFwd from '@/scm/ScmFwd.vue'; //출고현황
    import ScmInvCs from '@/scm/ScmInvCs.vue'; //재고현황

    import ScmReqReg from '@/scm/ScmReqReg.vue'; //주문의뢰서 접수


    //store에서 영역별 데이터 import
    import { useScmStore } from '@/store/scmStore'
    import { storeToRefs } from 'pinia';
    import { RiWechatChannelsFill } from 'vue-remix-icons';

    import { useRoute } from 'vue-router'

    const getCate = useRoute().params.category

    const scmStore = useScmStore()
    const { scmGroup } = storeToRefs(scmStore)   
    
</script>

<style lang="scss" scoped>
    [data-common-head-title] {
        margin: 6rem 0 3rem;
    }
</style>