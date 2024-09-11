import React from 'react';
import '../style/mypage.scss'
import Image from 'next/image';
function Mypage({setSettingClick}) {
    

    //로고 svg로 바꾸기, 마이페이지 css작업하기, 
    return (
        <div className='mypage'>
            <h2>마이페이지<Image src='/images/setting.png' width={30} height={30} alt='setting_icon' onClick={()=>{setSettingClick(true)}} /></h2>
            <div className='ticket on'>
                <div className='movie_info'>
                    <p className='ticket_num'>240901-0000-0000</p>
                    <h3 className='title_ko'>아바타 : 물의길</h3>
                    <h3 className='title_en'>Avatar: The Way of Water</h3>
                </div>
                <p className='date'>2024-09-01</p>
                <div className='theater_space'>
                    <div className='theater'><p>1관 3층</p><span className='time'>20:50</span></div>
                    <div className='qr_code'><Image src='/images/qr_code.png' width={140} height={140} alt='qr_code' /></div>
                </div>
                <p className='notify'>영화 상영시작시간 15분 전까지 취소가 가능하며 캡쳐화면은 입장이 제한될 수 있습니다.</p>
            </div>

            <div className='no_ticket'>
                <Image Image src='/images/o-o.png' width={200} height={70} alt='oops_img' />
                <p>예매된 티켓이 없습니다.</p>
            </div>
        </div>
    );
}

export default Mypage;