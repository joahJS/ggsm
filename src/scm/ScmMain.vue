<template>
    <SubpHero />
    <section class="common-inner">

        <div v-show="isTap == 'bill'">
            <ScmBill />
        </div>
        <div v-show="isTap == 'wait'">
            <ScmWait />
        </div>
        <div v-show="isTap == 'stockCs'">
            <ScmStockCs />
        </div>
        <div v-show="isTap == 'shipCs'">
            <ScmShipCs />
        </div>
        <div v-show="isTap == 'invoCs'">
            <ScmInvoCs />
        </div>
        <div v-show="isTap == 'ledger'">
            <ScmLedger />
        </div>


        

        <div v-show="isTap == 'scmNoti'">
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
    import ScmBill from '@/scm/ScmBill.vue'; //주문서
    import ScmWait from '@/scm/ScmWait.vue'; //생산대기현황
    import ScmStockCs from '@/scm/ScmStockCs.vue'; //고객재고현황
    import ScmShipCs from '@/scm/ScmShipCs.vue'; //출하현황
    import ScmInvoCs from '@/scm/ScmInvoCs.vue'; //세금계산서 발행현황
    import ScmLedger from '@/scm/ScmLedger.vue'; //거래처원장

    //store에서 영역별 데이터 import
    import { useScmStore } from '@/store/scmStore'
    import { storeToRefs } from 'pinia';
    import { RiWechatChannelsFill } from 'vue-remix-icons';

    const scmStore = useScmStore()
    const { scmGroup, isTap } = storeToRefs(scmStore)   
    
</script>

<style lang="scss" scoped>
    
</style>