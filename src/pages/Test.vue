<template>
    <SubpHero />
        <section class="test-common-inner">
            <h1 data-common-head-title>UI 테스트용</h1>
            <div id="testGrid">
                
            </div>

        </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    //tui grid
    import 'tui-grid/dist/tui-grid.css';
    // import { Grid } from '@toast-ui/vue-grid';
    
    import Grid from 'tui-grid';


    nextTick(function() { 
        // DOM에 변경사항 모두 반영 후 실행
        const data = [
            {
                id: '강*규',
                userName: '강*규',
                joinDate: '2012-07-01',
                team: '영업&마케팅',
                position: '책임',
                duty: '중간관리',
                function: 'MANAGER',
                tel: '010-****-****',
                use: 'y',
                grade: '1',
                useNum: '19',
                favNum: '6',
                regDate: '2021-01-14 21:57:06',
                register: '관리자',
                modDate: '2022-07-11 13:07:51',
                modifier: '이*석',

            },
            {
                id: '강*규',
                userName: '강*규',
                joinDate: '2012-07-01',
                team: '영업&마케팅',
                position: '책임',
                duty: '중간관리',
                function: 'MANAGER',
                tel: '010-****-****',
                use: 'y',
                grade: '1',
                useNum: '19',
                favNum: '6',
                regDate: '2021-01-14 21:57:06',
                register: '관리자',
                modDate: '2022-07-11 13:07:51',
                modifier: '이*석',

            },
        ]

        const tmpGrid = new Grid({
            el: document.getElementById('testGrid'),
            data: data,
            scrollX: false,
            scrollY: false,
            columns: [
                {
                    header: 'ID',
                    name: 'id',
                    editor: 'text'
                },
                {
                    header: '사용자명',
                    name: 'userName',
                    editor: 'text'
                },
                {
                    header: '입사일자',
                    name: 'joinDate',
                    editor: 'text'
                },
                {
                    header: '부서',
                    name: 'team',
                    editor: 'text'
                },
                {
                    header: '직급',
                    name: 'position',
                    editor: 'text'
                },
                {
                    header: '직책',
                    name: 'duty',
                    editor: 'text'
                },
                {
                    header: '직무',
                    name: 'function',
                    editor: 'text'
                },
                {
                    header: '연락처',
                    name: 'tel',
                    editor: 'text'
                },
                {
                    header: '사용',
                    name: 'use',
                    editor: {
                        type: 'select',
                        options: {
                            listItems: [
                                { text: 'Y', value: 'Y' },
                                { text: 'N', value: 'N' }
                            ]
                        }
                    }
                },
                {
                    header: '사용자등급',
                    name: 'grade',
                    editor: 'text'
                },
                {
                    header: '사용 프로그램 수',
                    name: 'useNum',
                    editor: 'text'
                },
                {
                    header: '즐겨찾기 수',
                    name: 'favNum',
                    editor: 'text'
                },
                {
                    header: '등록일시',
                    name: 'regDate',
                    editor: 'text'
                },
                {
                    header: '등록자',
                    name: 'register',
                    editor: 'text'
                },
                {
                    header: '수정일자',
                    name: 'modDate',
                    editor: 'text'
                },
                {
                    header: '수정자',
                    name: 'modifier',
                    editor: 'text'
                },
            ]
        })    

        tmpGrid.resetData(data); // Call API of instance's public method

        Grid.applyTheme('striped'); // Call API of static method

    })

    


  


</script>

<style lang="scss" scoped>

    .test-common-inner {
        max-width: 1920px;
        margin: 0 auto;
    }  
    .tui-grid-content-area {
        display: flex;
    }

</style>