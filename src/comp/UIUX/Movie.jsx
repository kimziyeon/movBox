//메인페이지

"use client";
import "../style/main.scss";
import React, { useEffect } from 'react';
import { useStore } from '../store/movie_store';
// import { useStore2 } from '../store/movie_detail_store';
import { useStore4 } from '../store/movie_poster';
import { movie_server } from '../store/movie_server';
import { format, subDays } from 'date-fns';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Movie(props) {
    let { dataFetch, dailyBoxOffice, dailyRank, movieCode, movieDate } = useStore();
    let { getMovie } = movie_server();
    // let { dataFetch2 } = useStore2();
    let { dataFetch4, posterUrl } = useStore4();

    let today = new Date();
    let yesterday = format(subDays(today, 1), "yyyyMMdd")
    // useEffect(() => {
    //     dataFetch(yesterday)
    //     getMovie();

    //     // dataFetch2();
    // }, [])
    // console.log(dailyBoxOffice)
    // useEffect(() => {
    //     dataFetch4(dailyBoxOffice, movieDate)
    // }, [dailyBoxOffice])
    // console.log(posterUrl);

    // if(dailyBoxOffice.length===0 && posterUrl.length===0) return;

    return (
        <>
            <article className='main_movie'>
                <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}

                    modules={[Autoplay]}
                    className="mySwiper"
                    style={{ height: 'auto' }}
                >
                    <SwiperSlide >
                        <div className="poster">
                            <Image src="/images/아바타.jpg"
                                width={1000} height={1500}
                                alt="아바타 포스터"
                                priority />
                            <div className="overlay"></div>
                        </div>

                        <div className="poster_pc">
                            <Image src="/images/아바타.jpg"
                                width={1000} height={1500}
                                alt="아바타 포스터"
                            />
                        </div>

                        <div className="inner">
                            <div className="txt_group">
                                <h3 className="name">아바타: 물의 길</h3>
                                <h3 className="sub_name">Avatar: The Way of Water</h3>

                                <div className="txt_conts">
                                    <div className='reserve_rate'>
                                        <h4>예매율</h4>
                                        <p>1<span> st</span></p>
                                    </div>
                                    <div className='grade'>
                                        <h4>평점</h4>
                                        <Image src="/images/star_icon.svg" width={15} height={15} className="star_icon" />
                                        <p>9.3</p>
                                    </div>
                                    <div className="audience">
                                        <h4>누적관객(만)</h4>
                                        <Image src="/images/person_icon.svg" width={15} height={15} className="person_icon" />
                                        <p>547,000<span> +</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="poster">
                            <Image src="/images/아바타.jpg" width={1000} height={1500} />
                            <div className="overlay"></div>
                        </div>

                        <div className="poster_pc">
                            <Image src="/images/아바타.jpg"
                                width={1000} height={1500}
                                alt="아바타 포스터"
                            />
                        </div>

                        <div className="inner">
                            <div className="txt_group">
                                <h3 className="name">아바타: 물의 길</h3>
                                <h3 className="sub_name">Avatar: The Way of Water</h3>

                                <div className="txt_conts">
                                    <div className='reserve_rate'>
                                        <h4>예매율</h4>
                                        <p>1<span> st</span></p>
                                    </div>
                                    <div className='grade'>
                                        <h4>평점</h4>
                                        <Image src="/images/star_icon.svg" width={15} height={15} className="star_icon" />
                                        <p>9.3</p>
                                    </div>
                                    <div className="audience">
                                        <h4>누적관객(만)</h4>
                                        <Image src="/images/person_icon.svg" width={15} height={15} className="person_icon" />
                                        <p>547,000<span> +</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                </Swiper>


            </article>
            <article className='box_office'>
                <div className="inner">
                    <h2>박스 오피스</h2>
                    <ul>
                        {/* 스와이퍼 넣을거면 ul li로 짤거고 안넣을거면 ul li 뺄예정 */}

                        {/* {
                        posterUrl.map((obj,k)=>(
                            <li key={k}><img src={obj} alt="poster" /></li>
                        ))
                    } */}

                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"

                        >
                            <SwiperSlide>
                                <li>
                                    <Image src="/images/아바타.jpg"
                                        width={200}
                                        height={250} />
                                    <div className="rank">1</div>
                                    <div className="list_btn">
                                        <div className="btn on mob">상세보기</div>
                                        <div className="btn on mob">예매하기</div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Image src="/images/아바타.jpg"
                                        width={200}
                                        height={250} />
                                    <div className="rank">2</div>
                                    <div className="list_btn">
                                        <div className="btn on mob">상세보기</div>
                                        <div className="btn on mob">예매하기</div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Image src="/images/아바타.jpg"
                                        width={200}
                                        height={250} />
                                    <div className="rank">3</div>
                                    <div className="list_btn">
                                        <div className="btn on mob">상세보기</div>
                                        <div className="btn on mob">예매하기</div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <Image src="/images/아바타.jpg"
                                        width={200}
                                        height={250} />
                                    <div className="rank">4</div>
                                    <div className="list_btn">
                                        <div className="btn on mob">상세보기</div>
                                        <div className="btn on mob">예매하기</div>
                                    </div>
                                </li>
                            </SwiperSlide>
                        </Swiper>


                    </ul>
                </div>
            </article>
            <article className='trailer'>
                <div className="inner">
                    <h2>트레일러</h2>
                    <ul>
                        <li>
                            <Image src="/images/inside.png"
                                width={200}
                                height={150} />
                            <p>&#91;인사이드 아웃 2&#93; 파이널 예고편</p>
                            <div className="vidio_play">
                                <Image src="/images/play_icon.svg"
                                    width={100}
                                    height={100} />
                            </div>
                        </li>
                        <li>
                            <Image src="/images/inside.png"
                                width={200}
                                height={150} />
                            <p>&#91;인사이드 아웃 2&#93; 파이널 예고편</p>
                        </li>
                        <li>
                            <Image src="/images/inside.png"
                                width={200}
                                height={150} />
                            <p>&#91;인사이드 아웃 2&#93; 파이널 예고편</p>
                        </li>

                    </ul>

                </div>
            </article>
            <article className='notice'>
                <div className="inner">
                    <h2>NOTICE</h2>
                    <ul>
                        <li>전 상영관 리뉴얼 오픈 안내 5/1~</li>
                        <li>전 상영관 리뉴얼 오픈 안내 5/1~</li>
                        <li>전 상영관 리뉴얼 오픈 안내 5/1~</li>
                    </ul>
                </div>
            </article>
        </>
    );
}

export default Movie;