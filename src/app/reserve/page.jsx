'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Reserve from '../../comp/UIUX/Reserve';
import Seat from '../../comp/UIUX/Seat';
import Complete from '../../comp/UIUX/Complete';
import "../../comp/style/page.scss";

function page(props) {

    const params = useSearchParams();
    const posterList = JSON.parse(params.get('posterUrlList'));
    const [posterId, setPosterId] = useState()

    // console.log(posterList, 'posterList')
    // console.log(posterId, 'posterId')


    //유저 영화선택 정보
    const [isAllSelect, setIsAllSelect] = useState(null);

    //유저 자리선택 정보
    const [isSeatSelect, setIsSeatSelect] = useState(null);

    // 컴포넌트 이동 0: Reserve, 1: Seat, 2: Complete
    const [step, setStep] = useState(0)

    const moveNext = () => {
        setStep((beforeStep) => beforeStep + 1)
    }
    const moveBefore = () => {
        setStep((beforeStep) => beforeStep - 1)
    }


    useEffect(() => {
        // 최초 로드 시 `posterId`를 설정
        const idxFromParams = params.get('id');
        if (idxFromParams && idxFromParams !== posterId) {
            setPosterId(idxFromParams);
        }
        console.log(posterList, '전체포스터리스트');
    }, [params]);

    useEffect(() => {
        // posterId가 변경될 때마다 발생하는 동작
        if (posterList && posterList[posterId]) {
            console.log(posterList[posterId], '선택된영화포스터');
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
                        <Seat moveNext={moveNext} moveBefore={moveBefore} isAllSelect={isAllSelect} />
                    }
                </div>
                <div className='reserve_page'>
                    {
                        step === 2 &&
                        <Complete moveBefore={moveBefore} />
                    }
                </div>
            </div>
        </div>
    );
}

export default page;