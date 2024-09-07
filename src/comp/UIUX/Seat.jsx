//예매페이지(좌석선택)

"use client";
import { useEffect } from 'react';
import "../style/seat.scss";
import Image from 'next/image';

function Seat() {

    return (
        <>
            <article className='seat'>
                <div className='seat_cont'>

                    <div className="poster">
                        <Image src="/images/아바타.jpg"
                            width={1000} height={1500}
                            alt="아바타포스터"
                            priority />
                        <div className="overlay"></div>
                    </div>

                    <div className="poster_pc">
                        <Image src="/images/아바타.jpg"
                            width={1000} height={1500}
                            priority
                            alt="아바타포스터"
                        />
                    </div>

                    <div className='seat_box_back'></div>

                    <div className='seat_box'>
                        <div className='user_selected'>
                            <div className='user_mv'>아바타: 물의 길</div>
                            <div className='user_date'>2024년 8월 15일</div>
                            <div className='user_time'>20 : 50 ~</div>
                        </div>

                        <div className='inner'>
                            <div className='screen'>
                                <div>SCREEN</div>
                            </div>
                            <div className='seat_list'>
                                <div className='row'>
                                    <div className='list_num'>A</div>
                                    <div className='list a_0'></div>
                                    <div className='list a_1'></div>
                                    <div className='list a_2'></div>
                                    <div className='list a_3'></div>
                                    <div className='list a_4'></div>
                                    <div className='list a_5'></div>
                                    <div className='list a_0'></div>
                                    <div className='list_num'>A</div>

                                </div>
                                <div className='row'>
                                    <div className='list_num'>B</div>
                                    <div className='list b_1'></div>
                                    <div className='list b_2'></div>
                                    <div className='list b_3'></div>
                                    <div className='list b_4'></div>
                                    <div className='list b_5'></div>
                                    <div className='list b_6'></div>
                                    <div className='list b_7'></div>
                                    <div className='list_num'>B</div>

                                </div>
                                <div className='row'>
                                    <div className='list_num'>C</div>
                                    <div className='list c_1'></div>
                                    <div className='list c_2'></div>
                                    <div className='list c_3'></div>
                                    <div className='list c_4'></div>
                                    <div className='list c_5'></div>
                                    <div className='list c_6'></div>
                                    <div className='list c_7'></div>
                                    <div className='list_num'>C</div>

                                </div>
                                <div className='row'>
                                    <div className='list_num'>D</div>
                                    <div className='list d_1'></div>
                                    <div className='list d_2'></div>
                                    <div className='list d_3'></div>
                                    <div className='list d_4'></div>
                                    <div className='list d_5'></div>
                                    <div className='list d_6'></div>
                                    <div className='list d_7'></div>
                                    <div className='list_num'>D</div>

                                </div>
                                <div className='row'>
                                    <div className='list_num'>E</div>
                                    <div className='list e_1'></div>
                                    <div className='list e_2'></div>
                                    <div className='list e_3'></div>
                                    <div className='list e_4'></div>
                                    <div className='list e_5'></div>
                                    <div className='list e_6'></div>
                                    <div className='list e_7'></div>
                                    <div className='list_num'>E</div>

                                </div>
                                <div className='row'>
                                    <div className='list_num'>F</div>
                                    <div className='list f_1'></div>
                                    <div className='list f_2'></div>
                                    <div className='list f_3'></div>
                                    <div className='list f_4'></div>
                                    <div className='list f_5'></div>
                                    <div className='list f_6'></div>
                                    <div className='list f_7'></div>
                                    <div className='list_num'>F</div>

                                </div>
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