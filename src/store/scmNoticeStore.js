// SCM 주문서 데이터

import { defineStore } from "pinia"

export const useScmNoticeStore = defineStore('scmNotice', () => {

    const scmNoticeGroup = ref([
        {
            NO: '1',
            WRITER: '관리자',
            TITLE: '공지사항 테스트01', //제목
            DATE: '2023.08.07', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '2',
            WRITER: '관리자',
            TITLE: '공지사항 테스트02', //제목
            DATE: '2023.08.08', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'N', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '3',
            WRITER: '관리자',
            TITLE: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis id reiciendis nisi soluta aperiam! Deserunt numquam ipsum optio itaque deleniti recusandae ipsa, quia natus magni eos accusantium eveniet minus?', //제목
            DATE: '2023.08.09', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '4',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 03', //제목
            DATE: '2023.08.09', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '5',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 04', //제목
            DATE: '2023.08.09', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '6',
            WRITER: '관리자',
            TITLE: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis id reiciendis nisi soluta aperiam! Deserunt numquam ipsum optio itaque deleniti recusandae ipsa, quia natus magni eos accusantium eveniet minus?', //제목
            DATE: '2023.08.09', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '7',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 05', //제목
            DATE: '2023.08.10', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '8',
            WRITER: '관리자',
            TITLE: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis id reiciendis nisi soluta aperiam! Deserunt numquam ipsum optio itaque deleniti recusandae ipsa, quia natus magni eos accusantium eveniet minus?', //제목
            DATE: '2023.08.09', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '9',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 06', //제목
            DATE: '2023.08.11', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '10',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 07', //제목
            DATE: '2023.08.11', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '11',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 08', //제목
            DATE: '2023.08.11', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        {
            NO: '12',
            WRITER: '관리자',
            TITLE: '공지사항 테스트 09', //제목
            DATE: '2023.08.11', //일자
            TEXTS: `
                <p>공지사항 테스트 내용입니다.<p>
                <p>두번째줄입니다.<p>
                <p>세번째줄입니다.<p>
            `,
            FILE_YN: 'Y', //파일
            FILE_URL: '/data/sample_download.txt',
        },
        
    ])

    return { scmNoticeGroup }

})