import React from 'react';
import '../style/mypage.scss'
import Image from 'next/image';
function Mypage(props) {
    return (
        <div className='mypage'>
            <h2>마이페이지<Image src='/images/setting.png' width={30} height={30} alt='setting_icon'/></h2>
            <div className='ticket'>
                <div className='movie_info'>
                    <p className='ticket_num'>240901-0000-0000</p>
                    <h3 className='title_ko'>아바타 : 물의길</h3>
                    <h3 className='title_en'>Avatar: The Way of Water</h3>
                </div>
                <p className='date'>2024-09-01</p>
                <p className='theater'>1관 3층<span className='time'>20:50</span></p>
                <div className='qr_code'>qr코드</div>
                <b>영화 상영시작시간 15분 전까지 취소가 가능하며 캡쳐화면은 입장이 제한될 수 있습니다.</b>

            </div>
        </div>
    );
}

export default Mypage;