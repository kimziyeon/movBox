
'use client';
import React, { useEffect, useRef, useState } from 'react';

function Delete(props) {
    return (
        <div className='delete_user'>
            <span className='close'>close_btn</span>
            <h2>계정 삭제</h2>
            <p>안전한 계정 삭제를 위해<br />
                현재 사용중인 비밀번호를 입력해주세요.</p>
            <div className='input_space'>
                <input type="text" placeholder='비밀번호' />
            </div>
            <button className='btn' >계정 삭제</button>
        </div>
    );
}

export default Delete;
