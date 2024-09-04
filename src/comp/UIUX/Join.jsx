"use client";
import { useEffect, useState } from 'react';
import '../style/join.scss'
import Image from 'next/image';
import Link from 'next/link';
import { user } from '../store/user';

function Join() {
    let { userTable, userData } = user();
    const fields = [
        { id: 'id', label: '아이디', placeholder: '필수 | 2자 이상, 6자 이내', hasButton: true },
        { id: 'pw', label: '비밀번호', placeholder: '필수 | 6자 이상' },
        { id: 'user_name', label: '이름', placeholder: '필수 | 2자 이상' },
        { id: 'user_email', label: '이메일', placeholder: '필수 | abc@mail.com', hasButton: true },
        { id: 'birth', label: '생년월일', placeholder: '선택 | 19960105' },
    ];

    const ERROR_TABLE = {
        id: '아이디는 2~6글자로 해주세요',
        pw: '비빌번호는 6~20자 이내로 해주세요',
        user_name: '이름을 2글자 이상으로 해주세요',
        user_email: '이메일 형식을 확인해주세요',
    }

    let [inputValue, setInputValue] = useState({
        id: '',
        pw: '',
        user_name: '',
        user_email: '',
        birth: ''
    });
    const input_value = (e) => {
        const { className, value } = e.target;
        setInputValue({
            ...inputValue,
            [className]: value
        });
    }


    let [successJoin, setSuccessJoin] = useState(false);
    let [valueCheck, setValueCheck] = useState({
        id: true,
        pw: true,
        user_name: true,
        user_email: true,
        birth: true
    })
    const join = () => {
        const checked = {
            id: inputValue.id.length >= 2 && inputValue.id.length <= 6,
            pw: inputValue.pw.length >= 6 && inputValue.pw.length <= 20,
            user_name: inputValue.user_name.length >= 2,
            user_email: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(inputValue.user_email),
            birth: true
        }
        setValueCheck(checked);
        if (Object.values(checked).every(obj => obj)) {
            init();
            userTable('post', inputValue)
            setSuccessJoin(true);
        } else {
            console.log('실패')
        }
        function init() {
            setInputValue({
                id: '',
                pw: '',
                user_name: '',
                user_email: '',
                birth: ''
            })
        }
    }

    useEffect(() => {
        userTable('get');
        userData.map(obj => obj.user_id)
    }, [])

    const repeat = (k) => {
        let idChecked = userData.filter(obj => obj.user_id === inputValue.id);
        let emailChecked = userData.filter(obj => obj.user_email === inputValue.email);
        console.log(k)
        if (k === 0) {
            console.log(inputValue.id)
            if (idChecked.length !== 0) {
                alert('중복된 아이디 입니다.')
            } else if (inputValue.id === '') {
                alert('아이디를 입력해주세요')
            } else {
                alert('사용가능한 아이디 입니다.')
            }
        } else if (k === 3) {
            console.log(inputValue.user_email)
            if (inputValue.user_email === '') {
                alert('이메일을 입력해주세요')
            } else if (emailChecked !== 0) {
                alert('중복된 이메일 입니다.')
            }
        }
        // if (idChecked.length !== 0) {
        //     alert('중복된 아이디 입니다.')
        // }
        // if (inputValue.id === '') {
        //     alert('아이디를 입력해주세요')
        // }
        // if (inputValue.email === '') {
        //     alert('이메일을 입력해주세요')
        // }
        // if (emailChecked !== 0) {
        //     alert('중복된 이메일 입니다.')
        // }
    }

    return (
        <>
            <div className={successJoin ? 'join_membership success' : 'join_membership'}>
                <h2>회원가입</h2>
                {fields.map((field, k) => (
                    <div key={field.id} className={`check ${field.id}`}>
                        <p>{field.label}</p>
                        {field.hasButton && <button className='btn' onClick={() => { repeat(k) }}>중복확인</button>}
                        <input type="text" placeholder={field.placeholder} onChange={input_value} className={field.id} value={inputValue[field.id]} />
                        <p className={valueCheck[field.id] ? 'error' : 'error on'}>{ERROR_TABLE[field.id]}</p>
                    </div>
                ))}
                <button className='btn' onClick={join}>회원가입</button>
            </div>
            <div className={successJoin ? 'complete' : 'complete no'}>
                <h2>회원가입 완료</h2>
                <Image src='/images/mob_icon.png' width={60} height={52} alt='mob_icon' />
                <p>모브박스 회원이 되신것을 환영합니다.</p>
                <Link href='/login'><button className='btn'>로그인</button></Link>
            </div>
        </>
    );
}

export default Join;