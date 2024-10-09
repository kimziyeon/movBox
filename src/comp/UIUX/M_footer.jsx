import React from 'react';
import '../style/footer.scss';
import Image from 'next/image';


function M_footer(props) {
    return (

        <footer>
            <div className='copyright'>
                Copyright © <span>Team KIMSONG</span>. <br />All rights reserved.
                <div className='info'>
                    ※ 본 페이지에 사용된 사진, 이미지 및 그림 등은 컨셉 연출을 위해 참고 사진으로만 사용되었습니다.
                </div>
            </div>


            <div className='team'>
                <div className='member'>
                    <p>KIM</p>
                    <div className='address'>
                        <p>aa40254037@gmail.com</p>
                        <p><a href="https://kimziyeon-portfolio.vercel.app" target='_blank'>portfolio website</a></p>
                    </div>
                    <div className='link'>
                        <a href="mailto:aa40254037@gmail.com">
                            <Image src="/images/mail_icon.svg" width={24} height={24} alt='mail_icon' />
                        </a>
                        <a href="https://kimziyeon-portfolio.vercel.app/" target='_blank'>
                            <Image src="/images/link_icon.svg" width={24} height={24} alt='link_icon' />
                        </a>
                        <a href="https://github.com/kimziyeon" target='_blank'>
                            <Image src="/images/github_icon.svg" width={40} height={40} alt='github_icon' />
                        </a>
                    </div>
                </div>

                <div className='member'>
                    <p>SONG</p>
                    <div className='address'>
                        <p>swm8793@naver.com</p>
                        <p><a href="https://portfolio-fawn-three-33.vercel.app" target='_blank'>portfolio website</a></p>
                    </div>
                    <div className='link'>
                        <a href="mailto:swm8793@naver.com">
                            <Image src="/images/mail_icon.svg" width={24} height={24} alt='mail_icon' />
                        </a>
                        <a href="https://portfolio-fawn-three-33.vercel.app/" target='_blank'>
                            <Image src="/images/link_icon.svg" width={24} height={24} alt='link_icon' />
                        </a>
                        <a href="https://github.com/dnaals" target='_blank'>
                            <Image src="/images/github_icon.svg" width={40} height={40} alt='github_icon' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default M_footer;