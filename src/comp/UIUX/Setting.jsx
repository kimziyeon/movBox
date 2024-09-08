import React from 'react';
import '../style/setting.scss'
function Setting(props) {
    return (
        <div className='setting_page'>
            <h2>계정 설정</h2>
            <button className='btn'>비밀번호 변경</button>
            <button className='btn'>계정 삭제</button>

        </div>
    );
}

export default Setting;