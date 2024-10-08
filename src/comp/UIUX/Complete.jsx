//예매페이지(예매완료)

"use client";
import React, { useState, useEffect } from 'react';
import "../style/complete.scss";
import Image from 'next/image';
import Link from 'next/link';

function Complete({ ticketInfo }) {

    console.log(ticketInfo, 'ticketInfo')

    const seatValue = Object.values(ticketInfo.seat).length;
    const seatJoin = ticketInfo.seat.join(', ');

    return (
        <>
            <article className='complete'>

                <div className='compl_box'>

                    <div className='mv_poster'>
                        <Image src={ticketInfo.posterUrl}
                            width={1000} height={1500}
                            priority
                            alt="영화포스터"
                        />
                    </div>

                    <div className='compl_box_back'></div>

                    <div className='inner'>

                        <h3>예매가 완료 되었습니다.</h3>

                        <div className='compl_list'>

                            <dl className='row'>
                                <dt>예매번호</dt>
                                <dd>{ticketInfo.ticketNm} - 0000 - 0000</dd>
                                <dt>영화</dt>
                                <dd>{ticketInfo.title}</dd>
                                <dt>상영관</dt>
                                <dd>1관 3층</dd>
                                <dt>일시</dt>
                                <dd className='compl_date'>{ticketInfo.date}
                                    <span>{ticketInfo.time}</span>
                                </dd>
                                <dt>인원</dt>
                                <dd>일반 <span>{seatValue}</span>명</dd>
                                <dt>좌석</dt>
                                <dd>{seatJoin}</dd>
                            </dl>

                        </div>
                        <Link href='/mypage'>
                            <div className='btn on mob'>예매 내역보기</div>
                        </Link>
                    </div>
                </div>


            </article>
        </>
    )
}
export default Complete;