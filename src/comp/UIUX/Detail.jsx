//상세페이지

"use client";
import "../style/detail.scss";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

function Detail(props) {
    return (
        <>
            <article className='detail_movie'>
                {/* http://localhost:3000/detail?date=20240814 */}
                {/* http://localhost:3000/detail?date=20240731&posterUrl=http%3A%2F%2Ffile.koreafilm.or.kr%2Fthm%2F02%2F99%2F18%2F41%2Ftn_DPK021958.jpg&daily=%ED%8C%8C%EC%9D%BC%EB%9F%BF */}

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
                        alt="아바타포스터"
                    />
                </div>

                <div className="inner">
                    <div className="txt_group">
                        <h3 className="name">아바타: 물의 길</h3>
                        <h3 className="sub_name">Avatar: The Way of Water</h3>
                    </div>

                    <div className="txt_group_detail">
                        <div className='txt_conts_01'>
                            <p className="genres">
                                <span>액션</span>
                                <span>어드벤쳐</span>
                                <span>SF</span>
                                <span>스릴러</span>
                            </p>
                        </div>
                        <div className='txt_conts_02'>
                            <p><span>2022.12.14</span> 개봉</p>
                            <p><span>192</span> 분</p>
                            <p><span>12세</span> 이상</p>
                        </div>
                        <div className='txt_conts_03'>
                            <p className='txt_1'>출연</p>
                            <p className='txt_2'>샐다나, 샘 워싱턴,  스티븐 랭, 케미트 윈슬렛, 시고니 위버</p>
                            <p className='txt_3'>감독</p>
                            <p className='txt_4'>제임스 카메론</p>
                            <p className='txt_5'>제작사</p>
                            <p className='txt_6'>월트디즈니컴퍼니코리마 유한책임회사</p>
                        </div>

                    </div>

                    <Link href='reserve'><div className='btn on mob'>예매하기</div></Link>

                </div>



            </article>
        </>
    );
}

export default Detail;