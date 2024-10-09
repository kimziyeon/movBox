//메인페이지

"use client";
import "../style/main.scss";
import React, { useState, useEffect } from 'react';
import { useStore } from '../store/movie_store';
import { useStore4 } from '../store/movie_poster';
import { movie_server } from '../store/movie_server';
import { format, subDays } from 'date-fns';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/navigation'
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import Loading from './Loading';
import axios from 'axios';

function Movie(props) {
    let { dataFetch, dailyBoxOffice, dailyRank, movieCode, movieDate, movieAcc } = useStore(); // 박스오피스 영화 10개 가져오는 스토어
    let { getMovie } = movie_server();  // 우리 자체 서버에 영화 담으려고 만든 스토어
    let { dataFetch4, posterUrl } = useStore4();  // 포스터 URl 가져오는 스토어

    const [listBtn, setListBtn] = useState();

    let today = new Date();
    let yesterday = format(subDays(today, 1), "yyyyMMdd")
    let [youtubeID, setYoutubeID] = useState([]);
    const youtubeMv = dailyBoxOffice.slice(0, 3);


    useEffect(() => {
        dataFetch(yesterday)
        getMovie();
    }, [])
    // console.log(dailyBoxOffice, movieCode, movieAcc)

    useEffect(() => {
        dataFetch4(dailyBoxOffice, movieDate)
        // youtubeMv.forEach((movie) => {
        //     axios.get(
        //         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movie} 예고편&type=video&key=AIzaSyD8Kj9MiGCaOF-6YkWkkLZmBhXxGGZSK2g`
        //     )
        //         .then((res) => {
        //             // console.log('res.data', res.data.items)
        //             setYoutubeID(res.data.items);

        //         })
        //         .catch((err) => {
        //             console.error(`Error fetching trailer for ${movie}: `, err);
        //         });
        // })
    }, [dailyBoxOffice])

    // console.log('youtubeID 검색결과', youtubeID);

    if (dailyBoxOffice.length === 0 && posterUrl.length === 0)
        return <Loading />;

    const posterClick = (k) => {
        setListBtn(k)
    }

    return (
        <>
            <article className='main_movie'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    className="mySwiper"
                    style={{ height: 'auto' }}
                >

                    {
                        posterUrl.slice(0, 3).map((obj, k) => (
                            <SwiperSlide key={k}>
                                <div className="poster">
                                    <Image src={obj}
                                        width={1000} height={1500}
                                        alt={dailyBoxOffice[k]}
                                        priority />
                                    <div className="overlay"></div>
                                </div>

                                <div className="poster_pc">
                                    <Image src={obj}
                                        width={1000} height={1500}
                                        alt={dailyBoxOffice[k]}
                                    />
                                </div>

                                <Link href={{
                                    pathname: '/detail',
                                    query: {
                                        movieCd: movieCode[k],
                                        posterUrlDetail: posterUrl[k],
                                        posterUrlList: JSON.stringify(posterUrl),
                                        id: [k]
                                    }

                                }}
                                    key={k}
                                >
                                    <div className="inner">
                                        <div className="txt_group">
                                            <h3 className="name">{dailyBoxOffice[k]}</h3>
                                            <h3 className="sub_name">{movieDate[k]} 개봉</h3>

                                            <div className="txt_conts">
                                                <div className='reserve_rate'>
                                                    <h4>예매율</h4>
                                                    <Image src="/images/star_icon.svg" width={15} height={15} className="star_icon" alt='star_icon' />
                                                    <p>{dailyRank[k]}<span> 위</span></p>
                                                </div>

                                                <div className="audience">
                                                    <h4>누적관객수</h4>
                                                    <Image src="/images/person_icon.svg" width={15} height={15} className="person_icon" alt='person_icon' />
                                                    <p>{movieAcc[k]}<span> +</span></p>
                                                </div>
                                                {/* <div className='open'>
                                                    <h4>개봉일</h4>
                                                    <p></p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>


            </article>
            <article className='box_office'>
                <div className="inner">
                    <h2>박스 오피스</h2>
                    <ul>
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
                            {
                                posterUrl.map((obj, k) => (
                                    <SwiperSlide key={k}>
                                        <li className="boxoffice_list" onClick={() => posterClick(k)}>
                                            <Image src={obj}
                                                width={200}
                                                height={250}
                                                alt="박스오피스 영화포스터" />
                                            <div className="rank">{k + 1}</div>
                                            <div className={`list_btn ${listBtn === k ? 'active' : ''}`}>

                                                <Link href={{
                                                    pathname: '/detail',
                                                    query: {
                                                        movieCd: movieCode[k],
                                                        posterUrlDetail: posterUrl[k],
                                                        posterUrlList: JSON.stringify(posterUrl),
                                                        id: [k]
                                                    }

                                                }}
                                                    key={k}
                                                >
                                                    <div className="btn on mob ">상세보기</div>
                                                </Link>

                                                <Link href={{
                                                    pathname: '/reserve',
                                                    query: {
                                                        movieCd: movieCode[k],
                                                        posterUrlList: JSON.stringify(posterUrl),
                                                        id: [k]
                                                    }
                                                }}>
                                                    <div className="btn on mob ">예매하기</div>
                                                </Link>
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>


                    </ul>
                </div>
            </article>
            <article className='trailer'>
                <div className="inner">
                    <h2>트레일러</h2>
                    <ul>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            // breakpoints={{
                            //     768: {
                            //         slidesPerView: 2,
                            //         spaceBetween: 20,
                            //     },
                            //     1024: {
                            //         slidesPerView: 3,
                            //         spaceBetween: 30,
                            //     },
                            // }}
                            className="mySwiper"
                        >
                            {/* {
                                youtubeID.slice(0, 3).map((obj, index) => (
                                    <SwiperSlide key={index}>
                                        <li>
                                            <Link className="slide"
                                                href={`https://www.youtube.com/watch?v=${obj.id.videoId}`}
                                                target="_blank"
                                            >
                                                <div className="slide_box">
                                                    <Image src={obj.snippet.thumbnails.medium.url}
                                                        width={320}
                                                        height={180}
                                                        alt="트레일러 썸네일"
                                                        priority
                                                    />
                                                </div>
                                                <div className="play_box">
                                                    <Image src="/images/play_icon.svg"
                                                        width={100}
                                                        height={100}
                                                        alt="play icon"
                                                    />
                                                </div>

                                                <p className="slide_title">
                                                    {obj.snippet.title}
                                                </p>
                                            </Link>
                                        </li>
                                    </SwiperSlide>
                                ))
                            } */}

                        </Swiper>
                    </ul>

                </div>
            </article>
            <article className='notice'>
                <div className="inner">
                    <h2>NOTICE</h2>
                    <ul>
                        <Swiper
                            direction={"vertical"}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={30}
                            modules={[Autoplay]}
                            className="mySwiper"

                        >
                            <SwiperSlide>서비스 이용약관 개정 안내</SwiperSlide>
                            <SwiperSlide>전 상영관 리뉴얼 오픈 안내 5/1~</SwiperSlide>
                        </Swiper>
                    </ul>
                </div>
            </article>
        </>
    );
}

export default Movie;