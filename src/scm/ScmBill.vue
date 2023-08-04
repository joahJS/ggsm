<template>
    <h1 data-common-head-title>주문서</h1>
    <div class="common-filter-container">
        <div class="each-filter filter-type-select">
            <h2 class="ft-header">구분</h2>
            <select data-bill-category>
                <option>전체</option>
                <option>연계</option>
                <option>일반</option>
            </select>
        </div>
        <div class="each-filter">
            <h2 class="ft-header">날짜</h2>
            <div class="filter-type-dates">
                <VDatePicker v-model="range" is-range>
                    <template #default="{ inputValue, inputEvents }">
                        <div class="flex justify-center items-center">
                            <article data-date-container>
                                <input type="text" :value="inputValue.start" v-on="inputEvents.start" />
                                <font-awesome-icon icon="fa-regular fa-calendar" />
                            </article>
                            <article data-date-container>
                                <input type="text" :value="inputValue.end" v-on="inputEvents.end" />
                                <font-awesome-icon icon="fa-regular fa-calendar" />
                            </article>                        
                        </div>
                    </template>
                </VDatePicker>
                <!-- <VDatePicker v-model.range="filterDate" mode="date" :locale="ftLocale" /> -->
                <!-- <p>{{ filterDate.start }}</p>
                <p>{{ filterDate.end }}</p> -->
                <button type="button" @click="setToday()">Today</button>
            </div>
            
        </div>
        <button class="common-filter-button" id="scmSearchBtn" type="button">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <p>Search</p>
        </button>
    </div>
    <div id="scmTexts" class="ani_down">
        
    </div>
</template>

<script setup>
    //store에서 영역별 데이터 import
    import { useScmStore } from '@/store/scmStore'
    import { storeToRefs } from 'pinia';

    const scmStore = useScmStore()
    const { scmGroup } = storeToRefs(scmStore)

    const range = ref({
        start: new Date(),
        end: new Date(),
    });

    const filterMask = ref({
        
    })   

    function setToday() {
        range.value.start = new Date()
        range.value.end = new Date()
        console.log(range.value)
    }

    
</script>

<style lang="scss" scoped>
    .each-filter {
        width: 25%;
    }

    #scmSearchBtn {
        background-color: rgba(var(--darkblue), 1);
        color: rgb(var(--white));
        box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);

        svg {
            color: rgb(var(--white));
        }
    }
</style>