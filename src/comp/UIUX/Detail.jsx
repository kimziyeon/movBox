//상세페이지

"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import "../style/detail.scss";
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

                <div className="inner">
                    <div className="txt_group">
                        <h3 className="name">아바타: 물의 길</h3>
                        <h3 className="sub_name">Avatar: The Way of Water</h3>

                        <div className="txt_conts">
                            <div className='reserve_rate'>
                                <h4>예매율</h4>
                                <p>1</p>
                            </div>
                            <div className='grade'>
                                <h4>평점</h4>
                                <Image src="/images/star_icon.svg" width={15} height={15} className="star_icon" alt='star_icon' />
                                <p>9.3</p>
                            </div>
                            <div className="audience">
                                <h4>누적관객(만)</h4>
                                <Image src="/images/person_icon.svg" width={15} height={15} className="person_icon" alt='person_icon' />
                                <p>547,000<span> +</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="txt_group_detail">
                        <div className='txt_conts_01'>
                            <p><span>2022.12.14</span> 개봉</p>
                            <p><span>192</span> 분</p>
                            <p><span>12세</span> 이상</p>
                        </div>
                        <div className='txt_conts_02'>
                            <div className='txt_box_01'>
                                <p>출연</p>
                                <p>감독</p>
                                <p>제작사</p>
                            </div>
                            <div className='txt_box_02'>
                                <p>샐다나, 샘 워싱턴,  스티븐 랭, 케미트 윈슬렛, 시고니 위버</p>
                                <p>제임스 카메론</p>
                                <p>월트디즈니컴퍼니코리마 유한책임회사</p>
                            </div>


                        </div>
                    </div>

                    <Link href='reserve'><div className='btn mob'>예매하기</div></Link>

                </div>



            </article>
        </>
    );
}

export default Detail;