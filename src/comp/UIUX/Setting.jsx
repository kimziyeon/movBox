import React from 'react';
import '../style/setting.scss'
import Link from 'next/link';
function Setting({setSettingClick}) {

    return (
        <div className='setting_page'>
            <h2>계정 설정</h2>
            <Link href='/mypage/setting'><button className='btn'>비밀번호 변경</button></Link>
            <Link href='#'><button className='btn'>계정 삭제</button></Link>
            <Link href='#'><button className='btn' onClick={()=>{setSettingClick(false)}}>뒤로가기</button></Link>
        </div>
    );
}

export default Setting;