// SCM 데이터

import { defineStore } from "pinia"

export const useScmStore = defineStore('scm', () => {

    const scmGroup = ref([
        {
            name: '주문서',
            category: 'bill',
        },
        {
            name: '생산대기현황',
            category: 'wait',
        },
        {
            name: '고객재고현황',
            category: 'stockCs',
        },
        {
            name: '출하현황',
            category: 'shipCs',
        },
        {
            name: '세금계산서발행현황',
            category: 'invoCs',
        },
        {
            name: '거래처원장',
            category: 'ledger',
        },
        {
            name: '공지사항',
            category: 'scmNoti',
        }
    ])

    return { scmGroup }

})