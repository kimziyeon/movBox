//상세페이지

"use client";
import "../style/detail.scss";
import Link from 'next/link';
import Image from 'next/image';
import Loading from './Loading';
import { useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import { useStore2 } from '../store/movie_detail_store';
import { format, subDays } from 'date-fns';

function Detail(props) {
    const params = useSearchParams()
    const date = params.get('date');
    const movieCode = params.get('movieCd');
    const movieId = params.get('id');
    const posterUrlDetail = params.get('posterUrlDetail');
    const posterUrlList = params.get('posterUrlList');

    let { dataFetch2, detail } = useStore2();

    useEffect(() => {
        dataFetch2(movieCode)
    }, [movieCode])

    // console.log(detail.MvName, 'detail')
    if (detail.MvName === undefined) return <Loading />;

    const dateObject = new Date(
        Number(detail.MvDate.slice(0, 4)), // 연도
        Number(detail.MvDate.slice(4, 6)) - 1, // 월 (0부터 시작하므로 1을 빼줌)
        Number(detail.MvDate.slice(6, 8)) // 일
    );
    const openDate = format(dateObject, 'yyyy.MM.dd');
    // console.log(detail.MvActor.slice(0, 3), 'dddd')

    const mvActor = detail.MvActor.slice(0, 3).join(', ');
    const mvAgeView = detail.MvAge.replace('관람', ' 관람');
    // console.log(detail, 'd1234r5')

    return (
        <article className="detail">
            <div className='detail_movie'>

                <div className="poster">
                    <Image src={posterUrlDetail}
                        width={1000} height={1500}
                        alt="영화포스터"
                        priority />
                    <div className="overlay"></div>
                </div>

                <div className="poster_pc">
                    <Image src={posterUrlDetail}
                        width={1000} height={1500}
                        priority
                        alt="영화포스터"
                    />
                </div>

                <div className="inner">
                    <div className="txt_group">
                        <h3 className="name">{detail.MvName}</h3>
                        <h3 className="sub_name">{detail.MvEnName}</h3>
                    </div>

                    <div className="txt_group_detail">
                        <div className='txt_conts_01'>
                            <p className="genres">
                                {
                                    detail.genre.map((obj, k) => (
                                        <span key={k}>{obj.genreNm}</span>
                                    ))
                                }
                            </p>
                        </div>
                        <div className='txt_conts_02'>
                            <p><span>{openDate}</span> 개봉</p>
                            <p><span>{detail.MvTime}</span> 분</p>
                            <p>{mvAgeView}</p>
                        </div>
                        <div className='txt_conts_03'>
                            <p className='txt_1'>출연</p>
                            <p className='txt_2'>{mvActor}</p>
                            <p className='txt_3'>감독</p>
                            <p className='txt_4'>{detail.MvDirector}</p>
                            <p className='txt_5'>제작사</p>
                            <p className='txt_6'>{detail.MvComp}</p>
                        </div>

                    </div>

                    <Link href={{
                        pathname: '/reserve',
                        query: {
                            movieCd: movieCode,
                            posterUrlList, posterUrlList,
                            id: movieId
                        }
                    }}
                    ><div className='btn on mob'>예매하기</div></Link>

                </div>



            </div>
        </article>
    );
}

export default Detail;