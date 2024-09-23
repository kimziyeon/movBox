'use client';
import React, { useState } from 'react';
import Reserve from '../../comp/UIUX/Reserve';
import Seat from '../../comp/UIUX/Seat';
import Complete from '../../comp/UIUX/Complete';
import "../../comp/style/page.scss";

function page(props) {
    const [step, setStep] = useState(0)
    // 0: Reserve, 1: Seat, 2: Complete

    const moveNext = () => {
        setStep((beforeStep) => beforeStep + 1)
    }
    const moveBefore = () => {
        setStep((beforeStep) => beforeStep - 1)
    }


    return (
        <div className='container'>
            <div className='container_inner' >
                <div className='reserve_page'>
                    {
                        step === 0 &&
                        <Reserve moveNext={moveNext} />
                    }
                </div>
                <div className='reserve_page'>
                    {
                        step === 1 &&
                        <Seat moveNext={moveNext} moveBefore={moveBefore} />
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