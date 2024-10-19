'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Reserve from '../../comp/UIUX/Reserve';
import Seat from '../../comp/UIUX/Seat';
import Complete from '../../comp/UIUX/Complete';
import "../../comp/style/page.scss";

function Page(props) {

    const params = useSearchParams();
    const posterList = JSON.parse(params.get('posterUrlList'));
    const [posterId, setPosterId] = useState()
    const [userPoster, setUserPoster] = useState()

    //유저 영화선택 정보
    const [isAllSelect, setIsAllSelect] = useState(null);

    //유저 자리선택 정보
    const [isSeatSelect, setIsSeatSelect] = useState([]);

    // 컴포넌트 이동 0: Reserve, 1: Seat, 2: Complete
    const [step, setStep] = useState(0)

    // 유저 선택정보 합체~~~~~~~!!!!!!!!
    const [ticketInfo, setTicketInfo] = useState(null);

    const moveNext = () => {
        // console.log('Moving to next step');
        setStep((beforeStep) => beforeStep + 1)
    }
    const moveBefore = () => {
        setStep((beforeStep) => beforeStep - 1)
    }


    useEffect(() => {
        // 최초 로드 시 `posterId`를 설정
        const idFromParams = params.get('id');
        if (idFromParams && idFromParams !== posterId) {
            setPosterId(idFromParams);
        }
        // console.log(posterList, '전체포스터리스트');
    }, [params]);

    useEffect(() => {
        // posterId가 변경될 때마다 발생하는 동작
        if (posterList && posterList[posterId]) {
            // console.log(posterList[posterId], '선택된영화포스터');
            setUserPoster(posterList[posterId])
        }
    }, [posterId, posterList]);


    return (

        <div className='container'>
            <div className='container_inner' >
                <div className='reserve_page'>
                    {
                        step === 0 &&
                        <Reserve moveNext={moveNext} setIsAllSelect={setIsAllSelect} setPosterId={setPosterId} />
                    }
                </div>
                <div className='reserve_page'>
                    {
                        step === 1 &&
                        <Seat moveNext={moveNext} moveBefore={moveBefore} isAllSelect={isAllSelect} userPoster={userPoster} setIsSeatSelect={setIsSeatSelect} setTicketInfo={setTicketInfo} />
                    }
                </div>
                <div className='reserve_page'>
                    {
                        step === 2 &&
                        <Complete ticketInfo={ticketInfo} />
                    }
                </div>
            </div>
        </div>

    );
}

export default Page;