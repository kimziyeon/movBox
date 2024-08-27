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
            <section className='main_movie'>
                <ul>
                    <li>
                        <div className="poster">
                            <Image src="/images/아바타.jpg" layout="responsive"
                                width={100}
                                height={200}
                            />
                            <div className="overlay"></div>
                        </div>

                        <div className="txt_cont">
                            <h3 className="name">아바타: 물의 길</h3>
                            <h3 className="sub_name">Avatar: The Way of Water</h3>

                            <div className='reserve_rate'>
                                <h4>예매율</h4>
                                <p>1<span>st</span></p>
                            </div>
                            <div className='grade'>
                                <h4>평점</h4>
                                <div class="material-icons">
                                    star
                                </div>
                                <p>9.3</p>
                            </div>
                            <div className="audience">
                                <h4>누적관객(만)</h4>
                                <p>50<span>+</span></p>
                            </div>

                        </div>
                    </li>
                </ul>
                {/* 스와이퍼 넣을거면 ul li로 짤거고 안넣을거면 ul li 뺄예정 */}
            </section>
            <section className='box_office'>
                <ul>
                    {/* {
                        posterUrl.map((obj,k)=>(
                            <li key={k}><img src={obj} alt="poster" /></li>
                        ))
                    } */}
                </ul>
            </section>
            <section className='trailer'>
                <ul>
                    <li>영화 예고편 유튜브링크</li>
                    <li>영화 예고편 유튜브링크</li>
                    <li>영화 예고편 유튜브링크</li>
                </ul>
                <div className="btn">
                    선택완료
                </div>
                <div className="btn on">
                    선택완료
                </div>
                <div className="btn mob">
                    선택완료
                </div>
            </section>
        </>
    );
}

export default Movie;