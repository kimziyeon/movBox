"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from "next/navigation";
import { user } from '../../../comp/store/user';
import { loginStore } from '../../../comp/store/login_store';

import '../../../comp/style/change.scss';

function Page() {
    let { userTable, userData } = user();
    let { storegeFn } = loginStore();

    const params = useSearchParams();
    const type = params.get('type');
    // console.log(type, 'type')

    const storedData = sessionStorage.getItem('login');

    const [loggedInUser, setLoggedInUser] = useState(null);
    const [pwInput, setPwInput] = useState('');

    const userDelete = () => {
        if (storedData) {
            try {
                // 문자열 데이터를 JSON 객체로 파싱
                const parsedData = JSON.parse(storedData);
                // console.log('사용자 정보:', parsedData[0]);
                setLoggedInUser(parsedData[0])

            } catch (error) {
                console.error('JSON 파싱 에러:', error);
            }
        } else {
            console.log('로그인 정보가 없습니다.');
        }


        // const pwCheck = loggedInUser.filter((obj) => obj.user_pw === pwInput);
        // console.log('pwInput', pwCheck)
        // if (pwCheck[0].user_pw === pwInput) {
        //     console.log('삭제가능')
        // }
    }

    useEffect(() => {
        sessionStorage.getItem('login')
    }, [loggedInUser])

    return (

        <div className='setting_pop'>

            {
                type === 'change' && (
                    <div className='user_setting'>
                        <span className='close'>close_btn</span>
                        <h2>비밀번호 변경</h2>


                        <div className='comp'>
                            <p>현재 사용중인<br /> 비밀번호를 입력해주세요.</p>
                            <div className='input_space'>
                                <input type="text" placeholder='비밀번호' />
                            </div>
                            <button className='btn mob'>확인</button>
                        </div>

                        <div className='comp'>
                            <p>변경할 비밀번호를 입력해주세요.</p>
                            <div className='input_space'>
                                <input type="text" placeholder='비밀번호' />
                            </div>
                            <button className='btn mob'>비밀번호 변경</button>
                        </div>

                    </div>

                )
            }

            {
                type === 'delete' && (

                    <div className='user_setting'>
                        <span className='close'>close_btn</span>
                        <h2>계정 삭제</h2>

                        <div className='comp'>
                            <p>안전한 계정 삭제를 위해<br />
                                현재 사용중인 비밀번호를 입력해주세요.
                            </p>
                            <div className='input_space'>
                                <input type="text" placeholder='비밀번호' onChange={(e) => { setPwInput(e.target.value) }} />
                            </div>
                            <button className='btn mob del' onClick={userDelete}>계정 삭제</button>
                        </div>

                    </div>

                )
            }





        </div>
    );
}

export default Page;