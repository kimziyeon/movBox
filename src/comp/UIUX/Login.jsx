'use client';
import React, { useEffect, useState } from 'react';
import '../style/login.scss'
import Link from 'next/link';
import { user } from '../store/user';
import { useRouter } from 'next/navigation';
import { loginStore } from '../store/login_store';
function Login() {
    let { userTable,userData } = user();
    let { storegeFn } = loginStore();
    const router = useRouter();
    useEffect(()=>{
        userTable('get');
        
    },[])

    let [findIdClick , setFindIdClick]=useState(true);
    const findId = ()=>{
        setFindIdClick(!findIdClick);
    }
    let [findPwClick , setFindPwClick]=useState(true);
    const findPw = ()=>{
        setFindPwClick(!findPwClick);
    }


    let [userId,setUserId] = useState('');
    let [userPw,setUserPw] = useState('');
    const login = ()=>{
        if(userData.length===0) alert('잠시 기다려주세요')
            const idCheck = userData.filter((obj)=>obj.user_id===userId);
            if(idCheck.length===0){
                alert('아이디 또는 비밀번호를 확인해주세요');
            } else{
                console.log(idCheck)
                if(idCheck[0].user_pw===userPw){
                    console.log('로그인성공');
                    storegeFn('login',idCheck)
                    // sessionStorage.setItem('login', JSON.stringify(idCheck));
                    router.push('/');
                } else{
                    alert('아이디 또는 비밀번호를 확인해주세요')
                }
            }
        
    }
    return (
        <div className='login'>
            <h2>로그인</h2>
            <div className='login_space'>
                <input type="text" placeholder='아이디' onChange={(e)=>{setUserId(e.target.value)}}/>
                <input type="password" placeholder='비밀번호' onChange={(e)=>{setUserPw(e.target.value)}}/>
                <button className='btn' onClick={login}>로그인</button>
            </div>
            <div className='personal_info'>
                <p onClick={findId}>아이디 / 비밀번호 찾기</p>
                <p>|</p>
                <p><Link href='/login/join'>회원가입</Link></p>
            </div>
            <div className={findIdClick ? 'find id':'find id on'}>
                <span className='close' onClick={findId}>close_btn</span>
                <h2>아이디 찾기</h2>
                <p>이메일을 정확히 입력해주세요.</p>
                <div className='input_space'>
                    <input type="text" placeholder='이메일 (abc@mail.com)' />
                </div>
                <button className='btn'>아이디 찾기</button>
                <p className='find_pw_btn' onClick={()=>{findId();findPw();}}>비밀번호 찾기 {'>'}</p>
            </div>
            <div className={findPwClick ? 'find pw':'find pw on'}>
                <span className='close' onClick={findPw}>close_btn</span>
                <h2>비밀번호 찾기</h2>
                <p>이름과 아이디를 입력해주세요.</p>
                <div className='input_space'>
                    <input type="text" placeholder='이름' />
                    <input type="text" placeholder='아이디' />
                </div>
                <button className='btn'>비밀번호 찾기</button>
            </div>
        </div>
        
    );
}

export default Login;