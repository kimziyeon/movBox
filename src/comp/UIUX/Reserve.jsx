//예매페이지(ticket)

"use client";
import { useEffect } from 'react';
import "../style/reserve.scss";
import Link from 'next/link';
import Image from 'next/image';

function Reserve(props) {

    return (
        <>
            <article className='reserve'>
                <div className='inner'>
                    <div className='user_selected'>
                        <div className='user_mv'>아바타: 물의 길</div>
                        <div className='user_date'>2024년 8월 15일</div>
                        <div className='user_time'>20 : 50 ~</div>
                    </div>

                    <div className='list_box'>
                        <div className='list_mv'>
                            <p >안녕, 할부지</p>
                            <p>비틀쥬스 비틀쥬스</p>
                            <p>에이리언: 로물루스</p>
                            <p>파일럿</p>
                            <p>임영웅│아임 히어로 더 스타디움</p>
                            <p>소년시절의 너</p>
                            <p>트위스터스</p>
                            <p>레드불 T1 다큐멘터리 : 함께 날아오르다</p>
                            <p>빅토리</p>
                            <p>늘봄가든</p>
                        </div>
                        <div className='list_date'>
                            <p>08월 14일</p>
                            <p>08월 15일</p>
                        </div>
                        <div className='list_time'>
                            <p>13 : 50</p>
                            <p>15 : 50</p>
                            <p>18 : 30</p>
                            <p>20 : 50</p>
                            <p>21 : 50</p>
                        </div>
                    </div>

                    <div className='btn mob'>선택 완료</div>
                </div>
            </article>
        </>
    );
}

export default Reserve;