//예매페이지(좌석선택)

"use client";
import React, { useState, useEffect } from 'react';
import "../style/seat.scss";
import Image from 'next/image';

function Seat({ moveNext, isAllSelect, userPoster }) {

    // console.log(isAllSelect, 'isAllSelect(유저선택 영화정보)')
    // console.log(userPoster, 'posterId(유저선택 영화포스터)')
    const [select, setSelect] = useState([])

    const [seatList, setSeatList,] = useState({
        A: [false, true, true, true, true, false],
        B: [true, true, true, true, true, true],
        C: [true, true, true, true, true, true],
        D: [true, true, true, true, true, true],
        E: [true, true, true, true, true, true],
        F: [false, false, true, true, true, true],
    })

    const seatClickHandle = (row, seat, k) => {
        console.log(row, seat, k, 'seatClickHandle')
        setSelect()
    }


    return (
        <>
            <article className='seat'>
                <div className='seat_cont'>

                    <div className="poster">
                        <Image src={userPoster}
                            width={1000} height={1500}
                            alt="영화포스터"
                            priority />
                        <div className="overlay"></div>
                    </div>

                    <div className="poster_pc">
                        <Image src={userPoster}
                            width={1000} height={1500}
                            priority
                            alt="영화포스터"
                        />
                    </div>

                    <div className='seat_box_back'></div>

                    <div className='seat_box'>
                        <div className='user_selected'>
                            <div className='user_mv'>{isAllSelect.title}</div>
                            <div className='user_date'>{isAllSelect.date}</div>
                            <div className='user_time'>{isAllSelect.time}</div>
                        </div>

                        <div className='inner'>
                            <div className='screen'>
                                <div>SCREEN</div>
                            </div>
                            <div className='seat_list'>
                                {
                                    Object.keys(seatList).map((row) => (
                                        <div key={row} className='row'>
                                            <div className='list_num'>{row}</div>
                                            {
                                                seatList[row].map((seat, k) => (
                                                    <div key={`${seat}${k}`}
                                                        className={`list ${seat ? `true` : `false`}`}
                                                        onClick={() => { seatClickHandle(row, seat, k + 1) }}
                                                    >
                                                    </div>
                                                ))
                                            }
                                            <div className='list_num'>{row}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='seat_info'>
                                <p>
                                    <span className='yes'></span>
                                    선택가능
                                </p>
                                <p>
                                    <span className='no'></span>
                                    선택불가
                                </p>
                            </div>
                            <div className="btn mob">예매 완료</div>
                        </div>
                    </div>

                </div>
            </article>
        </>
    )
}

export default Seat;