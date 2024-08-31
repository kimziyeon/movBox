import React from 'react';
import '../style/join.scss'

const fields = [
    { id: 'id', label: '아이디', placeholder: '필수 | 2자 이상, 6자 이내', hasButton: true },
    { id: 'pw', label: '비밀번호', placeholder: '필수 | 2자 이상' },
    { id: 'name', label: '이름', placeholder: '필수 | 2자 이상' },
    { id: 'email', label: '이메일', placeholder: '필수 | abc@mail.com', hasButton: true },
    { id: 'birth', label: '생년월일', placeholder: '선택 | 19960105' },
];

function Join() {
    return (
        <div className='join_membership'>
            <h2>회원가입</h2>
            {fields.map((field) => (
                <div key={field.id} className={`check ${field.id}`}>
                    <p>{field.label}</p>
                    {field.hasButton && <button className='btn'>중복확인</button>}
                    <input type="text" placeholder={field.placeholder} />
                </div>
            ))}
            <button className='btn'>회원가입</button>
        </div>
    );
}

export default Join;