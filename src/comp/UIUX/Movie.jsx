"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import {useStore} from '../store/movie_store';
import {useStore2} from '../store/movie_detail_store';
function Movie(props) {
    let {dataFetch,dailyBoxOffice,dailyRank,movieCode} = useStore();
    let {dataFetch2} = useStore2();
    useEffect(()=>{
        // dataFetch(20240815)
        dataFetch2()
    },[])
    // console.log(dailyBoxOffice) // 영화목록 이름
    // console.log(dailyRank) // 영화 랭크
    // console.log(movieCode) // 영화 코드

    return (
        <div>
            메인페이지
            <Link href='detail'><button> 상세로 이동하기 </button></Link> <br/>
            <Link href='login'> <button> login </button> </Link> <br/>
            <Link href='reserve'> <button> Ticket </button></Link> <br/>
            <Link href='mypage'> <button> mypage </button></Link> <br/>
        </div>
    );
}

export default Movie;