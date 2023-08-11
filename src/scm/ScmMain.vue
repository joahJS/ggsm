<template>
    <!-- <SubpHero /> -->
    <div id="scmHeader">
        <div class="common-inner scm-header-container">
            <router-link to="/">
                <p data-scm-comp-name>금강에스엠</p>
            </router-link>
            
            <div id="scmRight">
                <div v-for="item in scmUsr" id="usrInfoNav">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    <p><span data-comp-name>{{ item.NAME }}</span><span data-comp-no>[{{ item.COMPNO }}]</span>님 안녕하세요.</p>
                    <p data-comp-num></p>
                    <button id="scmLogout" type="button" @click="scmLogout()">
                        <font-awesome-icon icon="arrow-right-from-bracket" />
                        Logout
                    </button>
                </div>
                <ul id="scmNav">
                    <router-link :to="item.category" v-for="item in scmGroup" @click="isTap = item.category">
                        <!-- <li v-if="item.find(e => e.category === getCate)" :class="{'recent-page':item.category == getCate}">{{ item.category }}</li> -->
                        <li :class="{'recent-page':item.category == getCate}">{{ item.name }}</li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
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

    import { routerKey, useRoute, useRouter } from 'vue-router'

    const router = useRouter()

    const getParams = useRoute().params
    const getCate = useRoute().params.category

    const scmStore = useScmStore()
    const { scmGroup, scmUsr, isTap } = storeToRefs(scmStore)   

    function scmLogout() {
        router.push({
            path: '/login'
        })
    }

    console.log(getParams)
    console.log(useRoute().name)
    
</script>

<style lang="scss" scoped>
    #scmHeader{
        // background-color: rgba(var(--main-black), .15);
        border-bottom: 1px solid rgba(var(--main-black), .15);
        padding: 1rem 0 0;

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
        gap: .5rem;
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
                border-bottom: 4px solid rgba(var(--yellow), 1);
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
        gap: 1rem;
        margin-bottom: 1rem;

        svg {
            color: rgba(var(--main-black), .25);
        }
    }

    #scmLogout {
        display: flex;
        align-items: center;
        gap: .5rem;
        // border: 1px solid rgba(var(--main-black), .25);
        background-color: rgba(var(--black) .2);
        color: rgb(var(--white));
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 2rem;
        height: 2.25rem;
        font-size: 0.85rem;
        font-weight: 100;

        &:hover {
            background-color: rgba(var(--black) .5);
        }

        svg {
            color: rgb(var(--white));
        }
    }
</style>