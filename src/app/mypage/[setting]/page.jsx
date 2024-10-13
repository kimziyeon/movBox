import React from 'react';
import '../../../comp/style/change.scss';
function Page(props) {
    return (
        <div className='change_pw'>
            <span className='close'>close_btn</span>
            <h2>비밀번호 변경</h2>
            <p>이메일을 정확히 입력해주세요.</p>
            <div className='input_space'>
                <input type="text" placeholder='이메일 (abc@mail.com)' />
            </div>
            <button className='btn' >아이디 찾기</button>
            <p className='find_pw_btn'>비밀번호 찾기 {'>'}</p>
        </div>
    );
}

export default Page;