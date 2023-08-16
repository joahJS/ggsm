<template>
    <div id="scmHeader">
        <div class="common-inner scm-header-container">
            <router-link to="/">
                <p @click="forUsrChk()" data-scm-comp-name>금강에스엠 SCM</p>
            </router-link>
            
            <div v-if="isScmMobile == false" id="scmRight">
                <p v-if="isScmMobile == true" data-scm-mob-nav-close>
                    <font-awesome-icon @click="closeUsrInfo()" icon="fa-regular fa-circle-xmark" />
                </p>
                <div v-for="item in copyOfUsr" id="usrInfoNav">
                    
                    <p>
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span data-comp-name>{{ item.NAME }}</span>
                        <span data-comp-no>[{{ item.SANO }}]</span>
                        <span class="scm-mob-none">님 안녕하세요.</span>
                    </p>
                    <button @click="viewUsrInfo()" id="scmUsrModify" type="button">
                        <font-awesome-icon icon="user-gear" />
                        회사정보변경
                    </button>
                    <button id="scmLogout" type="button" @click="scmLogout()">
                        <font-awesome-icon icon="arrow-right-from-bracket" />
                        Logout
                    </button>
                </div>
                <ul id="scmNav">
                    <router-link :to="{name: 'Scm', params: {category: item.category}}" v-for="item in scmGroup" @click="isTap = item.category">
                        <li :class="{'recent-page':item.category == getCate}">{{ item.name }}</li>
                    </router-link>
                </ul>
            </div>

            <ul v-if="isScmMobile == true" id="mobNavBtn" @click="isScmMobile = false">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>

    <section id="usrInfoMd" v-if="usrInfoMd == true">
        <div id="usrInfoContainer">
            <div class="usr-info-head">
                <p>
                    <font-awesome-icon icon="fa-solid fa-user" />
                    회원정보
                </p>
                <font-awesome-icon @click="closeUsrInfo()" icon="fa-regular fa-circle-xmark" />
            </div>
            <div v-for="item in copyOfUsr" class="usr-info-body">
                <ul class="usr-info-body-list">
                    <li>
                        <p class="usr-info-body-title">고객사명</p>
                        <input class="usr-info-body-text" type="text" v-model="item.NAME">
                    </li>
                    <li>
                        <p class="usr-info-body-title">사업자등록번호</p>
                        <input class="usr-info-body-text" type="text" v-model="item.SANO">
                    </li>
                </ul>
                <div class="usr-info-buttons">
                    <p data-usr-info-alert v-show="usrInfoSaveText == true">
                        <font-awesome-icon icon="check" />
                        저장되었습니다.
                    </p>
                    <button type="button" @click="usrInfoSave()">저장</button>
                    <button type="button" @click="closeUsrInfo()">닫기</button>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
    //store에서 영역별 데이터 import
    import { useScmStore } from '@/store/scmStore'
    import { storeToRefs } from 'pinia';

    import { routerKey, useRoute, useRouter } from 'vue-router'

    const router = useRouter()

    const getParams = useRoute().params
    const getCate = useRoute().params.category

    const scmStore = useScmStore()
    const { scmGroup, scmUsr, isTap } = storeToRefs(scmStore)   
    const copyOfUsr = [...scmUsr.value]

    const usrInfoMd = ref(false)
    const usrInfoSaveText = ref(false)

    function scmLogout() {
        router.push({
            path: '/login'
        })
    }

    function forUsrChk() {
        console.log(copyOfUsr)
    }

    const isScmMobile = ref(false)

    // const isScmMobile = ref(matchMedia('(max-width: 767px)').matches ? true : false)

    // 해상도 767px 이하일 시 
    // if ( matchMedia("(max-width: 767px)").matches ) {
    //     isScmMobile.value = true
    // }

    console.log(getParams)
    console.log(useRoute().name)

    function viewUsrInfo() {
        usrInfoMd.value = true
    }

    function closeUsrInfo() {
        usrInfoMd.value = false
        usrInfoSaveText.value = false
    }

    function usrInfoSave() {
        usrInfoSaveText.value = true

        setTimeout(() => {
            usrInfoSaveText.value = false
        }, 3000)
    }

</script>

<style lang="scss" scoped>
       #scmHeader{
        margin-bottom: 3rem;
        border-bottom: 1px solid rgba(var(--main-black), .15);
        padding: 1rem 0 0;
        background-color: rgba(var(--white));

        [data-scm-comp-name] {
            font-size: var(--fontT);
            font-weight: 600;
        }
    }

    .scm-header-container {
        display: flex;    
        width: 100%;
        justify-content: space-between;
    }

    #scmRight {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;

        button {
            display: flex;
            align-items: center;
            background-color: rgba(var(--black) 0.2);
            color: rgb(var(--white));
            padding: 0.5rem 1rem 0.5rem 1rem;
            border-radius: 2rem;
            height: 2.25rem;
            font-size: 0.85rem;
            font-weight: 300;
            margin-left: .5rem;

            &:hover {
                background-color: rgba(var(--black) .5);
            }

            svg {
                color: rgb(var(--white));
            }
        }
    }

    #scmNav {
        display: flex;
        gap: 1.5rem;
        justify-content: flex-end;

        li {
            font-size: var(--fontMT);
            padding-bottom: .25rem;

            &:hover {
                font-weight: 600;
            }

            &.recent-page {
                font-weight: 900;
                // border-bottom: 4px solid rgba(var(--yellow), 1);
                border-bottom: 4px solid rgba(var(--deepblue), 1);
            }
        }
    }

    [data-common-head-title] {
        margin: 6rem 0 3rem;
    }

    [data-comp-name] {
        font-weight: 900;
    }

    [data-comp-no] {
        color: rgba(Var(--main-black), .5);
        margin: 0 .5rem 0 .25rem;
    }

    #usrInfoNav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 1rem;

        p {
            user-select: none;
            margin-right: 1.5rem;
        }

        svg {
            color: rgba(var(--main-black), .25);
            margin-right: .5rem;
        }
    }

    #scmLogout {
        
    }

    //고객사정보 모달

    #usrInfoMd {
        display: block;
        // width: 100vw;
        // height: 100vh;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        background-color: rgba(var(--black) .5);
    }

    #usrInfoContainer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 30rem;

        svg {
            cursor: pointer;
            font-size: var(--fontMT);
        }
    }

    #usrInfoContainer .usr-info-head {
        background-color: rgba(var(--deepblue), 1);
        color: rgb(var(--white));
        border-radius: .5rem .5rem 0 0;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            display: flex;
            align-items: center;
            gap: .5rem;

            svg {
                font-size: var(--fontM);
            }
        }
    }

    .usr-info-body {
        background-color: rgba(var(--white), 1);
        border-radius: 0 0 .5rem .5rem;
        padding: .5rem;
    }

    .usr-info-body-list {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        align-items: flex-start;

        li {
            display: flex;
            flex-direction: column;
            gap: .25rem;
            align-items: flex-start;
        }
    }

    .usr-info-body-title {
        color: rgba(var(--main-black), .5);
    }

    .usr-info-body-text {
        border: 1px solid rgba(var(--black) .25);
        padding: .25rem .5rem;
        border-radius: .25rem;
    }

    #usrInfoNav #scmUsrModify {

    }

    .usr-info-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 2rem;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(var(--black) 0.35);
            color: rgb(var(--white));
            padding: .05rem 1rem 0;
            border-radius: 2rem;
            height: 2rem;
            font-size: 0.85rem;
            font-weight: 300;
            margin-left: .5rem;
            min-width: 5rem;

            &:hover {
                background-color: rgba(var(--black) .5);
            }

            svg {
                color: rgb(var(--white));
            }
        }

        [data-usr-info-alert] {
            display: flex;
            align-items: center;
            gap: .25rem;

            svg {
                color: rgba(var(--deepblue), 1);
            }

            margin-right: auto;
        }
    }

    #mobNavBtn {
        // display: none;
        position: absolute;
        top: 2rem;
        right: 2rem;
        display: flex;
        flex-direction: column;
        gap: .25rem;

        li {
            content: '';
            display: block;
            width: 2rem;
            height: 2px;
            background-color: rgba(var(--deepblue));
        }
    }   

    // @media (max-width: 767px) {
    //     #scmHeader {
    //         padding: 1rem 0;
    //     }

    //     #scmRight {
    //         position: fixed;
    //         top: 0;
    //         right: 0;
    //         width: 18.75rem;
    //         height: 100%;
    //         background-color: rgba(var(--white), .975);
            
    //         z-index: 9;
    //         padding: 1.25rem;
    //         align-items: flex-start;
    //         gap: 2rem;
    //         border-left: 4px solid rgba(var(--main-black), 1);

    //         button {
    //             margin-left: 0;
    //             margin-right: .5rem;
    //         }
    //     }

    //     #usrInfoNav {
    //         flex-wrap: wrap;
    //         justify-content: flex-start;

    //         p {
    //             width: 100%;
    //             margin-bottom: 1.5rem;
    //         }
    //     }

    //     #scmNav {
    //         flex-direction: column;

    //         li {
    //             font-size: var(--fontM);
    //             width: fit-content;
    //         }
    //     }

    //     .scm-mob-none {
    //         display: none;
    //     }
    // }
</style>
