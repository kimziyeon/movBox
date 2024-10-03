//예매페이지(ticket)

"use client";
import React, { useState, useEffect } from 'react';
import { useStore } from '../store/movie_store';
import { useSearchParams } from "next/navigation";
import "../style/reserve.scss";
import { format, subDays } from 'date-fns';

function Reserve({ moveNext, setIsAllSelect, setPosterId }) {
    let { dataFetch, dailyBoxOffice, movieCode } = useStore();
    const params = useSearchParams()
    const usermovieCode = params.get('movieCd');

    const [mvElIndex, setMvElIndex] = useState();
    const [mvElTitle, setMvElTitle] = useState();
    const [dateEl, setDateEl] = useState();
    const [timeEl, setTimeEl] = useState();
    const [ticketNm, setTicketNm] = useState();
    const [ingStep, setIngStep] = useState('movie')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slideClass, setSlideClass] = useState('');


    const ticketMvList = dailyBoxOffice.map((mvTitle, id) => {
        return { mvTitle, mvCode: movieCode[id] };
    })

    // console.log(ticketMvList, 'ticketMvList')


    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth > 1024) {
                setSlideClass('')
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //유저영화선택
    const userMvSelect = (k, mvTitle) => {
        setMvElIndex(k)
        setMvElTitle(mvTitle)
        setPosterId(k)
    }

    //유저날짜선택
    const userDateSelect = (date) => {
        setDateEl(date)
    }

    const mvTimeList = [
        '13 : 50',
        '15 : 50',
        '18 : 30',
        '20 : 50',
        '21 : 50'
    ]

    //유저시간선택
    const userTimeSelect = (time, kk) => {
        setTimeEl(time)
    }

    //예매번호
    const dateNm = String(dateEl).replace(/\D/g, '').slice(2);

    //다음버튼
    const afterBtn = () => {
        if (screenWidth > 1024) { //1024이상 한번에 선택
            if (!mvElTitle) {
                alert('영화를 선택해주세요');
                return;
            }
            if (!dateEl) {
                alert('상영 날짜를 선택해주세요');
                return;
            }
            if (!timeEl) {
                alert('상영 시간을 선택해주세요');
                return;
            }
            setIsAllSelect({
                title: mvElTitle,
                date: dateEl,
                time: timeEl,
                ticketNm: dateNm
            });
            // console.log(mvElTitle, dateEl, timeEl, dateNm, '유저선택완료');
            moveNext();
        }
        else if (ingStep === 'movie') {
            if (!mvElTitle) {
                alert('영화를 선택해주세요')
                return;
            }
            setIngStep('date')
            if (screenWidth >= 768 && screenWidth <= 1024) {
                setSlideClass('slide_date')
            }
        } else if (ingStep === 'date') {
            if (!dateEl) {
                alert('상영 날짜를 선택해주세요')
                return;
            }
            setIngStep('time')
            if (screenWidth >= 768 && screenWidth <= 1024) {
                setSlideClass('slide_time')
            }
        } else if (ingStep === 'time') {
            if (!timeEl) {
                alert('상영 시간을 선택해주세요');
                return;
            }
            setIsAllSelect({
                title: mvElTitle,
                date: dateEl,
                time: timeEl,
                ticketNm: dateNm
            });
            // console.log(mvElTitle, dateEl, timeEl, dateNm, '유저선택완료');
            moveNext();
        }

    }

    //이전버튼
    const beforeBtn = () => {

        if (screenWidth >= 768 && screenWidth <= 1024) {
            if (ingStep === 'time') {
                setIngStep('date')
                setSlideClass('slide_date_back')
            } else if (ingStep === 'date') {
                setIngStep('movie')
                setSlideClass('slide_movie_back')
            }
        } else if (screenWidth < 768) {
            if (ingStep === 'time') {
                setIngStep('date')
            } else if (ingStep === 'date') {
                setIngStep('movie')
            }
        }
    }

    let fnsDate = new Date();
    const today = format(fnsDate, 'yyyy년 MM월 dd일')

    let tomorrDate = new Date(fnsDate);
    tomorrDate.setDate(fnsDate.getDate() + 1)
    const tomorrow = format(tomorrDate, 'yyyy년 MM월 dd일')

    let yesterday = format(subDays(fnsDate, 1), "yyyyMMdd")
    useEffect(() => {
        dataFetch(yesterday)
    }, [])

    useEffect(() => {
        if (usermovieCode) {
            const userFindMv = ticketMvList.findIndex(obj => obj.mvCode === usermovieCode);
            setMvElIndex(userFindMv)
            setMvElTitle(ticketMvList[userFindMv].mvTitle)
        }
    }, [usermovieCode])

    return (
        <>
            <article className='reserve'>
                <div className='inner'>
                    <div className='user_selected'>
                        <div className='user_mv'>{mvElTitle}</div>
                        <div className={`user_date ${dateEl ? 'border' : ''}`}>{dateEl}</div>
                        <div className='user_time'>{timeEl}</div>
                    </div>

                    <div className={`list_box ${slideClass}`}>
                        <div className={`list_mv ${ingStep === 'movie' ? 'block' : 'hidden'}`}>
                            {
                                ticketMvList.map((obj, k) => (
                                    <p key={k}
                                        className={`mvEl ${mvElIndex === k ? 'elSelect' : ''}`}
                                        onClick={() => { userMvSelect(k, obj.mvTitle) }}
                                    >
                                        {obj.mvTitle}
                                    </p>
                                ))
                            }

                        </div>
                        <div className={`list_date ${ingStep === 'date' ? 'block' : 'hidden'}`}>
                            <p className={`dateEl ${dateEl === today ? 'elSelect' : ''}`}
                                onClick={() => { userDateSelect(today) }}
                            >
                                {today}
                            </p>

                            <p className={`dateEl ${dateEl === tomorrow ? 'elSelect' : ''}`}
                                onClick={() => { userDateSelect(tomorrow) }}
                            >
                                {tomorrow}
                            </p>
                        </div>
                        <div className={`list_time ${ingStep === 'time' ? 'block' : 'hidden'}`}>
                            {
                                mvTimeList.map((time, kk) => (
                                    <p key={kk}
                                        className={`timeEl ${timeEl === time ? 'elSelect' : ''}`}
                                        onClick={() => { userTimeSelect(time, kk) }}
                                    >
                                        {time}
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <div className='btn_group'>
                        <div className='btn mob before'
                            onClick={beforeBtn}>
                            이전
                        </div>

                        <div className="btn mob on after"
                            onClick={afterBtn}>
                            다음
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}

export default Reserve;