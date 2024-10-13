import React, { useState, useEffect } from 'react';
import '../style/mypage.scss';
import Image from 'next/image';

function Mypage({ setSettingClick }) {
    const [getReserve, setGetReserve] = useState(null);

    // useEffect를 사용하여 클라이언트에서만 sessionStorage에 접근
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const reserveData = JSON.parse(sessionStorage.getItem('reserve'));
            setGetReserve(reserveData);
        }
    }, []);

    const cancleFn = () => {
        if (confirm('예매 취소하시겠습니까?')) {
            sessionStorage.removeItem('reserve');
            setGetReserve(null);
        }
    }

    return (
        <div className='mypage'>
            <h2>마이페이지
                <Image 
                    src='/images/setting.png' 
                    width={30} 
                    height={30} 
                    alt='setting_icon' 
                    onClick={() => { setSettingClick(true) }} 
                />
            </h2>
            {getReserve ? (
                <div className='ticket on'>
                    <div className='movie_info'
                        style={{
                            backgroundImage: `url(${getReserve.posterUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="overlay"></div>
                        <div className='ticket_box'>
                            <p className='ticket_num'>{getReserve.ticketNm} - 0000 - 0000</p>
                            <h3 className='title_ko'>{getReserve.title}</h3>
                        </div>
                    </div>
                    <p className='date'>{getReserve.date}</p>
                    <div className='theater_space'>
                        <div className='theater'>
                            <p>{getReserve.seat.join(', ')}</p>
                            <span className='time'>{getReserve.time}</span>
                        </div>
                        <div className='qr_code'>
                            <Image src='/images/qr_code.png' width={140} height={140} alt='qr_code' priority />
                        </div>
                    </div>
                    <button className='btn' onClick={cancleFn}>예매 취소</button>
                    <p className='notify'>영화 상영시작시간 15분 전까지 취소가 가능하며<br /> 캡쳐화면은 입장이 제한될 수 있습니다.</p>
                </div>
            ) : (
                <div className='no_ticket on'>
                    <Image src='/images/o-o.png' width={200} height={70} alt='oops_img' />
                    <p>예매된 티켓이 없습니다.</p>
                </div>
            )}
        </div>
    );
}

export default Mypage;
