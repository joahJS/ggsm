<template>
    <h1 data-common-head-title>세금계산서 발행현황</h1>
    <div id="scmTexts" class="ani_down">
        
    </div>
</template>

<script setup>
    //store에서 영역별 데이터 import
    import { useScmStore } from '@/store/scmStore'
    import { storeToRefs } from 'pinia';

    const scmStore = useScmStore()
    const { scmGroup } = storeToRefs(scmStore)
    

    
</script>

<style lang="scss" scoped>
    
</style>