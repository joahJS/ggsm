<template>
    <h1 data-common-head-title>재고현황</h1>
    <div id="scmTexts" class="ani_down">
        
    </div>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    //store에서 영역별 데이터 import
    import { useScmInvStore } from '@/store/scmInvStore'
    import { storeToRefs } from 'pinia';

    const scmInvStore = useScmInvStore()
    const { scmInvGroup } = storeToRefs(scmInvStore)
    

    
</script>

<style lang="scss" scoped>
    
</style>