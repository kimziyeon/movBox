import React from 'react';
import '../style/login.scss'
function Login(props) {
    return (
        <div className='login'>
            <h2>로그인</h2>
            <form className='login_space'>
                <input type="text" placeholder='아이디'/>
                <input type="text" placeholder='비밀번호' />
                <button>로그인</button>
            </form>
            <div className='personal_info'>
                <p>아이디 / 비밀번호 찾기</p>
                <p>회원가입</p>
            </div>
        </div>
    );
}

export default Login;