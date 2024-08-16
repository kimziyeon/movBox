'use client';
import Detail from '../../comp/UIUX/Detail'
import Link from 'next/link';
import React from 'react';

function page(props) {

    return (
        <div>
            <h1>이미지</h1>
            <Detail />
            <Link href='reserve'><button>예매하기</button></Link>
        </div>
    );
}

export default page;