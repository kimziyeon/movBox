"use client";
import Link from 'next/link';
import "../style/main.scss";
import React, { useEffect } from 'react';
import { useStore } from '../store/movie_store';
// import { useStore2 } from '../store/movie_detail_store';
import { useStore4 } from '../store/movie_poster';
import { format, subDays } from 'date-fns';

function Movie(props) {
    let { dataFetch, dailyBoxOffice, dailyRank, movieCode,movieDate } = useStore();
    // let { dataFetch2 } = useStore2();
    let { dataFetch4, posterUrl } = useStore4();

    let today = new Date();
    let yesterday = format(subDays(today, 1), "yyyyMMdd")
    useEffect(() => {
        dataFetch(yesterday)
        
       
        // dataFetch2();
    }, [])   // 현재 : 페이지들어올때마다 영화목록불러옴 / 서버열면 : yesterday(어제날짜)가 바뀌면 서버데이터에 전송

    useEffect(()=>{
        dataFetch4(dailyBoxOffice,movieDate)
    },[dailyBoxOffice])
    
    if(dailyBoxOffice.length===0 && posterUrl.length===0) return;

    return (
        <>
            <section className='main_movie'>
                <ul>
                    <li>
                        <h2 className='poster'>영화포스터</h2>
                        <b>영화이름</b>
                        <div className='reserve_rate'>
                            <h4>예매율</h4>
                            <p>1<span>st</span></p>
                        </div>
                        <div className='grade'>
                            <h4>평점</h4>
                            <p>9.3</p>
                        </div>
                        <div className="audience">
                            <h4>누적관객(만)</h4>
                            <p>50<span>+</span></p>
                        </div>
                    </li>
                </ul>
                {/* 스와이퍼 넣을거면 ul li로 짤거고 안넣을거면 ul li 뺄예정 */}
            </section>
            <section className='box_office'>
                <ul>
                    {
                        posterUrl.map((obj,k)=>(
                            <li key={k}><img src={obj} alt="poster" /></li>
                        ))
                    }
                </ul>
            </section>
            <section className='trailer'>
                <ul>
                    <li>영화 예고편 유튜브링크</li>
                    <li>영화 예고편 유튜브링크</li>
                    <li>영화 예고편 유튜브링크</li>
                </ul>
            </section>
        </>
    );
}

export default Movie;