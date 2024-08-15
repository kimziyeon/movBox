import Link from 'next/link';
import React from 'react';

function Movie(props) {
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