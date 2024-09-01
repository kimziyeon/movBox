'use client';
import React, { useEffect, useState } from 'react';
import '../style/login.scss'
import Link from 'next/link';
import { user } from '../store/user';
function Login({router}) {
    let { userTable,userData } = user();
    useEffect(()=>{
        userTable('get');
        console.log(router,'라우터')
    },[])
    useEffect(()=>{
        console.log(userData)
    },[userData])


    let [findIdClick , setFindIdClick]=useState(true);
    const findId = ()=>{
        setFindIdClick(!findIdClick);
    }
    let [findPwClick , setFindPwClick]=useState(true);
    const findPw = ()=>{
        setFindPwClick(!findPwClick);
    }
    return (
        <div className='login'>
            <h2>로그인</h2>
            <form className='login_space'>
                <input type="text" placeholder='아이디'/>
                <input type="text" placeholder='비밀번호' />
                <button className='btn'>로그인</button>
            </form>
            <div className='personal_info'>
                <p onClick={findId}>아이디 / 비밀번호 찾기</p>
                <p>|</p>
                <p><Link href='/login/join'>회원가입</Link></p>
            </div>
            <div className={findIdClick ? 'find id':'find id on'}>
                <span className='close' onClick={findId}>close_btn</span>
                <h2>아이디 찾기</h2>
                <p>이메일을 정확히 입력해주세요.</p>
                <form>
                    <input type="text" placeholder='이메일 (abc@mail.com)' />
                </form>
                <button className='btn'>아이디 찾기</button>
                <p className='find_pw_btn' onClick={()=>{findId();findPw();}}>비밀번호 찾기 {'>'}</p>
            </div>
            <div className={findPwClick ? 'find pw':'find pw on'}>
                <span className='close' onClick={findPw}>close_btn</span>
                <h2>비밀번호 찾기</h2>
                <p>이름과 아이디를 입력해주세요.</p>
                <form>
                    <input type="text" placeholder='이름' />
                    <input type="text" placeholder='아이디' />
                </form>
                <button className='btn'>비밀번호 찾기</button>
            </div>
        </div>
        
    );
}

export default Login;