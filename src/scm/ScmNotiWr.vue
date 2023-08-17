<template>
    <ScmHeaders />

    <section class="scm-common-inner">
        <h1 data-common-head-title>글쓰기</h1>

        <div id="scmNotiWr" class="ani_down">
            <div class="wr-top-inputs">
                <div class="top-input-line">
                    <h2 class="wr-input-title">제목</h2>
                    <div class="wr-input-container">
                        <font-awesome-icon icon="fa-heading" />
                        <input type="text" class="wr-input">
                    </div>
                    
                </div>
            </div>
            <div class="wr-body">

            </div>
        </div>
    </section>
    
</template>
<script setup>
    import ScmHeaders from '@/components/ScmHeaders.vue';

</script>
<style lang="scss" scoped>
    #scmNotiWr {
        display: flex;
        flex-direction: column;
    }

    .wr-input-container {
        border: 1px solid rgba(var(--main-black), .15);
        border-radius: .5rem;
        padding: .5rem .75rem;
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 1rem;
            font-size: var(--fontM);
            color: rgba(var(--deepblue), 1);
        }

        .wr-input {
            padding: .5rem .75rem .5rem 2.25rem;
            width: 100%;
            outline: 0;
        }
    }

    .wr-input {

    }

</style>