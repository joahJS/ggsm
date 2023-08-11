<template>
    <!-- <h1 data-common-head-title>출고관리</h1> -->
    <div class="common-filter-body">
        <div class="common-filter-container">
            <div class="each-filter">
                <h2 class="ft-header">출하기간</h2>
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
                    <!-- <button type="button" @click="setToday()">Today</button> -->
                </div>
            </div>
            <div class="each-filter">
                <h2 class="ft-header">품목</h2>
                <input type="text">
            </div>
            <div class="each-filter">
                <h2 class="ft-header">재질</h2>
                <input type="text">
            </div>
            <!-- -->
            <div class="each-filter">
                <h2 class="ft-header">재고구분</h2>
                <div class="filter-type-checkbox">
                    <label>
                        <input type="checkbox" name="stockCate" value="rawMt">
                        원소재
                    </label>
                    <label>
                        <input type="checkbox" name="stockCate" value="prod">
                        제품
                    </label>
                    <label>
                        <input type="checkbox" name="stockCate" value="stProd">
                        보관품
                    </label>
                </div>
            </div>
            <div class="each-filter">
                <h2 class="ft-header">두께</h2>
                <input data-filter-thick-min type="text">
                <input data-filter-thick-max type="text">
            </div>
            <div class="each-filter">
                <h2 class="ft-header">폭</h2>
                <input data-filter-width-min type="text">
                <input data-filter-width-max type="text">
            </div>

        </div>
        <div class="filter-button-container">
            <button class="common-filter-button" id="scmSearchBtn" type="button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <p>Search</p>
            </button>
            <button class="common-filter-button" id="scmExcelBtn" type="button">
                <font-awesome-icon icon="fa-regular fa-file-excel" />
                <p>Excel</p>
            </button>
            <button class="common-filter-button" id="scmPrintBtn" type="button">
                <font-awesome-icon icon="fa-solid fa-print" />
                <p>Print</p>
            </button>
        </div>
        
    </div>

    <div id="scmTexts" class="ani_down scm-common-body">
        <div class="scm-common-table">
            <div class="scm-table-header">
                <ul class="scm-table-line" data-scm-table-header>
                    <li><input v-model="hdCheck" value="allChecked" type="checkbox"></li>
                    <li>구분</li>
                    <li>작업사항</li>
                    <li>강종</li>
                    <li>두께</li>
                    <li>폭</li>
                    <li>길이</li>
                    <li>CUT</li>
                    <li>등분</li>
                    <li>작업사항</li>
                    <li>요구사항</li>
                    <li>작성일</li>
                    <li>확인유무</li>
                </ul>
            </div>
            <div class="scm-table-body">
                <ul v-for="item in copyOfData" class="scm-table-line">
                    <li><input type="checkbox" v-model="item.CHK"></li>
                    <li>{{ item.CATE }}</li>
                    <li>{{ item.WK_INFO }}</li>
                    <li>{{ item.ST_GRADE }}</li>
                    <li>{{ item.THICK }}</li>
                    <li>{{ item.WIDTH }}</li>
                    <li>{{ item.LENGTH }}</li>
                    <li>{{ item.CUT }}</li>
                    <li>{{ item.EQ_DIV }}</li>
                    <li>{{ item.WK_DETAIL }}</li>
                    <li>{{ item.REQ }}</li>
                    <li>{{ item.DATE }}</li>
                    <li>{{ item.IS_VIEW }}</li>
                </ul>
            </div>
        </div>
    </div>
    <button type="button" @click="chkView()">test button</button>

</template>

<script setup>
    //store에서 영역별 데이터 import
    import { useScmFwdStore } from '@/store/scmFwdStore'
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';

    const scmFwdStore = useScmFwdStore()
    const { scmFwdGroup } = storeToRefs(scmFwdStore)
    const copyOfData = [...scmFwdGroup.value]

    const inputValue = ref(new Date())
    const hdCheck = ref([])

    function chkView() {
        console.log(copyOfData[0].CHK + ', ' + copyOfData[1].CHK + ', ' + copyOfData[2].CHK)
    }

    const range = ref({
        start: new Date(),
        end: new Date(),
    });

    function setToday() {
        range.value = new Date()
        inputValue.value.start = new Date()
        console.log(range.value)
    }

    watch(hdCheck, () => {

        for(let i = 0; copyOfData.length > i; i++ ) {
            if ( hdCheck.value[0] == 'allChecked' ) {
                copyOfData[i].CHK = true
                console.log('체크됨!')
            } else {
                copyOfData[i].CHK = false
            }
        }
         
    })

    
</script>

<style lang="scss" scoped>
    .common-filter-container {
        grid-template-columns: repeat(3, minmax(3rem, 1fr));
    }

    .each-filter {

    }

    // table

    .scm-table-line {
        grid-template-columns: .3fr repeat(8, .6fr) 1.5fr 1.5fr .6fr .6fr;
    }

</style>