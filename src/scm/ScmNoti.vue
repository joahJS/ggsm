<template>
    <h1 data-common-head-title>공지사항</h1>
    <div id="scmTexts" class="ani_down">
        
    </div>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    //store에서 영역별 데이터 import
    import { useScmStore } from '@/store/scmStore'
    import { storeToRefs } from 'pinia';

    const scmStore = useScmStore()
    const { scmGroup } = storeToRefs(scmStore)
    

    
</script>

<style lang="scss" scoped>
    
</style>