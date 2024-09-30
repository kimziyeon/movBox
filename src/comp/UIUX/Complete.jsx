//예매페이지(예매완료)

"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import "../style/complete.scss";
import Image from 'next/image';

function Complete() {

    // const params = useSearchParams();
    // const selectMv = params.get('isAllSelect');
    // console.log(selectMv)

    return (
        <>
            <article className='complete'>

                <div className='compl_box'>

                    <div className='mv_poster'>
                        <Image src="/images/아바타.jpg"
                            width={1000} height={1500}
                            priority
                            alt="아바타포스터"
                        />
                    </div>

                    <div className='compl_box_back'></div>

                    <div className='inner'>

                        <h3>예매가 완료 되었습니다.</h3>

                        <div className='compl_list'>

                            <dl className='row'>
                                <dt>예매번호</dt>
                                <dd>240815 - 0000 - 0000</dd>
                                <dt>영화</dt>
                                <dd>아바타: 물의 길</dd>
                                <dt>상영관</dt>
                                <dd>1관 3층</dd>
                                <dt>일시</dt>
                                <dd className='compl_date'>2024년 8월 15일&#40;목&#41;
                                    <span>20 : 50 ~ 23 : 00</span>
                                </dd>
                                <dt>인원</dt>
                                <dd>일반 <span>2</span>명</dd>
                                <dt>좌석</dt>
                                <dd>E4, E5</dd>
                            </dl>

                        </div>
                        <div className='btn on mob'>예매 내역보기</div>
                    </div>
                </div>


            </article>
        </>
    )
}
export default Complete;