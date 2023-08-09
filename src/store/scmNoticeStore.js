// SCM 주문서 데이터

import { defineStore } from "pinia"

export const useScmNoticeStore = defineStore('scmNotice', () => {

    const scmNoticeGroup = ref([
        {
            NO: '1',
            TITLE: '공지사항 테스트01', //제목
            DATE: '2023.08.07', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '2',
            TITLE: '공지사항 테스트02', //제목
            DATE: '2023.08.08', //일자
            FILE_YN: 'N', //파일
            FILE_URL: '',
        },
        {
            NO: '3',
            TITLE: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis id reiciendis nisi soluta aperiam! Deserunt numquam ipsum optio itaque deleniti recusandae ipsa, quia natus magni eos accusantium eveniet minus?', //제목
            DATE: '2023.08.09', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '4',
            TITLE: '공지사항 테스트 03', //제목
            DATE: '2023.08.09', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '5',
            TITLE: '공지사항 테스트 04', //제목
            DATE: '2023.08.09', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '6',
            TITLE: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis id reiciendis nisi soluta aperiam! Deserunt numquam ipsum optio itaque deleniti recusandae ipsa, quia natus magni eos accusantium eveniet minus?', //제목
            DATE: '2023.08.09', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '7',
            TITLE: '공지사항 테스트 05', //제목
            DATE: '2023.08.10', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '8',
            TITLE: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis id reiciendis nisi soluta aperiam! Deserunt numquam ipsum optio itaque deleniti recusandae ipsa, quia natus magni eos accusantium eveniet minus?', //제목
            DATE: '2023.08.09', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '9',
            TITLE: '공지사항 테스트 06', //제목
            DATE: '2023.08.11', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '10',
            TITLE: '공지사항 테스트 06', //제목
            DATE: '2023.08.11', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '11',
            TITLE: '공지사항 테스트 06', //제목
            DATE: '2023.08.11', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        {
            NO: '12',
            TITLE: '공지사항 테스트 06', //제목
            DATE: '2023.08.11', //일자
            FILE_YN: 'Y', //파일
            FILE_URL: '',
        },
        
    ])

    return { scmNoticeGroup }

})