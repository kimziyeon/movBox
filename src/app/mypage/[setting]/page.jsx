"use client"
import { useState } from 'react';
import { useSearchParams } from "next/navigation";
import '../../../comp/style/change.scss';

function Page() {

    const params = useSearchParams();
    const type = params.get('type');
    // console.log(type, 'type')


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
                                <input type="text" placeholder='비밀번호' />
                            </div>
                            <button className='btn mob del'>계정 삭제</button>
                        </div>

                    </div>

                )
            }





        </div>
    );
}

export default Page;